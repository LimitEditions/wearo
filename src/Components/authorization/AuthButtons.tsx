import React from 'react'
import { Button } from '../common/Button'
import { useNavigate } from 'react-router-dom'
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles'

export const AuthButtons = () => {
  const navigate = useNavigate();
  const navToLogin = () => {
    navigate('/login')
  }
  const navToRegistration = () => {
    navigate('/registration')
  }

  return (
    <div className={`${getStyles(divStyle)}`}>
        <Button showButton={true} text='Войти' onClick={navToLogin}/>
        <Button showButton={true} text='Зарегистрироваться' onClick={navToRegistration}/>
    </div>
  )
}

const divStyle: BlockStyle = {
    blockSize: 'w-full',
    container: 'flex flex-col',
    spacing: 'gap-3 mt-5'
}