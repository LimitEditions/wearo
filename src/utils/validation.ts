export function validateUsername(username: string | undefined): boolean {
    // return /\S+@\S+\.\S+/.test(email);

    if (!username) {
        return false;
    }

    // Проверяем наличие нелатинских букв или пробелов
    if (username.match(/[^A-Za-z0-9_]/) || username.includes(" ")) {
        return false;
    }

    return true;
}

export function validatePassword(password: string | undefined): boolean {
    if (!password) {
        return false;
    };

    // Проверяем длину пароля, наличие нелатинских букв и пробелов
    if (password.length < 4 || password.match(/[^A-Za-z0-9_]/) || password.includes(" ")) {
        return false;
    }

    return true;
}
