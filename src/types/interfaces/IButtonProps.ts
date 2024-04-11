import { BlockStyle } from "./IStyles";

export interface IButtonProps {
    showButton: boolean;
    onClick?: () => void;
    styles?: BlockStyle;
    text: string;
    type?: 'submit' | 'button';
};
