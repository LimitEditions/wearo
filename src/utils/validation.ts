import { CreateUserModel } from "../api/data-contracts";


export function validate(word: string , target: string | null): boolean {
    let regex;
    switch (target) {
        case 'password':
            regex = /^[A-Za-z0-9!@#$%^&*]{4,}$/;
            break;
        case 'username':
            regex = /^[A-Za-z0-9]{4,}$/;
            break;
        case 'firstName':
        case 'secondName':
            regex = /^[а-яА-ЯёЁ]{2,}$/;
            break;
        default:
            console.log(target)
            throw new Error('Invalid target');
    };
    return regex.test(word);
};

export const validateField = (value: string, name: CreateUserModel[keyof CreateUserModel]) => {
    let message = '';

    if (name && !validate(value, name)) {
        message = name === "password" ? 
        "Буквы латинского алфавита, цифры и/или спец. символы (!@#$%^&*). Минимальная длина - 4 символа.":
        name === "username" ?
        "Буквы латинского алфавита и/или цифры. Минимальная длина - 4 символа.":
        "Буквы кириллического алфавита. Минимальная длина - 2 символа.";
    };

    return message;
};
