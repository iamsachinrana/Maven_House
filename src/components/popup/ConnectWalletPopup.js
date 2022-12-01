import { closeWalletModal, setWalletId, showToast } from "@redux/action";
import { getReq, postReq } from "../../utils/ApiHandler";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import queryString from "query-string";
import { useHistory } from "react-router-dom";

const ConnectWalletPopup = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { ethereum } = window;
  const queryParam = queryString.parse(history.location.search);
  const [isLoading, setIsLoading] = useState(false);

  const connectMetaMaskWallet = async () => {
    setIsLoading(true);
    /**check metamast install or not  */
    if (Boolean(ethereum && ethereum.isMetaMask)) {
      try {
        // Will open the MetaMask UI
        await ethereum
          .request({ method: "eth_requestAccounts" })
          .then((res) => {
            getReq(`/user/authenticate/${res[0]}`)
              .then((authResponse) => {
                if (authResponse.status) {
                  ethereum
                    .request({
                      method: "personal_sign",
                      params: [`${authResponse.data.consent}`, res[0]],
                    })
                    .then((sigRes) => {
                      if (sigRes) {
                        dispatch(closeWalletModal());
                        postReq(`/user/authenticate`, {
                          address: res[0],
                          signature: sigRes,
                        })
                          .then((authTokenRes) => {
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
                              // history.push(`${queryParam?.referrer || '/'}`);
                              history.push('/')
                              dispatch(setWalletId(res[0]));
                              setIsLoading(false);
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
                    })
                    .catch((e) => {
                      setIsLoading(false);
                      dispatch(
                        showToast({ type: "error", message: e?.message })
                      );
                    });
                } else {
                  setIsLoading(false);
                  dispatch(
                    showToast({ type: "error", message: authResponse.error })
                  );
                }
              })
              .catch((e) => {
                setIsLoading(false);
                dispatch(
                  showToast({ type: "error", message: e?.authResponse?.data })
                );
              });
          });
      } catch (error) {
        // console.error(error);
        setIsLoading(false);
      }
    } else {
      window.open("https://metamask.io/download/", "_blank");
      setIsLoading(false);
    }
  };
  const connectCoinBaseWallet = async () => {
    // const CoinbaseWallet = new WalletLinkConnector({

    //   url: ENV.INFURA_KEY,

    //   appName: "Web3-react Demo",

    //   supportedChainIds: [1, 3, 4, 5, 42],

    // });
    // console.log(CoinbaseWallet)

    setIsLoading(false);
    // const metamaskProvider = ethereum.providers.find((provider) => provider.isCoinbaseWallet);
    /** check  isCoinbaseWallet available or not */
    // if (metamaskProvider.isCoinbaseWallet) {
    //   await metamaskProvider.enable().then((res) => {
    //     getReq(`/user/authenticate/${res[0]}`)
    //       .then(authResponse => {
    //         if (authResponse.status) {
    //           ethereum.request({
    //             method: 'personal_sign', params: [`${authResponse.data.consent}`, res[0]]
    //           }).then(sigRes => {
    //             if (sigRes) {
    //               dispatch(closeWalletModal())
    //               postReq(`/user/authenticate`, {
    //                 address: res[0],
    //                 signature: sigRes
    //               }).then(authTokenRes => {
    //                 if (authTokenRes.status) {
    //                   Cookies.set('user-data', authTokenRes.data.token, { expires: 1 })
    //                   dispatch(showToast({ type: 'success', message: 'Coinbase wallet connected' }))
    //                   // dispatch(showToast({ type: 'success', message: 'Metamask Wallet Connected' }))
    //                   dispatch(setWalletId(res[0]))
    //                   setIsLoading(false)
    //                 }
    //                 else {
    //                   dispatch(showToast({ type: 'error', message: authTokenRes.error }))
    //                   setIsLoading(false)
    //                 }
    //               }).catch(e => {
    //                 setIsLoading(false)
    //                 dispatch(showToast({ type: 'error', message: e?.authResponse?.data }))
    //               })
    //             }
    //           }).catch(e => {
    //             setIsLoading(false)
    //             dispatch(showToast({ type: 'error', message: e?.message }))
    //           })
    //         }
    //         else {
    //           setIsLoading(false)
    //           dispatch(showToast({ type: 'error', message: authResponse.error }))
    //         }
    //       }).catch(e => {
    //         setIsLoading(false)
    //         dispatch(showToast({ type: 'error', message: e?.authResponse?.data }))
    //       })

    //     // dispatch(setWalletId(res[0]))
    //     // dispatch(showToast({ type: 'success', message: 'Coinbase wallet connect' }))
    //   });
    // }
    //   else dispatch(showToast({ type: 'error', message: 'Coinbase Not Install' }));
    //   setIsLoading(false)
  };
  const connectFortmaticWallet = async () => {
    // const accounts = await fm.user.login();
    // if (accounts.length) {
    //   web3.eth.getAccounts((err, accounts) => {
    //     if (err) throw err;
    //     let address = accounts[0];
    //     console.log(address);
    //   });
    //   // Get user balance (includes ERC20 tokens as well)
    //   let balances = await fm.user.getBalances();
    //   console.log(balances);
    //   let ethBalance = balances.find((e) => {
    //     return e.crypto_currency == 'ETH';
    //   });
    //   console.log('ethBalance', ethBalance)
    // }
  };
  let handleSendTransaction = () => {
    // fm.transactions.send((err, txnHash) => {
    //   if (err) throw err;
    //   // setUserInfo();
    // });
  };

  const handleLogout = () => {
    // fm.user.logout();
  };
  useEffect(() => {
    var backdrop = document.getElementById("backdrop");
    window.onclick = function (event) {
      if (event.target === backdrop) {
        onClose();
      }
    };
  });
  return (
    <div
      id="backdrop"
      className="fixed top-0 right-0 left-0 z-[1000] grid place-items-center min-h-screen backdrop-blur-[3px] p-[10px]"
    >
      <div className="max-w-[450px] bg-white rounded-[15px] shadow4 p-8 w-full">
        <h2 className="font-bold text-center">Connect your wallet</h2>
        <div className="w-full flex justify-center">
          <div className="text-center border-b-2 border-gray-400 w-[65%]">
            <h4
              className="pt-[15px] cursor-pointer"
              onClick={() =>
                window.open(
                  "https://metamask.io/",
                  "_blank"
                )
              }
            >
              How to connect the wallet ?
            </h4>
          </div>
        </div>
        <ul className="flex flex-col gap-2 py-6 pl-[10px] text-theme-primary/30 cursor-pointer">
          <li
            className="flex items-center gap-4 hover:rounded-full hover:shadow4 px-3 py-3"
            onClick={connectMetaMaskWallet}
          >
            <img
              className="h-[34px] w-[34px]"
              src="./images/connect_wallet/metamask.svg"
              alt=""
            />
            <h4>Metamask</h4>
          </li>
          {/* <li className="flex items-center gap-4 hover:rounded-full hover:shadow4 px-3 py-3" onClick={connectCoinBaseWallet}>
            <img
              className="h-[34px] w-[34px]"
              src="./images/connect_wallet/coinbase.svg"
              alt=""
            />
            <h4>Coinbase</h4>
          </li>
          <li className="flex items-center gap-4 hover:rounded-full hover:shadow4 px-3 py-3">
            <img
              className="h-[34px] w-[34px]"
              src="./images/connect_wallet/walletconnect.svg"
              alt=""
            />
            <h4>WalletConnect</h4>
          </li> */}
          {/* <li className="flex items-center gap-4 hover:rounded-full hover:shadow4 px-3 py-3">
            <img
              className="h-[34px] w-[34px]"
              src="./images/connect_wallet/phantom.svg"
              alt=""
            />
            <h4>Phantom</h4>
          </li>
          <li className="flex items-center gap-4 hover:rounded-full hover:shadow4 px-3 py-3">
            <img
              className="h-[34px] w-[34px]"
              src="./images/connect_wallet/glow.svg"
              alt=""
            />
            <h4>Glow</h4>
          </li> */}
        </ul>
        <div className="flex justify-center flex-col items-center">
          <p
            className="cursor-pointer text-theme-textlight pb-[10px] text-[15px]"
            onClick={() =>
              window.open("https://metamask.io/download/", "_blank")
            }
          >
            You don’t have a wallet?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletPopup;
