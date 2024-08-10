import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Nav } from './Components/common/Nav';
import { Logo } from './Components/common/Logo';
import { BlockStyle } from './types/interfaces/IStyles';
import getStyles from './utils/getStyles';
import AnimatedWrapper from './animation/AnimatedWrapper';
import { endPoints } from './utils/endPoints';
import { v4 as uuidv4 } from 'uuid';


function App() {
    const location = useLocation();

    return (
        <div className={getStyles(mainStyle, [ 'screen' ])}>
            <Logo />
            <div className='screen__wrapper'>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        {
                            endPoints.map(endPoint => {
                                return <Route key={uuidv4()} path={endPoint.path} element={<AnimatedWrapper><endPoint.component /></AnimatedWrapper>}/>
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

const mainStyle: BlockStyle = {
    container: 'relative overflow-hidden min-h-screen',
    text: 'font-sf-pro',
    background: 'bg-gray-200',
};

