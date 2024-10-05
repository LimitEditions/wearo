export const clearEmptyFields = (object: {}) => {
    return Object.fromEntries(
        Object.entries(object).filter(([_, value]) => value !== '' && value !== undefined)
    ); 
};