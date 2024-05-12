import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Profile } from '../../Components/user/Profile';
import { ConfirmPage } from './ConfirmPage';

export const ProfilePage = () => {
  return (
    <div>
        <Routes>
            <Route index element={<Profile />}/>
            <Route path='/settings/:mode/*' element={<ConfirmPage />} />

        </Routes>
    </div>
  );
};
