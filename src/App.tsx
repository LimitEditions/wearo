import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Nav } from './Components/common/Nav';
import { Logo } from './Components/common/Logo';
import AnimatedWrapper from './animation/AnimatedWrapper';
import { endPoints } from './utils/endPoints';


function App() {
    const location = useLocation();

    return (
        <div className='relative overflow-hidden min-h-screen font-sf-pro bg-white-fon pb-20'>
            <Logo />
            <div>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        {
                            endPoints.map(endPoint => {
                                return <Route key={endPoint.path} path={endPoint.path} element={<AnimatedWrapper><endPoint.component /></AnimatedWrapper>}/>
                            })
                        }
                        <Route path="*" element={<AnimatedWrapper><p>no content</p></AnimatedWrapper>} />
                    </Routes>
                </AnimatePresence>
            </div>
            <Nav />
        </div>
    );
};

export default App;
