// import Navbar from '@components/layout/Navbar';
import React from 'react'
import { useEffect } from 'react'
import { NavLink, useHistory, useLocation, useParams } from 'react-router-dom';
import { singerImage } from '@utils/constants'
import Cookies from 'js-cookie';
import GoLive from '../go-live/GoLive';
import { useState } from 'react';

const LoginWallet = () => {
    const [popup,setPopup]=useState(false);
    const history = useHistory();
    const { id } = useParams();
    const {pathname}=useLocation();
    let user = Cookies.get('user-data');
    // useEffect(()=>{
    //    if(pathname==='/creator' || pathname==='/go-live'){
    //     setPopup(true)
    //    }

    // },[pathname])

    useEffect(() => {
        const $ = window.$;
        try {
            $('.owl-carousel').owlCarousel({
                // loop: true,
                // autoplay: true,
                // autoplayTimeout: 5000,
                margin: 10,
                responsiveClass: true,
                dots: false,
                navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 2,
                    },
                    992: {
                        items: 3
                    },
                    1000: {
                        items: 3,
                    },
                    1240: {
                        items: 5,
                    }

                }
            });
        } catch (e) {
            console.log('Rendering error', e);
        }
    }, []);

    const goNextPage = (index) => {
        if (index == 0) {
            history.push('/kendrick')
        } if (index == 1) {
            history.push('/lil-nas-x')
        } if (index == 2) {
            history.push('/drake')
        } if (index == 3) {
            history.push('/doja-cat')
        } if (index == 4) {
            history.push('/emiway')
        }
    }
    useEffect(() => {
        Cookies.remove('user-type');
    }, [])
    return (
        <>
            <div className='mt-6'>
                <header className="px-4 text-white login-header">
                    <div className="owl-carousel owl-theme relative" >
                        {singerImage.map((item, index) => (
                            <div className="item" onClick={() => window.open(`/artist-detail/${item.id}`, '_blank')}>
                                <div className="slider-wrapper ">
                                    <img src={item?.imgpath} alt="" />
                                    <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                        <h2 className={`artfont leading-10 ${index === 0 ? `font-think` : index === 1 ? `font-hey` : index === 2 ? `font-viner` : index === 3 ? 'font-gloucester' : `font-hey`}`}>{item.name}</h2>
                                        <p className=' min-h-[194px] text-white'>{item.paragraph}
                                        </p>
                                        <p>{item.date}</p>
                                        <button type="submit" className='bg-black px-2 min-w-[140px] flex-shrink-0 w-fit py-2 rounded-xl hover:bg-[#06060691]  text-[16px]' >Get Tickets</button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8  ">
                        <NavLink to="#" className="flex items-center justify-center w-28 mx-auto">See More</NavLink>
                    </p>
                </header>

            </div>

            {/* {popup&&<GoLive setPopup={popup}/>} */}
        </>
    )
}

export default LoginWallet