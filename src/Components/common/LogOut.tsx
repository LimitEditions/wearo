import React, { useContext } from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom';
import { BlockStyle } from '../../types/interfaces/IStyles';
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
        <Button
        showButton={show}
        onClick={logOut}
        styles={logOutStyle}>Выйти</Button>
    );
};

const logOutStyle: BlockStyle = {

};
