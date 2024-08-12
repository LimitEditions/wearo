import React, { useState, useCallback, useRef } from 'react';
import ReactCrop, { Crop, PixelCrop, PercentCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { Button } from './Button';
import useAuth from '../../hooks/useAuth';
import { retrieve } from '../../utils/encryption';
import { FileType } from '../../api/data-contracts';


function ImageCrop({ aspect, setGuidImg }: { aspect: number, setGuidImg: React.Dispatch<React.SetStateAction<string | null>> }) {
    const [src, setSrc] = useState<string | null>(null);
    const [originalSrc, setOriginalSrc] = useState<string | null>(null); // Для хранения исходного изображения
    const [crop, setCrop] = useState<Crop>({
        unit: '%', // Может быть 'px' или '%'
        x: 25,
        y: 25,
        width: 50,
        height: 50,
    });
    const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileType, setFileType] = useState<FileType | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            // преобразуем тип файла под модель которую ожидает сервер
            const fileType = file.type.replace('image/', '').charAt(0).toUpperCase() + file.type.replace('image/', '').slice(1);
            const reader = new FileReader();
            reader.onloadend = () => {
                setSrc(reader.result as string);
                setOriginalSrc(reader.result as string); // Сохранение исходного изображения
                setSelectedFile(file); // сохраняем файл
                setFileType(fileType as FileType); // сохраняем тип файла
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onImageLoad = useCallback((img: HTMLImageElement) => {
        imageRef.current = img;
    }, []);

    const onCropComplete = useCallback((crop: PixelCrop, percentCrop: PercentCrop) => {
        if (imageRef.current && crop.width && crop.height) {
            const image = imageRef.current;
            const canvas = previewCanvasRef.current;
            const ctx = canvas?.getContext('2d');
            if (!canvas || !ctx) return;

            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;

            canvas.width = crop.width;
            canvas.height = crop.height;

            ctx.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height
            );
        }
    }, []);

    const handleSave = () => {
        const canvas = previewCanvasRef.current;
        if (!canvas) return;

        canvas.toBlob(blob => {
            if (blob) {
                const croppedUrl = URL.createObjectURL(blob);
                setCroppedImageUrl(croppedUrl);
                setSrc(null); // Убираем редактируемую область после сохранения
                setSelectedFile(new File([blob], selectedFile!.name, { type: blob.type })); // обновляем файл
            }
        }, 'image/jpeg');
    };

    const handleCancel = () => {
        setSrc(originalSrc); // Восстановление исходного изображения
        setCroppedImageUrl(null);
    };

    const info = useAuth(true);

    // отправка данных на сервер релизована не через хук useApi потому что внутри хука предусмотрено преобразование 
    // params и config в строку и обратно в объект для избежания ререндеринга при применении этого хука, 
    // с случае если в params у нас летит FormData (а это необходимо для предоставления бинарного формата данных), 
    // то при преобразовании все ломается, а если создать исключение в хуке, то мы снова натыкаемся на ререндеринг
    // поэтому тут мы создамем запрос напрямую - не через предоставленные от сваггера методы и не через хук
    const handleUpload = async () => {
        if (selectedFile && fileType) {
            const formData = new FormData();
            formData.append('Name', `mainAvatarGuid - ${info.username}`);
            formData.append('Type', fileType);
            formData.append('File', selectedFile);

            try {
                const token = await retrieve("token");
                const response = await fetch(`/api/Files`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: formData
                });

                if (response.ok) {
                    const result = await response.json();
                    setGuidImg(result);
                } else {
                    const errorData = await response.json();
                    console.error('Error uploading file:', errorData);
                }
            } catch (error) {
                console.error('Ошибка при отправке изображения на сервер:', error);
            }
        } else {
            console.error('File or file type is missing');
        };
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="p-2 border border-gray-300 rounded-md shadow"
                multiple={false}
                disabled={!!croppedImageUrl}
            />
            <div className="w-full flex flex-col space-y-2">
                <canvas ref={previewCanvasRef} style={{ display: 'none' }} />
                <div className='flex justify-end space-x-2'>
                    <Button
                        showButton={!!src}
                        onClick={handleSave}
                        className={getStyles(btnStyle)}
                    >
                        {/* &#10004; Галочка */}
                        <img src={'/images/successful.png'} alt='галочка' />
                    </Button>
                    <Button
                        onClick={handleCancel}
                        className={getStyles(btnStyle)}
                        showButton={!!croppedImageUrl}
                    >
                        {/* &#10006; Крестик */}
                        <img src={'/images/closeBtn.png'} alt='крестик' />
                    </Button>
                </div>
            </div>
            {src && (
                <div className="relative mb-4">
                    <ReactCrop
                        crop={crop}
                        onChange={(newCrop) => setCrop(newCrop)}
                        onComplete={onCropComplete}
                        aspect={aspect}
                    >
                        <img
                            src={src}
                            onLoad={(e) => onImageLoad(e.currentTarget)}
                            alt="Source"
                            className="max-w-full max-h-96"
                        />
                    </ReactCrop>
                </div>
            )}
            {croppedImageUrl && (
                <div className="flex flex-col items-center mt-4">
                    <img src={croppedImageUrl} alt="Cropped" className="max-w-full rounded shadow" />
                    <button
                        onClick={handleUpload}
                        className={getStyles(btnApplyStyle)}
                    >
                        Принять
                    </button>
                </div>
            )}
        </div>
    );
}

export default ImageCrop;

const btnStyle: BlockStyle = {
    background: 'opacity-40 hover:opacity-100'
};

const btnApplyStyle: BlockStyle = {
    container: 'box-content rounded-md',
    spacing: 'px-2 py-1 my-2',
    background: 'bg-gray-400 hover:bg-black',
    text: 'text-white text-md'
};
