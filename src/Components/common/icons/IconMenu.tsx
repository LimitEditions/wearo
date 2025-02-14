import { useState } from "react";

type IconProps = {
    strokeColor: string;
};

export const IconMenu = ({ strokeColor }: IconProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <svg
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            stroke={strokeColor}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M20 12.5C20.1326 12.5 20.2598 12.4473 20.3536 12.3536C20.4473 12.2598 20.5 12.1326 20.5 12C20.5 11.8674 20.4473 11.7402 20.3536 11.6464C20.2598 11.5527 20.1326 11.5 20 11.5C19.8674 11.5 19.7402 11.5527 19.6464 11.6464C19.5527 11.7402 19.5 11.8674 19.5 12C19.5 12.1326 19.5527 12.2598 19.6464 12.3536C19.7402 12.4473 19.8674 12.5 20 12.5ZM12 12.5C12.1326 12.5 12.2598 12.4473 12.3536 12.3536C12.4473 12.2598 12.5 12.1326 12.5 12C12.5 11.8674 12.4473 11.7402 12.3536 11.6464C12.2598 11.5527 12.1326 11.5 12 11.5C11.8674 11.5 11.7402 11.5527 11.6464 11.6464C11.5527 11.7402 11.5 11.8674 11.5 12C11.5 12.1326 11.5527 12.2598 11.6464 12.3536C11.7402 12.4473 11.8674 12.5 12 12.5ZM4 12.5C4.13261 12.5 4.25979 12.4473 4.35355 12.3536C4.44732 12.2598 4.5 12.1326 4.5 12C4.5 11.8674 4.44732 11.7402 4.35355 11.6464C4.25979 11.5527 4.13261 11.5 4 11.5C3.86739 11.5 3.74021 11.5527 3.64645 11.6464C3.55268 11.7402 3.5 11.8674 3.5 12C3.5 12.1326 3.55268 12.2598 3.64645 12.3536C3.74021 12.4473 3.86739 12.5 4 12.5Z" 
                fill={strokeColor}
                stroke={strokeColor} 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
        </svg>
    );
};
