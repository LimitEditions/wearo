import React, { useEffect, useState } from "react";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { SectionsTitle } from "../common/SectionsTitle";
import useApi from "../../hooks/useApi";
import { UserModel } from "../../api/data-contracts";
import { useParams } from "react-router-dom";
import { retrieve } from "../../utils/encryption";
import { ItemsList } from "../common/ItemsList";
import { UserInfoList } from "./UserInfoList";
import { ModalsDelete } from "../common/ModalsDelete";
import { Button } from "../common/Button";
import { Info } from "../common/Info";
import { AvatarAndName } from "../common/AvatarAndName";

export const UserInfo = () => {
  const [user, setUser] = useState<UserModel>();
  const [mod, setMod] = useState<boolean>(false);
  const { id } = useParams();
  const [data, isLoading, dataError] = useApi(
    "usersDetail",
    id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, isLoading, dataError]);

  const items = user
    ? [
        {
          title: "Избранное",
          path: `/control/users/${user.guid}/favorites`,
          needPhoto: false,
        },
        {
          title: "Подписки",
          path: `/control/users/${user.guid}/subscriptions`,
          needPhoto: false,
        },
        {
          title: "Сканирования",
          path: `/control/users/${user.guid}/scans`,
          needPhoto: false,
        },
        {
          title: "Настройки",
          path: `/control/users/${user.guid}/edit`,
          needPhoto: false,
        },
      ]
    : null;

  return (
    <>
      <div className={getStyles(containerStyle)}>
        <SectionsTitle
          needsClose={false}
          title="Профиль"
          needBottomSpasing={true}
        />
        {user && items && (
          <>
            <AvatarAndName
              name={user.firstName}
              photoId={user.mainAvatarGuid}
            />
            <ItemsList items={items} />
            <div className={getStyles(divStyle)}>
              <UserInfoList info={user} />
            </div>
            <div className={getStyles(btnContainer)}>
              <Button showButton={true} onClick={() => setMod(true)}>
                Удалить пользователя
              </Button>
            </div>
            <ModalsDelete
              apiMethod="usersDelete"
              isOpen1={mod}
              setIsOpen1={setMod}
              messageSuccess="Пользователь удален"
              messageSure="Вы уверены, что хотите удалить пользователя?"
            />
          </>
        )}
      </div>

      <Info showInfo={isLoading} msg="Загрузка..." style="" />
      <Info showInfo={!!dataError} msg="Ошибка загрузки данных" style="" />
    </>
  );
};

const containerStyle: BlockStyle = {
  background: "bg-gray-100",
  blockSize: "min-h-screen",
  spacing: "pb-12",
};

const divStyle: BlockStyle = {
  spacing: "pt-12",
};

const btnContainer: BlockStyle = {
  blockSize: "w-3/4 max-w-96",
  spacing: "m-auto",
};
