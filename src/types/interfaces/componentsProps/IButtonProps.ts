import { BlockStyle } from "../IStyles";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    showButton: boolean;
    styles?: BlockStyle;
    children?: React.ReactNode;
    type?: 'submit' | 'button'; 
};

