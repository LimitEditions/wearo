import React, { useEffect, useMemo, useState } from "react";
import {
    PromotionModel,
    PromotionModelDataResult,
} from "../../api/data-contracts";
import { retrieve } from "../../utils/encryption";
import useApi from "../../hooks/useApi";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Promotions } from "../../Components/user/Promo/Promotions";
import { IsLoading } from "../../Components/common/InfoGroup/IsLoading";
import { ErrorReq } from "../../Components/common/InfoGroup/ErrorReq";
import { Promo } from "../../Components/user/Promo/Promo";
import { Button } from "../../Components/common/Button";

export const PromotionsPage = () => {
    const [promotionsList, setPromotionsList] = useState<PromotionModel[]>([]);
    const token = useMemo(() => retrieve("token"), []);
    const userGuid = useMemo(() => retrieve("guid"), []);
    const params = { UserGuid: userGuid };
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const navigate = useNavigate();

    const [data, isLoading, error] = useApi<
        "promotionsList",
        PromotionModelDataResult
    >("promotionsList", params, config, true);

    useEffect(() => {
        setPromotionsList(data?.data as PromotionModel[]);
    }, [data, error]);

    return (
        <Routes>
            <Route
                index
                element={
                    <div>
                        <h1 className="uppercase text-lg my-4 mx-2">
                            Мои промокоды
                        </h1>
                        <p className="text-md mx-2">
                            Приобретайте изделия и открывайте новые персональные
                            промокоды, чтобы покупать дешевле. К одному заказу
                            можно применить один промокод.
                        </p>
                        <IsLoading show={isLoading} />
                        <ErrorReq show={!!error} error={error} />
                        {promotionsList && promotionsList.length > 0 ? (
                            <Promotions
                                promotionsList={promotionsList || null}
                                params={params}
                                config={config}
                            />
                        ) : (
                            <div className="w-2/3 mx-auto pt-48">
                                <Button
                                    showButton={true}
                                    onClick={() => navigate("./../posts")}
                                >
                                    Найти изделия
                                </Button>
                            </div>
                        )}
                    </div>
                }
            />
            <Route path=":id" element={<Promo />} />
        </Routes>
    );
};
