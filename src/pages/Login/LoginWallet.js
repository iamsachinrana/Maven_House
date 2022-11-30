// import Navbar from '@components/layout/Navbar';
import React from 'react'
import { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { singerImage } from '@utils/constants'
import Cookies from 'js-cookie';

const LoginWallet = () => {
    const history = useHistory();
    let user = Cookies.get('user');

    useEffect(() => {
        const $ = window.$;
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
                    items: 4,
                },
                1240: {
                    items: 5,
                }

            }
        });
    })

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

    return (
        <>
            <div className='relative'>
                <header className="px-4 text-white login-header">
                    <div className="owl-carousel owl-theme relative" >
                        {singerImage.map((item, index) => (
                            <div className="item" onClick={() => goNextPage(index)}>
                                <div className="slider-wrapper h-">
                                    <img src={item?.imgpath} alt="" />
                                    <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                        <h2 className={`text-3xl ${index === 0 ? `font-think` : index === 1 ? `font-hey` : index === 2 ? `font-viner` : index === 3 ? 'font-gloucester' : `font-hey`}`}>{item.name}</h2>
                                        <p>{item.paragraph}
                                        </p>
                                        <p>{item.date}</p>
                                        <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                    </div>

                                </div>
                            </div>
                        ))}
                        {/* <div className="item">
                            <div className="slider-wrapper h-">
                                <img src="/images/login/img1.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img2.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img3.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img4.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img5.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img6.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img7.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img5.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img1.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img2.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img3.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider-wrapper">
                                <img src="/images/login/img4.png" alt="" />
                                <div className="slider-wrapper-content justify-center  flex flex-col gap-2">
                                    <h2 className="text-3xl">Honey Singh</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                    </p>
                                    <p>Jan 18 2022</p>
                                    <button src="" type="submit" className='bg-black px-2 py-1 rounded-xl hover:bg-[#06060691]  text-xs' >Get Tickets</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <p className="mt-5  ">
                        <a href="" className="flex items-center justify-center w-28 mx-auto">See More</a>
                    </p>
                </header>

            </div>
        </>
    )
}

export default LoginWallet