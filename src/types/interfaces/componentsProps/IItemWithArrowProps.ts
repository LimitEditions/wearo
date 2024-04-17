import { ReactNode } from "react";

export interface IItemWithArrowProps {
    onClick: () => void;
    children: ReactNode;
}