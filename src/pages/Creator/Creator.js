import React from 'react'
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Creator = () => {
  return (
    <div className='h-sc' >
      {/* <div className="login-navbar">
        <nav className=" center-b  flex-col tablet:h-20 tablet:flex-row  text-white  py-2 tablet:py-0 px-4  ">
          <div className="">
            <NavLink to="">
              <img src="/images/navbar/maven.png" alt="" srcset="" /></NavLink>
          </div>
          <ul className="center gap-2 sm:gap-4 pt-3 tablet:pt-0">
            <li><a className="px-1 sm:px-3 py-1 center  rounded-3xl border border-gray-600 group text-black font-semibold bg-[#fff]" href="">Go Live <BsFillCameraVideoFill size={25} className="text-[#54D12F] group-hover:text-[#eab308] pl-2" /></a></li>

            <li><NavLink to="/create-event">Create Event</NavLink></li>
            <li> <div className="w-8 cursor-pointer outline-4  outline-[#3E4046] border border-white h-8 bg-[#9B9B9B] rounded-full  text-sm center">M</div></li>
          </ul>
        </nav>
      </div> */}
      <div className=" flex flex-col tablet:flex-row justify-around items-center  text-white py-[8%]  ">
        {/* <div className="w-[320px] tablet:w-[340px] md:w-[450px]  max-w-[650px]">
          <form action=""   
autoComplete='off'>
            <h3 className='tablet:text-5xl text-2xl font-semibold'>Enter API Key</h3>
            <div className="input-box my-4">
              <input placeholder='Paste API Key here' type="text" className='blur-bg w-full  border-b-2 border-0 text-white' />
            </div>
            <div className="">
              <button type="submit" className='bg-white rounded-lg text-black py-2 font-semibold w-full'>Get Streaming Key</button>
            </div>
          </form>
        </div>
        <div className="w-[320px] tablet:w-[340px] md:w-[450px] max-w-[650px] blur-bg mt-10 tablet:mt-0 rounded-2xl tablet:p-10 p-5">
          <form action=""   
autoComplete='off'>
            <div className="grid grid-cols-2 ">
              <div className="">
                <label htmlFor="">Name:</label>
                <p>Your Name</p>
              </div>
              <div className="">
                <label htmlFor="name">Name:</label>
                <p>Your Name</p>
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="rtmp">RTMP url
                <input required id='rtmp' type="text" className='input-b' />
              </label>
            </div>
            <div className="">
              <label htmlFor="streaming">Streaming Key
                <input required id='streaming' type="text" className='input-b ' />
              </label>
            </div>
            <div className="my-4">
              <label htmlFor="live">Live url
                <input required id='live' type="text" className='input-b ' />
              </label>
            </div>
            <div className="">
              <label htmlFor="currently">Currently Connected
                <input required id='currently' type="text" className='input-b ' />
              </label>
            </div>
            <div className="grid grid-cols-2 mt-4 gap-6">
              <button type='submit' className='green'>Start Live</button>
              <button type='submit' className='red'>Stop Live</button>
            </div>
          </form>
        </div> */}

      </div>
    </div>
  )
}

export default Creator;