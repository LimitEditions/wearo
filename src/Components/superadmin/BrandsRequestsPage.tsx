import React, { useEffect, useState } from "react";
import { SectionsTitle } from "../common/SectionsTitle";
import useApi from "../../hooks/useApi";
import {
  BrandRequestModelDataResult,
  RequestStatus,
} from "../../api/data-contracts";
import { retrieve } from "../../utils/encryption";
import { ItemsList } from "../common/ItemsList";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { Info } from "../common/Info";
import getStyles from "../../utils/getStyles";

export const BrandsRequestsPage = () => {
  const [requests, setRequests] = useState<BrandRequestModelDataResult>();
  const [data, isLoading, dataError] = useApi(
    "brandsRequestsList",
    { Status: RequestStatus.New, PageSize: 100 },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setRequests(data);
      console.log(requests?.data);
    }
  }, [data, isLoading, dataError]);

  const items = requests?.data
    ? requests?.data.map((item) => {
        return { title: item.name || '', path: `/control/requests/${item.guid}` };
      })
    : null;

  return (
    <>
      <SectionsTitle title="Заявки на создание бренда" needsClose={true} />
      {items && <ItemsList items={items}/>}
      <Info msg="Загружаем заявки на бренды..." showInfo={isLoading} style={getStyles(pStyle)} />
      <Info msg="Ошибка запроса, повторите позже." showInfo={!!dataError} style={getStyles(pStyle)} />
    </>
  );
};

const pStyle: BlockStyle = {
  text: 'text-lg'
}
