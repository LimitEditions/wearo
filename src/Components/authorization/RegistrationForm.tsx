import React, { useEffect, useRef, useState } from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { validateField } from "../../utils/validation";
import { Button } from "../common/Button";
import { IRegistrationFormProps } from "../../types/interfaces/componentsProps/IFormProps";
import { Input } from "../common/Input";
import useApi from "../../hooks/useApi";

export const RegistrationForm = ({
  user,
  onSubmit,
  onChange,
  setRefs,
  data,
  error,
  isLoading,
}: IRegistrationFormProps) => {
  const { username, password, firstName, secondName } = user;

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

  return (
    <>
      <div>
        <h1 className={getStyles(hStyle)}>Регистрация</h1>
        <form className={getStyles(formStyle)} onSubmit={onSubmit}>
          {[
            {'name': 'username', 'placeholder': 'логин', 'value': username, 'blur': handleBlur, 'ref': nameRef},
            {'name': 'password', 'type': 'password', 'placeholder': 'пароль', 'value': password, 'ref': passwordRef},
            {'name': 'firstName', 'placeholder': 'имя', 'value': firstName, 'ref': firstNameRef},
            {'name': 'secondName', 'placeholder': 'фамилию', 'value': secondName, 'ref': secondNameRef},
          ].map(input => {
            return <label key={input.name}>
              <Input
                name={input.name}
                onChange={onChange}
                placeholder={`Введите ${input.placeholder}`}
                value={input.value || ''}
                type={input.type || 'text'} // Добавляем type, с дефолтом 'text'
                onBlur={input.blur} // Добавляем onBlur, если есть
                refLink={input.ref}
                required={true} 
              />
            </label>
          })}
          <Button showButton={true} type={"submit"}>Зарегистироваться</Button>
        </form>
      </div>

      {/* {следующий блок необходимо выделить в отдельный компоенент в будущем} */}
      {isLoading && <p className={getStyles(pStyle)}>Loading...</p>}
      {data && !error && (
        <p className={getStyles(pStyle)}>Авторизация успешно пройдена.</p>
      )}
      {error ? (
        <span className={getStyles(spanErrorStyle)}>
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
