import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { validateWord } from "../../utils/validation";
import { dataToLS } from "../../utils/dataToLS";
import { IwithAuthLogicProps } from "../../types/interfaces/IwithAuthLogicProps";

export const withAuthLogic = ({
  Component,
  type,
  initialUser,
  isUniqueName = true,
}: IwithAuthLogicProps) => {
  const HocComponent = ({ ...props }) => {
    const [user, setUser] = useState(initialUser);
    const [shouldExecute, setShouldExecute] = useState<boolean>(false);
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const apiMethod = type === "login" ? "authCreate" : "usersCreate";

    const [data, isLoading, error] = useApi(apiMethod, user, {}, shouldExecute);

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
      if (shouldExecute && (data || error)) {
        // останавливаем запрос
        setShouldExecute(false);
        // очищаем inputs
        setUser(initialUser);
      }
      if (data) {
        if (type === "login") {
          dataToLS(data);
          navigate("/");
        } else {
          navigate("/login");
        }
      }
    }, [data, error, shouldExecute]);

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

      if (isValidUsername && isValidPassword && isUniqueName) {
        setShouldExecute(true);
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [event.target.name]: event.target.value });
      event.target.setCustomValidity("");
    };

    return (
      <>
        <Component
          {...props}
          user={user}
          onSubmit={handleSubmit}
          onChange={handleChange}
          inputNameRef={inputNameRef}
          inputPasswordRef={inputPasswordRef}
          data={data}
          error={error}
          isLoading={isLoading}
        />
      </>
    );
  };

  return HocComponent;
};
