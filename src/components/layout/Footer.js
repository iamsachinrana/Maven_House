import { transform } from 'framer-motion';
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-4'>
      <div className="create-post-wrapper  xl:pr-0  my-8 max-w-[600px] text-center mx-auto text-white">
        <h3 className='text-3xl font-semibold'>For Creators</h3>
        <p className='text-body2'>Delight your fans globally with a Moment.</p>
        <div className='mt-2 '><button type='submit' className='relative py-2 mx-auto px-6 pr-9 group rounded-3xl flex items-center bg-black hover:bg-[#131313c5]'>Contact Us
          <BsArrowRightShort className='absolute right-3 group-hover:translate-x-4 group-hover:rotate duration-300  group-hover:text-gray-200' size={25} /></button></div>
      </div>
      <div className=" px-2 flex-col flex tablet:flex-row justify-center tablet:justify-between items-center py-6 text-white">
        <div className="">
          <ul className='flex gap-4 tablet:gap-5 md:gap-7 items-end justify-around'>
            <li className='flex-shrink-0'><NavLink to="/"><img className='w-[76px] tablet:w-[110px]' src="/images/navbar/maven.png" /></NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            {/* <li><NavLink to="/terms">Terms</NavLink></li> */}
            {/* <li><NavLink to="/privacy">Privacy</NavLink></li> */}
          </ul>
        </div>
        <div className="icons justify-center flex gap-4  mt-2 tablet:mt-0">
          {/* <a href="">
            <BsInstagram size={25} className='iconrotate' />
          </a>
          <a href=""><FaTiktok size={25} className='iconrotate' />
          </a> */}
          <a href="https://twitter.com/MavenHouse_HQ" target={'_blank'}><FiTwitter size={25} className='iconrotate' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer