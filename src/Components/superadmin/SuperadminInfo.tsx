import React, { useEffect, useState } from 'react'
import { SectionsTitle } from '../common/SectionsTitle'
import { retrieve } from '../../utils/encryption';
import useApi from '../../hooks/useApi';
import { UserModel } from '../../api/data-contracts';
import { Info } from '../common/Info';
import { TextItemsList } from './TextItemsList';

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
      <Info msg='Не удалось получить данные.' showInfo={!!dataError} style=''/>
    </>
  )
}
