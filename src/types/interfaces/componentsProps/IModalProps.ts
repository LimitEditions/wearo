import { BlockStyle } from "../IStyles";

export interface IModalProps {
    isOpen: boolean,
    setIsOpen: (event: boolean) => void;
    title?: string,
    children: React.ReactNode,
    additionalStyles?: BlockStyle,
    swipeable: boolean,
};