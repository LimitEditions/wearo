import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { retrieve } from '../utils/encryption';
import useApi from './useApi';
import { IAuthMeList } from '../types/interfaces/ApiResponses/IAuthMeList';


const useAuth = () => {
  const { isAuthenticated, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [ data, , error] = useApi('authMeList', {
    headers: {Authorization: `Bearer ${ retrieve('token') }`}
  }, {}, true);

  useEffect(() => {
    if (data) {
      const dataInfo = data as IAuthMeList; //дополнительно типизируем данные приходящие с сервера в зависимости от метода обращения
      setAuth({
        status: true,
        guid: dataInfo.guid,
        username: dataInfo.username,
        firstName: dataInfo.firstName,
        secondName: dataInfo.secondName,
        type: dataInfo.type
      });
    } else if (retrieve('refreshToken')) {
      return;                       // если токен устарел, а refreshToken еще действующий
    } else {
      navigate('login/');           // если оба токена устарели или вообще отсутсвуют
    };
    
  }, [data, error, setAuth, navigate])

  return [isAuthenticated, error];  //возврщаем контекс окружения и состояние ошибки на случай запроса обновления токена
};

export default useAuth;
