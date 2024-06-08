import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { PromotionModel, StringDataResult } from '../../../api/data-contracts';
import useApi from '../../../hooks/useApi';
import { retrieve } from '../../../utils/encryption';
import { IsLoading } from '../../common/InfoGroup/IsLoading';
import { ErrorReq } from '../../common/InfoGroup/ErrorReq';
import { Button } from '../../common/Button';
import { BlockStyle } from '../../../types/interfaces/IStyles';


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
    // загрузка данных по кодам
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

    return (
        <div className='px-2'>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error} />
            {
                data &&
                <div>
                    <p className='block'>Акция распростарняется на:</p>
                    {data.products?.map(prod => {
                        return <Link to={`/product/${prod.product?.guid}/*`} key={prod.guid}>{prod.product?.name}</Link>
                    })}
                    <p className='block'>Задействованные коды:</p>
                    <ul className='space-y-3 p-2 '>
                        {
                            codes.map((code, index) => {
                                const copyCode = () => {
                                    navigator.clipboard.writeText(code);
                                };

                                return (
                                    <li key={code} className=''>
                                        {index + 1}. {code}
                                        <Button showButton={true} styles={copyStyle} onClick={copyCode}>Copy</Button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            }
            <Button showButton={true} styles={btnStyle} onClick={() => {setShouldExecuteNewCode(true); } }>Получить новый код</Button>
        </div>
    );
};


const copyStyle: BlockStyle = {
    spacing: 'ml-3',
    text: 'text-xs',
    hover: 'cursor-pointer'
};

const btnStyle: BlockStyle = {
    spacing: 'float-right px-2 py-1',
    text: 'text-md',
    hover: 'cursor-pointer',
    border: 'border-4 border-green-200 rounded-lg'
};
