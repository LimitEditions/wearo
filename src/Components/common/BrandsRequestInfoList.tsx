import React from 'react'
import { BrandRequestModel } from '../../api/data-contracts'
import { EmployeeInfo } from './EmployeeInfo'
import { getDate } from '../../utils/getDate'

export const BrandsRequestInfoList = ({info}: {info: BrandRequestModel}) => {
    const requestInfo = [
        {
            infoTitle: 'Название бренда',
            value: info.name
        },
        {
            infoTitle: 'Описание',
            value: info.description
        },
        {
            infoTitle: 'Подробное описание',
            value: info.descriptionRichContent
        },
        {
            infoTitle: 'Ссылка на сайт',
            value: info.link
        },
        {
            infoTitle: 'Комментарий',
            value: info.comment
        },
        {
            infoTitle: 'Логин заявителя',
            value: info.user?.username
        },
        {
            infoTitle: 'Имя заявителя',
            value: info.user?.firstName
        },
        {
            infoTitle: 'Фамилия заявителя',
            value: info.user?.secondName
        },
        {
            infoTitle: 'Дата регистрации заявителя',
            value: getDate(info.user?.createDT)
        },
        {
            infoTitle: 'Дата регистрации заявки',
            value: getDate(info.createDT)
        }
    ]
  return (
    <>
        {requestInfo.map(el => {
            return <EmployeeInfo needArrow={false} title={el.infoTitle} value={el.value} key={el.infoTitle}/>
        })}
    </>
  )
}
