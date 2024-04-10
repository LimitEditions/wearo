import React, { useEffect, useState } from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import useApi from "../../hooks/useApi";
import { validateWord } from "../../utils/validation";
import { Button } from "../common/Button";
import { IRegistrationFormProps } from "../../types/interfaces/IRegistrationForm";
import { Input } from "../common/Input";

export const RegistrationForm = ({
  user,
  onSubmit,
  onChange,
  inputNameRef,
  inputPasswordRef,
  data,
  error,
  isLoading,
}: IRegistrationFormProps) => {
  const [shouldExecuteUser, setShouldExecuteUser] = useState<boolean>(false);
  const [userData, isLoadingUser, userError] = useApi(
    "usersCheckDetail",
    user.username,
    {},
    shouldExecuteUser
  );

  useEffect(() => {
    if (shouldExecuteUser && (typeof userData === "boolean" || userError)) {
      setShouldExecuteUser(false);
    }
    if (typeof(userData) === 'boolean'&& inputNameRef && inputNameRef.current) {
      const inputElement = inputNameRef.current;
      if (inputNameRef) {
        inputElement.setCustomValidity(userData ? "" : 'Пользователь с таким именем уже существует.');
        inputElement.reportValidity();
      }
    }
  }, [userData, userError, shouldExecuteUser]);

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShouldExecuteUser(false);
    if (event.target.value && validateWord(event.target.value, "username")) {
      setShouldExecuteUser(true);
    }
  };
  return (
    <>
      <div>
        <h1 className={`${getStyles(hStyle)}`}>Регистрация</h1>
        <form className={`${getStyles(formStyle)}`} onSubmit={onSubmit}>
          <label>
            <Input
              name="username"
              onChange={onChange}
              placeholder="Введите логин"
              value={user.username || ""}
              onBlur={handleBlur}
              refLink={inputNameRef}
            />
          </label>
          <label>
            <Input
              name="password"
              type="password"
              onChange={onChange}
              placeholder="Введите пароль"
              value={user.password || ""}
              refLink={inputPasswordRef}
            />
          </label>
          <label>
            <Input
              name="firstName"
              onChange={onChange}
              placeholder='Введите имя'
              value={user.firstName || ""}
            />
          </label>
          <label className={`${getStyles(labelStyle)}`}>
            <Input
              name="secondName"
              onChange={onChange}
              placeholder='Введите фамилию'
              value={user.secondName || ""}
            />
          </label>
          <Button showButton={true} text="Зарегистироваться" type={"submit"} />
        </form>
      </div>
      {isLoading && <p className={`${getStyles(pStyle)}`}>Loading...</p>}
      {data && !error && (
        <p className={`${getStyles(pStyle)}`}>Авторизация успешно пройдена.</p>
      )}
      {error ? (
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
  spacing: "mb-3",
};

const spanErrorStyle: BlockStyle = {
  text: "text-red-500 text-center",
  container: "block",
  spacing: "mb-10",
};

const pStyle: BlockStyle = {
  text: "text-center",
  spacing: "m-auto my-8",
};
