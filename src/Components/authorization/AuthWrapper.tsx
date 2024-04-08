import React, { Children, ReactNode } from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

interface AuthWrapperProps {
    children: ReactNode
}

export const AuthWrapper = ({children} : AuthWrapperProps) => {
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