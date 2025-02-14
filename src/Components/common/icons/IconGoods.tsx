import { useState } from "react";

type IconProps = {
    hoverColor: string;
};

export const IconGoods = ({ hoverColor }: IconProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <svg
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.50765 17H18.4916C18.6337 17.0001 18.7711 16.9497 18.8795 16.858C18.9879 16.7663 19.0602 16.6391 19.0836 16.499L20.8836 5.699C20.898 5.61301 20.8935 5.52491 20.8704 5.44084C20.8472 5.35678 20.8061 5.27876 20.7497 5.21223C20.6934 5.1457 20.6232 5.09224 20.5441 5.05559C20.465 5.01894 20.3788 4.99997 20.2916 5H1.70765C1.62046 4.99997 1.53431 5.01894 1.4552 5.05559C1.37609 5.09224 1.30591 5.1457 1.24956 5.21223C1.19321 5.27876 1.15204 5.35678 1.12892 5.44084C1.10579 5.52491 1.10126 5.61301 1.11565 5.699L2.91565 16.499C2.93908 16.6391 3.01142 16.7663 3.11982 16.858C3.22822 16.9497 3.36564 17.0001 3.50765 17Z"
                stroke={isHovered ? hoverColor : "#9095B5"}
                stroke-width="1.2"
            />
            <path
                d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H14C14.5304 1 15.0391 1.21071 15.4142 1.58579C15.7893 1.96086 16 2.46957 16 3V5"
                stroke={isHovered ? hoverColor : "#9095B5"}
                stroke-width="1.2"
            />
        </svg>
    );
};
