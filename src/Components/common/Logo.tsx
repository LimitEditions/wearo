import React, { useState } from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { showEl } from '../../utils/showEl';
import { Button } from './Button';
import { SearchInput } from './SearchInput';


export const Logo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState<boolean>(false)

  const showBackButton = /^\/wardrobe\/.*/.test(location.pathname);
  const showProfileButton = showEl(['/wardrobe'] ,location.pathname);
  const showSearchButton = showEl(['/posts'] ,location.pathname);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleProfileClick = () => {
    navigate(`${location.pathname}/profile`);
  };

  const handleSearchClick = () => {
    setShowInput(prevState => !prevState);
  };
 
  return (
    <div className={getStyles(logoStyle)}>
      <Button 
        showButton={showProfileButton}
        onClick={handleProfileClick}
        styles={btnProfile}
      />
      <Button 
        showButton={showBackButton}
        onClick={handleBackClick}
        styles={btnBack}>
          {'<'}
      </Button>

      <Button 
        showButton={showSearchButton && !showInput}
        onClick={handleSearchClick}
        styles={btnSearch}>
      </Button>

      <SearchInput show={showInput} setShow={handleSearchClick}/>

      {!showInput && <h1>WEAR</h1>}
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

const btnSearch: BlockStyle = {
  blockSize: "absolute opacity-40",
  spacing: "right-2",
  background: "bg-[url('https://www.pngall.com/wp-content/uploads/15/Search-Bar-PNG.png')] bg-no-repeat bg-center bg-contain h-10 w-10"
};
