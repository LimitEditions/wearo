import React from 'react';
import { IButtonProps } from '../../types/interfaces/componentsProps/IButtonProps';


export const Button: React.FC<IButtonProps> = ({ showButton, styles, children, ...props }) => {
    if (!showButton) { return null };

    return (
        <>
            <button className={styles ? styles : buttonStyle} {...props}>
                {children}
            </button> 
        </>
    );
};

const buttonStyle: string = "w-full bg-custom-blue hover:bg-navy-blue disabled:bg-light-gray p-3 m-auto text-white text-sm rounded-full shadow-lg transition-all duration-300";
