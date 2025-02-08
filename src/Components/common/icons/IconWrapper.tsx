import { Fragment, memo, useState } from "react";
import IconSvbSelector from "./IconSvgSelector";

//При добавлении новой иконки, ее надо сюда прописать, и использовать  в селекторе
export enum IconNameEnum {
  IconLike = "IconLike",
  IconComment = "IconComment",
  IconMenu = "IconMenu",
  IconSettings = "IconSettings",
  IconManage = "IconManage",
  IconAnalytic = "IconAnalytic",
  IconPromo = "IconPromo",
  IconGoods = "IconGoods",
  IconPosts = "IconPosts",
  IconWardrobe = "IconWardrobe",
}
export type IconNameLiteral = keyof typeof IconNameEnum;

type IconWrapperProps = {
  iconName: IconNameLiteral;
  params?: {
    hoverable?: boolean;
    defaultColor?: string;
    hoverColor?: string;
  };
};

export type iconParams = {
  isHover: boolean;
  defaultColor: string;
  hoverColor: string;
};

export default  memo(function IconWrapper({ iconName, params }: IconWrapperProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  //   создаем настройки для иконок
  const iconParams = {
    isHover: params?.hoverable !== false && isHovered, //hover-effect можно отключить у иконки, явно указав hoverable свойство равное falce! по умолчанию они доступны
    defaultColor: params?.defaultColor || "black", //Мы устанавливаем black, ведь в возращаемой svg уже может быть вставлено значение не по условию(как и было раньше)
    hoverColor: params?.hoverColor || "black",
  };

  return (
    <IconSvbSelector
      name={iconName}
      iconParams={iconParams}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
})
