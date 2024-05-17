import React, { useContext, useEffect, useState, memo } from 'react';
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles';
import { Link, useLocation } from 'react-router-dom';
import { navContent } from '../../utils/navContent';
import { INavItem } from '../../types/NavContentType';
import { showEl } from '../../utils/showEl';
import AuthContext from '../../context/AuthProvider';


export const Nav: React.FC = memo(() => {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();
  const [showNav, setShowNav] = useState<boolean>(true);
  const [data, setData] = useState<INavItem[]>([]);
  
 
  useEffect(() => {
    setShowNav(true);
    if (isAuth.type === 'Admin' || isAuth.type === 'SuperAdmin') {
      setData(navContent.Admin);
    } else if (isAuth.type === 'BrandAdmin' || isAuth.type === 'BrandSeller') {
      setData(navContent.BrandAdmin);
    } else {
      setData(navContent.User);
    };

    setShowNav(
      !showEl(
        [
          '/auth',
          '/auth/login',
          '/auth/registration'
        ],
        location.pathname
      )
    );
  }, [isAuth, data, setData, location]);

  return (
    <>
      {showNav && <nav className={getStyles(navStyle)}>     
        {data.map(e => {
          return <Link key={e.path} to={e.path}>{e.name}</Link>
        })}   
      </nav>}

    </>
  );
});

const navStyle: BlockStyle = {
  blockSize: "fixed bottom-0 left-1/2 w-full h-auto",
  container: "flex justify-between",
  spacing: "p-2",
  border: "box-border border-2 border-gray-300 rounded-md",
  transitionsAnimation: "transform -translate-x-1/2",
  background: "bg-gray-200 shadow-md",
  text: "text-sm",
  media: 'sm:w-1/4'
}; 
