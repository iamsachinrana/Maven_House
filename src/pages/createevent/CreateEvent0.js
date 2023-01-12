import React from 'react'
import EventCard from '@components/eventcard/EventCard'
export default function CreateEvent0({ form, handleChange }) {
  return (
    <div className="create-post-wrapper text-white px-0 sm:px-4  my-12 max-w-[1440px] mx-auto">

      <div className=" mt-5">
        <div className=" grid lg:gap-24 tablet:gap-10 md:grid-cols-2">
          <form action=""
            autoComplete='off' >
            <div className="">
              <h2 className="lg:text-[32px] text-xl  font-semibold">Tell us about your event</h2>
              <div className=" flex gap-6 sm:gap-12 items-center mt-2 tablet:mt-6">
                <div className=" flex items-center gap-3 text-xs tablet:text-md ">
                  Is it a paid event?
                  <input id='paid' type="checkbox" hidden className='peer type-switch' />
                  <label htmlFor='paid' className='relative cursor-pointer w-[40px] h-[16px] transition-all duration-200 peer-checked:bg-green-500  rounded-full bg-gray-800 inline-block'>

                    <span class="flex h-[14px] w-[14px] rounded-full transition-[left] duration-200  bg-white absolute left-[2px] top-[50%] -translate-y-1/2"></span>
                  </label>

                </div>
                <div className=" flex items-center gap-1 text-sm lg:text-md">
                  Invite only Event?
                  <input id='event' type="checkbox" hidden className='peer type-switch' />
                  <label htmlFor='event' className='relative cursor-pointer w-[40px] h-[16px] transition-all duration-200 peer-checked:bg-green-500   rounded-full bg-gray-800 inline-block'>

                    <span class="flex h-[14px] w-[14px] rounded-full transition-[left] duration-200 peer-checked:left-[24px] bg-white absolute left-[2px] top-[50%] -translate-y-1/2"></span>
                  </label>

                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-5 pt-2 tablet:pt-6">
              <div className="flex flex-col col-span-2">
                <label className="text-sm tablet:text-md " for="">Event Name </label>
                <input type="text" placeholder="Name of the event" name='eventName' value={form.eventName}
                  onChange={handleChange}
                  className="text-xs bg-gray-700 " />
              </div>
              <div className="flex relative col-span-2 tablet:col-span-1 flex-col">
                <label className="text-sm tablet:text-md" for="eventtype">Event Type</label>

                <select name="eventType" id="cars" value={form.eventType} onChange={handleChange} className="text-xs bg-gray-700 placeholder:text-gray-600" >
                  <option value="">Select Event Type</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>

              </div>
              <div className="flex relative col-span-2 tablet:col-span-1  flex-col">
                <label className="text-sm tablet:text-md" for="eventcategory">Event Category</label>

                <select name="eventCategory" value={form.eventCategory} onChange={handleChange} id="cars" className="text-xs bg-gray-700 placeholder:text-gray-600 " >
                  <option value="">Select Category</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>

              </div>

              <div className="flex col-span-2 tablet:col-span-1 relative flex-col">
                <label for="birthday" className="text-sm tablet:text-md" >Start Event Date</label>
                <input type="date" name="start_date" value={form.start_date} onChange={handleChange} placeholder="When will the event take place"
                  className="text-xs bg-gray-700 " />
                {/* <div className=" absolute top-8 right-2 flex items-center"> <img className=" w-[16px] "
                                                src="/images/createevent/calendar.png" /> </div> */}
              </div>

              <div className="flex col-span-2 tablet:col-span-1 relative flex-col">
                <label for="birthday" className="text-sm tablet:text-md" >End Event Date</label>
                <input type="date" name="end_date" value={form.end_date} onChange={handleChange} placeholder="When will the event take place"
                  className="text-xs bg-gray-700 " />
                {/* <div className=" absolute top-8 right-2 flex items-center"> <img className=" w-[16px] "
                                                src="/images/createevent/calendar.png" /> </div> */}
              </div>

              <div className="flex  col-span-2 tablet:col-span-1 relative flex-col">
                <label className="text-sm tablet:text-md" for="">Ticket Amount</label>
                <input type="number" name='ammount' value={form.ammount} onChange={handleChange} placeholder="Price of one ticket"
                  className="text-xs bg-gray-700 " />

                <div className=" absolute top-8 right-2 flex gap-2 text-sm border-l items-center border-gray-600 "> <img
                  className="ml-2 h-4 w-4" src="/images/createevent/polygon.png" /> <div className="text-gray-400">MATIC</div> </div>
              </div>

              <div className="flex col-span-2 tablet:col-span-1 flex-col">
                <label className="text-sm tablet:text-md" for="">Total Tickets</label>
                <input type="number" name='ticket' value={form.ticket} onChange={handleChange} placeholder="Total seats for the event"
                  className="text-xs bg-gray-700 " />
              </div>
            </div>
          </form>
          <div className="mt-7 pt-8 lg:pt-16 tablet:mt-0">
            <h3 className='font-bold'>Live Preview</h3>

            <EventCard form={form} />

          </div>
        </div>
      </div>
    </div>
  )
}
