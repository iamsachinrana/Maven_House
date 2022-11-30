import React from 'react'
import DashboardNavbar from './DashboardNavbar';

const Account = () => {
    return (
        <div className='text-white'>
            <DashboardNavbar/>
            <div className="border-b pb-3">
                <h1 className='tablet:text-4xl text-left'>Account</h1>
            </div>
            <form action="" className='tablet:w-[85%] md:w-[80%] w-[90%] mx-auto'>
                <div className="  mt-2 tablet:mt-5">
                    <div className="relative block">
                        <label htmlFor="first" className='absolute left-2 top-1 tablet:text-body text-xs'>First Name</label>
                    </div>
                    <input type="text" required name="" id="first" className='inline-block w-full bg-transparent tablet:pt-8 pt-5  rounded-md ' />
                </div>
                <div className="  mt-2 tablet:mt-5">
                    <div className="relative block">
                        <label htmlFor="last" className='absolute left-2 top-1 tablet:text-body text-xs'>Last Name</label>
                    </div>
                    <input type="text" required name="" id="last" className='inline-block w-full bg-transparent tablet:pt-8 pt-5  rounded-md ' />
                </div>
                <div className="tablet:text-xl mt-2 tablet:mt-5">Change Password</div>
                <div className="  mt-2 tablet:mt-5">
                    <div className="relative block">
                        <label htmlFor="old" className='absolute left-2 top-1 tablet:text-body text-xs'>Old Password</label>
                    </div>
                    <input type="text" required name="" id="old" className='inline-block w-full bg-transparent tablet:pt-8 pt-5  rounded-md ' />
                </div>
                <div className="  mt-2 tablet:mt-5">
                    <div className="relative block">
                        <label htmlFor="new" className='absolute left-2 top-1 tablet:text-body text-xs'>New Password</label>
                    </div>
                    <input type="text" required name="" id="new" className='inline-block w-full bg-transparent tablet:pt-8 pt-5  rounded-md ' />
                </div>
                <div className="  mt-2 tablet:mt-5">
                    <div className="relative block">
                        <label htmlFor="confirm" className='absolute left-2 top-1 tablet:text-body text-xs'>Confirm New Password</label>
                    </div>
                    <input type="text" required name="" id="confirm" className='inline-block w-full bg-transparent tablet:pt-8 pt-5  rounded-md ' />
                </div>

                <div className= "mt-2 tablet:mt-5 flex justify-between ">
                    <button type="reset" className='discardsavebtn'>Discard</button>
                    <button type="submit" className='discardsavebtn'>Save</button>
                </div>
            </form>
            
           
           
        </div>
    )
}

export default Account