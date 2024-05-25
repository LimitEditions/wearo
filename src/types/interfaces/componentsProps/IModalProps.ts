export interface IModalProps {
    isOpen: boolean,
    setIsOpen: (event: boolean) => void;
    title?: string,
    children: React.ReactNode,
    additionalStyles?: { container?: string, panel?: string },
    swipeable: boolean,
};
