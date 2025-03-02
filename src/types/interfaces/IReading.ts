export interface IReading {
    state: 'on' | 'off' | 'incr_dark';
    opacity: string;
    lines: string;
    slide: string;
    z_index: string;
}

export const readingOn: IReading = {
    state: 'on',
    opacity: 'opacity-30',
    lines: 'max-h-80 overflow-scroll',
    slide: 'animate-slide-up',
    z_index: 'z-0',
};

export const readingOff: IReading = {
    state: 'off',
    opacity: 'opacity-0',
    lines: 'line-clamp-3',
    slide: '',
    z_index: 'z-10',
};

export const readingOnDark: IReading = {
    state: 'incr_dark',
    opacity: 'opacity-50',
    lines: 'max-h-80 overflow-scroll',
    slide: 'animate-slide-up',
    z_index: 'z-0',
};
