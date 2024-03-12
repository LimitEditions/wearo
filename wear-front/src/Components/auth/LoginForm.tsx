import React, { useState } from "react";
import { BlockStyle } from "../../types/interfaces/Styles";
import getStyles from "../../utils/getStyles";
import { Api } from "../../api/Api";
import { AuthModel, UserType } from "../../api/data-contracts";

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

const spanStyle: BlockStyle = {
  text: "text-center",
  spacing: "m-auto my-8",
};

export const LoginForm = () => {
  const [user, setUser] = useState<AuthModel>({ username: "", password: "" });
  const [error, setError] = useState<boolean>(false);
  const [userType, setUserType] = useState<UserType | undefined>();

  const api = new Api({ baseURL: process.env.REACT_APP_BASE_URL });

  const getUserType = async () => {
    try {
      const res = await api.authMeList({
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUserType(res.data.type);
    } catch (e) {
      console.error(e);
    }
  };

  const auth = async (user: AuthModel) => {
    setError(false);
    setUserType(undefined);
    try {
      const res = await api.authCreate(user);
      localStorage.setItem("token", res.data.token);
      console.log(res);
      getUserType();
    } catch (e) {
      console.error(e);
      setError(true);
    } finally {
      setUser({ username: "", password: "" });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth(user);
  };

  return (
    <>
      <div className={`${getStyles(containerStyle)}`}>
        <h1 className={`${getStyles(hStyle)}`}>Log in</h1>
        <form className={`${getStyles(formStyle)}`} onSubmit={handleSubmit}>
          <label className={`${getStyles(labelStyle)}`}>
            <span>Логин:</span>
            <input
              type="text"
              name="username"
              className={`${getStyles(inpitStyle)}`}
              value={user.username || ""}
              onChange={handleChange}
              required
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
            />
          </label>
          {error ? (
            <span className={`${getStyles(spanErrorStyle)}`}>
              Неверные учетные данные
            </span>
          ) : null}
          <button type="submit" className={`${getStyles(btnStyle)}`}>
            Log in
          </button>
        </form>
      </div>
      {userType ? (
        <div className={`${getStyles(spanStyle)}`}>Вы вошли как {userType}</div>
      ) : null}
    </>
  );
};
