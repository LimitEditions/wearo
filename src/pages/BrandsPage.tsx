import React, { useEffect, useState } from 'react'
import useApi from '../hooks/useApi';
import { BrandModelDataResult } from '../api/data-contracts';
import { retrieve } from '../utils/encryption';
import getStyles from '../utils/getStyles';
import { BlockStyle } from '../types/interfaces/IStyles';
import { SectionsTitle } from '../Components/common/SectionsTitle';
import { ItemsList } from '../Components/common/ItemsList';
import { Info } from '../Components/common/Info';

export const BrandsPage = () => {
  const [brands, setBrands] = useState<BrandModelDataResult>();
  const [data, isLoading, dataError] = useApi(
    "brandsList",
    { PageSize: 100, IsDeleted: false},
    { headers: { Authorization: `Bearer ${retrieve("token")}` } },
    true
  );

  useEffect(() => {
    if (data) {
      setBrands(data);
    }
  }, [data, isLoading, dataError]);

  const items = brands?.data
    ? brands?.data.map((item) => {
        return {
          title: item.name || "Название не указано",
          path: `/control/brands/${item.guid}`,
          photoId: item.photo,
          needPhoto: true,
          photoStyles: getStyles(imgStyle),
        };
      })
    : null;

  return (
    <>
      <SectionsTitle title="Бренды" needsClose={true} />
      <div className={getStyles(divStyle)}>
        {items && <ItemsList items={items} />}
        <Info
          msg="Загружаем бренды..."
          showInfo={isLoading}
          style={getStyles(pStyle)}
        />
        <Info
          msg="Ошибка запроса, повторите позже."
          showInfo={!!dataError}
          style={getStyles(pStyle)}
        />
      </div>
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
