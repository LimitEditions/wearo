import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Profile } from '../../Components/user/Profile/Profile';
import { ConfirmPage } from './ConfirmPage';
import { ScanPage } from './ScanPage';
import { FavoritesPage } from './FavoritesPage';


export const ProfilePage = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Profile />}/>
                <Route path='email/*' element={<ConfirmPage />} />
                <Route path='phone/*' element={<ConfirmPage />} />
                <Route path='scan/' element={<ScanPage />} />
                <Route path='favorites/' element={<FavoritesPage />} />
            </Routes>
        </div>
    );
};
