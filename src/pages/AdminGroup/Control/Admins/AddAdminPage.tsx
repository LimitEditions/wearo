import React from "react";
import { withAuthLogic } from "../../../../Components/common/hoc/withAuthLogic";
import { RegistrationForm } from "../../../../Components/authorization/RegistrationForm";


export const AddAdminPage = () => {
    // Форму для создания админа оборачиваем в HOC, добавляющий базовую логику регистрации пользователя
    const CreateAdmin = withAuthLogic({
        Component: RegistrationForm,
        type: "createAdmin",
    });

    return (
        <>
            <h3 className="w-full text-center uppercase py-3">Добавить администратора</h3>
            <div className='w-full'>
                <CreateAdmin />
            </div>
        </>
    );
};
