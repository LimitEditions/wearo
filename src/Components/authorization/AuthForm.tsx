import React from "react";
import { IFormData } from "../../types/interfaces/componentsProps/IInputsListProps";
import { InputsList } from "../common/InputGroup/InputsList";
import { Button } from "../common/Button";


export const AuthForm = ({
    onSubmit,
    formData,
    type,
}: {
    onSubmit: () => void;
    formData: IFormData[];
    type: "reg" | "createAdmin" | "login";
}) => {
    const formStyle = type === "reg" ? 'flex flex-col gap-3' : 'flex flex-col gap-3 bg-gray-200 px-2 py-4';
    return (
        <>
            {type === "reg" && <h1 className='text-center text-2xl pb-4'>Регистрация</h1>}
            <form className={formStyle} onSubmit={onSubmit}>
                <InputsList formData={formData} needLabel={type === "createAdmin"} />
                {type === "createAdmin" ? (
                    <div className='w-9/12 max-w-screen-sm m-auto my-10'>
                        <Button showButton={true} type={"submit"}>
                            Добавить администратора
                        </Button>
                    </div>
                    ) : (
                    <Button showButton={true} type={"submit"}>
                        Зарегистироваться
                    </Button>
                )}
            </form>
        </>
    );
};
