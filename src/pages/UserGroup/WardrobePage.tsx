import React, { memo, useEffect, useMemo, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
    ProductItemModel,
    ProductItemModelDataResult,
} from "../../api/data-contracts";
import useApi from "../../hooks/useApi";
import { IsLoading } from "../../Components/common/InfoGroup/IsLoading";
import { ProfilePage } from "./ProfilePage";

import { retrieve } from "../../utils/encryption";
import { ErrorReq } from "../../Components/common/InfoGroup/ErrorReq";
import { Button } from "../../Components/common/Button";
import { Products } from "../../Components/user/Product/Products";

export const WardrobePage = memo(() => {
    const navigate = useNavigate();
    const info = useAuth(true);
    const token = useMemo(() => retrieve("token"), []);

    // получение данных с сервера
    const [productsList, setProductsList] = useState<ProductItemModel[]>([]);
    const [data, isLoading, error] = useApi<
        "productItemsList",
        ProductItemModelDataResult
    >(
        "productItemsList",
        { UserGiud: info.guid, IncludeProduct: true },
        { headers: { Authorization: `Bearer ${token}` } },
        true
    );
    useEffect(() => {
        if (data && !error) {
            setProductsList(data.data || []);
        }
    }, [data, error]);

    return (
        <>
            <Routes>
                <Route
                    index
                    element={
                        <div>
                            <h1 className="uppercase text-black ml-5 py-4">
                                мои изделия
                            </h1>
                            <IsLoading show={isLoading} />
                            <ErrorReq show={!!error} error={error} />
                            {data && productsList.length > 0 ? (
                                <Products productsList={productsList || []} />
                            ) : (
                                <div className="h-[calc(100vh-250px)] flex justify-center items-center">
                                    <div className="text-center w-3/4 ">
                                        <p className="text-black">
                                            На данный момент вы не владеете
                                            изделиями
                                        </p>
                                        <p className="text-gray-500">
                                            Перейдите к поиску, чтобы найти
                                            подходящее вам изделие.
                                        </p>
                                        <div className="mx-auto my-6">
                                            <Button
                                                showButton={true}
                                                onClick={() =>
                                                    navigate("./../posts")
                                                }
                                            >
                                                Перейти к поиску
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    }
                />
                <Route path="/profile/*" element={<ProfilePage />} />
            </Routes>
        </>
    );
});
