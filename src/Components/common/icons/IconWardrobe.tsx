import { useState } from "react";

type IconProps = {
  hoverColor: string;
};

export const IconWardrobe = ({ hoverColor }: IconProps) => {
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
      stroke={isHovered ? hoverColor : "#9095B5"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6.00047L10.732 1.13447C10.8152 1.09292 10.907 1.07129 11 1.07129C11.093 1.07129 11.1848 1.09292 11.268 1.13447L21 6.00047M19 9.00047V17.0005C19 17.5309 18.7893 18.0396 18.4142 18.4147C18.0391 18.7898 17.5304 19.0005 17 19.0005H5C4.46957 19.0005 3.96086 18.7898 3.58579 18.4147C3.21071 18.0396 3 17.5309 3 17.0005V9.00047"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
