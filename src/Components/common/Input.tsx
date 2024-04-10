import React, { LegacyRef } from "react";
import getStyles from "../../utils/getStyles";
import { BlockStyle } from "../../types/interfaces/IStyles";
import { IInputProps } from "../../types/interfaces/IInputProps";

export const Input = ({
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  required = true,
  refLink,
  placeholder,
}: IInputProps) => {
  return (
    <input
      type={type}
      name={name}
      className={`${getStyles(inpitStyle)}`}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      ref={refLink}
      placeholder={placeholder}
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
