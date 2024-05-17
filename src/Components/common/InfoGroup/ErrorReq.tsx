import React from 'react'
import { IApiError } from '../../../types/interfaces/IApiError';
import { Info } from './Info';


export const ErrorReq = ({ show, error }: { show: boolean, error: IApiError | null}) => {
    return (
        <Info showInfo={show} msg={`Ошибка - ${error?.code}, ${error?.message}`} className={'text-red-500'}/>
    );
};
