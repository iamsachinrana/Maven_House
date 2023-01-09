import React, { useEffect, useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { NavLink, useHistory } from 'react-router-dom';
import { magic } from "@utils/constants";
import Cookies from 'js-cookie';
import { useAriaHidden } from '@chakra-ui/react';
import { openWalletModal, setWalletId, showToast } from '../../redux/action';
import { useDispatch } from 'react-redux';
import Web3 from "web3";

const web3 = new Web3(magic.rpcProvider);
const Navbar = () => {
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
        web3.eth
            .getAccounts()
            .then((accounts) => {
                console.log(accounts)
                setAccount(accounts?.[0]);
                Cookies.set('user', accounts[0]);
                history.push('/')
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
        if (userType?.type === 'creator') {
            history.push('/creator');
            Cookies.remove('user-type')
        }
        else {
            Cookies.remove('user-data');
            Cookies.remove('user-type')
            history.push('/')
        }
        Cookies.remove('user-data');
        Cookies.remove('user-type')
    };

    return (
        <>
            <div>
                <nav className=" py-2  h-20 mx-auto flex 
            justify-between text-white  items-center px-4">
                    <div className="">
                        <NavLink to="/">
                            <img src="/images/navbar/maven.png" alt="" /></NavLink>
                    </div>
                    <ul className="center gap-8">
                        <li> <NavLink to="/about" className="" >About</NavLink></li>
                        <li><NavLink to="/faq" className="" >FAQ</NavLink></li>
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
                                        <li><button onClick={() => logout()} className="sidebar " >Sign Out</button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            : <li>
                                {/* <button onClick={login} className="px-1 tablet:px-3 py-1  rounded-3xl border hover:bg-transparent border-gray-600 bg-[#707070]" >Log In / Sign In</button> */}
                                <button className="px-1 tablet:px-5 py-1  rounded-3xl border hover:bg-transparent border-gray-600 bg-[#333333]"
                                    onClick={() => dispatch(openWalletModal())}
                                >Log In / Sign In</button>
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

export default Navbar