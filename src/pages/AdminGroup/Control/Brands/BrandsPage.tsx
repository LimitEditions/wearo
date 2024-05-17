import React, { useEffect, useState } from 'react'
import useApi from '../../../../hooks/useApi';
import { BrandModelDataResult } from '../../../../api/data-contracts';
import { retrieve } from '../../../../utils/encryption';
import getStyles from '../../../../utils/getStyles';
import { BlockStyle } from '../../../../types/interfaces/IStyles';
import { SectionsTitle } from '../../../../Components/common/SectionsTitle';
import { ItemsList } from '../../../../Components/common/ItemGroup/ItemsList';
import { Route, Routes } from 'react-router-dom';
import { BrandInfoPage } from './BrandInfoPage';
import { Item } from '../../../../types/interfaces/componentsProps/IItemsListProps';
import { IsLoading } from '../../../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../../../Components/common/InfoGroup/ErrorReq';


export const BrandsPage = () => {
  const [items, setItems] = useState<Item[]>([])
  // Запрос на получение списка брендов
  const [data, isLoading, dataError] = useApi<'brandsList', BrandModelDataResult>(
    "brandsList",
    { PageSize: 100, IsDeleted: false},
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data?.data) {
      // Список брендов с логотипом, названием, по клику будет осуществлен переход на страницу с подробной информацией о бренде
      setItems(data.data.map((item) => {
        return {
          title: item.name || "Название не указано",
          path: `/${item.guid}`,
          photoId: item.photo,
          needPhoto: true,
          alt: 'Логотип бренда',
          photoStyles: getStyles(imgStyle),
        }
      }))
    }
  }, [data, isLoading, dataError]);

  return (
    <>
      <Routes>
        <Route index element={
          <>
            <SectionsTitle title="Бренды" needsClose={true} />
            <div className={getStyles(divStyle)}>
              {items && <ItemsList items={items} />}
              <IsLoading show={isLoading} />
              <ErrorReq show={!!dataError} error={dataError} />
            </div>
          </>
        }/>
        <Route path=":id" element={<BrandInfoPage />} />
      </Routes>
     
    </>
  );
}

const imgStyle: BlockStyle = {
  blockSize: "w-7 h-7 object-cover",
  border: "rounded-3xl",
};

const pStyle: BlockStyle = {
  text: "text-lg",
};

const divStyle: BlockStyle = {
  blockSize: "min-h-screen",
  spacing: "pb-10",
  background: "bg-gray-100",
};
