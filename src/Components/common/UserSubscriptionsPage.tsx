import React, { useEffect, useState } from "react";
import {
  SubscriptionModel,
  SubscriptionModelDataResult,
} from "../../api/data-contracts";
import useApi from "../../hooks/useApi";
import { retrieve } from "../../utils/encryption";
import { Subscription } from "./Subscription";
import { Info } from "./Info";
import { useParams } from "react-router-dom";
import { SectionsTitle } from "./SectionsTitle";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";

export const UserSubscriptionsPage = () => {
  const [subscriptions, setSubscriptions] =
    useState<SubscriptionModelDataResult>();
  const { id } = useParams();
  const [data, isLoading, dataError] = useApi(
    "subscriptionsList",
    { PageSize: 100, UserGuid: id, IsDeleted: false },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setSubscriptions(data);
    }
  }, [data, isLoading, dataError]);
  return (
    <div className={getStyles(divStyle)}>
      <SectionsTitle
        needsClose={false}
        title="Подписки"
        needBottomSpasing={true}
      />
      {subscriptions?.data &&
        subscriptions.data.map((el: SubscriptionModel) => {
          return (
            <Subscription
              brandId={el.brandGuid}
              subId={el.guid}
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