import React, { useContext } from 'react'

import getStyles from '../../utils/getStyles';
import { BlockStyle } from '../../types/interfaces/IStyles';
import { LogOut } from '../common/LogOut';
import AuthContext from '../../context/AuthProvider';
import Item from '../common/ItemGroup/Item';

export const Profile = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <div className={getStyles(profStyle)}>
        <h2 className={getStyles(headStyle)}>Профиль</h2>
        <Item path="/photo">
          <div className={getStyles(nameStyle)}>
            <img className={getStyles(fotoStyle)} src="https://sartur.sgu.ru/wp-content/uploads/2021/09/avatar1-1536x1536.png" alt="foto" />
            {isAuth.username}
          </div>
        </Item>
        <Item path="/favorites">Избранное</Item>
        <Item path="/subscriptions">Подписки</Item>
        <Item path="/scans">Сканирования</Item>
        
        <h2 className={getStyles(headStyle)}>Настройки</h2>
        <Item path="/email">
          <div>Почта:</div>
          <div>{isAuth.userInfo ? isAuth.userInfo.email: 'не подтверждена'}</div>
        </Item>
        <Item path="/phone">
          <div>Телефон:</div>
          <div>{isAuth.userInfo ? isAuth.userInfo.phone: 'не подтвержден'}</div>
        </Item>
        <Item path="/password">Пароль</Item>
        
        <LogOut show={true} />
      </div>
    </>
  );
};

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
