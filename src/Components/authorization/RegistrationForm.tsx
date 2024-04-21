import React, { useEffect, useRef, useState } from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { validateField } from "../../utils/validation";
import { Button } from "../common/Button";
import { IRegistrationFormProps } from "../../types/interfaces/componentsProps/IFormProps";
import useApi from "../../hooks/useApi";
import { InputsList } from "../common/InputsList";
import { Info } from "../common/Info";
import { Modal } from "../common/Modal";
import { SuccessfulContent } from "../common/SuccessfulContent";
import { UserRegistrationForm } from "./UserRegistrationForm";
import { CreateAdminForm } from "../superadmin/CreateAdminForm";

// Компонент будет создавать либо форму для регистрации user, либо для регистрации нового admin
export const RegistrationForm = ({
  user,
  onSubmit,
  onChange,
  setRefs,
  data,
  error,
  isLoading,
  modal,
  type
}: IRegistrationFormProps) => {
  const { username, password, firstName, secondName } = user;
  const { mod, setMod, navigate } = modal;

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const secondNameRef = useRef<HTMLInputElement>(null);

  // передаем ссылки на инпуты на уровень выше, в hoc
  useEffect(() => {
    setRefs([nameRef, passwordRef, firstNameRef, secondNameRef]);
  }, [setRefs])

  // объявляем переменные для проверки уникальности введенного логина
  const [shouldExecuteUser, setShouldExecuteUser] = useState<boolean>(false);
  const [userData, , ] = useApi(
    "usersCheckDetail",
    username,
    {},
    shouldExecuteUser
  );

  useEffect(() => {
    // цепляеся за нужный нам инпут
    const curRef = nameRef.current as HTMLInputElement;
    // проверяем, пришли ли данные с сервера
    if (typeof(userData) === 'boolean') {
      curRef.setCustomValidity(userData ? "" : 'Пользователь с таким именем уже существует.');
      // информируем пользователя о занятости введенного логина
      if (!userData) {
        curRef.reportValidity();
      };
    };
    // сбрасываем флаг отправки данных на сервер
    setShouldExecuteUser(false);
  }, [userData, setShouldExecuteUser]);

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target;
    // сначала проверяем не пустое ли поле
    if (inputElement.value) {
      // затем введенные значения проходят базовую валидацию
      const isValid = validateField(inputElement.value, inputElement.name);
      // если валидция не пройдена, информируем пользователя
      if (isValid !== '') {
        inputElement.setCustomValidity(isValid);
        inputElement.reportValidity();
        setShouldExecuteUser(false);
        return;
      };
      // если базовая валидация прошла успешно, направляем данные
      username ? setShouldExecuteUser(true): console.log('g');
    };
  };

  const formData = [
    {'name': 'username', 'placeholder': 'логин', 'value': username, 'onBlur': handleBlur, 'ref': nameRef, onChange: onChange, labelName: 'Логин'},
    {'name': 'password', 'type': 'password', 'placeholder': 'пароль', 'value': password, 'ref': passwordRef, onChange: onChange, labelName: 'Пароль'},
    {'name': 'firstName', 'placeholder': 'имя', 'value': firstName || undefined, 'ref': firstNameRef, onChange: onChange, labelName: 'Имя'},
    {'name': 'secondName', 'placeholder': 'фамилию', 'value': secondName || undefined, 'ref': secondNameRef, onChange: onChange, labelName: 'Фамилия'},
  ]

  return (
    <>
      {type === 'reg' && <UserRegistrationForm formData={formData} onSubmit={onSubmit} />}
      {type === 'createAdmin' && <CreateAdminForm formData={formData} onSubmit={onSubmit} />}
      <Info showInfo={isLoading} msg="Loading..." style={getStyles(pStyle)} />
      <Info showInfo={error ? true: false} msg="Ошибка регистрации." style={getStyles(spanErrorStyle)} />
      <Modal isOpen={mod} setIsOpen={setMod}>
        <SuccessfulContent message={type === "reg" ? "Регистрация прошла успешно!" : "Администратор создан."} />
      </Modal>
    </>
  );
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
