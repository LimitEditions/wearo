export function validate(word: string, target: string | null): boolean {
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
        case 'email':
            regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
            break;
        case 'phone':
            regex = /^\+7 \(\d{3}\) \d{3}-\d{4}$/;
            break;
        default:
            throw new Error('Invalid target');
    };
    return regex.test(word);
}

export const validateField = (value: string, name: string) => {
    let message = '';

    if (name && !validate(value, name)) {
        message = name === "password" ? 
        "Буквы латинского алфавита, цифры и/или спец. символы (!@#$%^&*). Минимальная длина - 4 символа." :
        name === "username" ?
        "Буквы латинского алфавита и/или цифры. Минимальная длина - 4 символа." :
        name === "firstName" || name === "secondName" ?
        "Буквы кириллического алфавита. Минимальная длина - 2 символа." :
        "Некорректное значение в поле";
    };

    return message;
};
