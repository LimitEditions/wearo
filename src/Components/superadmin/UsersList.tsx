import React, { useEffect, useState } from 'react'
import { UserModelDataResult, UserType } from '../../api/data-contracts';
import { Item } from '../../types/interfaces/componentsProps/IItemsListProps';
import useApi from '../../hooks/useApi';
import { retrieve } from '../../utils/encryption';
import useFilter from '../../hooks/useFilter';
import { ItemsList } from '../common/ItemGroup/ItemsList';
import { IsLoading } from '../common/InfoGroup/IsLoading';
import { ErrorReq } from '../common/InfoGroup/ErrorReq';
import { Search } from '../common/SearchGroup/Search';


export const UsersList = ({ userType }: { userType: UserType }) => {
    const [users, setUsers] = useState<Item[]>([]);

    const [data, isLoading, dataError] = useApi<'usersList', UserModelDataResult>(
        "usersList",
        { Types: userType, PageSize: 100, IsDeleted: false },
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );

    useEffect(() => {
        if (data?.data) {
            // Список пользователей с аватаркой, именем, по клику будет осуществлен переход на страницу с подробной информацией о пользователе
            setUsers(data.data.map((item) => {
                return {
                    name: item.username || "Имя не указано",
                    path: `./${item.guid}`,
                    photoId: item.mainAvatarGuid,
                    needPhoto: true,
                    alt: 'Аватар пользователя',
                    photoStyles: 'w-7 h-7 object-cover rounded-3xl',
                };
            }));
        };
    }, [data, isLoading, dataError]);

    // фильтрация списка
    const [filteredList, setFilteredList] = useState<Item[] | null>(null);
    const { filteredData, setSearchTarget } = useFilter(users);
    
    useEffect(() => {
        if(filteredData) {
            setFilteredList(filteredData);
        } else {
            setFilteredList(null);
        };
    }, [filteredData])

    return (
        <div>
            <Search callBack={setSearchTarget}/>
            <ItemsList items={filteredList || users} />
            <IsLoading show={isLoading} />
            <ErrorReq show={!!dataError} error={dataError} />
        </div>
    );
};
