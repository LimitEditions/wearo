import React from 'react'
import { Button } from '../common/Button'
import { Link } from 'react-router-dom'
import { BlockStyle } from '../../types/interfaces/IStyles'
import getStyles from '../../utils/getStyles'

export const AuthButtons = () => {
  return (
    <div className={`${getStyles(divStyle)}`}>
        <Button link={<Link to="/login">Войти</Link>}/>
        <Button link={<Link to="/registration">Зарегистрироваться</Link>}/>
    </div>
  )
}

const divStyle: BlockStyle = {
    blockSize: 'w-full',
    container: 'flex flex-col',
    spacing: 'gap-3 mt-5'
}