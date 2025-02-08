import { IconNameEnum, IconNameLiteral, iconParams } from "./IconWrapper";


type props = {
  name: IconNameLiteral;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  iconParams: iconParams;
};

const IconSvbSelector = ({
  name,
  iconParams,
  onMouseEnter,
  onMouseLeave,
}: props) => {
  switch (name) {
    case IconNameEnum.IconLike:
      return (
        <svg
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          stroke={
            iconParams.isHover ? iconParams.hoverColor : iconParams.defaultColor
          }
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 8.862C22.0034 10.4007 21.4106 11.881 20.346 12.992C17.905 15.523 15.537 18.162 13.006 20.6C12.425 21.15 11.504 21.13 10.949 20.555L3.65399 12.993C1.44899 10.707 1.44899 7.017 3.65399 4.732C4.17514 4.185 4.80193 3.74952 5.49638 3.45197C6.19084 3.15442 6.93848 3.001 7.69399 3.001C8.44951 3.001 9.19715 3.15442 9.8916 3.45197C10.5861 3.74952 11.2129 4.185 11.734 4.732L12 5.006L12.265 4.732C12.7868 4.18574 13.4137 3.7507 14.108 3.45304C14.8022 3.15539 15.5496 3.00128 16.305 3C17.825 3 19.278 3.624 20.345 4.732C21.41 5.84284 22.0032 7.32311 22 8.862Z"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;

    case IconNameEnum.IconComment:
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
      break;
    case IconNameEnum.IconMenu:
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
            d="M20 12.5C20.1326 12.5 20.2598 12.4473 20.3536 12.3536C20.4473 12.2598 20.5 12.1326 20.5 12C20.5 11.8674 20.4473 11.7402 20.3536 11.6464C20.2598 11.5527 20.1326 11.5 20 11.5C19.8674 11.5 19.7402 11.5527 19.6464 11.6464C19.5527 11.7402 19.5 11.8674 19.5 12C19.5 12.1326 19.5527 12.2598 19.6464 12.3536C19.7402 12.4473 19.8674 12.5 20 12.5ZM12 12.5C12.1326 12.5 12.2598 12.4473 12.3536 12.3536C12.4473 12.2598 12.5 12.1326 12.5 12C12.5 11.8674 12.4473 11.7402 12.3536 11.6464C12.2598 11.5527 12.1326 11.5 12 11.5C11.8674 11.5 11.7402 11.5527 11.6464 11.6464C11.5527 11.7402 11.5 11.8674 11.5 12C11.5 12.1326 11.5527 12.2598 11.6464 12.3536C11.7402 12.4473 11.8674 12.5 12 12.5ZM4 12.5C4.13261 12.5 4.25979 12.4473 4.35355 12.3536C4.44732 12.2598 4.5 12.1326 4.5 12C4.5 11.8674 4.44732 11.7402 4.35355 11.6464C4.25979 11.5527 4.13261 11.5 4 11.5C3.86739 11.5 3.74021 11.5527 3.64645 11.6464C3.55268 11.7402 3.5 11.8674 3.5 12C3.5 12.1326 3.55268 12.2598 3.64645 12.3536C3.74021 12.4473 3.86739 12.5 4 12.5Z"
            fill={iconParams.defaultColor}
            stroke={iconParams.defaultColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;
    case IconNameEnum.IconSettings:
      return (
        <svg
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 14C11.7956 14 12.5587 13.6839 13.1213 13.1213C13.6839 12.5587 14 11.7956 14 11C14 10.2044 13.6839 9.44129 13.1213 8.87868C12.5587 8.31607 11.7956 8 11 8C10.2044 8 9.44129 8.31607 8.87868 8.87868C8.31607 9.44129 8 10.2044 8 11C8 11.7956 8.31607 12.5587 8.87868 13.1213C9.44129 13.6839 10.2044 14 11 14Z"
            stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.622 9.395L17.525 6.745L19 5L17 3L15.265 4.483L12.558 3.37L11.935 1H9.981L9.349 3.401L6.704 4.516L5 3L3 5L4.453 6.789L3.373 9.446L1 10V12L3.401 12.656L4.516 15.3L3 17L5 19L6.791 17.54L9.397 18.612L10 21H12L12.604 18.613L15.255 17.515C15.697 17.832 17 19 17 19L19 17L17.516 15.25L18.614 12.598L21 11.978V10L18.622 9.395Z"
            stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;

    case IconNameEnum.IconManage:
      return (
        <svg
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 21H16"
            stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 16V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H19C19.5304 1 20.0391 1.21071 20.4142 1.58579C20.7893 1.96086 21 2.46957 21 3V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16Z"
            stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
            strokeWidth="1.2"
          />
          <path
            d="M8 9.5L10 11.5L14 7.5"
            stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;

    case IconNameEnum.IconAnalytic:
      return (
        <svg
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 14V6M10 14V9M6 14V11"
            stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 18.4V1.6C1 1.44087 1.06321 1.28826 1.17574 1.17574C1.28826 1.06321 1.44087 1 1.6 1H18.4C18.5591 1 18.7117 1.06321 18.8243 1.17574C18.9368 1.28826 19 1.44087 19 1.6V18.4C19 18.5591 18.9368 18.7117 18.8243 18.8243C18.7117 18.9368 18.5591 19 18.4 19H1.6C1.44087 19 1.28826 18.9368 1.17574 18.8243C1.06321 18.7117 1 18.5591 1 18.4Z"
            stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
            strokeWidth="1.2"
          />
        </svg>
      );
      break;

    case IconNameEnum.IconPromo:
      return (
        <svg
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 6.5C16.134 6.5 17.5 5.182 17.5 2C17.5 5.182 18.857 6.5 22 6.5C18.857 6.5 17.5 7.857 17.5 11C17.5 7.857 16.134 6.5 13 6.5Z"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;

    case IconNameEnum.IconGoods:
      return (
        <svg
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.50765 17H18.4916C18.6337 17.0001 18.7711 16.9497 18.8795 16.858C18.9879 16.7663 19.0602 16.6391 19.0836 16.499L20.8836 5.699C20.898 5.61301 20.8935 5.52491 20.8704 5.44084C20.8472 5.35678 20.8061 5.27876 20.7497 5.21223C20.6934 5.1457 20.6232 5.09224 20.5441 5.05559C20.465 5.01894 20.3788 4.99997 20.2916 5H1.70765C1.62046 4.99997 1.53431 5.01894 1.4552 5.05559C1.37609 5.09224 1.30591 5.1457 1.24956 5.21223C1.19321 5.27876 1.15204 5.35678 1.12892 5.44084C1.10579 5.52491 1.10126 5.61301 1.11565 5.699L2.91565 16.499C2.93908 16.6391 3.01142 16.7663 3.11982 16.858C3.22822 16.9497 3.36564 17.0001 3.50765 17Z"
            stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
            strokeWidth="1.2"
          />
          <path
            d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H14C14.5304 1 15.0391 1.21071 15.4142 1.58579C15.7893 1.96086 16 2.46957 16 3V5"
            stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
            strokeWidth="1.2"
          />
        </svg>
      );
      break;

    case IconNameEnum.IconPosts:
      return (
        <svg
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18.4V12.6C12 12.4409 12.0632 12.2883 12.1757 12.1757C12.2883 12.0632 12.4409 12 12.6 12H18.4C18.5591 12 18.7117 12.0632 18.8243 12.1757C18.9368 12.2883 19 12.4409 19 12.6V18.4C19 18.5591 18.9368 18.7117 18.8243 18.8243C18.7117 18.9368 18.5591 19 18.4 19H12.6C12.4409 19 12.2883 18.9368 12.1757 18.8243C12.0632 18.7117 12 18.5591 12 18.4ZM1 18.4V12.6C1 12.4409 1.06321 12.2883 1.17574 12.1757C1.28826 12.0632 1.44087 12 1.6 12H7.4C7.55913 12 7.71174 12.0632 7.82426 12.1757C7.93679 12.2883 8 12.4409 8 12.6V18.4C8 18.5591 7.93679 18.7117 7.82426 18.8243C7.71174 18.9368 7.55913 19 7.4 19H1.6C1.44087 19 1.28826 18.9368 1.17574 18.8243C1.06321 18.7117 1 18.5591 1 18.4ZM12 7.4V1.6C12 1.44087 12.0632 1.28826 12.1757 1.17574C12.2883 1.06321 12.4409 1 12.6 1H18.4C18.5591 1 18.7117 1.06321 18.8243 1.17574C18.9368 1.28826 19 1.44087 19 1.6V7.4C19 7.55913 18.9368 7.71174 18.8243 7.82426C18.7117 7.93679 18.5591 8 18.4 8H12.6C12.4409 8 12.2883 7.93679 12.1757 7.82426C12.0632 7.71174 12 7.55913 12 7.4ZM1 7.4V1.6C1 1.44087 1.06321 1.28826 1.17574 1.17574C1.28826 1.06321 1.44087 1 1.6 1H7.4C7.55913 1 7.71174 1.06321 7.82426 1.17574C7.93679 1.28826 8 1.44087 8 1.6V7.4C8 7.55913 7.93679 7.71174 7.82426 7.82426C7.71174 7.93679 7.55913 8 7.4 8H1.6C1.44087 8 1.28826 7.93679 1.17574 7.82426C1.06321 7.71174 1 7.55913 1 7.4Z"
            strokeWidth="1.2"
          />
        </svg>
      );
      break;

    case IconNameEnum.IconWardrobe:
      return (
        <svg
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          stroke={iconParams.isHover ? iconParams.hoverColor : "#9095B5"}
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
      break;

    default:
      return <></>;
  }
};
export default IconSvbSelector;