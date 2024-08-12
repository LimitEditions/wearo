export interface IReading {
    state: 'on' | 'off' | 'incr_dark';
    opacity: number;
    lines: string;
    slide: string;
}

export const readingOn: IReading = {
    state: 'on',
    opacity: 40,
    lines: '',
    slide: 'animate-slide-up'
};

export const readingOff: IReading = {
    state: 'off',
    opacity: 0,
    lines: 'line-clamp-2',
    slide: ''
};

export const readingOnDark: IReading = {
    state: 'incr_dark',
    opacity: 70,
    lines: '',
    slide: 'animate-slide-up'
};
