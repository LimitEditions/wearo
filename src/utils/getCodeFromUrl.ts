export const getCodeFromUrl = (url: string): string | void => {
    if (!url.includes('/pi/')) return;
    const urlData = url.split('/');
    const index = urlData.length - 1;
    return urlData[index];
};
