import { InputHTMLAttributes, LegacyRef } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  reflink?: LegacyRef<HTMLInputElement>;
  mask?: (string | RegExp)[];
}
