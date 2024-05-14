import React, { useEffect, useMemo, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { NavigateFunction } from 'react-router-dom';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { validateField } from '../../utils/validation';
import useApi from '../../hooks/useApi';
import { encrypt, retrieve } from '../../utils/encryption';
import { IsLoading } from '../common/IsLoading';
import { Api } from '../../api/Api';
import { ErrorReq } from '../common/ErrorReq';


export const Confirm = ({ mode, navigate }: { mode?: string; navigate: NavigateFunction }) => {
    // создание уникального id запроса и внесение его в LS
    encrypt(`${mode}-guid`, uuidv4());

    // стейт на инпут
    const [text, setText] = useState<string>('');

    // колбек на ввод в инпут
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        ref.current?.setCustomValidity('');
    };

    // флаг отправки запроса и референс на инпут
    const [shouldExecute, setShouldExecute] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);

    // колбэк на от подтверждение отправки
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const curRef = ref.current;
        if(curRef) {
            // сперва проверяем валидность
            const msg = validateField(curRef.value, curRef.name);
            curRef.setCustomValidity(msg);
            curRef.reportValidity();
            // затем отправляем на сервер
            if(msg === '') {
                setShouldExecute(true);
            };
        };
    };

    // описание метода отправки данных на сервер (основного) 
    const params_config: [keyof Api<unknown>, any, any, boolean] = useMemo(() => {
        return [
            mode === 'email' ? 'confirmationRequestsEmailCreate': 'confirmationRequestsPhoneCreate',
            mode === 'email' ? { "guid": retrieve(`${mode}-uuid`), email: text }: { "guid": retrieve(`${mode}-guid`), phone: text },
            { headers: { Authorization: `Bearer ${retrieve("token")}` } },
            shouldExecute
        ]
    }, [mode, text, shouldExecute]);
    const [data, isLoading, error] = useApi(...params_config);

    // остановка запроса (основного)
    useEffect(() => {
        if(isLoading) {
            setShouldExecute(false);
        };
    }, [isLoading]);

    // описание метода отправки данных на сервер (вторичного - получение телефона) 
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [getPhone, setGetPhone] = useState<boolean>(false);
    const [dataPhone, isLoadingPhone, errorPhone] = useApi<'confirmationRequestsPhoneNumberCreate', string>(
        'confirmationRequestsPhoneNumberCreate', 
        {},
        { headers: { Authorization: `Bearer ${retrieve("token")}` } },
        getPhone
    );

    // остановка запроса (вторичного - получение телефона)
    useEffect(() => {
        if(isLoadingPhone) {
            setGetPhone(false);
        };
    }, [isLoadingPhone]);
    
    // дальнейшие действия после успешного ответа после основного запроса
    useEffect(() => {
        if(data === '' && !error) {
            mode === 'email' ? navigate('pin'): setGetPhone(true);
        };
    }, [navigate, data, error, mode]);

    // действия после успеха вторичного запроса - получение телефона
    useEffect(() => {
        if(dataPhone && !errorPhone) {
            setPhoneNumber(dataPhone)
        };
    }, [dataPhone, errorPhone])

    return (
        <form className={getStyles(formStyle)} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="inputField">Введите данные</label>
                <Input
                    type={ mode }
                    name={ mode }
                    id='inputField'
                    placeholder={mode === 'email'? 'Электронная почта': 'Телефон'}
                    refLink={ref}
                    value={text}
                    onChange={handleChange}
                    />
            </div>
            <Button showButton={true}>Получить код</Button>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error}/>
            <div>{phoneNumber}</div>
        </form>
    );
};

const formStyle: BlockStyle = {
    container: 'flex flex-col items-center justify-center',
    spacing: 'p-4 space-y-7'
};
