import React from 'react';
import {useLocation} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
const PrivateRoute = ({children,...rest}) => {
   const{user} = useAuth();
   const location = useLocation();
  if(user.email){
    return children;
  }
};

export default PrivateRoute;