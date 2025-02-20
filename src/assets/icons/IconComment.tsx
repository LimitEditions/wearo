import { IIconProps } from "../../types/interfaces/componentsProps/IIconProps";

const IconComment = ({ iconParams, onMouseEnter, onMouseLeave }: IIconProps) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      stroke={iconParams.defaultColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19C14.9707 19 19 14.9707 19 10C19 5.0293 14.9707 1 10 1C5.0293 1 1 5.0293 1 10C1 11.6389 1.4383 13.177 2.2042 14.5L1.45 18.55L5.5 17.7958C6.86759 18.5869 8.42006 19.0024 10 19Z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default IconComment;
