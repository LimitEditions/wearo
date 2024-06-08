import React, { useEffect, useState } from 'react'
import { NavigateFunction } from 'react-router-dom';
import useApi from '../../../hooks/useApi';
import { retrieve } from '../../../utils/encryption';
import { Button } from '../../common/Button';
import { ErrorReq } from '../../common/InfoGroup/ErrorReq';
import { RingLoader } from 'react-spinners';


export const CallMe = ({ navigate }: { navigate: NavigateFunction }) => {
    const [phoneNumber, , errorGetPhone] = useApi<'confirmationRequestsPhoneNumberList', string>(
        'confirmationRequestsPhoneNumberList', 
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        {},
        true
    );

    const [loading, setLoading] = useState(false);
    const [checkPhone, setCheckPhone] = useState(false);
    const [, , errorCheckResponse] = useApi<'confirmationRequestsPhoneCheckCreate', void>(
        'confirmationRequestsPhoneCheckCreate',
        retrieve('phone-guid'),
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        checkPhone
    );

    const handleConfirm = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setCheckPhone(true);
        }, 5000);
    };

    useEffect(() => {
        if(checkPhone && !errorCheckResponse){
            setTimeout(() => {
                navigate('../');
            }, 2000);
        };
    }, [checkPhone, errorCheckResponse, navigate]);

    return (
        <div className="flex justify-center h-screen pt-16">
            {!loading &&
            <div>
                {phoneNumber && !checkPhone && <>
                    <div className='text-center p-4'>
                        { phoneNumber && `Позвоните по этому номеру телефона - ${phoneNumber}. 
                        Дождитесь ответа, затем нажмите кнопку "Подтвердить".` }
                    </div>
                    <div className='w-1/2 m-auto'>
                        <Button showButton={true} onClick={handleConfirm}>Подтвердить</Button>
                    </div>
                </>}
                {!errorCheckResponse && checkPhone && <p>Номер подтвержден</p>}
                <ErrorReq show={!!errorGetPhone} error={errorGetPhone} />
                <ErrorReq show={!!errorCheckResponse} error={errorCheckResponse} />
            </div>}
            {loading && <RingLoader color='#7d7f7d' loading={true} size={75} speedMultiplier={1} />}
        </div>
    );
};
