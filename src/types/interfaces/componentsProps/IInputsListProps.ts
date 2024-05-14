import { InputHTMLAttributes } from "react";

export interface IFormData extends InputHTMLAttributes<HTMLInputElement> {
    ref: React.RefObject<HTMLInputElement>
    labelName?: string
  }
