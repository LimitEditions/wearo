import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


export const Wardrobe: React.FC = () => {
  const info = useAuth();

  return (
    <>
      <Outlet context={ info }/> {/* Место для рендера дочерних компонентов */}
    </>
  );
};
