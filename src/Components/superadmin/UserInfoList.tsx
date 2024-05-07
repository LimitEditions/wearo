import React from 'react'
import { UserModel } from '../../api/data-contracts'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import Item from '../common/ItemGroup/Item';

export const UserInfoList = ({info} : {info: UserModel}) => {
  // Использование библиотеки moment для форматирования даты
  const moment = require('moment');
  
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
            value: moment(info.createDT).format('DD.MM.YYYY'),
          },
    ]
  return (
    <>
        {infoList.map((el) => {
        return (
          <Item key={el.infoTitle}>
            <div className={getStyles(containerStyle)}>
              <div>
                <h3 className={getStyles(h3Style)}>{el.infoTitle}</h3>
                {el.value ? (
                  <span className={getStyles(spanStyle)}>{el.value}</span>
                ) : (
                  <span className={getStyles(spanStyle)}>
                    Данные не указаны
                  </span>
                )}
              </div>
            </div>
          </Item>
        );
      })}
    </>
  )
}

const h3Style: BlockStyle = {
  text: 'text-xs font-normal'
}

const spanStyle: BlockStyle = {
  text: 'font-normal text-sm'
}

const containerStyle: BlockStyle = {
blockSize: "w-full",
background: "bg-gray-100",
container: "flex justify-between",
};