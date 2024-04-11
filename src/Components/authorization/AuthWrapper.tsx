import React from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';
import { IAuthWrapperProps } from '../../types/interfaces/componentsProps/IAuthWrapperProps';

export const AuthWrapper = ({children} : IAuthWrapperProps) => {
  return (
    <div className={`${getStyles(divStyle)}`}>
        <h1 className={`${getStyles(h1Style)}`}>Wear</h1>
        {children}
    </div>
  )
}


const divStyle: BlockStyle = {
    blockSize: "w-3/4 max-w-80",
    spacing: 'm-auto my-24'
  };

const h1Style: BlockStyle = {
    text: 'text-5xl font-semibold uppercase text-center',
    spacing: 'pb-12'
}