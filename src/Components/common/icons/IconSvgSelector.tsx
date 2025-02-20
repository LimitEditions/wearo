import { lazy, useEffect, useState } from "react";
import { IWrapperIconProps } from "../../../types/interfaces/componentsProps/IWrapperIconProps";
import { IconNameEnum, IconNameLiteral } from "./IconWrapper";

interface  IIconProps  {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  iconParams: IWrapperIconProps;
} 

interface props extends IIconProps {
  name: IconNameLiteral;
};

const IconSvgSelector =  ({
  name,
  iconParams,
  onMouseEnter,
  onMouseLeave,
}: props) => {
  const [Icon, setIcon] = useState<React.FC<IIconProps> | null>(null)
  
  useEffect(() => {
        const IconRecived = lazy(() => import(`../../../assets/icons/${name}`));       
        setIcon(IconRecived)
  }, [name])

  if(Icon) {
    return <Icon onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}
  iconParams={iconParams}/>
  }
  return null;
}

export default IconSvgSelector;
