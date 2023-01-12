import EventCard from '@components/eventcard/EventCard'
import React from 'react'

const CreateEvent1 = ({ form, handleChange }) => {
    return (
        <div>
            <header className=" px-4">
               
                <div className="create-post-wrapper   sm:my-16 my-12 max-w-[1440px] mx-auto text-white">

                    <div className="form">
                        <h2 className="lg:text-[32px] text-xl  font-semibold">Add some details</h2>
                        <div className="mt-6 grid lg:gap-24 tablet:gap-10 md:grid-cols-2">
                            <form action=""   
autoComplete='off'>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-sm mb-1 tablet:text-md" for="">Short Description* </label>
                                        <input type="text" name='shortDescription' value={form.shortDescription} onChange={handleChange} placeholder="Short description"
                                            className="text-xs bg-gray-700" />
                                    </div>
                                    <div className="flex relative flex-col">
                                        <label className="text-sm mb-1 tablet:text-md" for="">Long Description*</label>

                                        <textarea placeholder="Long description" name="longDescription" value={form.longDescription}
                                            onChange={handleChange} id="" cols="30" rows="7" className="resize-none text-xs bg-gray-700 p-3 "></textarea>
                                    </div>

                                </div>
                            </form>
                            <div className="  mt-7 tablet:mt-0">
                                <h3 className='font-bold'>Live Preview</h3>
                                <EventCard form={form}/>
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