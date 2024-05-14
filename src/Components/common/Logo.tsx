import React from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { showEl } from '../../utils/showEl';
import { Button } from './Button';


export const Logo = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const showBackButton = /^\/wardrobe\/.*/.test(location.pathname);
    const showProfileButton = showEl(['/wardrobe'] ,location.pathname);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleProfileClick = () => {
        navigate(`wardrobe/profile`);
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

            <h1>WEAR</h1>
        </div>
    );
};

const logoStyle: BlockStyle = {
  blockSize: "h-[50px] ralative",
  spacing: "py-2",
  text: "text-center tracking-wider text-lg text-2xl font-semibold",
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
