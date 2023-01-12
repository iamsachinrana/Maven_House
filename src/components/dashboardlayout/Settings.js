import React, { useEffect, useState } from 'react'
import DashboardNavbar from './DashboardNavbar';
import * as PushAPI from '@pushprotocol/restapi';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';


const Settings = () => {
  const { walletId } = useSelector((state) => state.walletReducer);

  const handleChange = async (e) => {
    const checked = e.target.checked;

    const _provider = new window.ethers.providers.Web3Provider(window.ethereum);
    const _signer = _provider.getSigner(walletId);

    if (checked) {
      //fetch the subscription status
      const subscriptions = await PushAPI.user.getSubscriptions({
        user: `eip155:80001:${walletId}`, // user address in CAIP
        env: 'staging'
      });
      console.log(subscriptions)
      if (!subscriptions || subscriptions.length === 0) {
        await PushAPI.channels.subscribe({
          signer: _signer,
          channelAddress: `eip155:80001:0x163BBe9C2d230c99B06fB0F15eF4B4931a5e3734`, // channel address in CAIP
          userAddress: `eip155:80001:${walletId}`, // user address in CAIP
          onSuccess: () => {
            console.log('opt in success');
          },
          onError: (e) => {
            console.error('opt in error', e);
          },
          env: 'staging'
        })
      }
    }
    else {
      //Unsubscribe
      const subscriptions = await PushAPI.user.getSubscriptions({
        user: `eip155:80001:${walletId}`, // user address in CAIP
        env: 'staging'
      });
      console.log(subscriptions);

    }
  }


  useEffect(() => {
    console.log('walletId', walletId);
  }, []);
  return (
    <div className='text-white'>
      <DashboardNavbar />
      <div className="border-b pb-3">
        <h1 className='lg:text-4xl tablet:text-2xl text-left'>Settings</h1>
      </div>
      <form action="" className='lg:w-[95%] md:w-[95%] w-[90%] mx-auto'>

        <div className="lg:text-xl mt-2 lg:mt-3 form-check form-switch">
          <input onChange={(e) => handleChange(e)} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Enable Notifications</label>
        </div>
      </form>



    </div>
  )
}

export default Settings