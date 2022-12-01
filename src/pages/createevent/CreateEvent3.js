import EventCard from '@components/eventcard/EventCard'
import React from 'react'

const CreateEvent3 = ({ form, handleChange }) => {
    return (
        <div>
            <header className=" px-4">
                {/* <nav className=" py-2  max-w-[1440px] mx-auto flex flex-col tablet:flex-row justify-between text-white  items-center px-4">
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
                            className="my-btn">2.</button>
                        <button type="submit"
                            className="my-btn">3.</button>
                        <button type="submit"
                            className="tablet:w-[120px] w-[100px] my-btn rounded-[30px] border border-solid">4. Location</button>
                        <button type="submit"
                            className="my-btn">5.</button>
                        <div className="verticleline">
                        </div>
                    </div>
                </div> */}
                <div className="create-post-wrapper px-4 xl:pr-0  my-8 max-w-[1440px] mx-auto text-white">
                    <div className="form">
                        <h2 className="lg:text-2xl text-xl font-semibold">We are almost done</h2>
                        <div className=" mt-6 grid gap-8 md:grid-cols-2">
                            <form action="">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex flex-col">
                                        <label className="text-sm tablet:text-md" for="">Who’s the hosting this event?* </label>
                                        <input type="text" name='hostingEvent' value={form.hostingEvent} onChange={handleChange} placeholder="0x5ef...025d83"
                                            className="text-xs border-b border-solid bg-gray-700 focus:border-none border-0" />
                                    </div>
                                    <div className="flex relative flex-col">
                                        <label className="text-sm tablet:text-md" for="eventlocation">Event Location</label>
                                        <select name="eventLocation" value={form.eventLocation} onChange={handleChange} id="cars" className="text-xs bg-gray-700 focus:border-none border-0" >
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <div className=" md:ml-[4%] lg:ml-[18%] mt-7 lg:mt-0">
                                <h3>Live Preview</h3>
                                <EventCard />
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