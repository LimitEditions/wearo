import React, { useContext } from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom';
import AuthContext, { defaultContext } from '../../context/AuthProvider';

export const LogOut: React.FC<{show: boolean}> = ({show}) => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext)
    
    const logOut = () => {
        localStorage.clear();
        setAuth(defaultContext);
        navigate('/auth');
    };

return (
    <div className='w-2/3 mx-auto my-5'>
         <Button
        showButton={show}
        onClick={logOut}
        >
            Выйти из аккаунта
        </Button>
    </div>
  );
};
