import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Profile } from '../../Components/user/Profile';
import { ConfirmPage } from './ConfirmPage';
import { PromotionsPage } from './PromotionsPage';

export const ProfilePage = () => {
  return (
    <div>
        <Routes>
            <Route index element={<Profile />}/>
            <Route path='email/*' element={<ConfirmPage />} />
            <Route path='phone/*' element={<ConfirmPage />} />
            <Route path='promotions/*' element={<PromotionsPage />} />
        </Routes>
    </div>
  );
};
