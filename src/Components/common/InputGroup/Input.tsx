import React from "react";
import { IInputProps } from "../../../types/interfaces/componentsProps/IInputProps";
import getStyles from "../../../utils/getStyles";
import { BlockStyle } from "../../../types/interfaces/IStyles";


export const Input = ({
    name,
    type,
    placeholder,  
    value,
    onChange,
    onBlur,
    reflink,
    className
    }: IInputProps) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={reflink}
            className={className? className: getStyles(inpitStyle)}
        />
    );
};

const inpitStyle: BlockStyle = {
    spacing: "py-2 px-5",
    background: "bg-gray-200",
    border: "rounded-lg",
    text: "placeholder-gray-700",
    blockSize: "w-full",
};
