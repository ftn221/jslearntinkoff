/*
while - Код из тела цикла выполняется, пока условие condition истинно.
let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}

do..while - Проверку условия можно разместить под телом цикла
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

for
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}

break - выйти из цикла в любой момент с помощью специальной директивы
let sum = 0;
while (true) {
  let value = +prompt("Введите число", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Сумма: ' + sum );

continue - «облегчённая версия» break. При её выполнении цикл не прерывается, а переходит к следующей итерации 
for (let i = 0; i < 10; i++) {
  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;
  alert(i); // 1, затем 3, 5, 7, 9
}
*/


//"1, Цикл, который будет выводить число а, пока оно не станет менше 10 
a = prompt("Введи число");
while(a >= 10) {
  console.log(a)
  a--
}

//2. Выолнить задачи из ссылки на теорию"

//https://learn.javascript.ru/task/loop-last-value
//когда i станет 0, он преобразуется к false и остановит цикл, поэтому последнее значение 1

//https://learn.javascript.ru/task/which-value-while
//В первом случае от 1 до 4
//во втором от 1 до 5

//https://learn.javascript.ru/task/which-value-for
//Увеличение i++ выполняется отдельно от проверки условия (2), 
//значение i при этом не используется, поэтому нет никакой разницы между i++ и ++i.
//поэтому результат одинаковый

//https://learn.javascript.ru/task/for-even
for(let i = 2; i <= 10; i++) {
    if (i % 2 > 0) {
      continue
    }
    console.log(i)
  }

//https://learn.javascript.ru/task/replace-for-while
let i = 0;
while(i < 3) {
  console.log(`Number ${i}`);
  i++
}

//https://learn.javascript.ru/task/repeat-until-correct
let num = prompt();
while (true) {
  if (num > 100 || num == undefined) {
    break
  }
  num = prompt();
}

