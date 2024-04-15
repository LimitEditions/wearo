import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/common/Nav';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { Logo } from './Components/common/Logo';
import { Wardrobe } from './Components/user/Wardrobe';
import { Profile } from './Components/user/Profile';
import AuthContext from './context/AuthProvider';
import { UserType } from './api/data-contracts';


function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const [role, setRole] = useState<UserType>();

  useEffect(() => {
    setRole(isAuthenticated.type as UserType);
  }, [isAuthenticated]);

  return (
    <>
      <Logo />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/registration' element={ <Registration /> }/>
        <Route path='/wardrobe' element={ <Wardrobe /> }>
          <Route index element={<div>Welcome to the Wardrobe!</div>} /> {/* Отображается, когда нет других совпадений */}
          <Route path='profile' >
            <Route index element={ <Profile/> } /> 
            <Route path='favorites' element={<div>favorites</div>} />
            <Route path='subscriptions' element={<div>subscriptions</div>} />
            <Route path='scans' element={<div>scans</div>} />
          </Route>
        </Route>
        <Route path='/*' element="no content"/> {/*Обработка ошибочных запросов */}
      </Routes>
      <Nav type={ role as UserType}/>
    </>
  );
};

export default App;
