import React from 'react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Confirm } from '../../Components/user/Confirm';
import { Pin } from '../../Components/user/Pin';

export const ConfirmPage = () => {
    const { mode } = useParams();
    const navigate = useNavigate();
    
    return (
        <div>
            <Routes>
                <Route index element={<Confirm mode={ mode } navigate={navigate}/>}/>
                <Route path='/pin' element={<Pin navigate={navigate}/>} />
            </Routes>
        </div>
    );
};
