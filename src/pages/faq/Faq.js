import Footer from '@components/layout/Footer';
import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
const Faq = () => {
    useEffect(() => {
        const $ = window.$;
        const accordion = document.getElementsByClassName('container');

        for (let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', function () {
                this.classList.toggle('active')
            })
        }
    })
    return (
        <div>
            <div>
                <header className="  w-[90%] tablet:w-[80%] mx-auto">
                    <div className="">
                        <div className="accordion-body">
                            <div className="accordion">
                                <h1 className='text-4xl tablet:text-[55px] md:text-[72px] border-b mb-6 border-[#5858588a] pb-1 border-solid  w-full '>FAQ</h1>
                                <div className="container">
                                    <div className="label ">Tickets</div>
                                    <div className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repellendus culpa reprehenderit asperiores quia maiores temporibus, reiciendis non minima aliquam blanditiis voluptatum tempora architecto quidem, deserunt optio vel consequatur porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente ad earum consectetur, eaque rerum repellendus, officia doloribus aperiam maxime iusto aspernatur</div>
                                </div>
                                <div className="container">
                                    <div className="label ">Afterparty</div>
                                    <div className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repellendus culpa reprehenderit asperiores quia maiores temporibus, reiciendis non minima aliquam blanditiis voluptatum tempora architecto quidem, deserunt optio vel consequatur porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente ad earum consectetur, eaque rerum repellendus, officia doloribus aperiam maxime iusto aspernatur
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="label ">Technical Issues</div>
                                    <div className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repellendus culpa reprehenderit asperiores quia maiores temporibus, reiciendis non minima aliquam blanditiis voluptatum tempora architecto quidem, deserunt optio vel consequatur porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente ad earum consectetur, eaque rerum repellendus, officia doloribus aperiam maxime iusto aspernatur</div>
                                </div>

                                <div className="container">
                                    <div className="label ">Meet & Greet</div>
                                    <div className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repellendus culpa reprehenderit asperiores quia maiores temporibus, reiciendis non minima aliquam blanditiis voluptatum tempora architecto quidem, deserunt optio vel consequatur porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente ad earum consectetur, eaque rerum repellendus, officia doloribus aperiam maxime iusto aspernatur</div>
                                </div>

                                {/* <div className="container">
                                    <div className="label ">What is PHP?</div>
                                    <div className="content">PHP is a server-side and general-purpose scripting language that is especially suited for web development. PHP originally stood for Personal Home Page. However, now, it stands for Hypertext Preprocessor. It’s a recursive acronym because the first word itself is also an acronym.</div>
                                </div>
                                
                                <div className="container">
                                    <div className="label ">What is Node JS?</div>
                                    <div className="content">Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm</div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                    <Footer />

                </header>
            </div>
        </div>
    )
}

export default Faq