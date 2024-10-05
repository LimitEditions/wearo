import React, { useState } from 'react'
import { UserModel } from '../../api/data-contracts';
import moment from 'moment';
import { VariableField } from './VariableField';
import { Button } from '../common/Button';
import { ModalsDelete } from '../common/ModalsDelete';


export const UserDetails = ({ userData, setUserData }: { userData: UserModel, setUserData: React.Dispatch<React.SetStateAction<UserModel>> }) => {
    const [mod, setMod] = useState<boolean>(false);

    return (
        <div className='my-4 mx-2 space-y-3'>
            <div className='border border-gray-300 rounded-xl p-3 text-sm space-y-1'>
                <p>Дата создания учетной записи: {moment(userData.createDT).format('DD.MM.YYYY')}</p>
                <p>Дата последнего обновления: {moment(userData.updateDT).format('DD.MM.YYYY')}</p>
                <p>Статус: {userData?.isDeleted ? 'удален': 'не удален'}</p>
                <p>Тип: {userData.type}</p>
                <p>Логин: {userData.username}</p>
            </div>

            <VariableField 
                label='Имя'
                field='firstName'
                text={userData.firstName || ''}
                userData={userData}
                updateBaseData={setUserData}
            />
            <VariableField 
                label='Почта'
                field='email'
                text={userData.userInfo?.email || ''}
                userData={userData}
                updateBaseData={setUserData}
            />
            <VariableField 
                label='Телефон'
                field='phone'
                text={userData.userInfo?.phone || ''}
                userData={userData}
                updateBaseData={setUserData}
            />

            <div className='w-3/4 m-auto'>
                <Button showButton={true} onClick={() => setMod(true)}>Удалить пользователя</Button>
            </div>

            <ModalsDelete
                apiMethod="usersDelete"
                isOpen1={mod}
                setIsOpen1={setMod}
                messageSuccess="Пользователь удален"
                messageSure="Вы уверены, что хотите удалить пользователя?"
            />
        </div>
    );
};
