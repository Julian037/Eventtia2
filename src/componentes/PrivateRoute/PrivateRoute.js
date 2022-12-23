import React from 'react';
import { Navigate, Route } from 'react-router-dom';
 
 const PrivateRoute = ({ component: Component }) => {
    const isLogin =  localStorage.getItem('isLogin');

   return isLogin ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute