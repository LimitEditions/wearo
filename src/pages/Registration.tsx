import React, { useEffect, useRef, useState } from "react";
import { CreateUserModel } from "../api/data-contracts";
import useApi from "../hooks/useApi";
import { validateWord } from "../utils/validation";
import getStyles from "../utils/getStyles";
import { BlockStyle } from "../types/interfaces/IStyles";
import { useNavigate } from "react-router";

export const Registration = () => {
  const [user, setUser] = useState<CreateUserModel>({
    username: "",
    password: "",
    firstName: "",
    secondName: "",
  });
  const [shouldExecute, setShouldExecute] = useState<boolean>(false);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()
  const [regData, isLoading, regError] = useApi(
    "usersCreate",
    user,
    {},
    shouldExecute
  );

  const validateField = (
    name: "userName" | "password",
    message: string
  ): boolean => {
    const inputElement =
      name === "userName" ? inputNameRef.current : inputPasswordRef.current;
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShouldExecute(false);

    const isValidUsername = validateField(
      "userName",
      "Может содержать только латинские буквы и/или цифры. Минимальная длина - 4 символа."
    );

    const isValidPassword = validateField(
      "password",
      "Может содержать любые латинские буквы, цифры и/или спец. символы (!@#$%^&*). Минимальная длина - 4 символа."
    );

    if (isValidUsername && isValidPassword) {
      setShouldExecute(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    event.target.setCustomValidity("");
  };

  return (
    <>
      <div className={`${getStyles(containerStyle)}`}>
        <h1 className={`${getStyles(hStyle)}`}>Регистрация</h1>
        <form className={`${getStyles(formStyle)}`} onSubmit={handleSubmit}>
          <label className={`${getStyles(labelStyle)}`}>
            <span>Логин:</span>
            <input
              type="text"
              name="userName"
              className={`${getStyles(inpitStyle)}`}
              value={user.username || ""}
              onChange={handleChange}
              required
              ref={inputNameRef}
            />
          </label>
          <label className={`${getStyles(labelStyle)}`}>
            <span>Пароль:</span>
            <input
              type="password"
              name="password"
              className={`${getStyles(inpitStyle)}`}
              value={user.password || ""}
              onChange={handleChange}
              required
              ref={inputPasswordRef}
            />
          </label>
          <label className={`${getStyles(labelStyle)}`}>
            <span>Имя:</span>
            <input
              type="text"
              name="firstName"
              className={`${getStyles(inpitStyle)}`}
              value={user.firstName || ""}
              onChange={handleChange}
              required
            />
          </label>
          <label className={`${getStyles(labelStyle)}`}>
            <span>Фамилия:</span>
            <input
              type="text"
              name="secondName"
              className={`${getStyles(inpitStyle)}`}
              value={user.secondName || ""}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className={`${getStyles(btnStyle)}`}>
            Зарегистрироваться
          </button>
        </form>
      </div>
      {isLoading && <p className={`${getStyles(pStyle)}`}>Loading...</p>}
      {regData && !regError && (
        <p className={`${getStyles(pStyle)}`}>Авторизация успешно пройдена.</p>
      )}
      {regError ? (
        <span className={`${getStyles(spanErrorStyle)}`}>
          Пользователь с таким именем уже существует.
        </span>
      ) : null}
    </>
  );
};

const containerStyle: BlockStyle = {
  blockSize: "w-1/4",
  spacing: "m-auto mt-8 mb-10 px-6 py-8",
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
  text: "text-red-500 text-center",
  container: "block",
  spacing: "mb-10"
};

const pStyle: BlockStyle = {
  text: "text-center",
  spacing: "m-auto my-8",
};
