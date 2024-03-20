// import React, { useContext, useEffect, useState } from 'react';
// import useApi from './hooks/useApi';
import { LoginForm } from './Components/common/LoginForm';
import useAuth from './hooks/useAuth'
// import { retrieve } from './utils/encryption';


function App() {
  // const [data, ,error] = useApi('authRefreshTokenCreate', {body: {
  //     userGuid: retrieve('userGuid'),
  //     refreshToken: retrieve('refreshToken')
  // }}, {}, false)

  const [isAuthenticated, errorAuth] = useAuth();

  console.log(isAuthenticated, errorAuth)

  return (
    <LoginForm />
  );
}

export default App;
