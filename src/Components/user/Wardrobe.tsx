import React from 'react'
import { Outlet } from 'react-router-dom'
import { IAuthMeList } from '../../types/interfaces/ApiResponses/IAuthMeList';


export const Wardrobe: React.FC<{ isAuthenticated: IAuthMeList }> = ({ isAuthenticated }) => {
  return (
    <>
      <Outlet context={ isAuthenticated }/> {/* Место для рендера дочерних компонентов */}
    </>
  );
};
