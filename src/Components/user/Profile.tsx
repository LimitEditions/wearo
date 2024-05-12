import React, { useContext } from 'react'
import ProfileItem from './ProfileItem';
import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { LogOut } from '../common/LogOut';
import AuthContext from '../../context/AuthProvider';

export const Profile = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <div className={getStyles(profStyle)}>
        <h2 className={getStyles(headStyle)}>Профиль</h2>
        <ProfileItem path="/photo">
          <div className={getStyles(nameStyle)}>
            <img className={getStyles(fotoStyle)} src="https://sartur.sgu.ru/wp-content/uploads/2021/09/avatar1-1536x1536.png" alt="foto" />
            {isAuth.username}
          </div>
        </ProfileItem>
        <ProfileItem path="/favorites">Избранное</ProfileItem>
        <ProfileItem path="/subscriptions">Подписки</ProfileItem>
        <ProfileItem path="/scans">Сканирования</ProfileItem>
        
        <h2 className={getStyles(headStyle)}>Настройки</h2>
        <ProfileItem path="/settings/email">
          <div>Почта:</div>
          <div>{isAuth.userInfo ? isAuth.userInfo.email: 'не подтверждена'}</div>
        </ProfileItem>
        <ProfileItem path="/settings/phone">
          <div>Телефон:</div>
          <div>{isAuth.userInfo ? isAuth.userInfo.phone: 'не подтвержден'}</div>
        </ProfileItem>
        <ProfileItem path="/settings/password">Пароль</ProfileItem>
        
        <LogOut show={true} />
      </div>
    </>
    
  )
}

const profStyle: BlockStyle = {
  blockSize: "w-full",
  spacing: "p-4",
  media: 'sm:w-1/4'
};

const nameStyle: BlockStyle = {
  blockSize: "flex items-center",
};

const fotoStyle: BlockStyle = {
  blockSize: "w-10 h-10 rounded-full ",
  spacing: "mr-3",
};

const headStyle: BlockStyle = {
  text: "text-xl font-bold",
  spacing: "my-4",
};
