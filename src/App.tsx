import React from "react";
import { Login } from "./pages/Login";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Registration } from "./pages/Registration";

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/login' element={ <Login /> }/>
      <Route path='/registration' element={ <Registration /> }/>
      <Route path='/profile' element={ <Profile /> }/>
      <Route path='/*' element="no content"/> {/*Обработка ошибочных запросов */}
    </Routes>
  );
}

export default App;
