import React, { useEffect, useMemo, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { NavigateFunction } from 'react-router-dom';
import { Input } from '../../common/InputGroup/Input';
import { Button } from '../../common/Button';
import { BlockStyle } from '../../../types/interfaces/IStyles';
import getStyles from '../../../utils/getStyles';
import { validateField } from '../../../utils/validation';
import useApi from '../../../hooks/useApi';
import { encrypt, retrieve } from '../../../utils/encryption';
import { IsLoading } from '../../common/InfoGroup/IsLoading';
import { Api } from '../../../api/Api';
import { ErrorReq } from '../../common/InfoGroup/ErrorReq';
import withMask from '../../common/hoc/withMask';
import useAuth from '../../../hooks/useAuth';


const InputWithMask = withMask(Input);

export const Confirm = ({ mode, navigate }: { mode?: string; navigate: NavigateFunction }) => {
    const isAuth = useAuth(true);
    // создание уникального id запроса и внесение его в LS
    useEffect(() => {
        const key = `${mode}-guid`;
        if (!localStorage.getItem(key)) {
            const newGuid = uuidv4();
            encrypt(key, newGuid);
        };
    }, [mode]);

    const [text, setText] = useState<string>('');

    const phoneMask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    const mask = mode === 'phone' ? phoneMask: undefined;

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

    // описание метода отправки данных на сервер
    const guid = retrieve(`${mode}-guid`);
    const token = useMemo(() => retrieve("token"), []);
    const params_config: [keyof Api<unknown>, any, any, boolean] = [
        mode === 'email' ? 'confirmationRequestsEmailCreate': 'confirmationRequestsPhoneCreate',
        mode === 'email' ? { "guid": guid, email: text } : { "guid": guid, phone: text },
        { headers: { Authorization: `Bearer ${token}` } },
        shouldExecute
    ];
 
    const [data, isLoading, error] = useApi(...params_config);

    // остановка запроса
    useEffect(() => {
        if(isLoading) {
            setShouldExecute(false);
        };
    }, [isLoading]);

    // дальнейшие действия после успешного ответа после основного запроса
    useEffect(() => {
        if(data === '' && !error) {
            mode === 'email' ? navigate('pin'): navigate('callme');
        };
    }, [navigate, data, error, mode]);

    return (
        <form className={getStyles(formStyle)} onSubmit={handleSubmit}>
            <div>
                { mode === 'phone' ?
                    <>
                        <h3 className='uppercase mb-2'>изменение телефона</h3>
                        <label htmlFor="phone">Укажите номер телефона</label>
                        <InputWithMask
                            type={ mode }
                            name={ mode }
                            id='phone'
                            placeholder='Телефон'
                            ref={ref}
                            value={text}
                            onChange={handleChange}
                            mask={mask}
                        /> 
                    </>
                    :
                    <>
                        <h3 className='uppercase mb-2'>изменение почты</h3>
                        {isAuth.userInfo?.email && <div className='text-gray-400 text-sm'>Текущая почта {isAuth.userInfo?.email}</div>}
                        <label htmlFor="email">Укажите адрес электронной почты</label>
                        <Input
                            type={ mode }
                            name={ mode }
                            id='email'
                            placeholder='Электронная почта'
                            reflink={ref}
                            value={text}
                            onChange={handleChange}
                        />
                    </>
                }
            </div>
            <div className='w-1/2 m-auto'>
                <Button showButton={true}>Получить { mode === 'email'? 'код': 'номер телефона' }</Button>
            </div>
            <IsLoading show={isLoading} />
            <ErrorReq show={!!error} error={error}/>
        </form>
    );
};

const formStyle: BlockStyle = {
    container: 'flex flex-col items-start justify-center',
    spacing: 'px-4 py-5 space-y-3'
};
