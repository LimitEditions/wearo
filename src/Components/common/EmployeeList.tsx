import React, { useEffect, useState } from "react";
import {
  UserModel,
  UserModelDataResult,
  UserType,
} from "../../api/data-contracts";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { Info } from "./Info";
import { getEmployeePosition } from "../../utils/getEmployeePosition";
import Item from "./ItemGroup/Item";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";

export const EmployeeList = ({ userType }: { userType: UserType }) => {
  // Должность сотрудника
  const position = getEmployeePosition(userType);
  const [employee, setEmployee] = useState<UserModelDataResult>();
  // Запрос на получение списка пользователей с определенным типом
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
            <Item path={`/admin/${el.guid}`} key={el.guid}>
              <div>
                <h3 className={getStyles(h3Style)}>
                  {el.firstName ? el.firstName : "Имя не указано"}
                </h3>
                <span className={getStyles(spanStyle)}>{position}</span>
              </div>
            </Item>
          );
        }
      })}
      <Info msg="Ошибка получения данных" showInfo={!!dataError} style="" />
      <Info msg="Загрузка..." showInfo={isLoading} style="" />
    </>
  );
};

const h3Style: BlockStyle = {
  text: "text-sm font-normal",
};

const spanStyle: BlockStyle = {
  text: "font-normal text-xs text-gray-500",
};
