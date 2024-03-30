export type TargetValidationType = 'username' | 'password';

export function validateWord(word: string | undefined, target: TargetValidationType): boolean {
    if (word && word.length >= 4) {
        switch(target) {
            case 'username':
                if (/^[A-Za-z0-9]+$/.test(word)) {
                    return true;
                };
                break;
            case 'password':
                if (/^[A-Za-z0-9!@#$%^&*]+$/.test(word)) {
                    return true;
                };
                break;
        };
    };
    return false;
};
