import React from 'react'

export default function CreateEvent0({ form, handleChange }) {
  return (
    <div className="create-post-wrapper text-white px-0 sm:px-4  my-12 max-w-[1440px] mx-auto">
      <h2 className="lg:text-2xl text-xl  font-semibold">Tell us about your event</h2>
      <div className=" flex gap-6 sm:gap-12 items-center mt-2 tablet:mt-6">
        <div className=" flex items-center gap-3 text-xs tablet:text-md ">
          Is it a paid event?<div className="-mt-2">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
        <div className=" flex items-center gap-1 text-sm lg:text-md">
          Invite only Event?<div className=" -mt-2">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>

        </div>
      </div>
      <div className=" mt-5">
        <div className=" grid lg:gap-7 tablet:gap-5 md:grid-cols-2">
          <form action="">
            <div className="grid grid-cols-2 gap-2 md:gap-5 pt-2 tablet:pt-6">
              <div className="flex flex-col col-span-2">
                <label className="text-sm tablet:text-md " for="">Event Name </label>
                <input type="text" placeholder="Name of the event" name='eventName' value={form.eventName}
                  onChange={handleChange}
                  className="text-xs bg-gray-700 focus:border-none border-0" />
              </div>
              <div className="flex relative col-span-2 tablet:col-span-1 flex-col">
                <label className="text-sm tablet:text-md" for="eventtype">Event Type</label>

                <select name="eventType" id="cars" value={form.eventType} onChange={handleChange} className="text-xs bg-gray-700 focus:border-none border-0" >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>

              </div>
              <div className="flex relative col-span-2 tablet:col-span-1  flex-col">
                <label className="text-sm tablet:text-md" for="eventcategory">Event Category</label>

                <select name="eventCategory" value={form.eventCategory} onChange={handleChange} id="cars" className="text-xs bg-gray-700 focus:border-none border-0" >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>

              </div>
              <div className="flex  col-span-2 tablet:col-span-1 relative flex-col">
                <label className="text-sm tablet:text-md" for="">Ticket Amount</label>
                <input type="number" name='ammount' value={form.ammount} onChange={handleChange} placeholder="Price of one ticket"
                  className="text-xs bg-gray-700 focus:border-none border-0" />

                <div className=" absolute top-8 right-2 flex gap-2 text-sm border-l items-center border-gray-600 "> <img
                  className="ml-2 h-4 w-4" src="/images/createevent/polygon.png" /> <div className="text-gray-400">MATIC</div> </div>
              </div>
              <div className="flex col-span-2 tablet:col-span-1 relative flex-col">
                <label for="birthday" className="text-sm tablet:text-md" >Date of Event</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} placeholder="When will the event take place"
                  className="text-xs bg-gray-700 focus:border-none border-0" />
                {/* <div className=" absolute top-8 right-2 flex items-center"> <img className=" w-[16px] "
                                                src="/images/createevent/calendar.png" /> </div> */}
              </div>
              <div className="flex col-span-2 tablet:col-span-1 flex-col">
                <label className="text-sm tablet:text-md" for="">Total Tickets</label>
                <input type="number" name='ticket' value={form.ticket} onChange={handleChange} placeholder="Total seats for the event"
                  className="text-xs bg-gray-700 focus:border-none border-0" />
              </div>
            </div>
          </form>
          <div className="xl:ml-[18%]  mt-7 tablet:mt-0">
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
  )
}
