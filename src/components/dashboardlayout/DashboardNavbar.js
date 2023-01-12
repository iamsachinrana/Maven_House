import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import Sidebar from './Sidebar';
import { AiOutlineClose } from 'react-icons/ai';
const DashboardNavbar = () => {
  return (
    <div className='tablet:hidden  mb-9 '>
      <div className="w-full center relative mx-auto">
        <a className="float-left text-body2 inline-block  absolute left-3 text-white font-medium  leading-tight uppercase rounded shadow-md  hover:shadow-lg  group transition duration-150 ease-in-out mr-1.5" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <AiOutlineMenu />
        </a>
        <div className="offcanvas offcanvas-start w-full fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding  transition duration-300 ease-in-out  top-0 left-0 border-none " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <Sidebar />
          <button type="button" className="  absolute right-4 top-7  box-content w-4 h-4 p-2 -my-5 -mr-2  border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100  hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"><AiOutlineClose color='white' /> </button>

        </div>
        <a className="float-right" href="/"><img className='w-20' src="/images/navbar/maven.png" alt="" /> </a>
      </div>
    </div>
  )
}

export default DashboardNavbar