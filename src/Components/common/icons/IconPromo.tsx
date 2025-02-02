import { useState } from "react";

type IconProps = {
  hoverColor: string;
};

export const IconPromo = ({ hoverColor }: IconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <svg
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={isHovered ? hoverColor : "#9095B5"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 6.5C16.134 6.5 17.5 5.182 17.5 2C17.5 5.182 18.857 6.5 22 6.5C18.857 6.5 17.5 7.857 17.5 11C17.5 7.857 16.134 6.5 13 6.5Z"
        strokeWidth="1.2"
        stroke-linejoin="round"
      />
    </svg>
  );
};
