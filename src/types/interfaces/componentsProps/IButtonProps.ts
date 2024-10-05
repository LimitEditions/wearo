export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    showButton: boolean;
    styles?: string;
    children?: React.ReactNode;
    type?: 'submit' | 'button'; 
};

