/*
В JavaScript есть три логических оператора: || (ИЛИ), && (И) и ! (НЕ).

|| (ИЛИ)
result = a || b;
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
Если значение не логического типа, то оно к нему приводится в целях вычислений.
if (1 || 0) { // работает как if( true || false )
  alert( 'truthy!' );
}

&& (И)
В традиционном программировании И возвращает true, если оба аргумента истинны, а иначе – false:
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
И «&&» находит первое ложное значение
Приоритет оператора && больше, чем у ||

! (НЕ)
Оператор НЕ представлен восклицательным знаком !.
alert( !true ); // false
alert( !0 ); // true
В частности, двойное НЕ используют для преобразования значений к логическому типу:
alert( !!"non-empty string" ); // true
alert( !!null ); // false
соответствует
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false
*/

//https://learn.javascript.ru/task/alert-null-2-undefined
true

//https://learn.javascript.ru/task/alert-or
//сначала 1, затем 2

//https://learn.javascript.ru/task/alert-1-null-2
//результат false, а точнее null

//https://learn.javascript.ru/task/alert-and
//не выведет ничего

//https://learn.javascript.ru/task/alert-and-or
//true или 3

//https://learn.javascript.ru/task/check-if-in-range
let age = 50;
if (age >= 14 && age <= 90) {
    alert(age)
}

//https://learn.javascript.ru/task/check-if-in-range
let age = 50;
if (age < 14 && age > 90) {
    alert(age)
}

if (!(age >= 14 && age <= 90));

//https://learn.javascript.ru/task/if-question
//первое и третье выполнятся.

