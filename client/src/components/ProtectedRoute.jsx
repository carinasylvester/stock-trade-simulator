import React, { useState } from 'react';
//import { Route, Redirect } from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ comp: Component, ...rest }) => {
  const [user] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <Route {...rest} render={({ props, location }) => {
      return user?.result
        ? <Component {...props} {...rest} />
        : <Navigate to={{
          pathname: '/auth',
          state: { from: location }
        }}
        />
    }} />
  )
}


export default ProtectedRoute;