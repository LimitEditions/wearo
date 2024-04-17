import React from "react";
import { IFormData } from "../../types/interfaces/componentsProps/IInputsListProps";
import { Input } from "./Input";

export const InputsList = ({
  formData
}: {formData: IFormData[]}) => {
  return (
    <>
      {formData.map((el) => {
        return (
          <label key={el.name}>
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
