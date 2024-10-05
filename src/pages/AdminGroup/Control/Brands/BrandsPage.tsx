import React, { useEffect, useState } from 'react'
import useApi from '../../../../hooks/useApi';
import { BrandModelDataResult } from '../../../../api/data-contracts';
import { retrieve } from '../../../../utils/encryption';
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
                    name: item.name || "Название не указано",
                    path: `/${item.guid}`,
                    photoId: item.photo,
                    needPhoto: true,
                    alt: 'Логотип бренда',
                    photoStyles: 'w-7 h-7 object-cover rounded-3xl',
                }
            }))
        }
    }, [data, isLoading, dataError]);

    return (
        <>
            <Routes>
                <Route index element={
                    <>
                        <h3 className="w-full text-center uppercase py-3">Бренды</h3>
                        <div className='min-h-screen pb-10 bg-gray-100'>
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
