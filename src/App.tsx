import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/common/Nav';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Registration } from './pages/Registration';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/profile' element={ <Profile /> }/>
        <Route path='/registration' element={ <Registration /> }/>
        <Route path='/*' element="no content"/> {/*Обработка ошибочных запросов */}
      </Routes>
    </>
  );
}

export default App;
