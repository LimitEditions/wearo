import React, { useEffect, useState } from "react";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import useApi from "../../../../hooks/useApi";
import { UserModel } from "../../../../api/data-contracts";
import { Route, Routes, useParams } from "react-router-dom";
import { retrieve } from "../../../../utils/encryption";
import { ItemsList } from "../../../../Components/common/ItemGroup/ItemsList";
import { UserInfoList } from "../../../../Components/superadmin/UserInfoList";
import { ModalsDelete } from "../../../../Components/common/ModalsDelete";
import { Button } from "../../../../Components/common/Button";
import { Info } from "../../../../Components/common/Info";
import { AvatarAndName } from "../../../../Components/common/AvatarAndName";
import { UserFavoritesPage } from "./UserFavoritesPage";
import { UserSubscriptionsPage } from "./UserSubscriptionsPage";
import { UserScansPage } from "./UserScansPage";
import { EditUserInfo } from "./EditUserInfo";

export const UserInfo = () => {
  const [user, setUser] = useState<UserModel>({});
  // Флаг для открытия окна удаления пользователя
  const [mod, setMod] = useState<boolean>(false);
  const { id } = useParams();
  // Запрос для получения информации о пользователе
  const [data, isLoading, dataError] = useApi<"usersDetail", UserModel>(
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

  const items = [
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
          state: user
        },
      ]

  return (
    <Routes>
      <Route
        index
        element={
          <>
            <div className={getStyles(containerStyle)}>
              <SectionsTitle
                needsClose={false}
                title="Профиль"
                needBottomSpasing={true}
              />
              {items && (
                <>
                  <AvatarAndName
                    name={user.firstName}
                    photoId={user.mainAvatarGuid}
                  />
                  {/* Разделы Избранное, Подписки, Сканирования, настройки. Каждый со стрелкой вправо и с переходом на страницу */}
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
            <Info
              showInfo={!!dataError}
              msg="Ошибка загрузки данных"
              style=""
            />
          </>
        }
      />
      <Route path="favorites" element={<UserFavoritesPage />} />
      <Route path="subscriptions" element={<UserSubscriptionsPage />} />
      <Route path="scans" element={<UserScansPage />} />
      <Route path="edit" element={<EditUserInfo />} />
    </Routes>
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
