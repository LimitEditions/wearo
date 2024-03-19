import { useState } from 'react';

interface User {
  username: string;
  password: string;
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    if (username === 'user' && password === 'password') {
      setUser({ username, password });
    } else {
      throw new Error('Неверные учетные данные');
    }
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
