import React, { useEffect, useState } from 'react';
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles';
import { Link } from 'react-router-dom';
import { UserType } from '../../api/data-contracts';
import { navContent } from '../../utils/navContent';
import { INavItem } from '../../types/NavContentType';


export const Nav: React.FC<{type: UserType | undefined}> = ({ type }) => {
  const [data, setData] = useState<INavItem[]>([]);
 
  useEffect(() => {
    if (type === 'Admin' || type === 'SuperAdmin') {
      setData(navContent.Admin);
    } else if (type === 'BrandAdmin' || type === 'BrandSeller') {
      setData(navContent.BrandAdmin);
    } else {
      setData(navContent.User);
    };
  }, [type, data, setData]);

  return (
    <nav className={getStyles(navStyle)}>     
      {data.map(e => {
        return <Link key={e.path} to={e.path}>{e.name}</Link>
      })}   
    </nav>
  );
};

const navStyle: BlockStyle = {
  blockSize: "w-1/5 fixed bottom-5 left-1/2",
  container: "flex justify-between",
  spacing: "p-2",
  border: "box-border border-2 border-gray-300 rounded-md",
  transitionsAnimation: "transform -translate-x-1/2",
  background: "bg-gray-200 shadow-md",
  text: "text-sm"
}; 
