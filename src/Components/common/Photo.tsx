import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";

export const Photo = ({
    id,
    styles,
    alt,
}: {
    id: string | null;
    styles: string;
    alt: string;
}) => {
export const Photo = ({
    id,
    styles,
    alt,
}: {
    id: string | null;
    styles: string;
    alt: string;
}) => {
    // Если id не пришел, то устанавливаем дефолтное фото
    const [src, setSrc] = useState(
        id
            ? `${process.env.REACT_APP_URL_REQUEST}/api/Files/${id}`
            : "/images/defaultPhoto.svg"
    );
    // при изменении статуса id
    useEffect(() => {
        if (id) setSrc(`${process.env.REACT_APP_URL_REQUEST}/api/Files/${id}`);
    }, [id]);

    // Если запрос на фото произошел с ошибкой, то устанавливаем дефолтное фото
    const handleImageError = () => {
        setSrc("/images/defaultPhoto.svg");
    };

    return (
        <img
            src={src}
            className={styles}
            alt={alt}
            onError={handleImageError}
        />
    );
};
