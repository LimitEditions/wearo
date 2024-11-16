import { useState } from "react";

type IconProps = {
    hoverColor: string;
};

export const IconAnalytic = ({ hoverColor }: IconProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <svg
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14 14V6M10 14V9M6 14V11"
                stroke={isHovered ? hoverColor : "#9095B5"}
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M1 18.4V1.6C1 1.44087 1.06321 1.28826 1.17574 1.17574C1.28826 1.06321 1.44087 1 1.6 1H18.4C18.5591 1 18.7117 1.06321 18.8243 1.17574C18.9368 1.28826 19 1.44087 19 1.6V18.4C19 18.5591 18.9368 18.7117 18.8243 18.8243C18.7117 18.9368 18.5591 19 18.4 19H1.6C1.44087 19 1.28826 18.9368 1.17574 18.8243C1.06321 18.7117 1 18.5591 1 18.4Z"
                stroke={isHovered ? hoverColor : "#9095B5"}
                stroke-width="1.2"
            />
        </svg>
    );
};
