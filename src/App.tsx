import React, { useEffect, useState } from 'react';
import useApi from './hooks/useApi';
import { IAuthCreate } from './types/interfaces/ApiResponses/IAuthCreate';
import { Login } from './pages/Login';


function App() {
  // const [data, ,error] = useApi('authRefreshTokenCreate', {body: {
  //     userGuid: retrieve('userGuid'),
  //     refreshToken: retrieve('refreshToken')
  // }}, {}, false)

  const [isAuthenticated, errorAuth] = useAuth();

  console.log(isAuthenticated, errorAuth)

  return (
    <Login />
  );
}

export default App;
