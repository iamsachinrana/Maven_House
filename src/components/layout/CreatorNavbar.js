import React, { useEffect, useState } from 'react'
import ENV from "@utils/env";
import { BsFillCameraVideoFill, BsPersonCircle } from 'react-icons/bs';
import { NavLink, useHistory } from 'react-router-dom';
import { Magic } from "magic-sdk";
import Cookies from 'js-cookie';
import { useAriaHidden } from '@chakra-ui/react';
import { openWalletModal, closeWalletModal, setWalletId, showToast } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { ConnectExtension } from "@magic-ext/connect";
import { getReq, postReq } from "../../utils/ApiHandler";

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

const CreatorNavbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  // let user = Cookies.get('user-data');
  let user = Cookies.get('user-data');
  let userType = Cookies.get('user-type');
  userType = userType ? JSON.parse(userType) : userType;
  const [account, setAccount] = useState('');


  useEffect(() => {
    (async () => {
      if (user) {
        let publicAddress = (await web3.eth.getAccounts())[0];
        if (publicAddress) {
          dispatch(setWalletId(publicAddress));
        }
      }
    })()
  }, [])

  const sendTransaction = async () => {
    const publicAddress = (await web3.eth.getAccounts())[0];
    const txnParams = {
      from: publicAddress,
      to: publicAddress,
      value: web3.utils.toWei("0.01", "ether"),
      gasPrice: web3.utils.toWei("30", "gwei")
    };
    web3.eth
      .sendTransaction(txnParams)
      .on("transactionHash", (hash) => {
        console.log("the txn hash that was returned to the sdk:", hash);
      })
      .then((receipt) => {
        console.log("the txn receipt that was returned to the sdk:", receipt);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const login = async () => {

    // web3.eth
    //   .getAccounts()
    //   .then((accounts) => {
    //     console.log(accounts)
    //     setAccount(accounts?.[0]);
    //     Cookies.set('user', accounts[0]);
    //     Cookies.set('user-type', JSON.stringify({ type: 'creator' }));
    //     history.push('/creator')
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });


    web3.eth
      .getAccounts()
      .then((accounts) => {
        let _account = accounts?.[0]
        setAccount(accounts?.[0]);
        /*Authenticating Message*/
        getReq(`/user/authenticate/${_account}`)
          .then(async (authResponse) => {
            if (authResponse.status) {
              console.log('authResponse.data.consent', authResponse);
              const signedMessage = await web3.eth.personal
                .sign(`${authResponse.data?.data?.consent}`, _account, "")
                .catch((e) => console.log(e));

              if (signedMessage) {
                dispatch(closeWalletModal());
                postReq(`/user/authenticate`, {
                  address: _account,
                  signature: signedMessage,
                })
                  .then((authTokenRes) => {
                    authTokenRes = authTokenRes?.data;
                    if (authTokenRes.status) {

                      // console.log(accounts)
                      Cookies.set('user-data', authTokenRes.data.token);
                      Cookies.set('user-type', JSON.stringify({ type: 'creator' }));
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
                      history.push('/creator')
                      dispatch(setWalletId(_account));
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signMessage = async () => {
    const publicAddress = (await web3.eth.getAccounts())[0];
    const signedMessage = await web3.eth.personal
      .sign("My Message", publicAddress, "")
      .catch((e) => console.log(e));
    console.log(signedMessage);
  };

  const showWallet = () => {
    magic.connect.showWallet().catch((e) => {
      console.log(e);
    });
  };

  const logout = async () => {
    await magic.connect.disconnect().catch((e) => {
      console.log(e);
    });
    // Cookies.remove('user-data');
    Cookies.remove('user-data');
    Cookies.remove('user-type');
    history.push('/creator')
  };

  return (
    <>
      <div>
        <nav className=" center-b  flex-col tablet:h-20 tablet:flex-row  text-white  py-2 tablet:py-0 px-4  ">
          <div className="">
            <NavLink to="/creator">
              <img src="/images/navbar/maven.png" alt="" srcset="" /></NavLink>
          </div>
          <ul className="center gap-2 sm:gap-4 pt-3 tablet:pt-0">
            {user && <> <li><NavLink to='/go-live' className="px-1 sm:px-3 py-1 center  rounded-3xl border border-gray-600 group text-black font-semibold bg-[#fff]" href="">Go Live <BsFillCameraVideoFill size={25} className="text-[#54D12F] group-hover:text-[#eab308] pl-2" /></NavLink></li>

              <li><NavLink to="/create-event">Create Event</NavLink></li></>}
            {user ?
              <li className='cursor-pointer login-navbar'>
                <div className="w-8 cursor-pointer outline-4  outline-[#3E4046] border border-white h-8 bg-[#9B9B9B] rounded-full  text-sm center">M</div>
                {/* <BsPersonCircle size={25}  /> */}
                <div className=" login-secound z-50 min-w-[220px]">

                  <ul className='list-none whitespace-nowrap'>
                    <li><NavLink to="/dashboard/my-tickets" className="sidebar" >My Tickets</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/profile' className="sidebar" >Profile</NavLink>
                    </li>
                    <li><NavLink to='/dashboard/account' className="sidebar" >Account</NavLink>
                    </li>
                    <li><button className="sidebar" onClick={showWallet}> Show Wallet</button>
                    </li>
                    <li><button className="sidebar" onClick={sendTransaction} >Send Transaction</button>
                    </li>
                    <li><button className="sidebar" onClick={signMessage}>Sign Message</button>
                    </li>
                    <li><button onClick={logout} className="sidebar " >Sign Out</button>
                    </li>
                  </ul>
                </div>
              </li>
              : <li>
                <button onClick={login} className="px-1 tablet:px-3 py-1  rounded-3xl border hover:bg-transparent border-gray-600 bg-[#707070]" >Creator Log In</button>
                {/* <button className="px-1 tablet:px-3 py-1  rounded-3xl border hover:bg-transparent border-gray-600 bg-[#707070]"
                                    onClick={() => dispatch(openWalletModal())}
                                >Log In / Sign In</button> */}
              </li>
            }
          </ul>
        </nav>
        {/* <nav className="flex sticky top-0 w-full flex-col tablet:flex-row tablet:h-20 justify-between text-white  items-center py-2 tablet:py-0 px-4 ">
             <div className="cursor-pointer pt-2" onClick={() => history.push('/')}>
                
                 <img src="/images/navbar/maven.png" alt="" />
             </div>

             <ul className="flex gap-2 tablet:gap-4 pt-3 tablet:pt-0 center">
                 <li><NavLink to="/about">About</NavLink></li>
                 <li><NavLink to="/faq">FAQ</NavLink></li>
                 <li><NavLink to="/create-event">Create Event</NavLink></li>
                 <NavLink to='/magic-login' className="px-1 tablet:px-3 py-1  rounded-3xl border hover:bg-transparent border-gray-600 bg-[#707070]" >Log In / Sign In</NavLink>
             </ul>

         </nav> */}
      </div>
    </>
  )
}

export default CreatorNavbar