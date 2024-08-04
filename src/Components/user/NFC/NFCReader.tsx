import React, { useEffect, useState } from 'react'
import { NFCAni } from './NFCAni';
import { decodeNdefRecord } from '../../../utils/decodeNdefRecord';
import { NDEFReadingEvent } from '../../../types/interfaces/INFC';
import { NFCInput } from './NFCInput';
import { checkSerialNo } from '../../../utils/checkSerialNo';
import { useCheckCode } from '../../../hooks/useCheckCode';
import { getCodeFromUrl } from '../../../utils/getCodeFromUrl';


export const NFCReader = ( { setModal }: { setModal: React.Dispatch<React.SetStateAction<"success" | "failure" | null>> }) => {
    // флаг поддержки браузером технологии
    const [isSup, setIsSup] = useState<boolean>(false);
    // сообщение с содержимым
    const [msg, setMsg] = useState<string>('');
    // сообщение об ошибке
    const [error, setError] = useState<string>('');
    // серийный номер метки и код изделия
    const [code, setCode] = useState<string>('');
    
    useEffect(() => {
        if('NDEFReader' in window) {
            setIsSup(true);
            // @ts-ignore
            const ndef = new window.NDEFReader();
            
            ndef.scan().then(() => {
                // наличие этого сообщения нам говорит о том, что устройство готово и можно подносить метку
                setMsg('Началось сканирование...');
                ndef.onreading = (event: NDEFReadingEvent) => {
                    const { message } = event;
                    // если более 1ой записи на метке, прекращаем обработку
                    if (message.records.length > 1) {
                        setError('Ошибка: найдено более одной записи на метке.');
                        setMsg('');
                        return;
                    } else if(!(checkSerialNo(event.serialNumber as string))) {
                        setError('Ошибка: серийный номер метки не зарегистрирован в нашем серисе.');
                        setMsg('');
                        return;
                    };

                    // берем 1ую и единственную запись и обрабатываем
                    const record = message.records[0];
                    const decodedData = decodeNdefRecord(record);
                   
                    setMsg(`Запись с метки: ${decodedData}`);
                    setCode(getCodeFromUrl(decodedData) || '');

                    // обнуляем строку с ошибкой (для повторного чтения)
                    setError('');
                };
            }).catch((e: Error & { name: string }) => {
                // ошибки типа невключенного ридера или его отсутсвия на устройстве
                setError(`Ошибка! - ${e.message}`);
            })
        } else {
            setIsSup(false);
            setError('NFC не поддерживается этим браузером');
        };
    }, []);

    // стейт на отправку данных и результат проверки (хук выдает)
    const [sendCode, setSendCode] = useState<boolean>(false);
    const status = useCheckCode(code, sendCode, setSendCode);
    useEffect(() => {
        // контролируем, чтобы на сервер не уходили пустые запросы
        if (code !== '') {
            setSendCode(true);
        };
        // если запись на метке есть, но ее формат не соответвует
        // выдаем ошибку, не нагружая сервер
        if (msg.includes('Запись с метки:') && code === '') {
            setModal('failure');
            // сбрасываем код, следом сбросится и статус для повтороной проверки
            setCode('');
        };
    }, [msg, code, setModal]);

    // управление модальным окном с результатом
    useEffect(() => {
        setModal(status);
    }, [setModal, status]);

    return (
        <div className='mx-2'>
            <h1 className='text-center text-lg font-semibold'>NFC Reader</h1>
            { isSup && <NFCAni/> }
            { isSup && msg }
            { error && <p className='w-full text-center text-red-700 font-semibold'>{error}</p> }
            { !isSup && <NFCInput setModal={ setModal }/> }
        </div>
    );
};

