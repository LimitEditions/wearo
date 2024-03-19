import CryptoJS from 'crypto-js';

// это условный пароль или кодовое значение,в дальнейшем для большей 
// надежности можно его занести в .env в качестве переменной окружения, 
// а перед деплоем в секреты репозотория
const secret = 'sN8s@!39fsJWk*1p'; 

export const encrypt = (key: string, data: any): void => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString();
  localStorage.setItem(key, encryptedData);
};

export const retrieve = (key: string): any => {
  const encryptedData = localStorage.getItem(key);
  if (encryptedData) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secret);
    const jsonString = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(jsonString);
  }
  return null;
};
