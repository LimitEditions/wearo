import { NDEFRecord } from "../types/interfaces/INFC";


// служебная утилита для декодирования данных с nfc-метки
export function decodeNdefRecord(record: NDEFRecord): string {
    if (!record) return 'no data';
    const textDecoder = new TextDecoder('utf-8');
    const payload = new Uint8Array(record.data.buffer, record.data.byteOffset, record.data.byteLength);

    if (payload.length === 0) {
        return 'Empty payload';
    };

    if (record.recordType === 'url') {
        const url = textDecoder.decode(payload);
        return url;
    };

    return textDecoder.decode(payload);
};
