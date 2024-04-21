import React from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { InputsList } from "../common/InputsList";
import { Button } from "../common/Button";
import { IFormData } from "../../types/interfaces/componentsProps/IInputsListProps";

export const CreateAdminForm = ({
  onSubmit,
  formData,
}: {
  onSubmit: () => void;
  formData: IFormData[];
}) => {
  return (
    <form className={getStyles(formStyle)} onSubmit={onSubmit}>
      <InputsList formData={formData} needLabel={true} />
      <div className={getStyles(divStyle)}>
        <Button showButton={true} type={"submit"} onClick={onSubmit}>
          Добавить администратора
        </Button>
      </div>
    </form>
  );
};

const formStyle: BlockStyle = {
  container: `flex flex-col gap-3`,
  background: 'bg-gray-100',
  spacing: "px-2 py-4",
};

const divStyle: BlockStyle = {
    blockSize: 'w-9/12 max-w-screen-sm',
    spacing: 'm-auto my-10'
}