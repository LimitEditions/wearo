import React from 'react'
import { Info } from './Info'
import getStyles from '../../utils/getStyles'
import { BlockStyle } from '../../types/interfaces/IStyles'

export const IsLoading = ({ show }: { show: boolean }) => {
  return (
    <Info showInfo={show} msg='Загружаю...' style={getStyles(infoStyle)}/>
  );
};

const infoStyle: BlockStyle = {
    text: 'text-green-700'
};
