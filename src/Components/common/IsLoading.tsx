import React from 'react'
import { Info } from './Info'

export const IsLoading = ({ show }: { show: boolean }) => {
  return (
    <Info showInfo={show} msg='Загружаю...' className='text-green-700'/>
  );
};
