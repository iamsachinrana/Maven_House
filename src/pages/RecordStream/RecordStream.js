import React, { useEffect, useRef, useState } from 'react'
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import AuthenticatePopup from '@components/popup/AuthenticatePopup';
import { getApiReq } from '@utils/ApiHandler';
import { useSelector } from 'react-redux';
import { getReq, getStreamStatus } from '../../utils/ApiHandler';
import videojs from "video.js";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import { Player } from "@livepeer/react";

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const RecordStream = () => {
    const [popup, setPopup] = useState(true);
    const { id } = useParams();
    console.log(id, 'params id');
    const [eventData, setEventData] = useState(null);
    const [liveEvent, setLiveEvent] = useState(null);
    const { walletId } = useSelector((state) => state.walletReducer);
    const [tokenEvent, setTokenEvent] = useState(null);
    const [videoStarted, setVideoStarted] = useState(false);
    const [streamIsActive, setStreamIsActive] = useState(true);
    const [activeStatus, setActiveStatus] = useState();
    const history = useHistory();
    const videoEl = useRef();

    useEffect(() => {
        getApiReq('/user/get-events').then((res) => {
            if (res.status) {
                let data = res?.data?.data;
                data?.map((item, index) => {
                    return (Number(item?.id) === Number(id)) ? setEventData(item?.contract_address) : null

                })

            }
        })
    }, []);

    useEffect(() => {
        getReq(`/user/get-live-playback?user_id=${id}`).then((res) => {
            if (res.status) {
                console.log(res?.data?.data[0], 'live data')
                setLiveEvent(res?.data?.data[0]);
            }
        })
    }, [])



    const onClose = () => {
        setPopup(false);
    }
   
    return (
        <>
            <div className='container' >

                {!walletId && <p style={{ textAlign: 'center' }}>Please Login to Join The Event!!</p>}
                {popup && walletId && <AuthenticatePopup setTokenEvent={setTokenEvent} eventId={id} onClose={onClose} />}
                {(tokenEvent) &&
                    // 'Now You Can Watch The Show'

                    < div className="relative live-show bg-black h-[550px] w-[80%] mx-auto overflow-hidden rounded-xl mt-10">
                        <h1 className='absolute top-0 min-w-[250px] left-0 py-2 font-bold text-xl z-[10000] px-2  text-white'>
                            {liveEvent?.name}
                        </h1>
                        <div data-vjs-player className='w-full h-full ![&>video]:h-[550px] ![&>:not(video)]:hidden'>
                            <Player
                                title={liveEvent.name}
                                playbackId= {liveEvent.playback_id}
                                showPipButton
                                loop
                                autoPlay
                                showTitle={false}
                                muted
                                jwt={tokenEvent}
                            />
                        </div>
                        <div className="bg-white font-semibold rounded-xl flex items-center justify-center absolute right-2 top-2 p-1 pr-2 text-xs">
                            <div
                                className={`animate-pulse ${streamIsActive ? "bg-green-700" : "bg-yellow-600"
                                    } h-2 w-2 mr-2 rounded-full`}
                            ></div>
                            {streamIsActive && activeStatus? "Live" : "Waiting for Video"}
                        </div>
                        <div className="right-side  w-72 absolute bottom-2 right-2">
                            <div className="flex gap-2 relative">
                                <div className=" w-6 rounded-full absolute bottom-0  font-semibold h-6 text-[#05343a] flex items-center justify-center  bg-[#A5EFF8] text-xs" >j</div>
                                <div className="w-64 absolute right-0 bottom-0 backdrop-blur-md text-sm rounded-2xl p-2 bg-[#57506928]"><span className="text-[#A5EFF8] font-semibold">just:</span> Hello everyone,hope everyone's ready for the show!!</div>
                            </div>
                            <div className="relative w-72 py-4 flex items-center">
                                <div className="w-6 h-6 bg-[#A5EFF8] rounded-full z-10 text-sm flex justify-center items-center absolute left-1 font-semibold">M</div>
                                <input className="w-full  focus:border-none border-none backdrop-blur-md  pl-10 bg-[#6e658c1c] focus:ring-0 outline-none rounded-3xl text-white placeholder:text-white" type="text" placeholder="Message" name="" id="" />
                                <div className="cursor-pointer   w-6 bg-[#E8952F] flex items-center justify-center h-6 rounded-full absolute right-1"><i className="fa fa-arrow-right" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </>
    )
}

export default RecordStream;