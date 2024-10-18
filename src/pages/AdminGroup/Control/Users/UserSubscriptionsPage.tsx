import React from "react";
import { SubscriptionModel, SubscriptionModelDataResult } from "../../../../api/data-contracts";
import useApi from "../../../../hooks/useApi";
import { retrieve } from "../../../../utils/encryption";
import { Subscription } from "../../../../Components/common/Subscription";
import { useParams } from "react-router-dom";
import { IsLoading } from "../../../../Components/common/InfoGroup/IsLoading";
import { ErrorReq } from "../../../../Components/common/InfoGroup/ErrorReq";


export const UserSubscriptionsPage = () => {
    const { id } = useParams();
    const [data, isLoading, dataError] = useApi<"subscriptionsList", SubscriptionModelDataResult>(
        "subscriptionsList",
        { PageSize: 100, UserGuid: id, IsDeleted: false },
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );

    return (
        <div className='bg-gray-100 min-h-screen pb-10'>
            <h3 className="w-full text-center uppercase py-3">Подписки</h3>
            {
                data?.data?.map((el: SubscriptionModel) => {
                    return (
                        <Subscription
                            brandId={el.brandGuid || null}
                            subId={el.guid || null}
                            key={el.guid}
                        />
                    );
                })
            }
            <IsLoading show={isLoading} />
            <ErrorReq show={!!dataError} error={dataError} />
        </div>
    );
};
