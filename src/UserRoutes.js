import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes';
import Profile from '@pages/Creator-profile-&-tickets/Creator_profile_tickets'
import NotFound from '@pages/NotFound/NotFound'
const UserRoutes = () => {
  return (
    <Switch>
      <ProtectedRoutes path={'/user'} exact component={Profile} />
      <Route path={'/*'} exact component={NotFound} />
    </Switch>
  )
}

export default UserRoutes
