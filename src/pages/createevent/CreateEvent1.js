import EventCard from '@components/eventcard/EventCard'
import React from 'react'

const CreateEvent1 = ({ form, handleChange }) => {
    return (
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
                    className="my-btn">1.</button>
                <button type="submit"
                    className="my-btn tablet:w-[137px] w-[120px]  rounded-[30px]  border border-solid">2. Description</button>
                <button type="submit"
                    className="my-btn">3.</button>
                <button type="submit"
                    className="my-btn">4.</button>
                <button type="submit"
                    className="my-btn">5.</button>
                <div
                    className="verticleline">
                </div>
            </div>
        </div> */}
                <div className="create-post-wrapper tablet:px-9  sm:my-16 my-12 max-w-[1440px] mx-auto text-white">

                    <div className="form">
                        <h2 className="md:text-2xl text-xl  font-semibold">Add some details</h2>
                        <div className="mt-6 grid gap-8 md:grid-cols-2">
                            <form action="">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex flex-col">
                                        <label className="text-sm tablet:text-md" for="">Short Description* </label>
                                        <input type="text" name='shortDescription' value={form.shortDescription} onChange={handleChange} placeholder="Short description"
                                            className="text-xs bg-gray-700 focus:border-none border-0" />
                                    </div>
                                    <div className="flex relative flex-col">
                                        <label className="text-sm tablet:text-md" for="">Long Description*</label>

                                        <textarea placeholder="Long description" name="longDescription" value={form.longDescription}
                                            onChange={handleChange} id="" cols="30" rows="7" className="text-xs bg-gray-700 focus:border-none border-0"></textarea>
                                    </div>

                                </div>
                            </form>
                            <div className="md:ml-[18%]  mt-7 tablet:mt-0">
                                <h3>Live Preview</h3>
                                <div className="md:h-[400px] tablet:h-[490px] md:w-[450px] md:mt-9 mt-3 rounded-3xl overflow-hidden  ">
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
                                    <div className=" flex items-center gap-5 justify-center bg-white py-5">
                                        <div className="text-3xl text-center border-r pr-5 border-solid tablet:text-5xl md:text-2xl">
                                            <h3 className="text-[#CF90DC] font-bold ">JAN</h3>
                                            <h3 className="text-black">01</h3>
                                        </div>
                                        <div className="">
                                            <h4 className="text-black text-xl">Name of Event</h4>
                                            <p className="text-">by 0xf5ef...025d83</p>
                                            <p className="text-xs">Event description goes here</p>
                                            <p className="text-md pt-4"><span className="text-[#CF90DC]">0/100</span> Tickets Sold</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className=" flex justify-center py-6 text-white gap-5">
            <button type="submit" className="bg-[#444444] py-1 px-4  rounded-[30px] flex items-center justify-center">Next Step <div className="ml-2"><i className="fa fa-chevron-right" aria-hidden="true"></i></div></button>
        </div> */}
            </header>
        </div>
    )
}

export default CreateEvent1