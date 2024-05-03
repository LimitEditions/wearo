import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { UserModel } from "../../api/data-contracts";
import { SectionsTitle } from "./SectionsTitle";
import { Button } from "./Button";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { EmployeeInfoList } from "./EmployeeInfoList";
import { ModalsDelete } from "./ModalsDelete";
import { Info } from "./Info";

export const EmployeeDetails = () => {
  const [user, setUser] = useState<UserModel>();
  // Флаг для открытия модалки удаления сотрудника
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const { id } = useParams();
  const token = retrieve("token");
  const [data, isLoading, dataError] = useApi(
    "usersDetail",
    id,
    { headers: { Authorization: `Bearer ${token}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, isLoading, dataError]);

  const handleClick = () => {
    // По нажатию на кнопку Удалить открывается модальное окно "Точно ли хотите удалить" с кнопками удаления и отмены
    setIsOpenPopup(true);
  };

  return (
    <div className={getStyles(containerStyle)}>
      <SectionsTitle
        needsClose={false}
        title={"Администратор"}
        needBottomSpasing={true}
      />
      {user && (
        <>
        {/* Информация о пользователе */}
          <EmployeeInfoList user={user} />
          <div className={getStyles(divStyle)}>
            <Button showButton={true} onClick={handleClick}>
              Удалить
            </Button>
          </div>
        </>
      )}
      <ModalsDelete
        apiMethod="usersDelete"
        isOpen1={isOpenPopup}
        setIsOpen1={setIsOpenPopup}
        messageSure="Вы уверены, что хотите удалить сотрудника"
        messageSuccess="Сотрудник удален"
      />

      <Info msg="Загрузка..." showInfo={isLoading} style=""/>
      <Info msg="Ошибка загрузки данных" showInfo={!!dataError} style=""/>
    </div>
  );
};

const containerStyle: BlockStyle = {
  background: "bg-gray-100",
  blockSize: "min-h-screen",
};

const divStyle: BlockStyle = {
  blockSize: "w-3/4 max-w-96",
  spacing: "m-auto pt-10",
};
