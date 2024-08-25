import React, { useEffect, useState } from "react";
import { UserModelDataResult, UserType } from "../../../../api/data-contracts";
import useApi from "../../../../hooks/useApi";
import { retrieve } from "../../../../utils/encryption";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import { ItemsList } from "../../../../Components/common/ItemGroup/ItemsList";
import { Route, Routes } from "react-router-dom";
import { UserInfoPage } from "./UserInfoPage";
import { Item } from "../../../../types/interfaces/componentsProps/IItemsListProps";
import { IsLoading } from "../../../../Components/common/InfoGroup/IsLoading";
import { ErrorReq } from "../../../../Components/common/InfoGroup/ErrorReq";


export const UsersPage = () => {
    const [items, setItems] = useState<Item[]>([])
    // Запрос на получение списка неудаленных пользователей
    const [data, isLoading, dataError] = useApi<'usersList', UserModelDataResult>(
        "usersList",
        { Types: UserType.User, PageSize: 100, IsDeleted: false },
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );

    useEffect(() => {
        if (data?.data) {
            // Список пользователей с аватаркой, именем, по клику будет осуществлен переход на страницу с подробной информацией о пользователе
            setItems(data.data.map((item) => {
                return {
                    title: item.username || "Имя не указано",
                    path: `./${item.guid}`,
                    photoId: item.mainAvatarGuid,
                    needPhoto: true,
                    alt: 'Аватар пользователя',
                    photoStyles: 'w-7 h-7 object-cover rounded-3xl',
                };
            }));
        };
    }, [data, isLoading, dataError]);

    return (
        <>
            <Routes>
                <Route index element={
                    <>
                        <SectionsTitle title="Пользователи" needsClose={true} />
                        <div className='min-h-screen pb-10 bg-gray-100'>
                            {items && <ItemsList items={items} />}
                            <IsLoading show={isLoading} />
                            <ErrorReq show={!!dataError} error={dataError} />
                        </div>
                    </>
                }/>
                <Route path=":id/*" element={<UserInfoPage />} />
            </Routes>
        </>
    );
};

