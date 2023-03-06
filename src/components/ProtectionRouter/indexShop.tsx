import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProtectedRoutes = () => {
  const { Token } = useContext(UserContext);
 


  return Token ? <Outlet /> : <Navigate to='/'/>
};

export {
  ProtectedRoutes
}