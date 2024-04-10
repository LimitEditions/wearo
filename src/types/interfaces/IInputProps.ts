import { LegacyRef } from "react";

export interface IInputProps {
    type?: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    refLink?: LegacyRef<HTMLInputElement> | undefined;
    placeholder: string;
  }