import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/common/Nav';
import { Home } from './pages/Home';
import { Logo } from './Components/common/Logo';
import { Authorization } from './pages/Authorization';
import { BlockStyle } from './types/interfaces/IStyles';
import getStyles from './utils/getStyles';
import { WardrobePage } from './pages/WardrobePage';
import { Brand } from './Components/user/Brand';


function App() {

  return (
    <div className={getStyles(mainStyle)}>
      <Logo />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/auth/*' element={ <Authorization /> }/>
        <Route path='/wardrobe/*' element={ <WardrobePage /> }/>
        <Route path='/brand/:id/' element={<Brand />} />
        <Route path='/*' element="no content"/> Обработка ошибочных запросов
      </Routes>
      <Nav />
    </div>
  );
};

export default App;

const mainStyle: BlockStyle = {
  container: 'min-h-screen',
  spacing: 'pb-20'
};

