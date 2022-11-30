import React from 'react'
import { HiOutlineTicket } from "react-icons/hi";
import { AiFillDollarCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosWalk } from "react-icons/io";
import { NavLink, useHistory } from 'react-router-dom';

const Sidebar = () => {
  const history = useHistory();
  return (
   
      <div className=' w-full h-full bg-[#1F2024]  tablet:p-5 p-3  text-white  top-0 fixed tablet:w-[280px] xxl:w-[350px] tablet:top-[80px]'>
        <div className=" text-white ">
          {/* <div className="">
            <NavLink to="/"><img src="/images/navbar/maven.png" alt="" srcset="" /></NavLink>
          </div>
          <div className="text-xs mt-3">Attending</div> */}
          <div className="mt-3">
            <button className="dash-btn " onClick={() => history.push("/dashboard/my-tickets")} > <span><HiOutlineTicket /></span> <span className=''> My Tickets</span></button>
            <button className="dash-btn my-1  " onClick={() => history.push("/dashboard/profile")} > <span><CgProfile /></span> <span className=''>Profile</span></button>
            <button className=" dash-btn" onClick={() => history.push("/dashboard/account")}> <span><MdAccountBalanceWallet /></span> <span className=''>Account</span></button>
            <button className="dash-btn mt-1 " ><span><AiFillDollarCircle /></span> <span className=''>Payment Method</span></button>

          </div>
        </div>
        <div className="flex items-center justify-between absolute bottom-2 tablet:bottom-24 w-[88%]">
          <div className="center"> <span><CgProfile /></span> <span className='tablet:text-base text-xs font-semibold ml-1'>krishnapal</span>
          </div>
          <div className="float-right"><button type="submit" className='signoutbtn'> <span><IoIosWalk /></span> Sign Out</button></div>
        </div>
      </div>
   
  )
}

export default Sidebar