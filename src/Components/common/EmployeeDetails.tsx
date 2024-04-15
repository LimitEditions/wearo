import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { UserModel } from "../../api/data-contracts";
import { SectionsTitle } from "./SectionsTitle";
import { EmployeeInfo } from "./EmployeeInfo";

export const EmployeeDetails = () => {
  const [user, setUser] = useState<UserModel>();
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

  return (
    <>
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
        </>
      )}
      {isLoading && <div>Загрузка...</div>}
      {dataError && <div>Ошибка загрузки данных</div>}
    </>
  );
};
