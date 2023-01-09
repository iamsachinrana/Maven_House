import EventCard from '@components/eventcard/EventCard'
import React, { useEffect } from 'react'
import { getApiReq } from '../../utils/ApiHandler';

const CreateEvent2 = ({ form, handleFileUpload, setAssetUploadUrl, handleImageUpload, handleBannerUpload }) => {
    useEffect(() => {
        getApiReq(`/user/get-storage-details`)
            .then(async (storageDetails) => {
                console.log(storageDetails);
                if (storageDetails.status) {
                    setAssetUploadUrl(storageDetails?.data?.data)
                }
            })
            .catch((e) => {
                console.log('Error', e);
            });
    }, [])
    return (
        <>
            <div>
                <header className=" px-4">
                    <div className="create-post-wrapper  tablet:my-16 my-12 max-w-[1440px] mx-auto text-white">
                        <div className="form">
                            <div className="mt-2 tablet:mt-5 lg:gap-24 tablet:gap-10 grid lg:grid-cols-2">
                                <form action=""
                                    autoComplete='off' >
                                    <h2 className="md:text-2xl text-xl  font-semibold">Add image/video to your event page</h2>
                                    <div className="mt-2 tablet:mt-5  grid lg:grid-cols-2 gap-1">
                                        <div className="mt-4 ">
                                            <h3>Ticket Image</h3>
                                            <p className="text-[11px] mb-3 ">Add a logo/Image for the ticket of your event's NFT</p>
                                            <div
                                                className="w-[315px] lg:w-[232px] h-[180px] bg-gray-700 justify-center items-center flex flex-col relative border border-dashed rounded-sm border-gray-400">
                                                
                                                    <div className=' h-full w-full'>
                                                        <label htmlFor='ticket-image' className='flex flex-col items-center justify-center gap-1 h-full'>
                                                        {form.ticketImage ? <img  className='h-full object-cover w-full' src={form?.ticketImage} alt='' /> :
                                                            <div className='flex flex-col items-center justify-center gap-1'>
                                                                <span className="flex bg-gray-500 p-1 text-xs">select image</span>
                                                            <p className="text-xs text-center">(Recommended Max size: 2MB)</p>
                                                            </div>}
                                                         </label>
                                                        
                                                        <input id='ticket-image' type='file' name='ticketImage' onChange={handleImageUpload} hidden /></div>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <h3>Gallery</h3>
                                            <p className="text-[11px] mb-3">Add at least 2 Images to help explain your event </p>
                                            <div className="flex gap-2">
                                                <div
                                                    className="w-[250px] relative h-[180px] bg-gray-700 justify-center items-center flex flex-col border border-dashed rounded-sm border-gray-400">
                                                    
                                                   
                                                        <div className='h-full w-full'>
                                                            <label htmlFor='gallary-image'   className='flex flex-col items-center justify-center gap-1 h-full'>

                                                            {form.gallaryImage ? <img className='h-full object-cover w-full' src={form?.gallaryImage[0]} alt='' /> :
                                                            <div className='flex flex-col items-center justify-center gap-1'>
                                                                <span className="flex bg-gray-500 p-1 text-xs">select image</span>
                                                            <p className="text-xs text-center">(Recommended Max size: 2MB)</p>
                                                            </div>}
                                                            </label>
                                                           
                                                            <input id='gallary-image' type='file' onChange={handleBannerUpload} name='gallaryImage' hidden multiple />
                                                        </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <div className="w-[60px] h-[30px] bg-slate-700 border border-dashed rounded-sm border-gray-400">
                                                        {form.gallaryImage[1] ? <img className='w-full h-full object-cover' src={form.gallaryImage[1]} alt='' /> : <img className=' w-full h-full object-cover' src="/images/login/DRAKE.png" alt="" />}
                                                    </div>
                                                    <div className="w-[60px] h-[30px] bg-slate-700 border border-dashed rounded-sm border-gray-400">
                                                        {form.gallaryImage[2] ? <img className='w-full h-full object-cover' src={form.gallaryImage[2]} alt='' /> : <img className=' w-full h-full object-cover' src="/images/login/DRAKE.png" alt="" />}
                                                    </div>
                                                    <div className="w-[60px] h-[30px] bg-slate-700 border border-dashed rounded-sm border-gray-400">
                                                        {form.gallaryImage[3] ? <img className='w-full h-full object-cover' src={form.gallaryImage[3]} alt='' /> : <img className=' w-full h-full object-cover' src="/images/login/DRAKE.png" alt="" />}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <label for="">Teaser Video</label>
                                        <input type="file" name='teaser' required value={form.youtube} onChange={(e) => handleFileUpload(e)} placeholder="Link to video" className="w-full  file:border-none bg-slate-700 file:h-[38px]" />
                                    </div>
                                </form>
                                <div className=" mt-7 ">
                                    <h3 className='font-bold'>Live Preview</h3>
                                    <EventCard form={form} />
                                </div>
                            </div>
                        </div>
                    </div >
                </header>
            </div>
        </>
    )
}

export default CreateEvent2