import { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { retrieve } from '../utils/encryption';
import useApi from './useApi';
import { isTokenExpired } from '../utils/expirationTime';
import { dataToLS } from '../utils/dataToLS';
import { TokenModel } from '../api/data-contracts';


const useAuth = (getData: boolean) => {
  const { isAuth, setAuth } = useContext(AuthContext);
  
  const token = retrieve('token');
  const tokenExpireIn = retrieve('tokenExpireIn');
  const refreshToken = retrieve('refreshToken');
  const refreshTokenExpireIn = retrieve('refreshTokenExpireIn');
  const userGuid = retrieve('guid');

  const shouldRefresh = isTokenExpired(tokenExpireIn) && !isTokenExpired(refreshTokenExpireIn);
  const [shouldReq, setShouldReq] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShouldReq(false);
    if (tokenExpireIn || refreshTokenExpireIn) {
      if(getData) setShouldReq(true);
    } else {
      navigate('/auth');
    };
  }, [tokenExpireIn, refreshTokenExpireIn, setShouldReq, navigate, getData]);

  const endPoint = shouldRefresh ? 'authRefreshTokenCreate' : 'authMeList';
  const params = shouldRefresh ? {
    "userGuid": userGuid,
    "refreshToken": refreshToken,    
  } : {
    headers: {Authorization: `Bearer ${token}`}
  };

  const [data, , error] = useApi(endPoint, params, {}, shouldReq);

  function isTokenModel(data: any): data is TokenModel {
    return 'token' in data || 'refreshToken' in data;
  };

  useEffect(() => {
    if (data && shouldReq ) {
      if (isTokenModel(data)) {
        dataToLS(data);
      } else {
        setAuth({
          status: true,
          ...data
        });
      };  
    } else if (error) {
      navigate('/auth');
    };
  }, [data, error, shouldReq, setAuth, navigate])

  return isAuth;
};

export default useAuth;
