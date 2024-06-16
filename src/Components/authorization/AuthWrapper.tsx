import React, { ReactNode } from 'react'
import { BlockStyle } from '../../types/interfaces/IStyles';
import getStyles from '../../utils/getStyles';

export const AuthWrapper = ({children} : {children: ReactNode}) => {
  return (
    <div className={`${getStyles(divStyle)}`}>
        <h1 className={`${getStyles(h1Style)}`}>Wear</h1>
        {children}
    </div>
  );
};

const divStyle: BlockStyle = {
    blockSize: "w-3/4 max-w-80",
    spacing: 'm-auto my-24'
  };

const h1Style: BlockStyle = {
    text: 'text-5xl font-bold uppercase text-center',
    spacing: 'pb-12'
};
