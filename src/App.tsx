import React, { useEffect, useState } from 'react';
import useApi from './hooks/useApi';
import { IAuthCreate } from './types/interfaces/ApiResponses/IAuthCreate';
import { Login } from './pages/Login';


function App() {
  const [data, isLoading, error] = useApi('authCreate', {
      username: 'admin',
      password: 'admin'
  })

  const [token, setToken] = useState<string |null>(null);

  useEffect(() => {
    if(data) {
      const tokendata = data as IAuthCreate; //дополнительно типизируем данные приходящие с сервера в зависимости от метода обращения
      setToken(tokendata['token'])
    }
  }, [data, token, isLoading, error])

  return (
    <Login />
  );
}

export default App;
