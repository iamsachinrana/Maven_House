import { useAriaHidden } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getImageUrl } from '@utils/ApiHandler';
import CreateEvent0 from './CreateEvent0';
import CreateEvent1 from './CreateEvent1';
import CreateEvent2 from './CreateEvent2';
import CreateEvent3 from './CreateEvent3';
import CreateEvent4 from './CreateEvent4';
import { getMultipleImageUrl, postApiReq, postReq } from '../../utils/ApiHandler';
import Loader from '../../../src/components/Loader/index'
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/action';
import axios from 'axios';

const initialState = {
    eventName: '',
    eventType: "",
    eventCategory: "",
    ammount: "",
    start_date: "",
    end_date: '',
    ticket: '',
    shortDescription: '',
    longDescription: '',
    ticketImage: '',
    gallaryImage: '',
    teaser_playback: '',
    hostingEvent: '',
    eventLocation: ''
};

const CreateEvent = () => {
    const history = useHistory();
    const $ = window.$
    const dispatch = useDispatch();
    const [form, setForm] = useState(initialState);
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [assetUploadUrl,setAssetUploadUrl] = useState(false);
    const changeSteps = () => {
        setStep(step + 1);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    function readFile(file) {
        const render = new FileReader();
        render.onload = function (e) {
            $(`#show_choose_image`).attr("src", e.target.result)
        };
        render.readAsDataURL(file);
    }

    const handleImageUpload = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const { name, files } = e.target;
            const file = files[0];
            if (file.size) {
                if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
                    const data = new FormData();
                    data.append("asset", file);
                    console.log(data, 'file')
                    // let imageDataUrl = await readFile(file);
                    const image = await getImageUrl(data);
                    if (image) {
                        handleChange({ target: { name: name, value: image } });
                    }
                } else {
                    // dispatch(showToast({ type: 'error', message: 'Please upload accepted file.' }));
                    return false;
                }
            }
        }
    };

    const handleFileUpload = async (e)=>{
        const file = e.target.files[0];
        try{
            axios({
                method:'PUT',
                url : assetUploadUrl?.url,
                data:file,
                header:{
                    'content-type':'video/mp4'
                }
            }).then(async(response)=>{
                if(response.status){
                    console.log(`assetUploadUrl`,assetUploadUrl);
                    setForm({...form, teaser_playback:assetUploadUrl?.asset?.playbackId})
                }
            })
        }catch(e){
            console.log("Error upload",e);
        }
       
    }

    const handleBannerUpload = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const { name, files } = e.target;
            const file = files;
            console.log(file, 'file');
            if (file[0].size) {
                if (file[0].type === 'image/png' || file[0].type === 'image/jpeg' || file[0].type === 'image/jpg') {
                    const data = new FormData();
                    for (let i = 0; i < file?.length; i++) {
                        data.append("asset", file[i]);
                    }

                    // let imageDataUrl = await readFile(file);
                    const image = await getMultipleImageUrl(data);
                    if (image) {
                        handleChange({ target: { name: name, value: image } });
                    }
                } else {
                    // dispatch(showToast({ type: 'error', message: 'Please upload accepted file.' }));
                    return false;
                }
            }
        }
    };

    const handleSubmit = () => {
        let data = {
            "name": form.eventName,
            "type": form.eventType,
            "category": form.eventCategory,
            "ticket_amount": Number(form.ammount),
            "start_date": form.start_date,
            "end_date": form.end_date,
            "total_tickets": Number(form.ticket),
            "short_description": form.shortDescription,
            "long_description": form.longDescription,
            "ticket_image": form.ticketImage,
            "gallery": form.gallaryImage,
            "teaser_playback": form.teaser_playback,
            "host": form.hostingEvent,
            "location": form.eventLocation
        }
        setIsLoading(true);
        postApiReq('/user/create-event', data).then((res) => {
            if (res.status) {
                if (res?.data?.data) {
                    dispatch(showToast({ type: 'success', message: 'Create event sucessfully.' }));
                    history.push('/creator');
                    setIsLoading(false);
                }
                else {
                    dispatch(showToast({ type: 'error', message: res?.data?.message }))
                }
            }
            else {
                dispatch(showToast({ type: 'error', message: res?.data?.message }))
            }
        })
    }

    return (
        <>
            <Loader isLoading={isLoading} />
            <div>
                <header className=" px-4">

                    <div className="create-post text-white flex justify-center items-center mt-5 ">
                        <div className="buttons items-center flex tablet:gap-6 gap-2 relative">
                            <div
                                className="absolute bg-gradient-to-r from-slate-300  to-[#181a20] w-[97%] flex justify-center items-center ml-2 h-[4px] -z-10">
                            </div>


                            {['About', 'Description', 'Images', 'Location', 'Review'].map((item, index) => (
                                <button type="submit "
                                    className={`bg-[#444444] my-btn  flex items-center justify-center ${step === index + 1 ? 'border border-solid w-32' : ''}  py-2 px-4 rounded-full`}>{index + 1}. {step === index + 1 ? item : ''}</button>
                            ))}
                            {/* <button type="submit"
                                className={`bg-[#444444] tablet:p-[20px] p-[5px] text-gray-400  text-sm tablet:text-md 
                                rounded-[50%] flex items-center justify-center h-[30px] tablet:h-[40px] ${step > 1 ? 'border border-solid' : ''}`}>2. Description</button>
                            <button type="submit"
                                className={`bg-[#444444] tablet:p-[20px] p-[5px] text-gray-400  text-sm tablet:text-md rounded-[50%] flex items-center justify-center h-[30px] tablet:h-[40px] ${step > 2 ? 'border border-solid' : ''}`}>3. Images</button>
                            <button type="submit"
                                className={`bg-[#444444] tablet:p-[20px] p-[5px] text-gray-400  text-sm tablet:text-md rounded-[50%] flex items-center justify-center h-[30px] tablet:h-[40px] ${step > 3 ? 'border border-solid' : ''}`}>4. Location</button>
                            <button type="submit"
                                className="bg-[#444444] tablet:p-[20px] p-[5px] text-gray-400   text-sm tablet:text-mdrounded-[50%] flex items-center justify-center h-[30px] tablet:h-[40px]">5. Review</button>
                            <div
                                className="absolute bg-gradient-to-r from-slate-300  to-[#181a20] w-[97%] flex justify-center items-center ml-2 h-[4px] -z-10">
                            </div> */}
                        </div>
                    </div>
                    <div>
                        {step === 1 ? <CreateEvent0 form={form}
                            handleChange={handleChange} /> :
                            step === 2 ? <CreateEvent1 form={form}
                                handleChange={handleChange} /> :
                                step === 3 ? <CreateEvent2 form={form}
                                    handleChange={handleChange}
                                    handleImageUpload={handleImageUpload}
                                    handleBannerUpload={handleBannerUpload} 
                                    handleFileUpload={handleFileUpload}
                                    setAssetUploadUrl={setAssetUploadUrl}/> :
                                    step === 4 ? <CreateEvent3 form={form}
                                        handleChange={handleChange} /> :
                                        step === 5 && <CreateEvent4 form={form}
                                            handleChange={handleChange} />}
                    </div>
                    <div className=" flex justify-center py-4 text-white gap-5 ">
                        {step < 5 ? <button type="submit" className="bg-[#444444] py-1 px-4 font-semibold rounded-[30px] flex items-center justify-center" onClick={changeSteps}>Next Step <div className="ml-2"><i className="fa fa-chevron-right" aria-hidden="true"></i></div></button> :
                            <button type="submit" onClick={handleSubmit}
                                className="bg-[#444444] py-1 px-4  rounded-[30px] flex items-center justify-center">Publish Event <div
                                    className="ml-2"><i className="fa fa-chevron-right" aria-hidden="true"></i></div></button>}
                    </div>
                </header>
            </div>
        </>
    )
}

export default CreateEvent