import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar'
import { showToast } from '../../redux/action';
const Checkout = () => {
    const [ammount, setAmmount] = useState(1205.42);
    const [serviceFee, setServiceFee] = useState(210.41);
    const [count, setCount] = useState(1);
    const [totalAmmount, setTotalAmmount] = useState(ammount + serviceFee);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleTicketCountIncrement = () => {
        setCount(count + 1);
        setAmmount(ammount + 1205.42)
        setServiceFee(serviceFee + 210.41);
    }

    const handleTicketCountDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
            setAmmount(ammount - 1205.42);
            setServiceFee(serviceFee - 210.41);
        }
    }

    useEffect(() => {
        setTotalAmmount(ammount + serviceFee);
    }, [count]);

    return (
        <>
            <div>
                <header className="h-screen px-4 ticket-checkout pt-[80px]">
                    <div className="ticket-wrapper max-w-[1024px] mx-auto flex flex-col items-center justify-center">
                        <div className="ticket-counter flex flex-col gap-3  md:flex-row tablet:justify-between mt-3">
                            <div className=" relative backdrop-blur-md bg-[#00000059] left-tecket flex items-center justify-between rounded-xl tablet:w-[500px] tablet:h-[140px] text-white p-5">
                                <button type="submit"
                                    className=" absolute -top-12 bg-gray-700 rounded-lg text-white flex items-baseline px-2 gap-1 py-1 text"><i
                                        className=" fa fa-chevron-left" aria-hidden="true"></i>
                                    <h5 onClick={() => history.goBack()}>Back</h5>
                                </button>
                                <div className=" tablet:flex gap-2">
                                    <div className="tablet:w-[100px] tablet:h-[100px] w-[60px] overflow-hidden rounded-full mb-4 sm:mb-0  border-2 border-white">
                                        <img src="/images/checkout/dane-cook.png" className="object-cover h-full w-full" alt="" />
                                    </div>
                                    <div className="">
                                        <button type="submit"
                                            className="my-2 bg-white rounded-lg text-black flex items-baseline px-2 gap-1 py-1 font-bold">Ticket</button>
                                        <h3 className="font-extrabold text-lg mb-1 text-[#E8952F]">Above It All</h3>
                                        <p className="text-sm">OCTOBER 6TH, 2022 6:30AM IST</p>
                                    </div>
                                </div>
                                <div className=" mt-[100px] tablet:mt-[0px] flex flex-col gap-[20px]">
                                    <h4>₹ {(ammount).toFixed(2)}</h4>
                                    <div className="button flex gap-3">
                                        <button type="submit" className="bg-gray-700 w-5 h-5 rounded-full flex justify-center items-center text-white " onClick={handleTicketCountDecrement}>-</button>
                                        <span>{count}</span>
                                        <button type="submit" className="w-5 h-5 rounded-full flex justify-center items-center bg-white text-black" onClick={handleTicketCountIncrement}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className=" left-tecket  tablet:w-[500px] tablet:h-[140px] p-5 rounded-xl flex flex-col gap-4  text-white backdrop-blur-md bg-[#00000059]">
                                    <div className=" flex flex-col gap-1">
                                        <div className="flex justify-between">
                                            <span>Subtotal</span><span>₹ {(ammount).toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Service Fee</span><span>₹ {(serviceFee).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-lg font-semibold"><span>Total</span>
                                        <span>₹ {(totalAmmount).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="p-5 tablet:w-[500px]">
                                    <p className="text-sm text-white">By purchasing your ticket, you agree to our <span className="font-semibold">Terms</span> of
                                        Use and our <span className="font-semibold">Privacy Policy</span></p>
                                    <button type="submit"
                                        className="mt-2 bg-white rounded-lg text-black px-2 py-1 text-lg w-full font-bold">Pay
                                        Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Checkout