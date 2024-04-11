import { InputHTMLAttributes, LegacyRef } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  refLink?: LegacyRef<HTMLInputElement> | undefined;
}