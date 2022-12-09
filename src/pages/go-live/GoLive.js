import { BsFillCameraVideoFill } from 'react-icons/bs';
import { NavLink, useHistory } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import { getReq, getStreamStatus, postReq } from "../../utils/ApiHandler";
import videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import { data } from 'autoprefixer';
import ENV from '../../utils/env';


function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const GoLive = () => {

    const [apiKey, setApiKey] = useState(ENV.API_KEY);
    const [form,setForm]=useState({
        apiKey:ENV.API_KEY,
        user_id:''
    })
    const [rowData, setRowData] = useState(null);
    const [streamIsActive, setStreamIsActive] = useState(false);
    const [showRequest, setShowRequest] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
        const [activeStatus, setActiveStatus] = useState()
        const videoEl = useRef();
        const history=useHistory();
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


    useEffect(() => {
        let interval;
        if (rowData?.stream_key) {
            interval = setInterval(async () => {
                const streamStatusResponse = await getStreamStatus(
                    rowData?.api_key,
                    rowData?.stream_id
                );

                if (streamStatusResponse.data) {
                    console.log(videoEl);
                    let { isActive } = streamStatusResponse.data?.data;
                    setActiveStatus(isActive);
                    if (isActive && (videoStarted == false || videoStarted == null)) {
                        setVideoStarted(true);
                    }
                    else if (isActive == false && videoStarted == true) {
                        if(isActive == false){
                            history.push('/creator')
                        }
                        setVideoStarted(false);
                    }
                     
                }
            }, 5000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [rowData?.stream_key]);

    let prevStatus = usePrevious(activeStatus);

    useEffect(() => {
        console.log(prevStatus?.activeStatus, activeStatus, 'disconnect')
        if (prevStatus?.activeStatus !== activeStatus) {
            setVideoStarted(false);
        }
    }, [activeStatus])


    // const headers = JSON.stringify(
    //     {
    //         "content-type": "application/json",
    //         authorization: `Bearer ${apiKey}`,
    //     },
    //     undefined,
    //     2
    // );
    // const body = JSON.stringify(
    //     {
    //         name: "test_stream",
    //         profiles: [
    //             {
    //                 name: "720p",
    //                 bitrate: 2000000,
    //                 fps: 30,
    //                 width: 1280,
    //                 height: 720,
    //             },
    //             {
    //                 name: "480p",
    //                 bitrate: 1000000,
    //                 fps: 30,
    //                 width: 854,
    //                 height: 480,
    //             },
    //             {
    //                 name: "360p",
    //                 bitrate: 500000,
    //                 fps: 30,
    //                 width: 640,
    //                 height: 360,
    //             },
    //         ],
    //     },
    //     undefined,
    //     2
    // );

    // const response = JSON.stringify(
    //     {
    //         isActive: false,
    //         streamKey: rowData?.stream_key,
    //         playbackId: rowData?.playbackId,
    //     },
    //     undefined,
    //     2
    // );




    useEffect(() => {
        if (videoEl == null) return;

        if (streamIsActive && rowData?.playback_id) {

            const player = videojs(videoEl.current, {
                autoplay: true,
                controls: true,
                sources: [
                    {
                        src: `https://livepeercdn.studio/hls/${rowData?.playback_id}/index.m3u8`,
                    },
                ],
            });

            // player?.hlsQualitySelector();

            player.on("error", () => {
                alert('error');
                player.src(`https://livepeercdn.studio/hls/${rowData?.playback_id}/index.m3u8`);
            });
        }
    }, [videoStarted]);

    return (
        <div className='h-sc' >
            {/* <div className="login-navbar">
                <nav className=" center-b  flex-col tablet:h-20 tablet:flex-row  text-white  py-2 tablet:py-0 px-4  ">
                    <div className="">
                        <NavLink to="">
                            <img src="/images/navbar/maven.png" alt="" srcset="" /></NavLink>
                    </div>
                    <ul className="center gap-2 sm:gap-4 pt-3 tablet:pt-0">
                        <li><a className="px-1 sm:px-3 py-1 center  rounded-3xl border border-gray-600 group text-black font-semibold bg-[#fff]" href="">Go Live <BsFillCameraVideoFill size={25} className="text-[#54D12F] group-hover:text-[#eab308] pl-2" /></a></li>

                        <li><a href="">Create Event</a></li>
                        <li> <div className="w-8 cursor-pointer outline-4  outline-[#3E4046] border border-white h-8 bg-[#9B9B9B] rounded-full  text-sm center">M</div></li>
                    </ul>
                </nav>
            </div> */}
            <div className=" flex flex-col tablet:flex-row justify-around items-center  text-white py-[4%]  ">

                <div className="w-[320px] md:w-[750px]  ">
                    {rowData?.id ?
                        <>
                            < div className="relative go-live bg-black h-[580px] w-full mx-auto overflow-hidden rounded-xl ">
                        <h1 className='absolute top-0 min-w-[250px] left-0 py-2 font-bold text-xl z-[10000] px-2  text-white'>
                            {rowData?.name}
                        </h1>
                        <div data-vjs-player className='w-full h-full ![&>video]:h-[580px] ![&>:not(video)]:hidden'>
                            <video
                                id="video"
                                ref={videoEl}
                                className=" !w-full object-cover video-js vjs-theme-city !h-[580px]"
                                controls
                            // playsInline

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
                        </>

                        : <form action="">
                            <h3 className='tablet:text-5xl text-2xl font-semibold'>Enter API Key</h3>
                            <div className="input-box my-4">
                                <input placeholder='Paste API Key here' type="text" name="apiKey" value={form.apiKey} onChange={(e) => setApiKey(e.target.value)} className='blur-bg w-full  border-b-2 border-0 text-white' />
                            </div>
                            <div className="flex relative col-span-2 tablet:col-span-1 mb-5  flex-col">
                <label className="text-sm tablet:text-md" for="eventcategory">User</label>

                <select name="user_id" value={form.user_id} onChange={handleChange} id="cars" className="text-xs bg-gray-700 focus:border-none border-0" >
                  <option value="">Select User</option>
                  <option value="90">KENDRICK LAMAR</option>
                  <option value="91">LIL NAS X</option>
                  <option value="92">DRAKE</option>
                  <option value="93">DOJA CAT</option>
                  <option value="94">EMIWAY</option>
                </select>

              </div>
                            <div className="">
                                <button type="submit" className='bg-white rounded-lg text-black py-2 font-semibold w-full' onClick={submitHandler}>Get Streaming Key</button>
                            </div>
                        </form>}
                </div>

                <div className="w-[320px] tablet:w-[340px] md:w-[450px] max-w-[650px] blur-bg mt-10 tablet:mt-0 rounded-2xl tablet:p-10 p-5">
                    <form action="">
                        {/* {console.log(rowData)} */}
                        <div className="grid grid-cols-2 ">
                            <div className="">
                                <label htmlFor="">Name:</label>
                                <p>{rowData?.name}</p>
                            </div>
                            <div className="">
                                <label htmlFor="name">Name:</label>
                                <p>{rowData?.name}</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <label htmlFor="rtmp">RTMP url
                                <input required id='rtmp' value={'rtmp://rtmp.livepeer.com/live'} type="text" className='input-b' disabled />
                            </label>
                        </div>
                        <div className="">
                            <label htmlFor="streaming">Streaming Key
                                <input required id='streaming' value={rowData?.stream_key} type="text" className='input-b ' disabled />
                            </label>
                        </div>
                        <div className="my-4">
                            <label htmlFor="live">Stream Id
                                <input required id='live' value={rowData?.stream_id} type="text" className='input-b ' />
                            </label>
                        </div>
                        <div className="my-4">
                            <label htmlFor="live">Playback Id
                                <input required id='live' value={rowData?.playback_id} type="text" className='input-b ' />
                            </label>
                        </div>
                        <div className="my-4">
                            <label htmlFor="live">Live url
                                <input required id='live' value={'rtmp://rtmp.livepeer.com/live'} type="text" className='input-b ' />
                            </label>
                        </div>
                        <div className="">
                            <label htmlFor="currently">Currently Connected
                                <input required id='currently' type="text" className='input-b ' />
                            </label>
                        </div>
                        <div className="grid grid-cols-2 mt-4 gap-6">
                            <button type='submit' className='green'>Start Live</button>
                            <button type='submit' className='red'>Stop Live</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default GoLive