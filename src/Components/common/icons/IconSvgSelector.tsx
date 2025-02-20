import { lazy, Suspense } from "react";
import { IWrapperIconProps } from "../../../types/interfaces/componentsProps/IWrapperIconProps";
import {  IconNameLiteral } from "./IconWrapper";

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
 
    const IconDynamic = lazy(() => import(`../../../assets/icons/${name}`));       
   
    return <Suspense fallback={null}>
      <IconDynamic onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            iconParams={iconParams}/>
  </Suspense>

}


export default IconSvgSelector;
