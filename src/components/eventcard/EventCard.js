import React from 'react'

const EventCard = () => {
    return (
        <div>
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
    )
}

export default EventCard