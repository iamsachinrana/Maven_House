import EventCard from '@components/eventcard/EventCard'
import React from 'react'

const CreateEvent4 = ({ form }) => {
    return (
        <div>
            <header className=" px-4">
                {/* <nav className=" py-2 flex flex-col tablet:flex-row justify-between text-white items-center  ">
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
                            className="bg-[#444444] tablet:p-[20px] p-[5px] text-sm tablet:text-md w-[30px] text-gray-400 rounded-[50%] flex items-center justify-center h-[30px] tablet:h-[40px] ">1.</button>
                        <button type="submit"
                            className="bg-[#444444] tablet:p-[20px] p-[5px] text-sm tablet:text-md w-[30px] text-gray-400 rounded-[50%] flex items-center justify-center h-[30px] tablet:h-[40px] ">2.</button>
                        <button type="submit"
                            className="bg-[#444444] tablet:p-[20px] p-[5px] text-sm tablet:text-md w-[30px] text-gray-400 rounded-[50%] flex items-center justify-center h-[30px] tablet:h-[40px] ">3.</button>
                        <button type="submit"
                            className="bg-[#444444] tablet:p-[20px] p-[5px] text-sm tablet:text-md w-[30px] text-gray-400 rounded-[50%] flex items-center justify-center h-[30px] tablet:h-[40px] ">4.</button>
                        <button type="submit"
                            className="bg-[#444444] tablet:p-[20px] p-[5px] text-sm tablet:text-md tablet:w-[110px] w-[100px]  rounded-[30px] flex items-center justify-center h-[30px] tablet:h-[40px] border border-solid">5.
                            Review</button>
                        <div
                            className="verticleline">
                        </div>
                    </div>
                </div> */}
                <div className="create-post-wrapper text-white mt-6 px-0 sm:px-4">
                    <h2 className="md:text-2xl text-xl font-semibold">Review the details</h2>

                    <div className=" mt-6">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="grid grid-cols-1 gap-3 bg-[#212329] md:p-4 p-1 py-4 rounded-3xl live-preview">
                                <div className="">
                                    <div className="pl-2">
                                        <h3 className="md:text-2xl text-xl  font-semibold">Event Name</h3>
                                        <div className=" mt-4 flex gap-2">
                                            <button type="submit"
                                                className="bg-[#444444]  rounded-3xl text-[10px] px-2 text-white">Type</button>
                                            <button type="submit"
                                                className="bg-[#444444]  rounded-3xl text-[10px] px-2 text-white">Category</button>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between md:flex-row flex-col gap-3 px-2">
                                        <div>
                                            <div className="  overflow-hidden bg-white rounded-xl md:h-[280px]">
                                                <img src="/images/createevent/bhubhan-bam-wallpapaer.png" className="object-cover h-full w-full"
                                                    alt="" />

                                            </div>
                                            <div className=" mt-3">
                                                <textarea name="" placeholder="Short Description here...." id=""
                                                    className=" text-gray-900 rounded-md w-full py-2 px-3 h-[48px] resize-none " ></textarea>
                                            </div>
                                        </div>
                                        <div className="md:h-[280px] py-3 px-2 md:w-[140px] w-full flex md:flex-col flex-row justify-evenly items-center gap-2 bg-white rounded-xl">
                                            <div className="w-[125px] tablet:w-[195px] md:w-[125px] tablet:h-[100px] h-[50px] bg-slate-500 rounded-xl "></div>
                                            <div className="w-[125px] tablet:w-[195px] md:w-[125px] tablet:h-[100px] h-[50px] bg-slate-500 rounded-xl"></div>
                                            <div className="w-[125px] tablet:w-[195px] md:w-[125px] tablet:h-[100px] h-[50px] bg-slate-500 rounded-xl"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="xl:ml-[18%] md:ml-[8%] mt-7 md:mt-0">
                                <h3>Event Card</h3>
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
                    <button type="submit"
                        className="bg-[#444444] py-1 px-4  rounded-[30px] flex items-center justify-center">Publish Event <div
                            className="ml-2"><i className="fa fa-chevron-right" aria-hidden="true"></i></div></button>
                </div> */}
            </header>
        </div>
    )
}

export default CreateEvent4