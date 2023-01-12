import Footer from '@components/layout/Footer'
import React from 'react'
import Navbar from '../../components/layout/Navbar'

const About = () => {
    return (
        <div className="custom-view-height flex flex-col">
            <div className='text-white w-[90%] tablet:w-[80%] mx-auto flex-1'>
                <div className=" mt-5">
                <h1 className='text-4xl tablet:text-[55px] md:text-[72px] border-b mb-6 border-[#5858588a] pb-1 border-solid  w-full '>About</h1>
                </div>
                <div className=" py-8  ">
                    <p className='text-xl text-center tablet:text-left tablet:text-3xl'>Maven House is redefining virtual experiences by providing a platform
                        for artists and creators to create, manage, and host live-stream events
                        where they can connect with their fans globally. It gives artists complete
                        control over their performance and monetization while also removing
                        barriers for the audience. Platform able to handle traffic for an event of
                        any size, from anywhere in the world.</p>
                    <div className=" mt-5 text-center tablet:text-left ">
                        <p className='text-body1 tablet:text-2xl'>If there is any way we can be of help, please reach out via
                            contact@mavenhouse.com</p>

                    </div >
                </div>
            </div>
                {/* <Footer /> */}
        </div>
    )
}

export default About