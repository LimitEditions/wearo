import React from 'react'
import { UserModel } from '../../api/data-contracts'
import { EmployeeInfo } from './EmployeeInfo'

// Компонент создает массив с информацией о пользователе, передает их в EmployeeInfo. 
// Каждое поле без стрелки для перехода на другую страницу
export const EmployeeInfoList = ({user}: {user: UserModel}) => {
    const userData = [
        {
            infoTitle: 'Имя',
            value: user.firstName
        },
        {
            infoTitle: 'Фамилия',
            value: user.secondName
        },
        {
            infoTitle: 'Логин',
            value: user.username
        }
    ]
  return (
    <>
        {userData.map(el => {
            return <EmployeeInfo needArrow={false} title={el.infoTitle} value={el.value} key={el.infoTitle}/>
        })}
    </>
  )
}
