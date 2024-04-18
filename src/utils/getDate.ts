export function getDate(date: string | undefined): string{
    if (date){
    const correctDate = new Date(date);
    const day = correctDate.getUTCDate();
    const month = correctDate.getUTCMonth() + 1; 
    const year = correctDate.getUTCFullYear();

    // Добавляем ведущий ноль, если число меньше 10
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
    }
    return 'Нет данных'
}