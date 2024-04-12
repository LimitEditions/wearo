import React from 'react'
import { Button } from '../common/Button'
import { useNavigate } from 'react-router-dom'
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles'

export const AuthButtons = () => {
  const navigate = useNavigate();

  return (
    <div className={`${getStyles(divStyle)}`}>
        <Button showButton={true} onClick={() => navigate('/login')}>Войти</Button>
        <Button showButton={true} onClick={() => navigate('/registration')}>Зарегистрироваться</Button>
    </div>
  );
};

const divStyle: BlockStyle = {
    blockSize: 'w-full',
    container: 'flex flex-col',
    spacing: 'gap-3 mt-5'
};
