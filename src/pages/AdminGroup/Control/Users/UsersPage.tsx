import React, { useEffect, useState } from "react";
import { UserModel, UserModelDataResult, UserType } from "../../../../api/data-contracts";
import useApi from "../../../../hooks/useApi";
import { retrieve } from "../../../../utils/encryption";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import { ItemsList } from "../../../../Components/common/ItemGroup/ItemsList";
import { Info } from "../../../../Components/common/Info";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";
import { Route, Routes } from "react-router-dom";
import { UserInfo } from "./UserInfoPage";
import { Item } from "../../../../types/interfaces/componentsProps/IItemsListProps";


export const UsersPage = () => {
  const [items, setItems] = useState<Item[]>([])
  // Запрос на получение списка неудаленных пользователей
  const [data, isLoading, dataError] = useApi<'usersList', UserModelDataResult>(
    "usersList",
    { Types: UserType.User, PageSize: 100, IsDeleted: false },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data?.data) {
      // Список пользователей с аватаркой, именем, по клику будет осуществлен переход на страницу с подробной информацией о пользователе
      setItems(data.data.map((item) => {
        return {
          title: item.firstName || "Имя не указано",
          path: `/control/users/${item.guid}`,
          photoId: item.mainAvatarGuid,
          needPhoto: true,
          alt: 'Аватар пользователя',
          photoStyles: getStyles(imgStyle),
        };
      }))
    }
  }, [data, isLoading, dataError]);

  return (
    <>
      <Routes>
        <Route index element={
          <>
            <SectionsTitle title="Пользователи" needsClose={true} />
            <div className={getStyles(divStyle)}>
              {items && <ItemsList items={items} />}
              <Info
                msg="Загружаем пользователей..."
                showInfo={isLoading}
                style={getStyles(pStyle)}
              />
              <Info
                msg="Ошибка запроса, повторите позже."
                showInfo={!!dataError}
                style={getStyles(pStyle)}
              />
            </div>
          </>
        }/>
        <Route path=":id/*" element={<UserInfo />} />
      </Routes>
    </>
  );
};

const pStyle: BlockStyle = {
  text: "text-lg",
};

const imgStyle: BlockStyle = {
  blockSize: "w-7 h-7 object-cover",
  border: "rounded-3xl",
};

const divStyle: BlockStyle = {
  blockSize: "min-h-screen",
  spacing: "pb-10",
  background: "bg-gray-100",
};
