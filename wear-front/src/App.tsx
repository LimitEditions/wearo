import React, { useEffect, useState } from 'react';
import useApi from './hooks/useApi.tsx';
import { IAuthCreate } from './types/interfaces/ApiResponses/IAuthCreate.ts';


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

    console.log(token);
    console.log(isLoading);
    console.log(error);
  }, [data, token, isLoading, error])

  return (
    <h1>Hi</h1>
  );
}

export default App;
