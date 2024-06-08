import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Confirm } from '../../Components/user/Profile/Confirm';
import { Pin } from '../../Components/user/Profile/Pin';
import { CallMe } from '../../Components/user/Profile/CallMe';


export const ConfirmPage = () => {
    const location = useLocation();
    const mode: 'email' | 'phone' = location.pathname.includes('email') ? 'email': 'phone';
    const navigate = useNavigate();
    
    return (
        <div>
            <Routes>
                <Route index element={<Confirm mode={ mode } navigate={navigate}/>}/>
                <Route path='/pin' element={mode === 'email' && <Pin navigate={navigate}/>} />
                <Route path='/callme' element={mode === 'phone' && <CallMe navigate={navigate}/>} />
            </Routes>
        </div>
    );
};
