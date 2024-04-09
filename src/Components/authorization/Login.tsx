import React, { useEffect, useRef, useState } from "react";
import { AuthModel } from "../../api/data-contracts";
import useApi from "../../hooks/useApi";
import { IAuthCreate } from "../../types/interfaces/ApiResponses/IAuthCreate";
import { encrypt } from "../../utils/encryption";
import { validateWord } from "../../utils/validation";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { dataToLS } from "../../utils/dataToLS";

export const Login = () => {
  const [user, setUser] = useState<AuthModel>({ username: "", password: "" });
  const [shouldExecute, setShouldExecute] = useState<boolean>(false);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  const [authData, isLoading, authError] = useApi(
    "authCreate",
    user,
    {},
    shouldExecute
  );

  const validateField = (name: keyof AuthModel, message: string): boolean => {
    const inputElement =
      name === "username" ? inputNameRef.current : inputPasswordRef.current;
    if (inputElement) {
      const isValid = validateWord(inputElement.value, name);
      inputElement.setCustomValidity(isValid ? "" : message);
      if (!isValid) {
        inputElement.reportValidity();
      }
      return isValid;
    }
    return false;
  };

  useEffect(() => {
    if (shouldExecute && (authData || authError)) {
      // останавливаем запрос
      setShouldExecute(false);
      // очищаем inputs
      setUser({ username: "", password: "" });
    };
    if (authData) {
      dataToLS(authData);
      navigate('/');
    };
  }, [authData, authError, shouldExecute, navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShouldExecute(false);

    const isValidUsername = validateField(
      "username",
      "Может содержать только латинские буквы и/или цифры. Минимальная длина - 4 символа."
    );

    const isValidPassword = validateField(
      "password",
      "Может содержать любые латинские буквы, цифры и/или спец. символы (!@#$%^&*). Минимальная длина - 4 символа."
    );

    if (isValidUsername && isValidPassword) {
      setShouldExecute(true);
    };
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    event.target.setCustomValidity("");
  };

  return (
    <>
      <div>
        <h1 className={`${getStyles(hStyle)}`}>Вход</h1>
        <form className={`${getStyles(formStyle)}`} onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="username"
              className={`${getStyles(inpitStyle)}`}
              value={user.username || ""}
              onChange={handleChange}
              required
              ref={inputNameRef}
              placeholder="Введите логин"
            />
          </label>
          <label className={`${getStyles(labelStyle)}`}>
            <input
              type="password"
              name="password"
              className={`${getStyles(inpitStyle)}`}
              value={user.password || ""}
              onChange={handleChange}
              required
              ref={inputPasswordRef}
              placeholder="Введите пароль"
            />
          </label>
          {authError ? (
            <span className={`${getStyles(spanErrorStyle)}`}>
              Неверный логин или пароль
            </span>
          ) : null}
          <Button showButton={true} text="Войти" type="submit"/>
        </form>
      </div>
      {isLoading && <p className={`${getStyles(pStyle)}`}>Loading...</p>}
      {authData && !authError && (
        <p className={`${getStyles(pStyle)}`}>Авторизация успешно пройдена.</p>
      )}
    </>
  );
};

const hStyle: BlockStyle = {
  text: "text-center text-2xl",
  spacing: "pb-4",
};

const formStyle: BlockStyle = {
  container: "flex flex-col gap-3",
};

const labelStyle: BlockStyle = {
  spacing: 'mb-3'
};

const inpitStyle: BlockStyle = {
  spacing: "py-2 px-5",
  background: 'bg-gray-200',
  border: 'rounded-3xl',
  text: 'placeholder-gray-700',
  blockSize: 'w-full'
};

const spanErrorStyle: BlockStyle = {
  text: "text-red-500",
};

const pStyle: BlockStyle = {
  text: "text-center",
  spacing: "m-auto my-8",
};

