import React from 'react'
import { UserModel } from '../../api/data-contracts'
import { getDate } from '../../utils/getDate'
import { EmployeeInfo } from '../common/EmployeeInfo'

export const UserInfoList = ({info} : {info: UserModel}) => {
    const infoList = [
        {
            infoTitle: "Фамилия",
            value: info.secondName,
          },
          {
            infoTitle: "Логин",
            value: info.username,
          },
          {
            infoTitle: "Почта",
            value: info.userInfo?.email,
          },
          {
            infoTitle: "Телефон",
            value: info.userInfo?.phone,
          },
          {
            infoTitle: "Telegram",
            value: info.userInfo?.telegramId,
          },
          {
            infoTitle: "Vk",
            value: info.userInfo?.vkId,
          },
          {
            infoTitle: "Дата регистрации",
            value: getDate(info.createDT),
          },
    ]
  return (
    <>
        {infoList.map((el) => {
        return (
          <EmployeeInfo
            needArrow={false}
            title={el.infoTitle}
            value={el.value}
            key={el.infoTitle}
          />
        );
      })}
    </>
  )
}
