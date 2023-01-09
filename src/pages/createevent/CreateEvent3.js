import EventCard from '@components/eventcard/EventCard'
import React from 'react'

const CreateEvent3 = ({ form, handleChange }) => {
    return (
        <div>
            <header className=" px-4">
                <div className="create-post-wrapper px-4 xl:pr-0  my-8 max-w-[1440px] mx-auto text-white">
                    <div className="form">
                        <h2 className="lg:text-[32px] text-xl font-semibold">We are almost done</h2>
                        <div className=" mt-6 grid lg:gap-24 tablet:gap-10 md:grid-cols-2">
                            <form action=""   
autoComplete='off'>
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex flex-col">
                                        <label className="text-sm mb-1 tablet:text-md" for="">Who’s the hosting this event?* </label>
                                        <input type="text" name='hostingEvent' value={form.hostingEvent} onChange={handleChange} placeholder="0x5ef...025d83"
                                            className="text-xs border-b border-solid bg-gray-700 focus:border-none border-0" />
                                    </div>
                                    <div className="flex relative flex-col">
                                        <label className="text-sm mb-1 tablet:text-md" for="eventlocation">Event Location</label>
                                        <select name="eventLocation" value={form.eventLocation} onChange={handleChange} id="cars" className="text-xs bg-gray-700 focus:border-none border-0" >
                                            <option value="">Select Location</option>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <div className="  mt-7 lg:mt-0">
                                <h3 className='font-bold'>Live Preview</h3>
                                <EventCard form={form} />
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

export default CreateEvent3