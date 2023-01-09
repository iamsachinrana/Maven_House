import moment from 'moment'
import React from 'react'

const EventCard = ({form}) => {
    console.log(form,'form')
    const month = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];
    return (
        <div className='relative'>
            <div className='absolute left-[-48px] h-[340px] w-[2px] bg-gray-600 lg:block hidden'></div>
            <div className="lg:w-[450px]  lg:mx-0 md:mt-6 mt-3 rounded-3xl overflow-hidden  ">
                <div className="relative h-[250px] tablet:h-[350px] lg:h-[250px] ">
                    <img src={form?.ticketImage ? form?.ticketImage:"/images/createevent/bhubhan-bam-wallpapaer.png"} className="object-cover h-[250px] tablet:h-[350px] lg:h-[250px] w-full" alt="" />
                    <div className="absolute top-3 w-full px-2">
                        <div className="flex items-center justify-between ">
                            <div className="flex gap-2 bg-gray-50 items-center py-1 px-3 rounded-xl ">
                                <img className="h-[14px]" src="/images/createevent/polygon.png" alt="" />
                                <p className="text-xs text-black">{form?.ammount?form.ammount: "FREE"}</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="bg-gray-50 text-black text-xs py-1 px-3 rounded-xl">{form?.eventType?form?.eventType :'Event'}</p>
                                <p className="bg-gray-50 text-black py-1 text-xs px-3 rounded-xl">{form?.eventCategory?form?.eventCategory :'Category'}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center gap-5 px-4 bg-white py-5 rounded-b-3xl">
                    <div className="text-3xl min-w-[100px] lg:min-w-[130px] text-center border-r  border-solid tablet:text-5xl md:text-2xl">
                        <h3 className="text-[#CF90DC] font-bold  text-[24px]">{form.start_date?moment(form?.start_date).format('MMM'):month[new Date().getMonth()]}</h3>
                        <h3 className="text-black/90 text-[22px]">{form.start_date? moment(form?.start_date).format('DD'):new Date().getDate()}</h3>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-black text-[15px] font-semibold">{form?.eventName?form?.eventName:'Name of the event'}</h4>
                        <p className="text-xs">by <span className='text-[14px]'>0xf5ef...025d83</span></p>
                        <p className="text-xs">{form?.shortDescription?form?.shortDescription:'This is description'}</p>
                        <p className="text-md pt-4"><span className="text-[#CF90DC] font-bold">0/{form?.ticket?form?.ticket:'00'}</span> Tickets Sold</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard