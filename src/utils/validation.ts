export function validateUsername(username: string | undefined): boolean {
    if (!username) {
        return false;
    }

    // логин должен содержать только латинские буквы (большие и маленькие) и/или цифры
    if (/^[A-Za-z0-9]+$/.test(username)) {
        return true;
    }

    return false;
}

export function validatePassword(password: string | undefined): boolean {
    if (!password) {
        return false;
    };

    // Проверяем длину пароля, наличие нелатинских букв и пробелов
    if (password.length >= 4 && /^[A-Za-z0-9!@#$%^&*]+$/.test(password)) {
        return true;
    }

    return false;
}
