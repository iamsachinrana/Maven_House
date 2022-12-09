import EventCard from '@components/eventcard/EventCard'
import React from 'react'
import ENV from '../../utils/env'
const CreateEvent2 = ({ form, handleChange, handleImageUpload, handleBannerUpload }) => {
    return (
        <>
            <div>
                <header className=" px-4">
                    <div className="create-post-wrapper  tablet:my-16 my-12 max-w-[1440px] mx-auto text-white">
                        <div className="form">
                            <div className="mt-2 tablet:mt-5  grid tablet:grid-cols-2">
                                <form action="">
                                    <h2 className="md:text-2xl text-xl  font-semibold">Add image/video to your event page</h2>
                                    <div className="mt-2 tablet:mt-5  grid lg:grid-cols-2 gap-1">
                                        <div className="mt-4 ">
                                            <h3>Ticket Image</h3>
                                            <p className="text-xs mb-3 ">Add a logo/Image for the ticket of your event's <br></br> NFT</p>
                                            <div
                                                className="w-[315px] lg:w-[232px] h-[180px] bg-gray-700 justify-center items-center flex flex-col relative border border-dashed border-gray-600">
                                                {/* <img className='w-full h-full object-cover' src="/images/login/DRAKE.png" alt="" /> */}
                                                {form.ticketImage ? <img src={form?.ticketImage} alt='' /> :
                                                    <div className=' center flex-col absolute'>
                                                        <label htmlFor='ticket-image' className="flex bg-gray-500 p-1 text-xs">select image </label>
                                                        <p className="text-xs text-center">(Recommended Max size: 2MB)</p>
                                                        <input id='ticket-image' type='file' name='ticketImage' onChange={handleImageUpload} hidden /></div>}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h3>Gallery</h3>
                                            <p className="text-xs mb-3">Add at least 2 Images to help explain your<br></br> event </p>
                                            <div className="flex gap-2">
                                                <div
                                                    className="w-[250px] relative h-[180px] bg-gray-700 justify-center items-center flex flex-col border border-dashed border-gray-600">
                                                    {/* <img className='w-full h-full object-cover' src="/images/login/DRAKE.png" alt="" /> */}
                                                    {form.gallaryImage ? <img src={form?.gallaryImage[0]} alt='' /> :
                                                        <div className=' center flex-col absolute'>
                                                            <label htmlFor='gallary-image' className="flex bg-gray-500 p-1 text-xs">select image </label>
                                                            <p className="text-xs text-center">(Recommended Max size: 2MB)</p>
                                                            <input id='gallary-image' type='file' onChange={handleBannerUpload} name='gallaryImage' hidden multiple />
                                                        </div>}
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="w-[60px] h-[30px] bg-slate-700 border border-dashed border-gray-600">
                                                        {form.gallaryImage[1] ? <img className='w-full h-full object-cover' src={form.gallaryImage[1]} alt='' /> : <img className=' w-full h-full object-cover' src="/images/login/DRAKE.png" alt="" />}
                                                    </div>
                                                    <div className="w-[60px] h-[30px] bg-slate-700 border border-dashed border-gray-600">
                                                        {form.gallaryImage[2] ? <img className='w-full h-full object-cover' src={form.gallaryImage[2]} alt='' /> : <img className=' w-full h-full object-cover' src="/images/login/DRAKE.png" alt="" />}
                                                    </div>
                                                    <div className="w-[60px] h-[30px] bg-slate-700 border border-dashed border-gray-600">
                                                        {form.gallaryImage[3] ? <img className='w-full h-full object-cover' src={form.gallaryImage[3]} alt='' /> : <img className=' w-full h-full object-cover' src="/images/login/DRAKE.png" alt="" />}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <label for="">YouTube Video (Optional)</label>
                                        <input type="text" name='youtube' value={form.youtube} onChange={handleChange} placeholder="Link to video" className="w-full bg-slate-700 border-b border-solid border" />
                                    </div>
                                </form>
                                <div className="md:ml-[6%] lg:ml-[18%]  mt-7 ">
                                    <h3>Live Preview</h3>
                                    <EventCard />
                                </div>
                            </div>
                        </div>
                    </div >
                </header>
            </div>
        </>
    )
}

export default CreateEvent2