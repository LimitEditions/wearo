import React, { useEffect, useState } from "react";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import useApi from "../../../../hooks/useApi";
import {
  BrandRequestModelDataResult,
  RequestStatus,
} from "../../../../api/data-contracts";
import { retrieve } from "../../../../utils/encryption";
import { ItemsList } from "../../../../Components/common/ItemGroup/ItemsList";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import { Info } from "../../../../Components/common/Info";
import getStyles from "../../../../utils/getStyles";
import { Route, Routes } from "react-router-dom";
import { RequestInfoPage } from "./RequestInfoPage";

export const RequestsPage = () => {
  const [requests, setRequests] = useState<BrandRequestModelDataResult>();
  // Запрос на получение заявок на создание бренда
  const [data, isLoading, dataError] = useApi(
    "brandsRequestsList",
    { Status: RequestStatus.New, PageSize: 100 },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setRequests(data);
    }
  }, [data, isLoading, dataError]);
  // Список заявок, по клику на конкретную заявку открывается страница с подробной информацией
  const items = requests?.data
    ? requests?.data.map((item) => {
        return { title: item.name || '', path: `/control/requests/${item.guid}` };
      })
    : null;

  return (
    <Routes>
      <Route index element={
          <>
            <SectionsTitle title="Заявки на создание бренда" needsClose={true} />
            {items && <ItemsList items={items}/>}
            <Info msg="Загружаем заявки на бренды..." showInfo={isLoading} style={getStyles(pStyle)} />
            <Info msg="Ошибка запроса, повторите позже." showInfo={!!dataError} style={getStyles(pStyle)} />
          </>
      }/>
      <Route path=":id" element={<RequestInfoPage />} />
    </Routes>


  );
};

const pStyle: BlockStyle = {
  text: 'text-lg'
}
