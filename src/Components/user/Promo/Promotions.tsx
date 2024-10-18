import React, { useEffect, useMemo, useState } from 'react'
import useApi from '../../../hooks/useApi';
import { ProductItemModelDataResult, PromotionModel, ScanModelDataResult } from '../../../api/data-contracts';
import { Photo } from '../../common/Photo';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import ItemSizeSlider from '../../common/ItemSizeSlider';


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
    },[promotionsList, productInOwnershipCount, scannedProductCount]);

    // размеры карточек
    const [itemSize, setItemSize] = useState(2);
    const getItemWidth = () => {
        switch (itemSize) {
        case 1:
            return 'w-44 transition-all duration-1000 ease-in-out';
        case 2:
            return 'w-full transition-all duration-1000 ease-in-out';
        default:
            return 'w-full transition-all duration-1000 ease-in-out';
        };
    };

    return (
        <div>
            {filtredPromotionsList.length > 0 && <ItemSizeSlider onChange={setItemSize} defaultValue={2} maxValue={2}/>}
            {filtredPromotionsList && (
                <div className="w-full flex flex-wrap justify-around px-2 text-sm">
                    {filtredPromotionsList.map((el) => (
                        <div
                            key={el.guid}
                            className={`relative ${getItemWidth()}  bg-yellow shadow-md box-border space-y-2 px-4 pt-4 pb-8 m-0.5`}
                            onClick={() => navigate(`./${el.guid}`)}
                        >
                            <h1 className="uppercase font-semibold">{el.name}</h1>
                            <p>{el.text}</p>
                            <p className='text-xs'>{moment(el.start).format('DD.MM.YYYY')} - {moment(el.end).format('DD.MM.YYYY')}</p>

                            <Photo id={el.imageGuid || ''} styles={'absolute bottom-2 left-4 w-16 object-cover m-1'} alt={'фото'} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
