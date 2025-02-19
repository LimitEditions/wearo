import Icons from "../../../assets/icons";
import { IWrapperIconProps } from "../../../types/interfaces/componentsProps/IWrapperIconProps";
import { IconNameEnum, IconNameLiteral } from "./IconWrapper";

type props = {
  name: IconNameLiteral;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  iconParams: IWrapperIconProps;
};

const IconSvgSelector = ({
  name,
  iconParams,
  onMouseEnter,
  onMouseLeave,
}: props) => {
  switch (name) {
    case IconNameEnum.IconLike:
      return (
        <Icons.IconLike
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;

    case IconNameEnum.IconComment:
      return (
        <Icons.IconComment
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;
    case IconNameEnum.IconMenu:
      return (
        <Icons.IconMenu
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;
    case IconNameEnum.IconSettings:
      return (
        <Icons.IconSettings
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;

    case IconNameEnum.IconManage:
      return (
        <Icons.IconManage
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;

    case IconNameEnum.IconAnalytic:
      return (
        <Icons.IconAnalytic
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;

    case IconNameEnum.IconPromo:
      return (
        <Icons.IconPromo
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;

    case IconNameEnum.IconGoods:
      return (
        <Icons.IconGoods
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;

    case IconNameEnum.IconPosts:
      return (
        <Icons.IconPosts
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;

    case IconNameEnum.IconWardrobe:
      return (
        <Icons.IconWardrobe
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          iconParams={iconParams}
        />
      );
      break;

    default:
      return <></>;
  }
};
export default IconSvgSelector;
