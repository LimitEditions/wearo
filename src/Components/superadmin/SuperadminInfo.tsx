import React from 'react'
import { SectionsTitle } from '../common/SectionsTitle'
import { retrieve } from '../../utils/encryption';
import useApi from '../../hooks/useApi';
import { UserModel } from '../../api/data-contracts';
import { TextItemsList } from './TextItemsList';
import { ErrorReq } from '../common/InfoGroup/ErrorReq';


export const SuperadminInfo = () => {
  // Запрос на получение подробной информации о пользователе
  const [data, , dataError] = useApi<"usersDetail", UserModel>(
    "usersDetail",
    retrieve("guid"),
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  return (
    <>
      <SectionsTitle needsClose={false} title='Настройки' needTopSpasing={true} />
      {data && <TextItemsList info={data} type='admin'/>}
      <ErrorReq show={!!dataError} error={dataError} />
    </>
  )
}
