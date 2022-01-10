/*
Объект содержит дату и время, а также предоставляет методы управления ими.

Создание
let now = new Date();
alert( now ); // показывает текущие дату и время

new Date(milliseconds)
Создать объект Date с временем, равным количеству 
миллисекунд (тысячная доля секунды), прошедших с 1 января 1970 года UTC+0.

Получение компонентов даты
getFullYear()
Получить год (4 цифры)
getMonth()
Получить месяц, от 0 до 11.
getDate()
Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
Получить, соответственно, часы, минуты, секунды или миллисекунды.
getDay() - получить день недели

Установка компонентов даты
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, 
прошедших с 01.01.1970 UTC)
*/

//Выводим дату сейчас
let date = new Date();
console.log(date);

//получить день
let date = new Date().getDate();
console.log(date);

//получить месяц
let date = new Date().getMonth();
console.log(date);
//выдает ноль, потому что нумерация с 0 до 11

//получить год
let date = new Date().getFullYear();
console.log(date);

//https://learn.javascript.ru/task/new-date
let date = new Date(2011, 1, 20, 3, 12, 0, 0);
console.log(date);