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

export const RegistrationForm = ({
  user,
  onSubmit,
  onChange,
  setRefs,
  data,
  error,
  isLoading,
  modal,
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
    {'name': 'username', 'placeholder': 'логин', 'value': username, 'onBlur': handleBlur, 'ref': nameRef, onChange: onChange},
    {'name': 'password', 'type': 'password', 'placeholder': 'пароль', 'value': password, 'ref': passwordRef, onChange: onChange},
    {'name': 'firstName', 'placeholder': 'имя', 'value': firstName || undefined, 'ref': firstNameRef, onChange: onChange},
    {'name': 'secondName', 'placeholder': 'фамилию', 'value': secondName || undefined, 'ref': secondNameRef, onChange: onChange},
  ]

  return (
    <>
      <div>
        <h1 className={getStyles(hStyle)}>Регистрация</h1>
        <form className={getStyles(formStyle)} onSubmit={onSubmit}>
          <InputsList formData={formData} />
          <Button showButton={true} type={"submit"}>Зарегистироваться</Button>
        </form>
      </div>
      <Info showInfo={isLoading} msg="Loading..." style={getStyles(pStyle)} />
      <Info showInfo={error ? true: false} msg="Ошибка регистрации." style={getStyles(spanErrorStyle)} />
      <Modal isOpen={mod} 
            setIsOpen={setMod} 
            title='Registration comleted successfully'
            // case2: modal  
            // additionalStyles={{
            //   spacing: 'p-0', container: 'fixed w-full overflow-y-auto flex bottom-0 h-1/3 '
            // }}
            >
          <Button showButton={true} 
                  type='button' 
                  styles={btnStyle} 
                  onClick={() => {setMod(false); navigate("/login");}}>
                    Got it, thanks!
          </Button>
      </Modal>
    </>
  );
};

const hStyle: BlockStyle = {
  text: "text-center text-2xl",
  spacing: "pb-4",
};

const formStyle: BlockStyle = {
  container: `flex flex-col gap-3`,
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

const btnStyle: BlockStyle = {
  container: 'flex justify-center rounded-md',
  border: 'border border-transparent',
  background: 'bg-blue-100',
  spacing: ' px-4 py-2',
  text: 'text-sm font-medium text-blue-900',
  transitionsAnimation: 'hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
};
