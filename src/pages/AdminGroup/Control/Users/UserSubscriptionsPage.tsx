import React from "react";
import {
  SubscriptionModel,
  SubscriptionModelDataResult,
} from "../../../../api/data-contracts";
import useApi from "../../../../hooks/useApi";
import { retrieve } from "../../../../utils/encryption";
import { Subscription } from "../../../../Components/common/Subscription";
import { Info } from "../../../../Components/common/Info";
import { useParams } from "react-router-dom";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";

export const UserSubscriptionsPage = () => {
  const { id } = useParams();
  const [data, isLoading, dataError] = useApi<"subscriptionsList", SubscriptionModelDataResult>(
    "subscriptionsList",
    { PageSize: 100, UserGuid: id, IsDeleted: false },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  return (
    <div className={getStyles(divStyle)}>
      <SectionsTitle
        needsClose={false}
        title="Подписки"
        needBottomSpasing={true}
      />
      {data?.data?.map((el: SubscriptionModel) => {
          return (
            <Subscription
              brandId={el.brandGuid || null}
              subId={el.guid || null}
              key={el.guid}
            />
          );
        })}
      <Info msg="Загружаем подписки..." showInfo={isLoading} style="" />
      <Info
        msg="Ошибка запроса. Повторите попытку позже."
        showInfo={!!dataError}
        style=""
      />
    </div>
  );
};

const divStyle: BlockStyle = {
  background: 'bg-gray-100',
  blockSize: 'min-h-screen',
  spacing: 'pb-10'
}