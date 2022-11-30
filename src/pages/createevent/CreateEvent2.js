import EventCard from '@components/eventcard/EventCard'
import React from 'react'

const CreateEvent2 = ({ form, handleChange, handleImageUpload, handleBannerUpload }) => {
    return (
        <>
            <div>
                <header className=" px-4">
                    {/* <nav className="py-2 tablet:flex-row justify-between text-white items-center max-w-[1440px] mx-auto flex flex-col  px-4 ">
                        <div className="">
                            <a href="">
                                <img src="/images/navbar/maven.png" alt="" srcset="" /></a>
                        </div>
                        <ul className="flex gap-4 pt-3 tablet:pt-0">
                            <li><a href="">Create Event</a></li>
                            <li><a className="px-3 py-1 rounded-3xl border border-gray-600 bg-[#707070]" href="">Login/Sign Up</a></li>
                        </ul>
                    </nav> */}

                    {/* <div className="create-post text-white flex justify-center items-center mt-5">
                        <div className="buttons items-center flex gap-6 relative">
                            <button type="submit "
                                className=" my-btn ">1.</button>
                            <button type="submit"
                                className=" my-btn">2.</button>
                            <button type="submit"
                                className=" my-btn w-[128px] rounded-[30px] border border-solid">3. Images</button>
                            <button type="submit"
                                className=" my-btn">4.</button>
                            <button type="submit"
                                className=" my-btn">5.</button>
                            <div
                                className="verticleline">
                            </div>
                        </div>
                    </div> */}
                    <div className="create-post-wrapper px-5 tablet:my-16 my-12 max-w-[1440px] mx-auto text-white">
                        <div className="form">
                            <h2 className="md:text-2xl text-xl  font-semibold">Add some details</h2>
                            <div className="mt-2 tablet:mt-5  grid md:grid-cols-2">
                                <form action="">
                                    <h2 className="md:text-2xl text-xl  font-semibold">Add image/video to your event page</h2>
                                    <div className="mt-2 tablet:mt-5  grid tablet:grid-cols-2 gap-1">
                                        <div className="mt-4 ">
                                            <h3>Ticket Image</h3>
                                            <p className="text-xs mb-3 ">Add a logo/Image for the ticket of your event's <br></br> NFT</p>
                                            <div
                                                className="w-[315px] md:w-[232px] h-[180px] bg-gray-700 justify-center items-center flex flex-col border border-dashed border-gray-600">
                                                {form.ticketImage ? <img src={form.ticketImage} alt='' /> : <>
                                                    <label htmlFor='ticket-image' className="flex bg-gray-500 p-1 text-xs">select image </label>
                                                    <p className="text-xs text-center">(Recommended Max size: 2MB)</p>
                                                    <input id='ticket-image' type='file' name='ticketImage' onChange={handleImageUpload} hidden /></>}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h3>Gallery</h3>
                                            <p className="text-xs mb-3">Add at least 2 Images to help explain your<br></br> event </p>
                                            <div className="flex gap-2">
                                                <div
                                                    className="w-[250px] h-[180px] bg-gray-700 justify-center items-center flex flex-col border border-dashed border-gray-600">
                                                    {form.gallaryImage[0] ? <img src={form.gallaryImage[0]} alt='' /> :
                                                        <><label htmlFor='gallary-image' className="flex bg-gray-500 p-1 text-xs">select image </label>
                                                            <p className="text-xs text-center">(Recommended Max size: 2MB)</p>
                                                            <input id='gallary-image' type='file' onChange={handleBannerUpload} name='gallaryImage' hidden multiple />
                                                        </>}
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="w-[60px] h-[30px] bg-slate-700 border border-dashed border-gray-600"></div>
                                                    <div className="w-[60px] h-[30px] bg-slate-700 border border-dashed border-gray-600"></div>
                                                    <div className="w-[60px] h-[30px] bg-slate-700 border border-dashed border-gray-600"></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <label for="">YouTube Video (Optional)</label>
                                        <input type="text" name='youtube' value={form.youtube} onChange={handleChange} placeholder="Link to video" className="w-full bg-slate-700 border-b border-solid border" />
                                    </div>
                                </form>
                                <div className="md:ml-[18%]  mt-7 ">
                                    <h3>Live Preview</h3>
                                    <EventCard />
                                    {/* <div className="md:h-[400px] tablet:h-[490px] md:w-[450px] md:mt-9 mt-3 rounded-3xl overflow-hidden  ">
                                        <div className="relative tablet:h-[350px] md:h-auto ">
                                            <img src="/images/createevent/bhubhan-bam-wallpapaer.png" className="object-cover h-full w-full" alt="" />
                                            <div className="absolute top-2 w-full px-2">
                                                <div className="flex items-center justify-between ">
                                                    <div className="flex gap-2 bg-gray-50 items-center py-1 px-3 rounded-xl ">
                                                        <img className="h-[14px]" src="/images/createevent/ethereum.png" alt="" />
                                                        <p className="text-xs text-black">FREE</p>
                                                    </div>
                                                    <div className="flex gap-3">
                                                        <p className="bg-gray-50 text-xs py-1 px-3 rounded-xl">TYPE</p>
                                                        <p className="bg-gray-50 py-1 text-xs px-3 rounded-xl">Category</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h3>Gallery</h3>
                                            <p className="text-xs mb-3">Add at least 2 Images to help explain your<br></br> event </p>
                                            <div className="flex gap-2">
                                                <div
                                                    className="w-[250px] h-[180px] bg-gray-700 justify-center items-center flex flex-col border border-dashed border-gray-600">
                                                    <button type="submit" className="bg-gray-500 p-1 text-xs">select image</button>
                                                    <p className="text-xs text-center">(Recommended Max size: 2MB)</p>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="boxcreateevent"></div>
                                                    <div className="boxcreateevent"></div>
                                                    <div className="boxcreateevent"></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <label for="">YouTube Video (Optional)</label>
                                        <input type="text" value="" placeholder="Link to video" className="w-full bg-slate-700 border-b border-solid border" />
                                    </div> */}
                                </div>
                                {/* <div className="md:ml-[7%] lg:ml-[18%]  mt-7 ">
                                    <h3>Live Preview</h3>
                                    <EventCard />
                                </div> */}
                            </div>
                        </div>
                    </div >
                    {/* <div className=" flex justify-center py-6 text-white gap-5">
                        <button type="submit" className="bg-[#444444] py-1 px-4  rounded-[30px] flex items-center justify-center">Next Step <div className="ml-2"><i className="fa fa-chevron-right" aria-hidden="true"></i></div></button>
                    </div> */}
                </header>
            </div>
        </>
    )
}

export default CreateEvent2