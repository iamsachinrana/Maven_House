
import React, { useState } from "react";
import { postReq } from "../../utils/ApiHandler";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import ENV from '../../utils/env';
import { Player } from "@livepeer/react";
import { useDispatch } from "react-redux";
import { showToast } from "@redux/action";

const GoLive = () => {
    const dispatch = useDispatch();
    const [apiKey, setApiKey] = useState(ENV.API_KEY);
    const [form, setForm] = useState({
        apiKey: apiKey,
        user_id: ''
    })
    const [rowData, setRowData] = useState(null);
    const [notify, setNotify] = useState({ 'message': '', 'link': '' })
    const [streamIsActive, setStreamIsActive] = useState(false);
    const [activeStatus] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let data = {
            "api_key": form.apiKey,
            "user_id": form.user_id
        }
        postReq(`/user/create-stream`, data)
            .then((res) => {
                if (res.status) {
                    console.log(res.data.data[0], 'responser');
                    setRowData(res?.data?.data[0]);
                    setStreamIsActive(true);
                }
            })
            .catch((e) => {
                console.log(e, "error")
            });
    }
    const sendPushNotification = (event) => {
        event.preventDefault();
        let data = { ...notify };
        postReq(`/user/send-notification`, data)
            .then((res) => {
                if (res.status) {
                    dispatch(showToast({ type: 'success', message: 'Notification send successfully!' }))
                    setNotify({ message: '', link: '' });
                }
            })
            .catch((e) => {
                console.log(e, "error")
            });
    }

    return (
        <div className='bg-black go-live' >
            <div className="go-live-content flex flex-col gap-10 tablet:gap-20 tablet:flex-row justify-center items-center  text-white py-[4%]  ">

                <div className="max-w-[320px] w-full md:min-w-[700px] min-w-[300px] md:max-w-[750px] min-h-[557px] blur-bg  p-4 rounded-md flex justify-center items-center px-6">
                    {rowData?.id ?
                        <div className='w-full '>
                            < div className="relative go-live bg-black h-[580px] w-full mx-auto overflow-hidden rounded-xl ">
                                <h1 className='absolute top-0 min-w-[250px] left-0 py-2 font-bold text-xl z-[10000] px-2  text-white'>
                                    {rowData?.name}
                                </h1>
                                <div data-vjs-player className='w-full h-full ![&>video]:h-[580px] ![&>:not(video)]:hidden'>
                                    <Player
                                        title={rowData.name}
                                        playbackId={rowData.playback_id}
                                        showPipButton
                                        loop
                                        autoPlay
                                        showTitle={false}
                                        muted
                                        jwt={rowData.token}
                                    />
                                </div>
                                <div className="bg-white font-semibold text-black rounded-xl flex items-center justify-center absolute right-2 top-2 p-1 pr-2 text-xs">
                                    <div
                                        className={`animate-pulse ${streamIsActive ? "bg-green-700" : "bg-yellow-600"
                                            } h-2 w-2 mr-2 rounded-full`}
                                    ></div>
                                    {streamIsActive && activeStatus ? "Live" : "Waiting for Video"}
                                </div>

                            </div>

                            {/* {showRequest && (
                                <>
                                    <fieldset className="w-full md:w-2/3 text-sm border border-dashed border-gray p-4 rounded flex flex-col">
                                        <legend>Request</legend>
                                        <div className="text-xs">
                                            Headers: <br />
                                            <textarea
                                                rows={5}
                                                cols={30}
                                                value={headers}
                                                disabled
                                                className="w-full resize-none leading-5"
                                                style={{
                                                    fontFamily: "Lucida Console, Monospace",
                                                }}
                                            />
                                        </div>
                                        <div className="text-xs mt-8">
                                            Body: <br />
                                            <textarea
                                                rows={26}
                                                cols={30}
                                                value={body}
                                                disabled
                                                className="w-full resize-none leading-5"
                                                style={{
                                                    fontFamily: "Lucida Console, Monospace",
                                                }}
                                            />
                                        </div>
                                    </fieldset>
                                    <fieldset className="w-full md:w-2/3 text-sm border border-dashed border-gray p-4 rounded flex flex-col">
                                        <legend>Response</legend>
                                        <div className="text-xs">
                                            <textarea
                                                rows={5}
                                                cols={30}
                                                value={response}
                                                disabled
                                                className="w-full resize-none leading-5"
                                                style={{
                                                    fontFamily: "Lucida Console, Monospace",
                                                }}
                                            />
                                        </div>
                                    </fieldset>
                                </>
                            )} */}
                        </div>

                        : <form className='w-full ' action=""
                            autoComplete='off'>
                            <h3 className='tablet:text-5xl text-2xl font-semibold'>Enter API Key</h3>
                            <div className=" my-4">
                                <input placeholder='Paste API Key here ' type="text" name="apiKey" value={form.apiKey} onChange={(e) => setApiKey(e.target.value)} className='blur-bg w-full h-[41px] input-b border-b border-b-white !rounded-none   text-white' />
                            </div>
                            <div className="flex w-full relative col-span-2 tablet:col-span-1 mb-5  flex-col">
                                <label className="text-sm tablet:text-md" for="eventcategory">User</label>

                                <select name="user_id" value={form.user_id} onChange={handleChange} id="cars" className="text-xs bg-gray-700 rounded-none" >
                                    <option value="">Select User</option>
                                    <option value="98">KENDRICK LAMAR</option>
                                    <option value="99">LIL NAS X</option>
                                    <option value="100">DRAKE</option>
                                    <option value="101">DOJA CAT</option>
                                    <option value="102">EMIWAY</option>
                                </select>

                            </div>
                            <div className="">
                                <button type="submit" className='bg-white rounded-lg text-black py-2 font-semibold w-full' onClick={submitHandler}>Get Streaming Key</button>
                            </div>
                        </form>}
                </div>

                <div className="w-[320px] tablet:w-[340px] blur-bg md:w-[450px] max-w-[650px] mt-10 tablet:mt-0 rounded-2xl tablet:p-10 p-5">
                    <form action=""
                        autoComplete='off'>
                        {/* {console.log(rowData)} */}
                        <div className="grid grid-cols-2 ">
                            <div className="flex gap-2">
                                <label htmlFor="">Name:</label>
                                <p>{rowData?.name}</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <label htmlFor="rtmp">RTMP url
                                <input required id='rtmp' value={'rtmp://rtmp.livepeer.com/live'} type="text" className='input-b !rounded-none border-b border-b-white' disabled />
                            </label>
                        </div>
                        <div className="">
                            <label htmlFor="streaming">Streaming Key
                                <input required id='streaming' value={rowData?.stream_key} type="text" className='input-b !rounded-none border-b border-b-white ' disabled />
                            </label>
                        </div>
                        <div className="my-4">
                            <label htmlFor="live">Stream Id
                                <input required id='live' value={rowData?.stream_id} type="text" className='input-b !rounded-none border-b border-b-white ' />
                            </label>
                        </div>
                        <div className="my-4">
                            <label htmlFor="live">Playback Id
                                <input required id='live' value={rowData?.playback_id} type="text" className='input-b !rounded-none border-b border-b-white ' />
                            </label>
                        </div>
                        <div className="my-4">
                            <label htmlFor="live">Live url
                                <input required id='live' value={'rtmp://rtmp.livepeer.com/live'} type="text" className='input-b !rounded-none border-b border-b-white ' />
                            </label>
                        </div>
                        <div className="grid grid-cols-2 mt-4 gap-6">
                            <button type='submit' className='green'>Start Live</button>
                            <button type='submit' className='red'>Stop Live</button>
                        </div>
                    </form>
                    <div className="w-full mt-12">
                        <h3 className="mb-4">Notify Viewers</h3>
                        <div className="">
                            <label htmlFor="currently">Message
                                <input placeholder="Type message to notify" value={notify.message} onChange={(e) => setNotify({ ...notify, message: e.target.value })} required id='currently' type="text" className='input-b !rounded-none border-b border-b-white ' />
                            </label>
                        </div>
                        <br />
                        <div className="">
                            <label htmlFor="currently">Link
                                <input placeholder="https://wwww.mavenhouse.io/1290" value={notify.link} onChange={(e) => setNotify({ ...notify, link: e.target.value })} required id='currently' type="text" className='input-b !rounded-none border-b border-b-white ' />
                            </label>
                        </div>
                        <div className="grid grid-cols-2 mt-4 gap-6">
                            <button type='submit' onClick={(e) => sendPushNotification(e)} className='green'>Send</button>
                            <button type='submit' onClick={(e) => setNotify({ message: '', link: '' })} className='red'>Clear</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default GoLive