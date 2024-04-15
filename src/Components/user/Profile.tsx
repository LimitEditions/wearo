import React from "react";
import ProfileItem from "./ProfileItem";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { Button } from "../common/Button";
import { Outlet, useOutletContext } from "react-router-dom";
import { IAuthMeList } from "../../types/interfaces/ApiResponses/IAuthMeList";
import { LogOut } from "../common/LogOut";

export const Profile = () => {
  const isAuthenticated = useOutletContext() as IAuthMeList;

  return (
    <>
      <div className={getStyles(profStyle)}>
        <h2 className={getStyles(headStyle)}>Профиль</h2>
        <ProfileItem path="/photo">
          <div className={getStyles(nameStyle)}>
            <img
              className={getStyles(fotoStyle)}
              src="https://sartur.sgu.ru/wp-content/uploads/2021/09/avatar1-1536x1536.png"
              alt="foto"
            />
            {isAuthenticated.username}
          </div>
        </ProfileItem>
        <ProfileItem path="/favorites">Избранное</ProfileItem>
        <ProfileItem path="/subscriptions">Подписки</ProfileItem>
        <ProfileItem path="/scans">Сканирования</ProfileItem>

        <h2 className={getStyles(headStyle)}>Настройки</h2>
        <ProfileItem path="/settings/email">
          <div>Почта:</div>
          <div>email@mail.ru</div>
        </ProfileItem>
        <ProfileItem path="/settings/phone">
          <div>Телефон:</div>
          <div>+7 (000) 000-00-00</div>
        </ProfileItem>
        <ProfileItem path="/settings/password">Пароль</ProfileItem>

        <LogOut show={true} />

        <Button
          showButton={true}
          onClick={() => {
            /* логика открытия своего бренда */
          }}
          styles={btnBrand}
        >
          Открыть свой бренд
        </Button>
      </div>
      <Outlet />
    </>
  );
};

const profStyle: BlockStyle = {
  blockSize: "w-1/4",
  spacing: "p-4",
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

const btnBrand: BlockStyle = {
  blockSize: "block rounded",
  spacing: "mx-auto p-2",
  background: "bg-gray-400",
  text: "text-white",
};
