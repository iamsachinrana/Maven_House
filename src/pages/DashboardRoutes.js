import Account from '@components/dashboardlayout/Account';
import Mytickets from '@components/dashboardlayout/Mytickets';
import Profile from '@components/dashboardlayout/Profile';
import Sidebar from '@components/dashboardlayout/Sidebar';
import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import Navbar from '../components/layout/Navbar';



const DashboardRoutes = () => {
  return (
    <>
    
     
    <div className='flex dashboard w-full relative '>
      <div className=" w-[280px] xxl:w-[350px] hidden tablet:inline-block h-full  ">
        <Sidebar />
      </div>
      <div className='flex-1 pb-8 h-full w-full '>
       
        <div className='px-4  tablet:pr-14  w-full mt-6'>
          <Switch>
            <Route path={'/dashboard/my-tickets'} exact component={Mytickets} />
            <Route path={'/dashboard/profile'} exact component={Profile} />
            <Route path={'/dashboard/account'} exact component={Account} />
           
            {/* <Route path={'/*'} exact component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashboardRoutes
