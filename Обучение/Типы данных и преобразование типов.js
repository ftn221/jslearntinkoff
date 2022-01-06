/*
Джаваскрипт - динамически типизированный язык, это значит что тип 
данных переменной может изменяться

Типы данных:
1) Число 
let n = 123;
n = 12.345;
целочисленные значения и с плавающей точкой
Также сюда включены Infinity и -Infinity и NaN
alert( 1 / 0 ); // Infinity
alert( "не число" / 2 ); // NaN

2) BigInt
Вызвано ограничением типа Number на размер числа 2 в 53 степени - 1
const bigInt = 1234567890123456789012345678901234567890n;
Определяется символом n в конце, указывает, что перед нами BigInt

3) Строка String
let name = "Иван";
// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!
// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3

4) boolean может принимать только два значения: true (истина) и false (ложь)
let isGreater = 4 > 1;
alert( isGreater ); // true

5) null - Это специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно»
let age = null;

6) undefined - переменная объявлена, но ей не присвоено никакого значения
let age;
alert(age); // выведет "undefined"

7) object
let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
  };

8) Symbol (символ) используется для создания уникальных идентификаторов в объектах. 


Определить тип можно через оператора typeof
typeof x
typeof(x)
typeof Math // "object"  (1) встроенный объект
typeof null // "object"  (2) официально признанная ошибка
typeof alert // "function"  (3) возвращает функцию, потому что alert это функция, но технически типа funcion - нет



-------ПРЕОБРАЗОВАНИЯ ТИПОВ--------

1) Строковое преобразование
Происходит автоматически, когда требуется преобразование к строке, например при alert
String(value) - прямое преобразование к строке
let value = true;
alert(typeof value); // boolean
value = String(value); // теперь value это строка "true"
alert(typeof value); // string

2) Численное преобразование - происходит в математических функциях и выражениях
alert( "6" / "2" ); // 3, строки преобразуются в числа
Number(value) - прямое преобразование
Если строка не может быть явно приведена к числу, то результатом преобразования будет NaN
let age = Number("Любая строка вместо числа");
alert(age); // NaN, преобразование не удалось
Правила численного преобразования
undefined	NaN
null	0
true / false	1 / 0
string	Пробельные символы по краям обрезаются. 
Далее, если остаётся пустая строка, то получаем 0, иначе из непустой строки «считывается» число. 
При ошибке результат NaN.

3) Логическое преобразование
Boolean(value) - прямое преобразование к True или false
Значения, которые интуитивно «пустые», вроде 0, пустой строки, null, undefined и NaN, становятся false.
Все остальные значения становятся true.


//Задача 1 https://learn.javascript.ru/task/string-quotes
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya
*/