import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { BrandModel, PromotionModel, StringDataResult } from '../../../api/data-contracts';
import useApi from '../../../hooks/useApi';
import { retrieve } from '../../../utils/encryption';
import { IsLoading } from '../../common/InfoGroup/IsLoading';
import { ErrorReq } from '../../common/InfoGroup/ErrorReq';
import { Button } from '../../common/Button';
import { BlockStyle } from '../../../types/interfaces/IStyles';
import { Photo } from '../../common/Photo';
import moment from 'moment';


export const Promo = () => {
    const { id } = useParams();
    const token = useMemo(() => retrieve("token"), []);
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const userGuid = useMemo(() => retrieve("guid"), []);

    // загрузка данных по акции
    const [data, isLoading, error] = useApi<'promotionsDetail', PromotionModel>(
        'promotionsDetail',
        id,
        config,
        true
    );
    
    const defaultCodes = useMemo(() => ['214214', '215215', '25214421'], [])
    // загрузка данных по кодам (уже использованным)
    const [shouldExecute, setShouldExecute] = useState<boolean>(true);
    const [codes, setCodes] = useState<string[]>([])
    const [getCodes, codesLoading, ] = useApi<'promotionsCodesList', StringDataResult>(
        'promotionsCodesList',
        {UserGuid: userGuid, PromotionGuid: id},
        config,
        shouldExecute
    );

    useEffect(() => {
        if(codesLoading) {
            setShouldExecute(false);
        };

        const respCodes =  getCodes?.data as string[];
        if(getCodes && respCodes.length > 0) {
            setCodes(respCodes);
        } else {
            setCodes(defaultCodes);
        };
    }, [codesLoading, defaultCodes, getCodes])
    

    // получить новый код
    const [shouldExecuteNewCode, setShouldExecuteNewCode] = useState<boolean>(false);
    const [getNewCode, getNewCodeIsLoading, getNewCodeError] = useApi<'promotionsCodesUpdate', string>(
        'promotionsCodesUpdate',
        { id: id },
        config,
        shouldExecuteNewCode
    );

    useEffect(() => {
        if(getNewCodeIsLoading) {
            setShouldExecuteNewCode(false);
        };
        if(getNewCode) {
            setShouldExecute(true);
            setCodes(prevCodes => [...prevCodes, getNewCode]);
        };

    }, [getNewCodeIsLoading, getNewCode, getNewCodeError])


    // ссылка на сайт бренда
    const [brandLink, setBrandLink] = useState<string>('');
    
    const [getBrandLink,,] = useApi<'brandsDetail', BrandModel>(
        'brandsDetail',
        data?.brandGuid,
        {},
        !!data
    );
    useEffect(() => {
        if(getBrandLink) {
            setBrandLink(getBrandLink.link || '');
        };
    }, [getBrandLink]);

    return (
        <div className='relative h-[calc(90vh-80px)] px-2'>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error} />
            {
                data &&
                <div>
                    <Photo id={data.imageGuid || ''} styles={'w-16 object-cover my-3'} alt={'фото'} />
                    <div className='w-full bg-yellow h-36 my-6 p-3 space-y-2'>
                        <h1 className='uppecase text-lg font-semibold'>{data.name}</h1>
                        <p className='text-sm'>{data.text}</p>
                        <p className='text-xs'>{moment(data.start).format('DD.MM.YYYY')} - {moment(data.end).format('DD.MM.YYYY')}</p>
                    </div>
                    <div className='my-4'>
                        <h3 className='text-lg font-semibold '>Акция распростарняется на:</h3>
                        <ul className='list-decimal space-y-2 px-7 py-2'>
                            {data.products?.map(prod => {
                                return <li key={prod.guid}>
                                        <Link to={`/product/${prod.productGuid}`}>Изделие (жми для перехода)</Link>
                                    </li>
                            })}
                        </ul>
                    </div>
                    
                    
                    <p className='block'>Задействованные коды:</p>
                    <ul className='space-y-3 p-2 '>
                        {
                            codes.map((code, index) => {
                                const copyCode = () => {
                                    navigator.clipboard.writeText(code);
                                };

                                return (
                                    <li key={code} className=''>
                                        {code}
                                        <Button showButton={true} styles={copyStyle} onClick={copyCode}>Copy</Button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            }
            <Button showButton={true} styles={btnStyle} onClick={() => {setShouldExecuteNewCode(true); } }>Активировать промокод</Button>
            <Link to={brandLink} target="_blank" rel="noopener noreferrer">
                <div className='w-3/4 absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                    <Button showButton={true}>Перейти на сайт</Button>
                </div>
            </Link>
        </div>
    );
};


const copyStyle: BlockStyle = {
    spacing: 'ml-3',
    text: 'text-xs',
    hover: 'cursor-pointer'
};

const btnStyle: BlockStyle = {
    container: 'w-full bg-violet h-20 rounded-2xl my-4',
    spacing: 'float-right px-2 py-1',
    text: 'text-md uppercase',
    hover: 'cursor-pointer'
};
