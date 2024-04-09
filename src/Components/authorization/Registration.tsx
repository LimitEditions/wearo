import React, { useEffect, useRef, useState } from "react";
import { CreateUserModel } from "../../api/data-contracts";
import useApi from "../../hooks/useApi";
import { validateWord } from "../../utils/validation";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { useNavigate } from "react-router";
import { Button } from "../common/Button";

export const Registration = () => {
  const [user, setUser] = useState<CreateUserModel>({
    username: "",
    password: "",
    firstName: "",
    secondName: "",
  });
  const [shouldExecute, setShouldExecute] = useState<boolean>(false);
  const [shouldExecuteUser, setShouldExecuteUser] = useState<boolean>(false);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  const [regData, isLoading, regError] = useApi(
    "usersCreate",
    user,
    {},
    shouldExecute
  );
  const [userData, isLoadingUser, userError] = useApi(
    "usersCheckDetail",
    user.username,
    {},
    shouldExecuteUser
  );

  const validateField = (
    name: "username" | "password",
    message: string
  ): boolean => {
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
    if (shouldExecute && (regData || regError)) {
      // останавливаем запрос
      setShouldExecute(false);
      // очищаем inputs
      setUser({ username: "", password: "", firstName: "", secondName: "" });
    }
    if (regData) {
        console.log(regData);
        navigate('/login')
    }
  }, [regData, regError, shouldExecute]);

  useEffect(() => {
    if (shouldExecuteUser && (typeof(userData) === 'boolean' || userError)) {
      setShouldExecuteUser(false);
    }
    if (typeof(userData) === 'boolean') {
      const inputElement = inputNameRef.current;
      if (inputElement) {
        inputElement.setCustomValidity(userData ? "" : 'Пользователь с таким именем уже существует.');
        inputElement.reportValidity();
      }
    }
  }, [userData, userError, shouldExecuteUser]);

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

    if (isValidUsername && isValidPassword && userData) {
      setShouldExecute(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    event.target.setCustomValidity("");
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShouldExecuteUser(false);
    if (event.target.value && validateWord(event.target.value, 'username')){
      setShouldExecuteUser(true)
    }
  }

  return (
    <>
      <div>
        <h1 className={`${getStyles(hStyle)}`}>Регистрация</h1>
        <form className={`${getStyles(formStyle)}`} onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="username"
              className={`${getStyles(inpitStyle)}`}
              value={user.username || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              ref={inputNameRef}
              placeholder="Введите логин"
            />
          </label>
          <label>
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
          <label>
            <input
              type="text"
              name="firstName"
              className={`${getStyles(inpitStyle)}`}
              value={user.firstName || ""}
              onChange={handleChange}
              required
              placeholder="Введите имя"
            />
          </label>
          <label className={`${getStyles(labelStyle)}`}>
            <input
              type="text"
              name="secondName"
              className={`${getStyles(inpitStyle)}`}
              value={user.secondName || ""}
              onChange={handleChange}
              required
              placeholder="Введите фамилию"
            />
          </label>
          <Button
            showButton={true}
            text="Зарегистироваться"
            type={'submit'}
          />
        </form>
      </div>
      {isLoading && <p className={`${getStyles(pStyle)}`}>Loading...</p>}
      {regData && !regError && (
        <p className={`${getStyles(pStyle)}`}>Авторизация успешно пройдена.</p>
      )}
      {regError ? (
        <span className={`${getStyles(spanErrorStyle)}`}>
          Ошибка регистрации. Повторите попытку позже.
        </span>
      ) : null}
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
  text: "text-red-500 text-center",
  container: "block",
  spacing: "mb-10"
};

const pStyle: BlockStyle = {
  text: "text-center",
  spacing: "m-auto my-8",
};
