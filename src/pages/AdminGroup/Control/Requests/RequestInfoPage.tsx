import React, { useEffect, useState } from "react";
import { SectionsTitle } from "../../../../Components/common/SectionsTitle";
import { useParams } from "react-router-dom";
import { BrandRequestModel } from "../../../../api/data-contracts";
import useApi from "../../../../hooks/useApi";
import { retrieve } from "../../../../utils/encryption";
import { BlockStyle } from "../../../../types/interfaces/IStyles";
import getStyles from "../../../../utils/getStyles";
import { BrandsRequestInfoList } from "../../../../Components/superadmin/BrandsRequestInfoList";
import { RequestButtons } from "../../../../Components/superadmin/RequestButtons";
import { Info } from "../../../../Components/common/Info";

export const RequestInfoPage = () => {
  const [brandInfo, setBrandInfo] = useState<BrandRequestModel>();
  const { id } = useParams();
  // Запрос на получение информации о конкретной заявки на создание бренда
  const [data, isLoading, dataError] = useApi(
    "brandsRequestsDetail",
    id,
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setBrandInfo(data);
    }
  }, [data, isLoading, dataError]);

  return (
    <div className={getStyles(divStyle)}>
      <SectionsTitle needsClose={true} title="Заявка на открытие бренда" />
      {brandInfo && (
        <>
          {/* Отображаем информацию из заявки */}
          <BrandsRequestInfoList info={brandInfo} />
          {/* Кнопки Одобрить и Отклонить */}
          <RequestButtons />
        </>
      )}
      <Info
        msg="Ошибка получения данных о заявке."
        showInfo={!!dataError}
        style=""
      />
    </div>
  );
};

const divStyle: BlockStyle = {
  spacing: "pb-12",
  background: "bg-gray-100",
};

const imgStyle: BlockStyle = {
  blockSize: "w-1/2",
  spacing: "m-auto",
};
