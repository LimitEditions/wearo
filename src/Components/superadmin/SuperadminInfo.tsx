import React, { useEffect, useState } from 'react'
import { SectionsTitle } from '../common/SectionsTitle'
import { retrieve } from '../../utils/encryption';
import useApi from '../../hooks/useApi';
import { UserModel } from '../../api/data-contracts';
import { EmployeeInfoList } from '../common/EmployeeInfoList';

export const SuperadminInfo = () => {
  const [user, setUser] = useState<UserModel>();
  const [data, isLoading, dataError] = useApi(
    "usersDetail",
    retrieve("guid"),
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, isLoading, dataError]);
  return (
    <>
      <SectionsTitle needsClose={false} title='Настройки' needTopSpasing={true} />
      {user && <EmployeeInfoList user={user}/>}
      {dataError && <div>Не удалось получить данные</div>}
    </>
  )
}
