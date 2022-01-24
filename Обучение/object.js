/*
Объекты же используются для хранения коллекций различных значений и более 
сложных сущностей.

Создание объекта
let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"

let user = {     // объект
  name: "John",  // под ключом "name" хранится значение "John"
  age: 30        // под ключом "age" хранится значение 30
};

обращение к свойствам
// получаем свойства объекта:
alert( user.name ); // John
alert( user.age ); // 30

удаление свойства
delete user.age;

Объект, объявленный через const, может быть изменён.
const user = {
  name: "John"
};
user.name = "Pete"; // (*)
alert(user.name); // Pete
это возможно потому, что изменяется на сам объект, а свойства объекта

Свойство из переменной - часто нам необходимо использовать существующие переменные 
как значения для свойств с тем же именем.
если названия совпадают, можно использовать короткий синтаксис
function makeUser(name, age) {
  return {
    name, // то же самое, что и name: name
    age   // то же самое, что и age: age
    // ...
  };
}
При объявлении объекта это выглядит так:
let user = {
  name,  // тоже самое, что и name:name
  age: 30
};

Проверка существования свойства, оператор «in»
et user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age существует
alert( "blabla" in user ); // false, user.blabla не существует

Цикл «for…in» - используется для перебора всех свойств объекта
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}
*/

let worker = {
    name: "Niiaz",
    surname: "Fazulzianov",
    age: 29
};
//Добавилось свойство
worker.city = "Kazan";
//Изменим свойство
worker.city = "Kazan/Tatarstan";
//добавим функцию возврата суммы двух чисел
worker.sum = (a, b) => a + b