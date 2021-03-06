/*

*/

//let и const видны только внутри фигурных скобок
if (true) {
    let a = 42;
}
console.log(a); // a не определена


//hoisting или поднятие. Если раньше через var можно было обращаться к переменным до их объявления, то теперь так сделать не получится
b = 20; //выдаст ошибку на данном изменении переменной
console.log(b);
let b = 10;
//при этом к еще не определенной переменной можно обращаться внутри функции
function hoisted() {
    age = 26;
}
let age;
hoisted();
console.log(age); //26

//const - не изменяемая переменная. нельзя ее заменить чем то, но при этому можно изменять ее свойства, если это объект или массив. Нельзя менять тип данных
const array = [1, 2, 3, 5, 8];
array.push(13); //добавится
const obj = {a: 42};
obj.name = "Niyaz";

//стрелочные функции
const arrow = a => a ** 2
//функция вернет квадрат от а, в случае если тело функции умещается в одну строчку, ключевое слово return не требуется

//обратные кавычки
const name = "Niyaz";
const myString = `Hello ${name}`;

//новые методы строк
name.startsWith("Ni"); //true
name.endsWith("zya"); //false
name.includes("ya"); //true
//метод repeat - дублирует строку
//метод trim - обрезает пробелы
//методы trimStart trimEnd - удаляют пробелы с начала или с конца
//padStart - формирование строки

//rest оператор
function args(...args) {
    return args //вернет массив [10, 20, 30, 40, 50] тюе spread оператор независимо от количества переданных параметров, собирает их в массив
}
args(10, 20, 30, 40, 50);
//также можно разбивать массив, (a, b, ...args), тогда в a и b записались бы 10 и 20

//оператор Spread действует наоборот
const array1 = [1, 2, 3, 5, 8, 13];
console.log(...array1) // 1, 2, 3, 5, 8, 13
//то есть spread оператор разбил массив на составляющие

//деструктуризация
const array2 = [1, 2, 3, 5, 8, 13];
const [a, b] = array2;
console.log(a, b); //1 2 т.е. произошла деструктуризация массива путем занесения первых двух его элементов в переменные
//деструктуризация объектов
const address = {
    country: "Russia",
    city: "Kazan",
    street: "Pobedy"
}
const {country, city, street} = address;
//теперь есть отдельные переменные со значениями ключей в объекте
