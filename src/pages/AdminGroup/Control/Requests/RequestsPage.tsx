import React, { useEffect, useState } from "react";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import useApi from "../../../../hooks/useApi";
import { BrandRequestModelDataResult, RequestStatus } from "../../../../api/data-contracts";
import { retrieve } from "../../../../utils/encryption";
import { ItemsList } from "../../../../Components/common/ItemGroup/ItemsList";
import { Route, Routes } from "react-router-dom";
import { RequestInfoPage } from "./RequestInfoPage";
import { Item } from "../../../../types/interfaces/componentsProps/IItemsListProps";
import { IsLoading } from "../../../../Components/common/InfoGroup/IsLoading";
import { ErrorReq } from "../../../../Components/common/InfoGroup/ErrorReq";

export const RequestsPage = () => {
  const [items, setItems] = useState<Item[]>([])
  // Запрос на получение заявок на создание бренда
  const [data, isLoading, dataError] = useApi<'brandsRequestsList', BrandRequestModelDataResult>(
    "brandsRequestsList",
    { Status: RequestStatus.New, PageSize: 100 },
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data?.data) {
      // Список заявок, по клику на конкретную заявку открывается страница с подробной информацией
      setItems(data.data.map((item) => {
        return {
           title: item.name || '', path: `/${item.guid}` 
        }
      }))
    }
  }, [data, isLoading, dataError]);

  return (
    <Routes>
      <Route index element={
          <>
            <SectionsTitle title="Заявки на создание бренда" needsClose={true} />
            {items && <ItemsList items={items}/>}
            <IsLoading show={isLoading} />
            <ErrorReq show={!!dataError} error={dataError} />
          </>
      }/>
      <Route path=":id" element={<RequestInfoPage />} />
    </Routes>


  );
};
