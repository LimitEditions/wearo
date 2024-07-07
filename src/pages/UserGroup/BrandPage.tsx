import React from 'react'
import { useParams } from 'react-router-dom'
import { BrandModel } from '../../api/data-contracts';
import useApi from '../../hooks/useApi';
import { IsLoading } from '../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../Components/common/InfoGroup/ErrorReq';
import { Brand } from '../../Components/user/Brand';


export const BrandPage = () => {
    // id бренда
    const { id } = useParams();
    // загрузка данных по бренду с сервера
    const [data, isLoading, error] = useApi<'brandsDetail', BrandModel>(
        'brandsDetail', id, {}, true
    );

    return (
        <div className='space-y-5 w-full px-3'>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error} />
            {data && <Brand brandInfo={data}/> }
        </div>
    )
};
