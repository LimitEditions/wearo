import React, { useEffect, useState } from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { validateWord } from "../../utils/validation";
import { Button } from "../common/Button";
import { IRegistrationFormProps } from "../../types/interfaces/componentsProps/IFormProps";
import { Input } from "../common/Input";
import { useUniqueUsername } from "../../hooks/useUniqueUsername";

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
  const { username, password, firstName, secondName } = user;
  const [isUniqueUsername, setIsUniqueUsername] = useState<boolean>(true);
  const [shouldExecuteUser, setShouldExecuteUser] = useState<boolean>(false);
  const { userData } = useUniqueUsername(username, shouldExecuteUser, setShouldExecuteUser);
  const inputElement = inputNameRef ? inputNameRef.current as HTMLInputElement: null;

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "username") {
      const isValidUsername = validateWord(event.target.value, "username");
      if (isValidUsername) {
        setShouldExecuteUser(true);
      } else {
        if (inputElement) {
          inputElement.setCustomValidity("Недопустимое имя пользователя");
          inputElement.reportValidity();
        };
        setShouldExecuteUser(false);
      }
    }
  };

  useEffect(() => {
    if (typeof userData === 'boolean' && inputElement) {
      setIsUniqueUsername(!userData);
      inputElement.setCustomValidity(userData ? "" : 'Пользователь с таким именем уже существует.');
      inputElement.reportValidity();
      setShouldExecuteUser(false);
    }
  }, [userData, inputNameRef]);

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
              value={password || ""}
              refLink={inputPasswordRef}
            />
          </label>
          <label>
            <Input
              name="firstName"
              onChange={onChange}
              placeholder='Введите имя'
              value={firstName || ""}
            />
          </label>
          <label className={`${getStyles(labelStyle)}`}>
            <Input
              name="secondName"
              onChange={onChange}
              placeholder='Введите фамилию'
              value={secondName || ""}
            />
          </label>
          <Button showButton={true} type={"submit"}>Зарегистироваться</Button>
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
