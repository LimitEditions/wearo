// Данная функция выдает объект в формате Date, и при сериализации этого объекта 
// в строковое значение мы получаем дату без учета часового пояса в формате ISO 8601, 
// выраженное во времени UTC (Coordinated Universal Time). Суффикс "Z" обозначает UTC.
export function calculateExpirationTime(timeInSec: number): Date {
    const currentTime = new Date();
    const expirationTime = new Date(currentTime.getTime() + timeInSec * 1000);
    return expirationTime;
};

export function isTokenExpired(expirationTime: Date): boolean {
    const currentTime = new Date();
    return expirationTime < currentTime;
};
