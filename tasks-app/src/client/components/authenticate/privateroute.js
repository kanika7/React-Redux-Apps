import React from 'react';
import auth from './auth';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
    auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)