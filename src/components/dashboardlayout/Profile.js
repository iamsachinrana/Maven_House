import React from 'react'
import DashboardNavbar from './DashboardNavbar'
const Profile = () => {
  return (
    <div className='text-white'>
      <DashboardNavbar/>
      <div className="border-b tablet:pb-3 pb-1">
        <h1 className='tablet:text-4xl text-left'>Profile</h1>
      </div>
      <form action=""   
autoComplete='off'>
      <div className=" border border-dashed tablet:p-5 p-2 rounded-md cursor-pointer mt-5">
        <label htmlFor='file-input' className="   ">
          <p className='tablet:text-body text-xs'>Drag 'n' drop an image here, or click to select an image. Images must be under 2mb.</p>
        </label>
        <input required id="file-input" className='hidden' type="file" name="name" />
      </div>
      <div className="  mt-5 tablet:text-body text-xs">
        <div className="relative block">
          <label htmlFor="handle" className='absolute left-2  top-1'>Instagram @handle</label>
          <label htmlFor="handle" className='absolute right-2 top-1'>Optional</label>
        </div>
        <input required type="text" name="" id="handle" className='inline-block w-full bg-transparent pt-8  rounded-md ' />
      </div>
      <div className="mt-5">
        <div className="relative block tablet:text-body text-xs">
          <label htmlFor="bio" className='absolute left-2  top-1'>Bio</label>
          <label htmlFor="bio" className='absolute right-2 top-1'>Optional</label>
        </div>
        <textarea required className='inline-block bg-transparent w-full pt-8 rounded-md resize-none' name="" id="bio" rows="6"></textarea>
      </div>
      <div className="mt-5 flex justify-between">
      <button type="reset" className='discardsavebtn'>Discard</button>
      <button type="submit" className='discardsavebtn'>Save</button>
      </div>
      </form>
    </div>
  )
}

export default Profile