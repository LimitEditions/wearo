import { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { retrieve } from '../utils/encryption';
import useApi from './useApi';
import { IAuthMeList } from '../types/interfaces/ApiResponses/IAuthMeList';
import { isTokenExpired } from '../utils/expirationTime';
import { dataToLS } from '../utils/dataToLS';


const useAuth = () => {
  const { isAuthenticated, setAuth } = useContext(AuthContext);
  
  const token = retrieve('token');
  const tokenExpireIn = retrieve('tokenExpireIn');
  const refreshToken = retrieve('refreshToken');
  const refreshTokenExpireIn = retrieve('refreshTokenExpireIn');
  const userGuid = retrieve('guid');

  const shouldRefresh = isTokenExpired(tokenExpireIn) && !isTokenExpired(refreshTokenExpireIn);
  const [shouldReq, setShouldReq] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenExpireIn || refreshTokenExpireIn) {
      setShouldReq(true);
    } else {
      navigate('/login');
    }
  }, [tokenExpireIn, refreshTokenExpireIn, shouldRefresh, setShouldReq, navigate]);

  
  const endPoint = shouldRefresh ? 'authRefreshTokenCreate' : 'authMeList';
  const params = shouldRefresh ? {
    "userGuid": userGuid,
    "refreshToken": refreshToken,    
  } : {
    headers: {Authorization: `Bearer ${token}`}
  };

  const [data, isLoading, error] = useApi(endPoint, params, {}, shouldReq);

  useEffect(() => {
    if (data) {
      if (shouldRefresh) {
        dataToLS(data);
        setShouldReq(false);
      } else {
        const dataInfo = data as IAuthMeList;
        setAuth({
          status: true,
          username: dataInfo.username,
          firstName: dataInfo.firstName,
          secondName: dataInfo.secondName,
          type: dataInfo.type
        });
      }; 
    };
    
  }, [data, shouldRefresh, setShouldReq, setAuth])

  return [isAuthenticated, isLoading];
};

export default useAuth;