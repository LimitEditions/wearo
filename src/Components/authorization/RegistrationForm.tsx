import React, { useEffect, useRef, useState } from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { validateField } from "../../utils/validation";
import { IRegistrationFormProps } from "../../types/interfaces/componentsProps/IFormProps";
import useApi from "../../hooks/useApi";
import { Modal } from "../common/Modal";
import { SuccessfulContent } from "../common/SuccessfulContent";
import { AuthForm } from "./AuthForm";
import { IsLoading } from "../common/InfoGroup/IsLoading";
import { ErrorReq } from "../common/InfoGroup/ErrorReq";

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
      <AuthForm onSubmit={onSubmit} formData={formData} type={type} />
      <IsLoading show={isLoading} />
      <ErrorReq show={!!error} error={error}/>
      <Modal isOpen={mod} setIsOpen={setMod} swipeable={false}>
        <SuccessfulContent message={type === "reg" ? "Регистрация прошла успешно!" : "Администратор создан."} />
      </Modal>
      {/* <Modal isOpen={mod} 
            setIsOpen={setMod} 
            title={ userData? 'Регистрация успешно пройдена!': 'Ошибка!' }
            swipeable={false}
            // case2: modal  
            // additionalStyles={{
            //   spacing: 'p-0', container: 'fixed w-full overflow-y-auto flex bottom-0 h-1/3 '
            // }}
            >
          <Button showButton={true} 
                  type='button' 
                  styles={btnStyle} 
                  onClick={() => {setMod(false); navigate(".././login");}}>
                    <div>Ok</div>
          </Button>
      </Modal> */}
    </>
  );
};

// const btnStyle: BlockStyle = {
//   container: 'flex justify-center rounded-md',
//   border: 'border border-transparent',
//   background: 'bg-blue-100',
//   spacing: ' px-4 py-2 mx-auto',
//   text: 'text-sm font-medium text-blue-900',
//   transitionsAnimation: 'hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
// };
