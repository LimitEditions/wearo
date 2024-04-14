import { CreateUserModel } from "../api/data-contracts";


export function validate(word: string , target: string | null | undefined): boolean {
    if (target === 'password') {
        return /^[A-Za-z0-9!@#$%^&*]+$/.test(word);
    } else {
        return /^[A-Za-z0-9]+$/.test(word);
    };
};

export const validateField = (value: string, name: CreateUserModel[keyof CreateUserModel]) => {
    let message = '';

    if (value && value.length >= 4) {
        if (!validate(value, name)) {
            message = name === "password" ? 
            "Может содержать любые латинские буквы, цифры и/или спец. символы (!@#$%^&*)." :
            "Может содержать только латинские буквы и/или цифры. ";
        };
    } else {
        message = 'Минимальная длина - 4 символа.'
    };
    return message;
};
