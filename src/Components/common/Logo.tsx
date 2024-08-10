import React, { useContext } from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { showEl } from '../../utils/showEl';
import { Button } from './Button';
import { Arrow } from './Arrow';
import { Photo } from './Photo';
import AuthContext from '../../context/AuthProvider';


export const Logo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {isAuth} = useContext(AuthContext);
    
    // const showBackButton = /^\/wardrobe\/.*/.test(location.pathname) || /^\/options\/.*/.test(location.pathname);
    const showBackButton = !showEl(['/wardrobe', '/promotions', '/posts', '/auth', '/'] ,location.pathname);
    const showProfileButton = showEl(['/wardrobe'] ,location.pathname);

    const handleBackClick = () => {
        // создаем из урла массив из элементов между '/'
        let urlData = location.pathname.split('/');
        // проверяем не id ли последний элемент
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(urlData[urlData.length - 1]);
        // прыгаем через один, если последним идет id
        if(urlData.length > 3) {
            navigate(isUuid ? urlData.slice(0, -2).join('/'): urlData.slice(0, -1).join('/'));
        } else {
            navigate(-1);
        };
    };

    const handleProfileClick = () => {
        navigate(`wardrobe/profile`);
    };

    return (
        <div className={getStyles(contStyle, ['screen__logo'])}>
            <div className={getStyles(logoStyle)}>
                <Button 
                    showButton={showProfileButton}
                    onClick={handleProfileClick}
                    styles={btnProfile}
                >
                    <Photo id={isAuth.mainAvatarGuid || null} styles='h-8 w-8 rounded-2xl transform translate-y-1/5' alt='фото профиля'/>
                </Button>
                <Button 
                    showButton={showBackButton}
                    onClick={handleBackClick}
                    styles={btnsStyle}>
                    <Arrow direct='left' />
                </Button>
                <h1 className='font-bold uppercase text-2xl'>wear</h1>
            </div>
        </div>
    );
};

const contStyle: BlockStyle = {
    blockSize: "w-full",
}; 

const logoStyle: BlockStyle = {
    blockSize: "h-[50px] ralative grid place-items-center",
    background:'bg-white-fon shadow-md',
    text: "text-center tracking-wider text-lg font-semibold",
};

const btnsStyle: BlockStyle = {
    blockSize: "absolute",
    spacing: "left-3",
};

const btnProfile: BlockStyle = {
    blockSize: "absolute",
    spacing: "right-3",
};
