// интерфейсы, необходимые для корректной работы компонентов NFC

export interface NDEFRecord {
    recordType: string; // Тип записи, например, 'url'
    mediaType?: string; // MIME-тип данных записи (опционально)
    id?: string; // Идентификатор записи, может быть любой строкой, включая GUID
    data: DataView; // Полезная нагрузка
};

export interface NDEFMessage {
    records: NDEFRecord[];
};

export interface NDEFReadingEvent extends Event {
    message: NDEFMessage;
    serialNumber?: string;
};

export interface NDEFReader {
    scan: () => Promise<void>;
    onreading: (event: NDEFReadingEvent) => void;
};

declare global {
    interface Window {
        NDEFReader?: {
            new (): NDEFReader;
        };
    }
};
  