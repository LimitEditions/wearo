import React, { useEffect, useRef } from "react";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { Button } from "../common/Button";
import { ILoginFormProps } from "../../types/interfaces/componentsProps/IFormProps";
import { AuthInputsList } from "./AuthInputsList";

export const LoginForm = ({
  user,
  onSubmit,
  onChange,
  setRefs,
  data,
  error,
  isLoading,
}: ILoginFormProps) => {
  const { username, password } = user;
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setRefs([nameRef, passwordRef]);
  }, [setRefs]);

  const formData = [
    {'name': 'username', 'placeholder': 'логин', 'value': username, 'ref': nameRef},
    {'name': 'password', 'type': 'password', 'placeholder': 'пароль', 'value': password, 'ref': passwordRef},
  ]

  return (
    <>
      <div>
        <h1 className={getStyles(hStyle)}>Вход</h1>
        <form className={getStyles(formStyle)} onSubmit={onSubmit}>
          <AuthInputsList formData={formData} onChange={onChange}/>
          {error ? (
            <span className={getStyles(spanErrorStyle)}>
              Неверный логин или пароль
            </span>
          ) : null}
          <Button showButton={true} type="submit">Войти</Button>
        </form>
      </div>
      {isLoading && <p className={getStyles(pStyle)}>Loading...</p>}
      {data && !error && (
        <p className={getStyles(pStyle)}>Авторизация успешно пройдена.</p>
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

const spanErrorStyle: BlockStyle = {
  text: "text-red-500",
};

const pStyle: BlockStyle = {
  text: "text-center",
  spacing: "m-auto my-8",
};
