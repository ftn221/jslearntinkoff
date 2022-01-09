/*
Объявление функции
function showMessage() {
  alert( 'Всем привет!' );
}

Локальные переменные - Переменные, объявленные внутри функции, видны только внутри этой функции.
function showMessage() {
  let message = "Привет, я JavaScript!"; // локальная переменная
  alert( message );
}
showMessage(); // Привет, я JavaScript!
alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции

Внешние переменные - У функции есть доступ к внешним переменным
Также она может изменять их значения
Внешняя переменная используется, только если внутри функции нет такой локальной.
let userName = 'Вася';
function showMessage() {
  let message = 'Привет, ' + userName;
  alert(message);
}
showMessage(); // Привет, Вася

Параметры - Мы можем передать внутрь функции любую информацию, 
используя параметры (также называемые аргументами функции).
function showMessage(from, text) { // аргументы: from, text
  alert(from + ': ' + text);
}
showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

Параметры по умолчанию - Если параметр не указан, то его значением становится undefined.

Возврат значения - Функция может вернуть результат, который будет передан в вызвавший её код.
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert( result ); // 3

Результат функции с пустым return или без него – undefined
function doNothing() { пусто}
alert( doNothing() === undefined ); // true

Оператор spread вместо arguments
function showName(firstName, lastName, ...rest) {
  alert(firstName + ' ' + lastName + ' - ' + rest);
}
// выведет: Юлий Цезарь - Император,Рима
showName("Юлий", "Цезарь", "Император", "Рима");

Деструктуризация в параметрах
'use strict';
let options = {
  title: "Меню",
  width: 100,
  height: 200
};
function showMenu({title, width, height}) {
  alert(title + ' ' + width + ' ' + height); // Меню 100 200
}
showMenu(options);
И более сложный вариант с параметрами по умолчанию
let options = {
  title: "Меню"
};
function showMenu({title="Заголовок", width:w=100, height:h=200}) {
  alert(title + ' ' + w + ' ' + h);
}
// объект options будет разбит на переменные
showMenu(options); // Меню 100 200

функции стрелки
let inc = x => x+1;
alert( inc(1) ); // 2
как только тело функции оборачивается в {…}, то её результат уже не 
возвращается автоматически. Такая функция должна 
делать явный return, как в примере выше, если конечно хочет что-либо возвратить.
*/

//Задачи
//Функция сложения двух чисел
function sum (a, b) {
    return a + b
  }

sum = (a, b) => a + b
console.log(sum(4, 5));

//Фнукция опредления имени(если имя  ваше, то привет + имя)
let name = prompt("Ваше имя?");
function checkName (name) {
  if (name == "Niyaz") {
    alert("Привет Нияз!");
  }
  else {
    alert("Я вас не знаю, уходите")
  }
}
checkName(name);

//Функция вычисления типа аргумента и вывод в консоль
function checkType (arg) {
    console.log(typeof(arg));
  }
  checkType(arg);

//Функция выбора четных элементов массива(возвращает новый массив)
let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function returnArray (array) {
  let newArray = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 == 0 && array[i] != 0) {
      newArray.push(array[i])
    }
  }
  return newArray;
}
console.log(returnArray(myArray));

//задачи в конце главы
//https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php