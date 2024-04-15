import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { UserModel } from "../../api/data-contracts";
import { SectionsTitle } from "./SectionsTitle";
import { EmployeeInfo } from "./EmployeeInfo";
import { Button } from "./Button";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { DeletePopup } from "./DeletePopup";

export const EmployeeDetails = () => {
  const [user, setUser] = useState<UserModel>();
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
    setIsOpenPopup(true);
  };

  const handleClose = () => {
    setIsOpenPopup(false);
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
          <EmployeeInfo
            needArrow={false}
            title={"Имя"}
            value={user.firstName}
          />
          <EmployeeInfo
            needArrow={false}
            title={"Фамилия"}
            value={user.secondName}
          />
          <EmployeeInfo
            needArrow={false}
            title={"Логин"}
            value={user.username}
          />
          <div className={getStyles(divStyle)}>
            <Button showButton={true} onClick={handleClick}>
              Удалить
            </Button>
          </div>
        </>
      )}
      {isOpenPopup && (
        <DeletePopup
          apiMethod={"usersDelete"}
          handleClose={handleClose}
          title={"Вы уверены, что хотите удалить сотрудника?"}
        />
      )}
      {isLoading && <div>Загрузка...</div>}
      {dataError && <div>Ошибка загрузки данных</div>}
    </div>
  );
};

const containerStyle: BlockStyle = {
  background: "bg-gray-100",
  blockSize: "min-h-screen"
};

const divStyle: BlockStyle = {
  blockSize: "w-3/4 max-w-96",
  spacing: "m-auto pt-10",
};
