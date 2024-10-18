import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useApi from '../../../../hooks/useApi';
import { retrieve } from '../../../../utils/encryption';
import { ScanModel, ScanModelDataResult } from '../../../../api/data-contracts';
import { IsLoading } from '../../../../Components/common/InfoGroup/IsLoading';
import { ErrorReq } from '../../../../Components/common/InfoGroup/ErrorReq';
import moment from 'moment';


export const UserScansPage = () => {
    const { id } = useParams();
    const [data, isLoading, dataError] = useApi<"scansList", ScanModelDataResult>(
        "scansList",
        { PageSize: 100, UserGuid: id },
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        true
    );
    
    const [scans, setScans] = useState<ScanModel[] | []>([]);
    useEffect(() => {
        if(data && !dataError) {
            setScans(data.data as ScanModel[])
        };
    }, [data, dataError])

    return (
        <div>
            {scans && scans.map(scan => {
                return <div className='mx-2 my-4 space-y-2'>
                    <h3>Id - {scan.guid}</h3>
                    <p>Дата - {moment(scan.createDT).format('DD.MM.YYYY')}</p>
                    <p>Юзер - {scan.user?.username}</p>
                    <p>Продукт - {scan.productItem?.product?.name}</p>
                </div>
            })}
            <IsLoading show={isLoading} />
            <ErrorReq show={!!dataError} error={dataError} />
            {scans.length === 0 && <div>Тут пока ничего нет</div>}
        </div>
    );
};
