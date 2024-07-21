import React, { useEffect, useState } from 'react'
import { NFCAni } from './NFCAni';


interface NDEFReader {
    scan: () => Promise<void>;
    onreading: (event: NDEFReadingEvent) => void;
}
  
interface NDEFReadingEvent extends Event {
    message: NDEFMessage;
}

interface NDEFMessage {
    records: NDEFRecord[];
}

interface NDEFRecord {
    recordType: string; // Тип записи, может быть любой строкой
    mediaType?: string; // MIME-тип данных записи (опционально)
    id?: string; // Идентификатор записи, может быть любой строкой, включая GUID
    data?: object; 
}

declare global {
    interface Window {
        NDEFReader?: {
            new (): NDEFReader;
        };
    }
}

export const NFCReader = () => {
    // флаг поддержки браузером технологии
    const [isSup, setIsSup] = useState<boolean>(false);
    // сообщение с содержимым
    const [msg, setMsg] = useState<string>('');
    // сообщение об ошибке
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if('NDEFReader' in window) {
            setIsSup(true);
            // @ts-ignore
            const ndef = new window.NDEFReader();
            
            ndef.scan().then(() => {
                // наличие этого сообщения нам говорит о том, что устройство готово и можно подносить метку
                setMsg('Началось сканирование...');
                ndef.onreading = (event: NDEFReadingEvent) => {
                    const {message} = event;
                    // если более 1ой записи на метке, прекращаем обработку
                    if (message.records.length > 1) {
                        setError('Ошибка: найдено более одной записи. Невозможно определить, какую из них использовать.');
                        setMsg('');
                        return;
                    };

                    // берем 1ую и единственную запись и обрабатываем
                    const record = message.records[0];
                   
                    setMsg(`Запись с метки: ${JSON.stringify({
                        recordType: record.recordType,
                        mediaType: record.mediaType,
                        id: record.id,
                        data: JSON.stringify(record.data)
                    })}`);

                    // обнуляем строку с ошибкой
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
    }, [])

    return (
        <div>
            <h1 className='text-center text-lg font-semibold'>NFC Reader</h1>
            {isSup && <NFCAni/>}
            {isSup && <p>{msg}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

