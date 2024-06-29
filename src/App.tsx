import React from 'react';
import { Route, Routes } from 'react-router-dom';
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


function App() {

    return (
        <div className={getStyles(mainStyle)}>
            <Logo />
            <div className={getStyles(contentStyle)}>
                <Routes>
                    {/* <Route path='/' element={ <Home /> }/> */}
                    <Route path='/auth/*' element={ <Authorization /> }/>

                    <Route path='/wardrobe/*' element={ <WardrobePage /> }/>
                    <Route path='/product/:id/*' element={<ProductPage />} />
                    <Route path='/posts/*' element={ <PostsPage /> }/>
                    <Route path='/brand/:id/*' element={<BrandPage />} />
                    <Route path='/promotions/*' element={<PromotionsPage />} />
                    
                    <Route path='/options/*' element={ <SettingsPage /> }/>
                    <Route path='/control/*' element={ <ControlPage /> }/>

                    <Route path='/*' element="no content"/> Обработка ошибочных запросов
                </Routes>
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
    spacing: 'pt-4 pb-10 px-0'
};

const contentStyle:BlockStyle = {
    spacing: 'my-12',
};
