import React from "react";
import { SectionsTitle } from "../common/SectionsTitle";
import { withAuthLogic } from "../common/hoc/withAuthLogic";
import { RegistrationForm } from "../authorization/RegistrationForm";
import { BlockStyle } from "../../types/interfaces/IStyles";
import getStyles from "../../utils/getStyles";

export const AddAdminPage = () => {
  const RegistrationWithLogic = withAuthLogic({
    Component: RegistrationForm,
    type: "createAdmin",
  });
  return (
    <>
      <SectionsTitle needsClose={true} title="Добавить администратора" />
      <div className={getStyles(divStyle)}>
        <RegistrationWithLogic />
      </div>
    </>
  );
};

const divStyle: BlockStyle = {
  blockSize: "w-full",
}