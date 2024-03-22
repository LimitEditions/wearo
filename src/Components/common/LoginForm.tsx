import React, { useEffect, useState } from "react";
import getStyles from "../../utils/getStyles";
import { AuthModel } from "../../api/data-contracts";
import { BlockStyle } from "../../types/interfaces/IStyles";
import useApi from "../../hooks/useApi";
import { IAuthCreate } from "../../types/interfaces/ApiResponses/IAuthCreate";
import { encrypt } from "../../utils/encryption";
import { validatePassword, validateUsername } from "../../utils/validation";

export const LoginForm = () => {
  const [user, setUser] = useState<AuthModel>({ username: "", password: "" });
  const [shouldExecute, setShouldExecute] = useState<boolean>(false);
  const [isValidUserName, setIsValidUserName] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [authData, isLoading, authError] = useApi(
    "authCreate",
    user,
    {},
    shouldExecute
  );

  useEffect(() => {
    if (shouldExecute && (authData || authError)) {
      // останавливаем запрос
      setShouldExecute(false);
      // очищаем inputs
      setUser({ username: "", password: "" });
    }
    if (authData) {
      const tokendata = authData as IAuthCreate; //дополнительно типизируем данные приходящие с сервера в зависимости от метода обращения
      encrypt("token", tokendata.token);
      encrypt("refreshToken", tokendata.refreshToken);
    }
  }, [authData, authError, shouldExecute]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // проверка валидности логина и пароля
    if (validateUsername(user.username) && validatePassword(user.password)) {
      setShouldExecute(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // валидация данных после потери фокуса
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === ''){
      setIsValidPassword(true);
      return;
    }

    if (event.target.name === "username") {
      setIsValidUserName(validateUsername(event.target.value))
    }

    if (event.target.name === "password") {
      setIsValidPassword(validatePassword(event.target.value))
    }
  };

  return (
    <>
      <div className={`${getStyles(containerStyle)}`}>
        <h1 className={`${getStyles(hStyle)}`}>Log in</h1>
        <form className={`${getStyles(formStyle)}`} onSubmit={handleSubmit}>
          <label className={`${getStyles(labelStyle)}`}>
            <span>Логин:</span>
            {!isValidUserName && (
              <span className={`${getStyles(spanNotValid)}`}>
                Не должен содержать пробелы и нелатинские буквы
              </span>
            )}
            <input
              type="text"
              name="username"
              className={`${getStyles(inpitStyle)}`}
              value={user.username || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </label>
          <label className={`${getStyles(labelStyle)}`}>
            <span>Пароль:</span>
            {!isValidPassword && (
              <span className={`${getStyles(spanNotValid)}`}>
                Должен быть не менее 4-х символов, без пробелов, может содержать
                любые латинские буквы, цифры и спец. символы
              </span>
            )}
            <input
              type="password"
              name="password"
              className={`${getStyles(inpitStyle)}`}
              value={user.password || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
          </label>
          {authError ? (
            <span className={`${getStyles(spanErrorStyle)}`}>
              Неверные учетные данные
            </span>
          ) : null}
          <button type="submit" className={`${getStyles(btnStyle)}`}>
            Log in
          </button>
        </form>
      </div>
      {isLoading && <p className={`${getStyles(pStyle)}`}>Loading...</p>}
      {authData && !authError && (
        <p className={`${getStyles(pStyle)}`}>Авторизация успешно пройдена.</p>
      )}
    </>
  );
};

const containerStyle: BlockStyle = {
  blockSize: "w-1/4",
  spacing: "m-auto mt-8 px-6 py-8",
  background: "bg-gray-100",
  transitionsAnimation: "shadow-lg",
};

const hStyle: BlockStyle = {
  text: "text-center text-xl",
  spacing: "pb-4",
};

const formStyle: BlockStyle = {
  container: "flex flex-col gap-6",
};

const labelStyle: BlockStyle = {
  container: "flex flex-col gap-2",
};

const inpitStyle: BlockStyle = {
  spacing: "p-2",
};

const btnStyle: BlockStyle = {
  text: "text-white",
  background: "bg-black",
  spacing: "py-2 px-4",
  container: "self-center",
  border: "rounded-3xl",
};

const spanErrorStyle: BlockStyle = {
  text: "text-red-500",
};

const spanNotValid: BlockStyle = {
  text: "text-red-500 text-xs",
};

const pStyle: BlockStyle = {
  text: "text-center",
  spacing: "m-auto my-8",
};
