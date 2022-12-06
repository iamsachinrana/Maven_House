
import React from 'react'
import { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();
    useEffect(() => {
        const $ = window.$;
        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000,
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

    return (
        <div className=''>

            <header className="px-4 py-16 text-white">
                <div className="owl-carousel owl-theme relative">
                    <div className="item">
                        <div className="slider-wrapper h-">
                            <img src="/images/home/img1.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img2.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img3.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img4.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img5.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img6.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img7.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img5.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img1.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img2.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img3.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img4.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=" pt-4 text-center w-full">
                    <a href="" className="text-center">See More ></a>
                </p>

            </header>
            <header className="px-4 py-16 text-white">
                <div className="owl-carousel owl-theme relative">
                    <div className="item">
                        <div className="slider-wrapper h-">
                            <img src="/images/home/img1.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img2.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img3.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img4.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img5.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img6.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img7.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img5.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img1.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img2.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img3.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2" >
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-wrapper">
                            <img src="/images/home/img4.png" alt="" />
                            <div className="slider-wrapper-content flex flex-col gap-2">
                                <h2 className="text-3xl">Honey Singh</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum
                                </p>
                                <p>Jan 18 2022</p>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
        </div>
    )
}


export default HomePage