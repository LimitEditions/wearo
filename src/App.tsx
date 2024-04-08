import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/common/Nav';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Authorization } from './pages/Authorization';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/auth' element={ <Authorization /> }/>
        <Route path='/login' element={ <LoginPage /> }/>
        <Route path='/profile' element={ <Profile /> }/>
        <Route path='/registration' element={ <RegistrationPage /> }/>
        <Route path='/*' element="no content"/> {/*Обработка ошибочных запросов */}
      </Routes>
    </>
  );
}

export default App;
