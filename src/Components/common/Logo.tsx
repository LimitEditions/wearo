import React, { useContext } from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { showBtn } from '../../utils/showBtn';
import { Button } from './Button';
// import AuthContext from '../../context/AuthProvider';
// import { LogOut } from './LogOut';
// import { UserType } from '../../api/data-contracts';


export const Logo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { isAuthenticated } = useContext(AuthContext);

  const showBackButton = /^\/wardrobe\/.*/.test(location.pathname);
  const showProfileButton = showBtn(['/wardrobe'] ,location.pathname);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleProfileClick = () => {
    navigate(`${location.pathname}/profile`);
  };

  return (
    <div className={getStyles(logoStyle)}>
      <Button 
        showButton={showProfileButton}
        onClick={handleProfileClick}
        styles={btnProfile}
        text=''
      />
      <Button 
        showButton={showBackButton}
        onClick={handleBackClick}
        styles={btnBack}
        text='<'
      />

      {/* <LogOut show={isAuthenticated.type !== UserType.User}/> */}

      <h1>WEAR</h1>
    </div>
  );
};

const logoStyle: BlockStyle = {
    blockSize: "h-[50px] ralative",
    spacing: "py-2",
    background: "bg-gray-300 shadow-md",
    text: "text-center tracking-wider text-lg",
};

const btnProfile: BlockStyle = {
  blockSize: "absolute",
  spacing: "left-1",
  background: "bg-[url('https://sartur.sgu.ru/wp-content/uploads/2021/09/avatar1-1536x1536.png')] bg-no-repeat bg-center bg-contain h-10 w-10"
};

const btnBack: BlockStyle = {
  blockSize: "absolute",
  spacing: "left-1",
};
