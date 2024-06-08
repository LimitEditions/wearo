import React, { useEffect, useMemo, useState } from 'react'
import useApi from '../../../hooks/useApi';
import { ProductItemModelDataResult, PromotionModel, ScanModelDataResult } from '../../../api/data-contracts';
import { Photo } from '../../common/Photo';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';


export const Promotions = ({ promotionsList, params, config }: { promotionsList: PromotionModel[] | null, params: any, config: any}) => {
    const navigate = useNavigate();
    //стейт на отфильтрованный список
    const [filtredPromotionsList, setFiltredPromotionsList] = useState<PromotionModel[]>([]);
    
    // количество вещей во владении (условие акции)
    const [dataOwnershipCount, , ] = useApi<'productItemsList', ProductItemModelDataResult>(
        'productItemsList', params, config, true
    );
    const productInOwnershipCount: number = useMemo(() => dataOwnershipCount?.total as number, [dataOwnershipCount]);

    // количество отсканированных вещей (условие акции)
    const [dataScansCount, , ] = useApi<'scansList', ScanModelDataResult>(
        'scansList', params, config, true
    );
    const scannedProductCount: number  = useMemo(() => dataScansCount?.total as number, [dataScansCount]);

     // фильтрация списка акций
     useEffect(() => {
        setFiltredPromotionsList(promotionsList && promotionsList.length > 0 ? promotionsList.filter(el => {
            return el.productInOwnershipCount as number <= productInOwnershipCount && 
            el.scannedProductCount as number <= scannedProductCount;
        }): [])
    },[promotionsList, productInOwnershipCount, scannedProductCount])

    return (
        <div>
            {filtredPromotionsList && (
                <div className="flex flex-col items-center p-3">
                    {filtredPromotionsList.map((el) => (
                    <div
                        key={el.guid}
                        className="w-full bg-gray-200 relative rounded-md shadow-md p-2 m-2 space-y-4"
                        onClick={() => navigate(`./${el.guid}`)}
                    >
                        <h1 className="text-xl font-semibold ">{el.name}</h1>
                        <div className='absolute top-0 right-1'>
                            <Photo id={el.imageGuid || ''} styles={'float-right w-1/4 object-cover m-0'} alt={'фото'} />
                        </div>
                        <div className="bg-blue-500 text-white px-1 py-3 rounded-md ">
                            {el.text}
                        </div>
                        <div className="text-gray-600">
                            <span>{moment(el.start).format('DD.MM.YYYY')} - {moment(el.end).format('DD.MM.YYYY')}</span>
                        </div>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
};
