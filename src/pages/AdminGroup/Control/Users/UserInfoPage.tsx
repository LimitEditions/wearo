import React, { useState } from "react";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import useApi from "../../../../hooks/useApi";
import { UserModel } from "../../../../api/data-contracts";
import { Route, Routes, useParams } from "react-router-dom";
import { retrieve } from "../../../../utils/encryption";
import { ItemsList } from "../../../../Components/common/ItemGroup/ItemsList";
import { ModalsDelete } from "../../../../Components/common/ModalsDelete";
import { Button } from "../../../../Components/common/Button";
import { AvatarAndName } from "../../../../Components/common/AvatarAndName";
import { UserFavoritesPage } from "./UserFavoritesPage";
import { UserSubscriptionsPage } from "./UserSubscriptionsPage";
import { UserScansPage } from "./UserScansPage";
import { UserProducts } from "./UserProducts";
import { TextItemsList } from "../Admins/TextItemsList";
import { IsLoading } from "../../../../Components/common/InfoGroup/IsLoading";
import { ErrorReq } from "../../../../Components/common/InfoGroup/ErrorReq";
import { UserSubscribersPage } from "./UserSubscribersPage";


export const UserInfoPage = () => {
    // Флаг для открытия окна удаления пользователя
    const [mod, setMod] = useState<boolean>(false);
    const { id } = useParams();
    // Запрос для получения информации о пользователе
    const [data, isLoading, dataError] = useApi<"usersDetail", UserModel>(
        "usersDetail",
        id,
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );

    const items = [
        {
            title: "Избранное", path: `./favorites`, needPhoto: false,
        },
        {
            title: "Подписки", path: `./subscriptions`, needPhoto: false,
        },
        {
            title: "Подписчики", path: `./subscribers`, needPhoto: false,
        },
        {
            title: "Сканирования", path: `./scans`, needPhoto: false,
        },
        {
            title: "Изделия", path: `./products`, needPhoto: false,
        },
    ];

    const [edit, setEdit] = useState<boolean>(false);

    return (
        <Routes>
            <Route
                index
                element={
                    <>
                        <div className='bg-gray-100 min-h-screen pb-12'>
                            <SectionsTitle needsClose={false} title="Профиль" needBottomSpasing={true} />
                            {items && data && (
                                <>
                                    <AvatarAndName name={data.firstName || null} photoId={data.mainAvatarGuid || null} />
                                    <ItemsList items={items} />
                                    <Button showButton={!edit} className='w-7 h-7 float-right' onClick={() => setEdit(true)}>
                                        <img src="/images/edit.png" alt="редактирование" />
                                    </Button>
                                    <Button showButton={edit} className='w-7 h-7 float-right' onClick={() => setEdit(false)}>
                                        <img src="/images/closeBtn.png" alt="закрыть" />
                                    </Button>
                                    <div className='pt-12'>
                                        <TextItemsList info={data} type="user" edit={edit}/>
                                    </div>
                                    <div className='w-3/4 max-w-96 m-auto'>
                                        <Button showButton={!edit} onClick={() => setMod(true)}>Удалить пользователя</Button>
                                    </div>

                                    <ModalsDelete
                                        apiMethod="usersDelete"
                                        isOpen1={mod}
                                        setIsOpen1={setMod}
                                        messageSuccess="Пользователь удален"
                                        messageSure="Вы уверены, что хотите удалить пользователя?"
                                    />
                                </>
                            )}
                        </div>
                        <IsLoading show={isLoading} />
                        <ErrorReq show={!!dataError} error={dataError} />
                    </>
                }
            />
            <Route path="favorites" element={<UserFavoritesPage />} />
            <Route path="subscriptions" element={<UserSubscriptionsPage />} />
            <Route path="subscribers" element={<UserSubscribersPage />} />
            <Route path="scans" element={<UserScansPage />} />
            <Route path="products" element={<UserProducts />} />
        </Routes>
    );
};
