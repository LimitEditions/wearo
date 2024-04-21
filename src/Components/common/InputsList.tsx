import React from "react";
import { IFormData } from "../../types/interfaces/componentsProps/IInputsListProps";
import { Input } from "./Input";

export const InputsList = ({
  formData, needLabel
}: {formData: IFormData[], needLabel: boolean}) => {
  return (
    <>
      {formData.map((el) => {
        return (
          <label key={el.name}>
            {needLabel && el.labelName && <span>{el.labelName}</span>}
            <Input
              name={el.name}
              type={el.type || "text"}
              placeholder={`Введите ${el.placeholder}`}
              value={el.value || ""}
              onChange={el.onChange}
              onBlur={el.onBlur}
              refLink={el.ref}
            />
          </label>
        );
      })}
    </>
  );
};
