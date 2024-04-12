import React, { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { validateWord } from "../../../utils/validation";
import { dataToLS } from "../../../utils/dataToLS";
import { IwithAuthLogicProps } from "../../../types/interfaces/componentsProps/IwithAuthLogicProps";

export const withAuthLogic = ({ Component, type }: IwithAuthLogicProps) => {
  const HocComponent = React.memo(({ ...props }) => {
    const initialUser = useMemo(() => ({
      username: "",
      password: "",
      ...(type !== "login" && { firstName: "", secondName: "" })
    }), []);

    const [user, setUser] = useState(initialUser);
    
    const [shouldExecute, setShouldExecute] = useState<boolean>(false);
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const apiMethod = type === "login" ? "authCreate" : "usersCreate";

    const [data, isLoading, error] = useApi(apiMethod, user, {}, shouldExecute);

    const validateField = (value: string, name: 'username' | 'password') => {
      const isValid = validateWord(value, name);
      const message = name === "username" ? 
        "Может содержать только латинские буквы и/или цифры. Минимальная длина - 4 символа." :
        "Может содержать любые латинские буквы, цифры и/или спец. символы (!@#$%^&*). Минимальная длина - 4 символа.";
      return { isValid, message };
    };

    useEffect(() => {
      if (shouldExecute && (data || error)) {
        setShouldExecute(false);
        setUser(initialUser);
        if (data) {
          if (type === "login") {
            dataToLS(data);
            navigate("/");
          } else {
            navigate("/login");
          }
        }
      }
    }, [data, error, shouldExecute, navigate, initialUser]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const usernameValidation = validateField(user.username, "username");
      const passwordValidation = validateField(user.password, "password");

      if (inputNameRef.current) {
        inputNameRef.current.setCustomValidity(usernameValidation.isValid ? "" : usernameValidation.message);
      }
      if (inputPasswordRef.current) {
        inputPasswordRef.current.setCustomValidity(passwordValidation.isValid ? "" : passwordValidation.message);
      }

      if (usernameValidation.isValid && passwordValidation.isValid && (type !== "reg")) {
        setShouldExecute(true);
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUser({ ...user, [event.target.name]: event.target.value });
      if (inputNameRef.current && event.target.name === "username") {
        inputNameRef.current.setCustomValidity("");
      }
      if (inputPasswordRef.current && event.target.name === "password") {
        inputPasswordRef.current.setCustomValidity("");
      }
    };

    return (
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
    );
  });

  return HocComponent;
};