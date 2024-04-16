import { InputHTMLAttributes } from "react";

interface IFormData extends InputHTMLAttributes<HTMLInputElement> {
    ref: React.RefObject<HTMLInputElement>
  }

  export interface IAuthInputsListProps {
    formData: IFormData[],
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
