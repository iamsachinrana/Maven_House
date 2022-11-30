import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { NavLink, useHistory } from 'react-router-dom';
import { magic } from "@utils/constants";
import Cookies from 'js-cookie';
import { useAriaHidden } from '@chakra-ui/react';



const Navbar = () => {
  const history = useHistory();
  let user = Cookies.get('user');
    const disconnect = async () => {
        await magic.connect.disconnect().catch((e) => {
            console.log(e);
        });
        Cookies.remove('user');
        history.push('/')
    };



  return (
    
    <div>
          {user?  <nav className=" py-2  max-w-[1440px] h-20 mx-auto flex 
            justify-between text-white  items-center px-4">
                <div className="">
                    <NavLink to="">
                        <img src="/images/navbar/maven.png" alt="" /></NavLink>
                </div>
                <ul className="center gap-8">
                    <li> <NavLink to="/about" className="" >About</NavLink></li>
                    <li><NavLink to="/faq" className="" >Faq</NavLink></li>
                    <li className='cursor-pointer login-navbar'><div className="w-8 cursor-pointer outline-4  outline-[#3E4046] border border-white h-8 bg-[#9B9B9B] rounded-full  text-sm center">M</div>
                        {/* <BsPersonCircle size={25}  /> */}
                        <div className=" login-secound z-50">
                            <ul className='list-none '>
                                <li><NavLink to="/dashboard/my-tickets" className="sidebar" >My Tickets</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/profile' className="sidebar" >Profile</NavLink>
                                </li>
                                <li><NavLink to='/dashboard/account' className="sidebar" >Account</NavLink>
                                </li>
                                <li><button onClick={disconnect} className="sidebar " >Sign Out</button>
                                </li>
                            </ul>
                        </div>

                    </li>
                </ul>
            </nav>:
             <nav className="flex sticky top-0 w-full flex-col tablet:flex-row tablet:h-20 justify-between text-white  items-center py-2 tablet:py-0 px-4 ">
             <div className="cursor-pointer pt-2" onClick={() => history.push('/')}>
                 {/* <h1 className="text-2xl font-semibold mb-[-9px]">MAVEN</h1>
                 <p className="tracking-[8px]">HOUSE</p> */}
                 <img src="/images/navbar/maven.png" alt="" />
             </div>

             <ul className="flex gap-2 tablet:gap-4 pt-3 tablet:pt-0 center">
                 <li><NavLink to="/about">About</NavLink></li>
                 <li><NavLink to="/faq">FAQ</NavLink></li>
                 <li><NavLink to="/create-event">Create Event</NavLink></li>
                 <NavLink to='/magic-login' className="px-1 tablet:px-3 py-1  rounded-3xl border hover:bg-transparent border-gray-600 bg-[#707070]" >Log In / Sign In</NavLink>
             </ul>

         </nav>}
        </div>

  )
}

export default Navbar