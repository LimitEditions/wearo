import React from "react";
import { IInputsListProps } from "../../types/interfaces/componentsProps/IInputsListProps";
import { Input } from "./Input";

export const InputsList = ({
  formData
}: IInputsListProps) => {
  return (
    <>
      {formData.map((el) => {
        return (
          <label key={el.name}>
            <Input
              name={el.name}
              onChange={el.onChange}
              placeholder={`Введите ${el.placeholder}`}
              value={el.value || ""}
              type={el.type || "text"}
              refLink={el.ref}
              onBlur={el.onBlur}
            />
          </label>
        );
      })}
    </>
  );
};
