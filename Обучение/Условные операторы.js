//Инструкция if(...) вычисляет условие в скобках и, если результат true, то выполняет блок кода.
if (year == 2015) {
    alert( "Правильно!" );
    alert( "Вы такой умный!" );
  }

//Инструкция if может содержать необязательный блок «else» («иначе»). Он выполняется, когда условие ложно.
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) {
  alert( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
}

//Иногда, нужно проверить несколько вариантов условия. Для этого используется блок else if.
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}

// оператор ?. Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.
let accessAllowed = (age > 18) ? true : false;



//https://learn.javascript.ru/task/if-zero-string
//Да выведется, так как строка не пустая и к числу не приводится

//https://learn.javascript.ru/task/check-standard
let answer = prompt("What's the официальное название JavaScript?");
if (answer == "ECMAScript") {
    alert("Правильно!")
}
else {
    alert("Не знаете? “ECMAScript”!");
}

//https://learn.javascript.ru/task/sign
let num = prompt("Введите число");
if (num > 0) {
    alert(1)
}
else if (num == 0) {
    alert(0)
}
else {
    alert(-1)
}

//https://learn.javascript.ru/task/rewrite-if-question
let result = ((a + b < 4)) ? "Мало" : "Много";

//https://learn.javascript.ru/task/rewrite-if-else-question
let message = (login == 'Сотрудник')? 'Привет' : 
    (login == 'Директор') ? "Здравствуйте" :
    (login == '') ? 'Нет логина' : '';


/*Конструкция Switch
Конструкция switch имеет один или более блок case и необязательный блок default.
Призвана заменить if else
Переменная x проверяется на строгое равенство первому значению value1, затем второму value2 и так далее.
Если соответствие установлено – switch начинает выполняться от соответствующей директивы case и далее, до ближайшего break (или до конца switch).
Если ни один case не совпал – выполняется (если есть) вариант default.
*/

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}

//https://learn.javascript.ru/task/rewrite-switch-if-else
if (browser ==  "Edge") {
    alert( "You've got the Edge!" );
}
else if (browser == 'Chrome'
|| browser == 'Firefox'
|| browser == 'Safari'
|| browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
}
else {
    alert( 'We hope that this page looks ok!' );
}

//https://learn.javascript.ru/task/rewrite-if-switch
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}