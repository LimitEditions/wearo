import React, { useState } from 'react'

export const Photo = ({id, styles, alt}: {id: string | null, styles: string, alt: string}) => {
    // Если id не пришел, то устанавливаем дефолтное фото
    const [src, setSrc] = useState(id ? `http://vne.su:8081/api/Files/${id}` : '/images/photonone.png');

    // Если запрос на фото произошел с ошибкой, то устанавливаем дефолтное фото
    const handleImageError = () => {
        setSrc('/images/photonone.png');
    };

    return (
        <img src={src} className={styles} alt={alt} onError={handleImageError} />
    );
}
