import React from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { IInputProps } from "../../types/interfaces/componentsProps/IInputProps";

export const Input = ({
  name,
  type,
  placeholder,  
  value,
  onChange,
  onBlur,
  refLink,
}: IInputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      ref={refLink}
      className={getStyles(inpitStyle)}
    />
  );
};

const inpitStyle: BlockStyle = {
  spacing: "py-2 px-5",
  background: "bg-gray-200",
  border: "rounded-3xl",
  text: "placeholder-gray-700",
  blockSize: "w-full",
};
