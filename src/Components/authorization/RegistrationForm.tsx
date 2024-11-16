import React, { useEffect, useRef, useState } from "react";
import { validateField } from "../../utils/validation";
import { IRegistrationFormProps } from "../../types/interfaces/componentsProps/IFormProps";
import useApi from "../../hooks/useApi";
import { Modal } from "../common/Modal";
import { ResultInModal } from "../common/ResultInModal";
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
    type,
}: IRegistrationFormProps) => {
    const { username, password, firstName, secondName } = user;
    const { mod, setMod } = modal;

    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const firstNameRef = useRef<HTMLInputElement>(null);
    const secondNameRef = useRef<HTMLInputElement>(null);

    // передаем ссылки на инпуты на уровень выше, в hoc
    useEffect(() => {
        setRefs([nameRef, passwordRef, firstNameRef, secondNameRef]);
    }, [setRefs]);

    // объявляем переменные для проверки уникальности введенного логина
    const [shouldExecuteUser, setShouldExecuteUser] = useState<boolean>(false);
    const [userData, ,] = useApi(
        "usersCheckDetail",
        username,
        {},
        shouldExecuteUser
    );

    useEffect(() => {
        // цепляеся за нужный нам инпут
        const curRef = nameRef.current as HTMLInputElement;
        // проверяем, пришли ли данные с сервера
        if (typeof userData === "boolean") {
            curRef.setCustomValidity(
                userData ? "" : "Пользователь с таким именем уже существует."
            );
            // информируем пользователя о занятости введенного логина
            if (!userData) {
                curRef.reportValidity();
            }
        }
        // сбрасываем флаг отправки данных на сервер
        setShouldExecuteUser(false);
    }, [userData, setShouldExecuteUser]);

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = event.target;
        // сначала проверяем не пустое ли поле
        if (inputElement.value) {
            // затем введенные значения проходят базовую валидацию
            const isValid = validateField(
                inputElement.value,
                inputElement.name
            );
            // если валидция не пройдена, информируем пользователя
            if (isValid !== "") {
                inputElement.setCustomValidity(isValid);
                inputElement.reportValidity();
                setShouldExecuteUser(false);
                return;
            }
            // если базовая валидация прошла успешно, направляем данные
            username ? setShouldExecuteUser(true) : console.log("g");
        }
    };

    const formData = [
        {
            name: "username",
            placeholder: "логин",
            value: username,
            onBlur: handleBlur,
            ref: nameRef,
            onChange: onChange,
            labelName: "Логин",
        },
        {
            name: "password",
            type: "password",
            placeholder: "пароль",
            value: password,
            ref: passwordRef,
            onChange: onChange,
            labelName: "Пароль",
        },
        {
            name: "firstName",
            placeholder: "имя",
            value: firstName || undefined,
            ref: firstNameRef,
            onChange: onChange,
            labelName: "Имя",
        },
        {
            name: "secondName",
            placeholder: "фамилию",
            value: secondName || undefined,
            ref: secondNameRef,
            onChange: onChange,
            labelName: "Фамилия",
        },
    ];

    return (
        <>
            <div className="w-full flex flex-col gap-3 mt-5">
                <IsLoading show={isLoading} />
                <ErrorReq show={!!error} error={error} />
                <AuthForm onSubmit={onSubmit} formData={formData} type={type} />
                <Modal isOpen={mod} setIsOpen={setMod} swipeable={false}>
                    <ResultInModal
                        message={
                            type === "reg"
                                ? "Регистрация прошла успешно!"
                                : "Администратор создан."
                        }
                        imgPath="/images/success.png"
                    />
                </Modal>
            </div>
        </>
    );
};
