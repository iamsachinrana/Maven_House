import { closeWalletModal, setWalletId, showToast } from "@redux/action";
import { getApiReq, getReq, postReq } from "../../utils/ApiHandler";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
import ENV from "@utils/env";
import Web3 from "web3";

const maticNodeOption = {
    rpcUrl: ENV.MAGIC_URL_CUSTOM, // Polygon RPC URL
    chainId: ENV.MAGIC_CHAIN_ID, // Polygon chain id
}
const magic = new Magic(ENV.MAGIC_KEY, {
    network: maticNodeOption,
    locale: "en_US",
    extensions: [new ConnectExtension()]
});
const web3 = new Web3(magic.rpcProvider);

const AuthenticatePopup = ({ isOpen, onClose, eventId, setTokenEvent }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { ethereum } = window;
    const queryParam = queryString.parse(history.location.search);
    const [isLoading, setIsLoading] = useState(false);
    const [account, setAccount] = useState(null);
    const { walletId } = useSelector((state) => state.walletReducer);


    useEffect(() => {
        var backdrop = document.getElementById("backdrop");
        window.onclick = function (event) {
            if (event.target === backdrop) {
                onClose();
            }
        };
    });
    const authenticate = (e) => {
        e.preventDefault();
        getApiReq(`/user/join-event/${eventId}/${walletId}`).then(async (response) => {
            if (response.status) {
                response = response?.data;
                let _message = response?.data?.authenticationMessage;


                console.log('authResponse.data.consent', _message);
                const signedMessage = await web3.eth.personal
                    .sign(`${_message}`, walletId, "")
                    .catch((e) => console.log(e));

                if (signedMessage) {
                    dispatch(closeWalletModal());
                    postReq(`/user/join-event-authenticate`, {
                        address: walletId,
                        signature: signedMessage,
                        event_id: eventId
                    })
                        .then((authTokenRes) => {
                            authTokenRes = authTokenRes?.data;
                            if (authTokenRes.status) {
                                Cookies.set(
                                    "user-data",
                                    authTokenRes.data.token,
                                    { expires: 1 }
                                );
                                dispatch(
                                    showToast({
                                        type: "success",
                                        message: "Metamask Wallet Connected",
                                    })
                                );
                                setTokenEvent(authTokenRes.data.token);
                                // history.push(`${queryParam?.referrer || '/'}`);

                                dispatch(setWalletId(walletId));
                                setIsLoading(false);
                                onClose();
                            } else {
                                dispatch(
                                    showToast({
                                        type: "error",
                                        message: authTokenRes.error,
                                    })
                                );
                                setIsLoading(false);
                            }
                        })
                        .catch((e) => {
                            setIsLoading(false);
                            dispatch(
                                showToast({
                                    type: "error",
                                    message: e?.authResponse?.data,
                                })
                            );
                        });
                }

            }
        }).catch((e) => {
            setIsLoading(false);
            dispatch(
                showToast({ type: "error", message: e?.authResponse?.data })
            );
        });


    }
    return (
        <div
            id="backdrop"
            className="fixed top-0 right-0 left-0 z-[1000] grid place-items-center min-h-screen backdrop-blur-[3px] p-[10px]"
        >
            <div className="max-w-[450px] bg-white rounded-[15px] shadow4 p-8 w-full">
                <div className="w-full flex justify-center">
                    <button onClick={authenticate} className="font-bold">Click Here For Authentication</button>
                </div>

            </div>
        </div>
    );
};

export default AuthenticatePopup;
