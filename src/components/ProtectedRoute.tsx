import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const userToken = localStorage.getItem('userToken');
  return (
    <Route
      {...rest}
      render={props => {
        return userToken ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};
