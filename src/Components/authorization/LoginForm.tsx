import React, { useEffect, useRef } from "react";
import { Button } from "../common/Button";
import { ILoginFormProps } from "../../types/interfaces/componentsProps/IFormProps";
import { InputsList } from "../common/InputGroup/InputsList";
import { IFormData } from "../../types/interfaces/componentsProps/IInputsListProps";
import { IsLoading } from "../common/InfoGroup/IsLoading";
import { ErrorReq } from "../common/InfoGroup/ErrorReq";


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
        {'name': 'username', 'placeholder': 'логин', 'value': username, 'ref': nameRef, onChange: onChange},
        {'name': 'password', 'type': 'password', 'placeholder': 'пароль', 'value': password, 'ref': passwordRef, onChange: onChange},
    ] as IFormData[];

    return (
        <>
            <div>
                <h1 className='text-center text-2xl pb-4'>Вход</h1>
                <form className='flex flex-col gap-3' onSubmit={onSubmit}>
                    <InputsList formData={formData} needLabel={false}/>
                    <ErrorReq show={!!error} error={error}/>
                    <Button showButton={true} type="submit">Войти</Button>
                </form>
            </div>
            <IsLoading show={isLoading} />
        </>
    );
};
