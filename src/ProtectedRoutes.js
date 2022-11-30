import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserLoggedIn } from '@utils/basicReq'

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Component]);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isUserLoggedIn()) {
          return (
            <Component {...props} />
          );
        }
        return (
          <Redirect
            {...props}
            lastPath={props.location}
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  )
};

export default ProtectedRoutes