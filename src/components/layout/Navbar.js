import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { magic } from "@utils/constants";
import Cookies from 'js-cookie';
import { openWalletModal, setWalletId } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from "web3";
import * as PushAPI from '@pushprotocol/restapi';

const web3 = new Web3(magic.rpcProvider);
const Navbar = () => {
    const [notificationCount, setNotificationCount] = useState(0);
    const [notifications, setNotifications] = useState([]);
    const history = useHistory();
    const dispatch = useDispatch();

    let user = Cookies.get('user-data');
    let userType = Cookies.get('user-type');
    userType = userType ? JSON.parse(userType) : userType;


    useEffect(() => {
        (async () => {
            let publicAddress = (await web3.eth.getAccounts())[0];
            if (user) {
                if (publicAddress) {
                    dispatch(setWalletId(publicAddress));
                }

                const notifications = await PushAPI.user.getFeeds({
                    user: `eip155:80001:${publicAddress}`, // user address in CAIP
                    env: 'staging'
                });
                console.log('notifications', notifications);
                setNotifications(notifications);
                setNotificationCount(notifications.length);
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
            justify-between text-white  items-center px-[21px]">
                    <div className="">
                        <NavLink to="/">
                            <img src="/images/navbar/maven.png" alt="" /></NavLink>
                    </div>
                    <ul className="center gap-8">
                        <li> <NavLink to="/about" className="" >About</NavLink></li>
                        <li><NavLink to="/faq" className="" >FAQ</NavLink></li>
                        {(notificationCount > 0) && <li>
                            <div className="dropdown relative">
                                <button
                                    className='relative'
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-bell text-[18px]"></i>
                                    {(notificationCount > 0) &&
                                        <span className='absolute top-[-12px] right-[-8px] w-6 h-6 bg-gray-800 center text-white rounded-full text-[12px]'>{notificationCount}</span>}

                                </button>
                                <ul
                                    className="dropdown-menu   absolute  hidden  bg-gray-800  text-base  z-50  float-left  py-2  list-none  text-left  rounded-lg  shadow-lg  mt-1  m-0  bg-clip-padding  border-none  min-w-[300px]"
                                    aria-labelledby="dropdownMenuButton1">
                                    {
                                        notifications.length > 0 &&
                                        notifications.map((Notification, index) => {
                                            return <li key={index}> <NavLink to={Notification.cta} className=' px-4 py-2 gap-2 flex items-center'>
                                                <img className='w-6 h-6 rounded-full object-cover' src={Notification.icon} alt={Notification.title} />
                                                <span className='text-white/80 hover:text-white'>{Notification.message}</span></NavLink>
                                            </li>
                                        })
                                    }



                                </ul>
                            </div>
                        </li>}
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