import React from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { useLocation, useNavigate } from 'react-router-dom';
import { showEl } from '../../utils/showEl';
import { Button } from './Button';
import { Arrow } from './Arrow';


export const Logo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
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
        <div className={getStyles(contStyle)}>
            <div className={getStyles(logoStyle)}>
                <div className={getStyles(btnsStyle)}>
                    <Button 
                        showButton={showProfileButton}
                        onClick={handleProfileClick}
                        styles={btnProfile}
                        />
                    <Button 
                        showButton={showBackButton}
                        onClick={handleBackClick}
                        styles={{}}>
                        <Arrow direct='left' />
                    </Button>
                </div>
                <h1 className='font-bold uppercase text-2xl'>wear</h1>
            </div>
        </div>
    );
};

const contStyle: BlockStyle = {
    blockSize: "fixed w-full top-0 z-10",
}; 

const logoStyle: BlockStyle = {
    blockSize: "h-[50px] ralative grid place-items-center",
    background:'bg-gray-200 shadow-md',
    text: "text-center tracking-wider text-lg text-2xl font-semibold",
};

const btnsStyle: BlockStyle = {
    blockSize: "absolute",
    spacing: "left-3",
};

const btnProfile: BlockStyle = {
    background: "bg-[url('https://sartur.sgu.ru/wp-content/uploads/2021/09/avatar1-1536x1536.png')] bg-no-repeat bg-center bg-contain h-8 w-8",
    transitionsAnimation: "transform translate-y-1/4",
};
