import React, { useEffect, useState } from 'react'
import { Input } from '../../common/InputGroup/Input';
import { Button } from '../../common/Button';
import { checkSerialNo } from '../../../utils/checkSerialNo';
import { useCheckCode } from '../../../hooks/useCheckCode';


// проверка подлинности через инпут
export const NFCInput = ({ setModal }: { setModal: React.Dispatch<React.SetStateAction<"success" | "failure" | null>> }) => {
    const [info, setInfo] = useState<{ serialNo: string, code: string }>({
        serialNo: '',
        code: ''
    });

    // стейт на отправку данных и результат проверки (хук выдает)
    const [sendCode, setSendCode] = useState<boolean>(false);
    const status = useCheckCode(info.code, sendCode, setSendCode);
    useEffect(() => {
        setModal(status);
    }, [status, setModal]);

    // колбэк на отправку данных
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(checkSerialNo(info.serialNo)) {
            setSendCode(true);
        } else {
            setModal('failure');
        };
    };

    // колбек на изменение в инпуте
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    };

    // стейт на управление доступностью кнопки
    const [disabled, setDisabled] = useState<boolean>(true);
    useEffect(() => {
        if (info.serialNo !== '' || info.code !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        };
    }, [info]);

    return (
        <div className='my-4 space-y-2'>
            <p className='w-full p-2 text-sm'>Предлагаем вам воспользоваться мобильным приложением NFC Tools (или аналогом), чтобы проверить подлинность вашего товара. Просто откройте приложение, приложите ваше устройство к метке на продукте и скопируйте уникальный код изделия. Затем введите этот код в специальное поле в нашем приложении, и мы поможем вам подтвердить оригинальность вашего приобретения. Это простой и надежный способ гарантировать качество товара.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="serNo">Серийный номер метки</label>
                <Input name='serNo'onChange={handleChange}/>
                <label htmlFor="code">Уникальный код изделия</label>
                <Input name='code'onChange={handleChange}/>
                <div className='w-1/2 mx-auto mt-4'>
                    <Button showButton={true} type="submit" disabled={disabled}>Проверить</Button>
                </div>
            </form>
        </div>
    );
};
