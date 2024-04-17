import React, { useEffect, useState } from "react";
import {
  UserModel,
  UserModelDataResult,
  UserType,
} from "../../api/data-contracts";
import { EmployeeItem } from "../common/EmployeeItem";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";

export const AdminsList = () => {
  const [admins, setAdmins] = useState<UserModelDataResult>();
  const [data, isLoading, dataError] = useApi(
    "usersList",
    { Types: UserType.Admin },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
      if (data) {
        setAdmins(data);
      }
  }, [data, isLoading, dataError]);

  return (
    <>
      {admins?.data &&
        admins.data.map((el) => {
          if (!el.isDeleted) {
            return (
              <EmployeeItem
                key={el.guid}
                firstName={el.firstName}
                id={el.guid}
              />
            );
          }
        })}
        {dataError && <div>Ошибка получения данных об администраторах</div>}
        {isLoading && <div>Загрузка...</div>}
    </>
  );
};
