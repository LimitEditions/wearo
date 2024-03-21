import React from 'react';
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles';
import { Link } from 'react-router-dom';


export const Nav = () => {
  return (
    <nav className={`${getStyles(navStyle)}`}>
        <h3 className={`${getStyles(logoStyle)}`}>Wear-client</h3>
        <div className={`${getStyles(linksStyle)}`}>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
        </div>
    </nav>
  )
}

const navStyle: BlockStyle = {
  container: "flex justify-between items-center",
  blockSize: "h-[50px]",
  spacing: "px-5",
  background: "bg-gray-700 shadow-md",
  text: "text-white",
}; 

const logoStyle: BlockStyle = {
  text: "tracking-wider text-lg",
};

const linksStyle: BlockStyle = {
  container: "flex justify-between",
  spacing: "space-x-4",
};
