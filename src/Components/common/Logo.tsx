import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
        <div className='w-full shadow-lg bg-white-fon'>
            <div className='h-14 ralative grid place-items-center'>
                <Button 
                    showButton={showProfileButton}
                    onClick={handleProfileClick}
                    styles='absolute right-3'
                >
                    <Photo id={isAuth.mainAvatarGuid ?? null} styles='h-8 w-8 rounded-2xl transform translate-y-1/5' alt='фото профиля'/>
                </Button>
                <Button 
                    showButton={showBackButton}
                    onClick={handleBackClick}
                    styles='absolute left-3'>
                    <Arrow direct='left' />
                </Button>
                <Link to='https://wearo.online/'><img src="/images/wearo-logo.svg" alt="wearo" className='w-20 h-10'/></Link>
            </div>
        </div>
    );
};
