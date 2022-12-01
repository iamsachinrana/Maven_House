import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { NavLink, useHistory } from 'react-router-dom';
// import { magic } from "@utils/constants";
import Cookies from 'js-cookie';
import { useAriaHidden } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { openWalletModal } from '../../redux/action';



const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let user = Cookies.get('user-data');

    const logout = async () => {
        // await magic.connect.disconnect().catch((e) => {
        //     console.log(e);
        // });
        Cookies.remove('user-data');
        history.push('/')
    };



    return (

        <div>
            <nav className=" py-2  max-w-[1440px] h-20 mx-auto flex 
            justify-between text-white  items-center px-4">
                <div className="">
                    <NavLink to="">
                        <img src="/images/navbar/maven.png" alt="" /></NavLink>
                </div>
                <ul className="center gap-8">
                    <li> <NavLink to="/about" className="" >About</NavLink></li>
                    <li><NavLink to="/faq" className="" >Faq</NavLink></li>
                    {user ?
                        <li className='cursor-pointer login-navbar'>
                            <div className="w-8 cursor-pointer outline-4  outline-[#3E4046] border border-white h-8 bg-[#9B9B9B] rounded-full  text-sm center">M</div>
                            {/* <BsPersonCircle size={25}  /> */}
                            <div className=" login-secound z-50">

                                <ul className='list-none '>
                                    <li><NavLink to="/dashboard/my-tickets" className="sidebar" >My Tickets</NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/profile' className="sidebar" >Profile</NavLink>
                                    </li>
                                    <li><NavLink to='/dashboard/account' className="sidebar" >Account</NavLink>
                                    </li>
                                    <li><button onClick={logout} className="sidebar " >Sign Out</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        : <li>
                            <button className="px-1 tablet:px-3 py-1  rounded-3xl border hover:bg-transparent border-gray-600 bg-[#707070]"
                            // onClick={() => dispatch(openWalletModal())}
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
                        <li><NavLink to="/create-event">Create Event</NavLink>
                        </li>
                        <button className="px-1 tablet:px-3 py-1  rounded-3xl border hover:bg-transparent border-gray-600 bg-[#707070]"
                            onClick={() => dispatch(openWalletModal())}>Log In / Sign In</button>
                    </ul>

                </nav> */}
        </div >

    )
}

export default Navbar