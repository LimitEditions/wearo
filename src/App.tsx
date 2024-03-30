import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/common/Nav';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/profile' element={ <Profile /> }/>
        <Route path='/*' element="no content"/> {/*Обработка ошибочных запросов */}
      </Routes>
    </>
  );
}

export default App;
