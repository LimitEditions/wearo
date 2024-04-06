import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


export const Wardrobe = () => {
  const info = useAuth();

  return (
    <>
      {info.isLoading && <p>Loading...</p>}
      <Outlet context={ info.isAuthenticated }/> {/* Место для рендера дочерних компонентов */}
    </>
  );
};
