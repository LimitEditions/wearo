import { BlockStyle } from "../IStyles";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    showButton: boolean;
    styles?: BlockStyle;
};