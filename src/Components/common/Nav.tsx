import React from 'react';
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles';
import { Link } from 'react-router-dom';


export const Nav = () => {
  return (
    <nav className={getStyles(navStyle)}>        
      <Link to="/scan">Сканирование</Link>
      <Link to="/posts">События</Link>
      <Link to="/wardrobe">Мой гардероб</Link>
    </nav>
  )
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
