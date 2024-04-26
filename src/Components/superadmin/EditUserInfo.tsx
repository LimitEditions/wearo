import React from 'react'
import { useLocation } from 'react-router-dom';

export const EditUserInfo = () => {
  const {state} = useLocation()
  console.log(state);
  
  return (
    <div>EditUserInfo</div>
  )
}
