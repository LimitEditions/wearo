import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/common/Nav';
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { Logo } from './Components/common/Logo';
import { Wardrobe } from './Components/user/Wardrobe';
import { Profile } from './Components/user/Profile';
import AuthContext from './context/AuthProvider';
import { UserType } from './api/data-contracts';
import { SuperadminSettingsPage } from './Components/superadmin/SuperadminSettingsPage';
import { Authorization } from './pages/Authorization';
import { AddAdminPage } from './Components/superadmin/AddAdminPage';
import { EmployeeDetails } from './Components/common/EmployeeDetails';
import { SuperadminControlPage } from './Components/superadmin/SuperadminControlPage';
import { BrandsRequestsPage } from './Components/superadmin/BrandsRequestsPage';
import { UsersPage } from './Components/superadmin/UsersPage';
import { BrandsPage } from './Components/superadmin/BrandsPage';
import { PostsPage } from './Components/superadmin/PostsPage';
import { BrandRequestInfo } from './Components/superadmin/BrandRequestInfo';
import { UserInfo } from './Components/superadmin/UserInfo';


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
        <Route path='/auth' element={ <Authorization /> }/>
        <Route path='/login' element={ <LoginPage /> }/>
        <Route path='/registration' element={ <RegistrationPage /> }/>
        {role === 'SuperAdmin' && <Route path='/options'>
          <Route index element={ <SuperadminSettingsPage/> } /> 
          <Route path='addadmin' element={ <AddAdminPage /> }/>
          <Route path="admin/:id" element={<EmployeeDetails />} />
        </Route>}
        {role === 'SuperAdmin' && <Route path='/control'>
          <Route index element={ <SuperadminControlPage/> } /> 
          <Route path='requests' element={ <BrandsRequestsPage /> }/>
          <Route path="requests/:id" element={<BrandRequestInfo />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserInfo />} />
          <Route path="brands" element={<BrandsPage />} />
          <Route path="posts" element={<PostsPage />} />
        </Route>} 
        <Route path='/wardrobe' element={ <Wardrobe /> }>
          <Route index element={<div>Welcome to the Wardrobe!</div>} /> {/* Отображается, когда нет других совпадений */}
          <Route path='profile' >
            <Route index element={ <Profile/> } /> 
            <Route path='favorites' element={<div>favorites</div>} />
            <Route path='subscriptions' element={<div>subscriptions</div>} />
            <Route path='scans' element={<div>scans</div>} />
          </Route>
        </Route>
        <Route path='/*' element="no content"/> Обработка ошибочных запросов
      </Routes>
      <Nav type={ role as UserType}/>
    </>
  );
};

export default App;
