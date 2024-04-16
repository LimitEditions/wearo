import React from "react";
import { IAuthInputsListProps } from "../../types/interfaces/componentsProps/IAuthInputsListProps";
import { Input } from "../common/Input";

export const AuthInputsList = ({
  formData,
  onChange,
}: IAuthInputsListProps) => {
  return (
    <>
      {formData.map((el) => {
        return (
          <label key={el.name}>
            <Input
              name={el.name}
              onChange={onChange}
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
