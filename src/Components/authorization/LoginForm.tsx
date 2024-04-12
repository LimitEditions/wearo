import React from "react";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";
import { Button } from "../common/Button";
import { ILoginFormProps } from "../../types/interfaces/componentsProps/IFormProps";
import { Input } from "../common/Input";

export const LoginForm = ({
  user,
  onSubmit,
  onChange,
  inputNameRef,
  inputPasswordRef,
  data,
  error,
  isLoading,
}: ILoginFormProps) => {
  return (
    <>
      <div>
        <h1 className={`${getStyles(hStyle)}`}>Вход</h1>
        <form className={`${getStyles(formStyle)}`} onSubmit={onSubmit}>
          <label>
            <Input
              name="username"
              value={user.username || ""}
              onChange={onChange}
              refLink={inputNameRef}
              placeholder="Введите логин"
            />
          </label>
          <label className={`${getStyles(labelStyle)}`}>
            <Input
              name="password"
              type="password"
              value={user.password || ""}
              onChange={onChange}
              refLink={inputPasswordRef}
              placeholder="Введите пароль"
            />
          </label>
          {error ? (
            <span className={`${getStyles(spanErrorStyle)}`}>
              Неверный логин или пароль
            </span>
          ) : null}
          <Button showButton={true} type="submit">Войти</Button>
        </form>
      </div>
      {isLoading && <p className={`${getStyles(pStyle)}`}>Loading...</p>}
      {data && !error && (
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
  spacing: "mb-3",
};

const spanErrorStyle: BlockStyle = {
  text: "text-red-500",
};

const pStyle: BlockStyle = {
  text: "text-center",
  spacing: "m-auto my-8",
};
