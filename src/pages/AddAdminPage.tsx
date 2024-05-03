import React from "react";
import { SectionsTitle } from "../Components/common/SectionsTitle";
import { withAuthLogic } from "../Components/common/hoc/withAuthLogic";
import { RegistrationForm } from "../Components/authorization/RegistrationForm";
import { BlockStyle } from "../types/interfaces/IStyles";
import getStyles from "../utils/getStyles";

export const AddAdminPage = () => {
  // Форму для создания админа оборачиваем в HOC, добавляющий базовую логику регистрации пользователя
  const CreateAdmin = withAuthLogic({
    Component: RegistrationForm,
    type: "createAdmin",
  });
  return (
    <>
      <SectionsTitle needsClose={true} title="Добавить администратора" />
      <div className={getStyles(divStyle)}>
        <CreateAdmin />
      </div>
    </>
  );
};

const divStyle: BlockStyle = {
  blockSize: "w-full",
}