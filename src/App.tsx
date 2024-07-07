import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Nav } from './Components/common/Nav';
import { Logo } from './Components/common/Logo';
import { Authorization } from './pages/AuthRegGroup/Authorization';
import { BlockStyle } from './types/interfaces/IStyles';
import getStyles from './utils/getStyles';
import { WardrobePage } from './pages/UserGroup/WardrobePage';
import { BrandPage } from './pages/UserGroup/BrandPage';
import { PostsPage } from './pages/UserGroup/PostsPage';
import { ProductPage } from './pages/UserGroup/ProductPage';
import { ControlPage } from './pages/AdminGroup/Control/ControlPage';
import { SettingsPage } from './pages/AdminGroup/Settings/SettingsPage';
import { PromotionsPage } from './pages/UserGroup/PromotionsPage';
import AnimatedWrapper from './animation/AnimatedWrapper';
import { CollectionPage } from './pages/UserGroup/CollectionPage';
import { ProductsPage } from './pages/UserGroup/ProductsPage';


function App() {
    const location = useLocation();

    return (
        <div className={getStyles(mainStyle)}>
            <Logo />
            <div>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/auth/*" element={<AnimatedWrapper><Authorization /></AnimatedWrapper>} />
                        <Route path="/wardrobe/*" element={<AnimatedWrapper><WardrobePage /></AnimatedWrapper>} />
                        <Route path="/product/:id/*" element={<AnimatedWrapper><ProductPage /></AnimatedWrapper>} />
                        <Route path="/posts/*" element={<AnimatedWrapper><PostsPage /></AnimatedWrapper>} />
                        <Route path="/brand/:id/*" element={<AnimatedWrapper><BrandPage /></AnimatedWrapper>} />
                        <Route path="/promotions/*" element={<AnimatedWrapper><PromotionsPage /></AnimatedWrapper>} />
                        <Route path='/collection/:id' element={<AnimatedWrapper><CollectionPage /></AnimatedWrapper>} />
                        <Route path='/products/:id' element={<AnimatedWrapper><ProductsPage /></AnimatedWrapper>} />

                        <Route path="/options/*" element={<AnimatedWrapper><SettingsPage /></AnimatedWrapper>} />
                        <Route path="/control/*" element={<AnimatedWrapper><ControlPage /></AnimatedWrapper>} />

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
    spacing: 'pb-10',
};

