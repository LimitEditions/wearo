import React from "react";
import { ISectionsTitle } from "../../types/interfaces/componentsProps/ISectionsTitle";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";


// Компонент для создания названия раздела.
export const SectionsTitle = ({
    title,
    needsClose,
    needTopSpasing = false,
    needBottomSpasing = false,
}: ISectionsTitle) => {
    const getContainerStyles = () => {
        // подбираем нужные стили в зависимости от того, нужна ли кнопка закрытия и отступ сверху/снизу
        const baseStyles = needsClose
            ? 'w-full px-2 py-4 bg-white'
            : 'w-full bg-gray-100 px-2 py-4';
        const spasing = needTopSpasing
            ? 'px-2 pt-4 pb-4'
            : needBottomSpasing
            ? 'px-2 pb-4 pt-4'
            : "";
        return baseStyles + spasing;
    };

    // Откат на станицу назад при нажатии на крестик
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className={getContainerStyles()}>
            <div className='flex justify-between'>
                <h2 className='text-base font-normal uppercase'>{title}</h2>
                <Button
                    onClick={handleClick}
                    className='text-base font-normal uppercase'
                    showButton={needsClose}
                >
                    <img src="/images/closeBtn.png" alt="Крестик для закрытия" />
                </Button>
            </div>
        </div>
    );
};
