import React, { useEffect, useState } from "react";
import { UserModelDataResult, UserType } from "../api/data-contracts";
import useApi from "../hooks/useApi";
import { retrieve } from "../utils/encryption";
import { SectionsTitle } from "../Components/common/SectionsTitle";
import { ItemsList } from "../Components/common/ItemsList";
import { Info } from "../Components/common/Info";
import { BlockStyle } from "../types/interfaces/IStyles";
import getStyles from "../utils/getStyles";

export const UsersPage = () => {
  const [users, setUsers] = useState<UserModelDataResult>();
  const [data, isLoading, dataError] = useApi(
    "usersList",
    { Types: UserType.User, PageSize: 100, IsDeleted: false },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setUsers(data);
      console.log(users?.data);
    }
  }, [data, isLoading, dataError]);

  const items = users?.data
    ? users?.data.map((item) => {
        return {
          title: item.firstName || "Имя не указано",
          path: `/control/users/${item.guid}`,
          photoId: item.mainAvatarGuid,
          needPhoto: true,
          photoStyles: getStyles(imgStyle),
        };
      })
    : null;

  return (
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
