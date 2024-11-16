import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IItemProps } from "../../../types/interfaces/IItemProps";
import { Arrow } from "../Arrow";

const Item: React.FC<IItemProps> = ({ path, children, arrow = true }) => {
    // const location = useLocation();
    const navigate = useNavigate();
    // Если задан путь, то по клику будет осуществлен переход на другую страницу
    const handleClick = useCallback(() => {
        if (path) {
            // navigate(location.pathname + path);
            navigate(path);
        }
    }, [path, navigate]);

    // Если указан путь, то добавляем hover-эффекты
    const containerStyle = path ? `${divStyle} ${hoverStyle}` : divStyle;

    return (
        <div className={containerStyle} onClick={handleClick}>
            {children}
            {arrow && <Arrow direct="right" />}
        </div>
    );
};

export default Item;

const divStyle =
    "relative flex items-center justify-between border-t border-gray-300 py-4 px-2 uppercase space-x-4";

const hoverStyle = "cursor-pointer focus:outline-none hover:animate-pulse";
