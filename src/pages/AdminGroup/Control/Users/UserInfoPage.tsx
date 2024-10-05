import React, { useEffect, useState } from "react";
import useApi from "../../../../hooks/useApi";
import { UserModel } from "../../../../api/data-contracts";
import { Route, Routes, useParams } from "react-router-dom";
import { retrieve } from "../../../../utils/encryption";
import { ItemsList } from "../../../../Components/common/ItemGroup/ItemsList";
import { AvatarAndName } from "../../../../Components/common/AvatarAndName";
import { UserFavoritesPage } from "./UserFavoritesPage";
import { UserSubscriptionsPage } from "./UserSubscriptionsPage";
import { UserScansPage } from "./UserScansPage";
import { UserProducts } from "./UserProducts";
import { IsLoading } from "../../../../Components/common/InfoGroup/IsLoading";
import { ErrorReq } from "../../../../Components/common/InfoGroup/ErrorReq";
import { UserSubscribersPage } from "./UserSubscribersPage";
import { UserDetails } from "../../../../Components/superadmin/UserDetails";


export const UserInfoPage = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState<UserModel>({});
    const [data, isLoading, dataError] = useApi<"usersDetail", UserModel>(
        "usersDetail",
        id,
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );
    useEffect(() => {
        if(data && !dataError) setUserData(data);
    }, [data, dataError]);

    const items = [
        {
            name: "Избранное", path: `./favorites`, needPhoto: false,
        },
        {
            name: "Подписки", path: `./subscriptions`, needPhoto: false,
        },
        {
            name: "Подписчики", path: `./subscribers`, needPhoto: false,
        },
        {
            name: "Сканирования", path: `./scans`, needPhoto: false,
        },
        {
            name: "Изделия", path: `./products`, needPhoto: false,
        },
    ];

    return (
        <Routes>
            <Route
                index
                element={
                    <>
                        <div className='min-h-screen pb-12'>
                            <h3 className="w-full text-center uppercase">Профиль</h3>
                            {userData && (
                                <>
                                    <AvatarAndName name={userData.username || null} photoId={userData.mainAvatarGuid || null} />
                                    <ItemsList items={items} />
                                    <UserDetails userData={userData} setUserData={setUserData}/>
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
