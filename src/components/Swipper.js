import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import {
  Pagination,
  Navigation,

} from "swiper";
import { useState } from "react";

const Swipper = () => {
  const [slide, setSlide] = useState(0);
  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <div className="round-item">
          <img style={{ listStyle: "none" }} alt={`Slide ${i}`} />
        </div>
      </SwiperSlide>
    );
  }
  return (
    <div className=" tablet:py-10 py-16  lg:my-28 ">
      <div className="lg:pl-[150px] lg:ml-auto mt-5 ">
       
        <div className="flex lg:flex-row flex-col gap-6">
          <div className="w-full lg:w-[35%] ">
          <div className=" mx-auto  mt-[70px] px-4 tablet:px-10 lg:px-0">
            <h2 className="text-themecyan-darker mb-2">
              Know more <br /> about notary
            </h2>
            <p className="mb-8 max-w-[330px]">
              The NotarizeHQ blog contains information about Notization and
              other legal stuff.
            </p>
            <button className="border border-themecyan-darker text-themecyan-darker text-base py-[19px] px-9 rounded-2xl">
              Vsit Our Blog
            </button>
          </div>
          </div>
         
          <div className=" w-full lg:w-[65%] ">
             <div className="flex justify-end mr-6  lg:mr-[100px] gap-4 mb-8 tablet:mb-4">
          <div className="review-swiper-button-prev cursor-pointer border-2 text-grey-50 p-4 rounded-[35px] hover:border-themecyan-darker hover:text-themecyan-darker">
            <MdArrowBackIosNew className="text-3xl" />
          </div>
          <div className="review-swiper-button-next cursor-pointer text-grey-50 border-2 p-4 rounded-[35px] hover:border-themecyan-darker hover:text-themecyan-darker">
            <MdArrowForwardIos className="text-3xl"/>
          </div>
             </div>
            <div className="h-full min-h-[450px] overflow-hidden ">
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
  
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
 
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  1700: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                spaceBetween={16}
                loop={true}
                loopFillGroupWithBlank={true}
                grabCursor={false}
                centeredSlides={true}
                navigation={{
                  nextEl: ".review-swiper-button-next",
                  prevEl: ".review-swiper-button-prev",
                }}
                modules={[Pagination, Navigation]}
                className="overflow-visible lg:pl-[100px] tablet:pl-[190px]"
                onSlideChange={(swiper) => {
                  setSlide(swiper.activeIndex);
                }}
              >
                <SwiperSlide>
                  <div  className="p-6 bg-white rounded-[60px] max-w-[340px]">
                    <img
                    src="/images/swipper/img-1.png"
                    className="mb-[19px]"
                    alt=""
                  />
                  <p className="caption text-themecyan-darker mb-[9px]">
                    17.08.2022
                  </p>
                  <h6 className="mb-4">
                    How to Find a Notary when Traveling Abroad
                  </h6>
                  </div>
                  
                </SwiperSlide>
                <SwiperSlide>
                  <div  className="p-6 bg-white rounded-[60px] max-w-[340px]">
                    <img
                    src="/images/swipper/img-1.png"
                    className="mb-[19px]"
                    alt=""
                  />
                  <p className="caption text-themecyan-darker mb-[9px]">
                    17.08.2022
                  </p>
                  <h6 className="mb-4">
                    How to Find a Notary when Traveling Abroad
                  </h6>
                  </div>
                  
                </SwiperSlide>
                <SwiperSlide>
                  <div  className="p-6 bg-white rounded-[60px] max-w-[340px]">
                    <img
                    src="/images/swipper/img-1.png"
                    className="mb-[19px]"
                    alt=""
                  />
                  <p className="caption text-themecyan-darker mb-[9px]">
                    17.08.2022
                  </p>
                  <h6 className="mb-4">
                    How to Find a Notary when Traveling Abroad
                  </h6>
                  </div>
                  
                </SwiperSlide>
                <SwiperSlide>
                  <div  className="p-6 bg-white rounded-[60px] max-w-[340px]">
                    <img
                    src="/images/swipper/img-1.png"
                    className="mb-[19px]"
                    alt=""
                  />
                  <p className="caption text-themecyan-darker mb-[9px]">
                    17.08.2022
                  </p>
                  <h6 className="mb-4">
                    How to Find a Notary when Traveling Abroad
                  </h6>
                  </div>
                  
                </SwiperSlide>
               
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swipper;
