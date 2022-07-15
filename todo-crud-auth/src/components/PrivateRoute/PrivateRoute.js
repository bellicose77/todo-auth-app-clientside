import React from 'react';
import useAuth from '../../hooks/useAuth';
const PrivateRoute = ({children,...rest}) => {
   const{user} = useAuth();
};

export default PrivateRoute;