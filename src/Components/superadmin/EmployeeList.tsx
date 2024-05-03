import React, { useEffect, useState } from "react";
import {
  UserModel,
  UserModelDataResult,
  UserType,
} from "../../api/data-contracts";
import { EmployeeItem } from "../common/EmployeeItem";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { Info } from "../common/Info";
import { getEmployeePosition } from "../../utils/getEmployeePosition";

export const EmployeeList = ({userType} : {userType: UserType}) => {
  // Должность сотрудника
  const position = getEmployeePosition(userType)
  const [employee, setEmployee] = useState<UserModelDataResult>();
  // Запрос на получение списка админов
  const [data, isLoading, dataError] = useApi(
    "usersList",
    { Types: userType },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
      if (data) {
        setEmployee(data);
      }
  }, [data, isLoading, dataError]);

  return (
    <>
      {employee?.data?.map((el) => {
          if (!el.isDeleted) {
            return (
              <EmployeeItem
                key={el.guid}
                firstName={el.firstName}
                id={el.guid}
                position={position}
              />
            );
          }
        })}
        <Info msg="Ошибка получения данных" showInfo={!!dataError} style=""/>
        <Info msg="Загрузка..." showInfo={isLoading} style=""/>
    </>
  );
};
