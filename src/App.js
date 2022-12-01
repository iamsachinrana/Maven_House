
import React from 'react'
import { HIDE_TOAST } from "@redux/action/actionConstants";
// import {showToast} from "@redux/action"
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import NotFound from "@pages/NotFound/NotFound";
import Home from "@pages/Home/Home";
// import ProtectedRoutes from "./ProtectedRoutes";
// import UserRoutes from './UserRoutes';
import './index.css';
import { useToast } from "@chakra-ui/react";
import LoginWallet from './pages/Login/LoginWallet';
import Ticket from './pages/Tickets/Ticket';
import Checkout from './pages/checkout/Checkout';
import CreateEvent from './pages/createevent/CreateEvent';
import CreateEvent1 from './pages/createevent/CreateEvent1';
import CreateEvent2 from './pages/createevent/CreateEvent2';
import CreateEvent3 from './pages/createevent/CreateEvent3';
import CreateEvent4 from './pages/createevent/CreateEvent4';
import Faq from './pages/faq/Faq';
import MagicLogin from '@pages/Login/MagicLogin';
import DashboardRoutes from '@pages/DashboardRoutes';
import About from '@pages/about/About';
// import Footer from '@components/layout/Footer';
import Navbar from '@components/layout/Navbar';
import { useEffect } from 'react';
import GoLive from './pages/go-live/GoLive';
import Kendrick_Lamar from './pages/creaters-name/Kendrick_Lamar';
import Drake from './pages/creaters-name/Drake';
import Doja_Cat from './pages/creaters-name/Doja_Cat';
import Emiway from './pages/creaters-name/Emiway';
import Lil_Nas_X from './pages/creaters-name/Lil_Nas_X';
import ConnectWalletPopup from './components/popup/ConnectWalletPopup';
import { closeWalletModal } from './redux/action';



function CustomSnackBar({ type, message }) {


  const toast = useToast();
  return toast({
    title: message,
    // description: "We've created your account for you.",
    status: type,
    duration: 6000,
    isClosable: true,
  })
}

export const AuthContext = React.createContext({});

const Routes = ({ }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { type, message, isVisible } = useSelector(
    (state) => state.toastReducer
  );
  const { isWalletOpen } = useSelector((state) => state.walletModalReducer);

  const handleClose = () => {
    dispatch({
      type: HIDE_TOAST,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {isVisible && <CustomSnackBar type={type} message={message} />}
      {location.pathname !== '/go-live' ? <Navbar /> : ''}


      <Switch>
        <Route path={'/home'} exact component={Home} />
        <Route path={'/'} exact component={LoginWallet} />
        <Route path={'/magic-login'} exact component={MagicLogin} />
        <Route path={'/ticket'} exact component={Ticket} />
        <Route path={'/checkout'} exact component={Checkout} />
        <Route path={'/create-event'} exact component={CreateEvent} />
        <Route path={'/create-event1'} exact component={CreateEvent1} />
        <Route path={'/create-event2'} exact component={CreateEvent2} />
        <Route path={'/create-event3'} exact component={CreateEvent3} />
        <Route path={'/create-event4'} exact component={CreateEvent4} />
        <Route path={'/faq'} exact component={Faq} />
        <Route path={'/go-live'} exact component={GoLive} />
        <Route path={'/kendrick'} exact component={Kendrick_Lamar} />
        <Route path={'/lil-nas-x'} exact component={Lil_Nas_X} />
        <Route path={'/drake'} exact component={Drake} />
        <Route path={'/doja-cat'} exact component={Doja_Cat} />
        <Route path={'/emiway'} exact component={Emiway} />





        {/* <Route path={"/user"} render={(props) => <UserRoutes {...props}/>}
    {isVisible&&<CustomSnackBar type={type} message={message}/>}
    <Navbar/>
      <Switch>     
        <Route path={'/home'} exact component={Home} />        
        <Route path={'/'} exact component={LoginWallet} />        
        <Route path={'/ticket'} exact component={Ticket} />  
        <Route path={'/checkout'} exact component={Checkout} />   
        <Route path={'/create-event'} exact component={CreateEvent} />  
        <Route path={'/create-event1'} exact component={CreateEvent1} />  
        <Route path={'/create-event2'} exact component={CreateEvent2} />   
        <Route path={'/create-event3'} exact component={CreateEvent3} />  
        <Route path={'/create-event4'} exact component={CreateEvent4} />   
        <Route path={'/faq'} exact component={Faq} />  
        <Route path={'/about'} exact component={About} />  
        {/* <Route path={'/footer'} exact component={Footer} />   */}
        {/* <Route path={'/terms'} exact component={Terms} /> */}
        <Route path={'/about'} export component={About} />
        {/* <Route path={'/privacy'} exact component={Privacy} /> */}
        {/* <Route path={'/terms'} exact component={Terms} /> */}

        <Route path={"/dashboard"} render={(props) => <DashboardRoutes {...props} />} />
        {/* <Route path={'/footer'} exact component={Footer} />   */}
        {/* <Route path={"/user"} render={(props) => <UserRoutes {...props}/>}
        />
        <ProtectedRoutes path={'/profile'} exact component={Profile} />
        <Route path={'/*'} exact component={NotFound} /> */}
      </Switch>
      {isWalletOpen && (
        <ConnectWalletPopup
          isOpen={isWalletOpen}
          onClose={() => dispatch(closeWalletModal())}
        />
      )}
    </>

  );
}

const App = () => {
  const [user, setUser] = React.useState({})
  return (
    <Router>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes />
      </AuthContext.Provider>
    </Router>
  )

}
export default App;
