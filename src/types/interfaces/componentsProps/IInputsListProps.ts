import { InputHTMLAttributes } from "react";

interface IFormData extends InputHTMLAttributes<HTMLInputElement> {
    ref: React.RefObject<HTMLInputElement>
  }

  export interface IInputsListProps {
    formData: IFormData[]
  }
