import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/common/Nav';
import { Home } from './pages/Home';
import { Logo } from './Components/common/Logo';
import AuthContext from './context/AuthProvider';
import { UserType } from './api/data-contracts';
import { Authorization } from './pages/Authorization';
import { BlockStyle } from './types/interfaces/IStyles';
import getStyles from './utils/getStyles';
import { WardrobePage } from './pages/WardrobePage';
import { Brand } from './Components/user/Brand';


function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const [role, setRole] = useState<UserType>();

  useEffect(() => {
    setRole(isAuthenticated.type as UserType);
  }, [isAuthenticated]);

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
      <Nav type={ role as UserType}/>
    </div>
  );
};

export default App;

const mainStyle: BlockStyle = {
  container: 'min-h-screen',
  spacing: 'pb-20'
};

