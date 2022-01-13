const privateVariable = 42;

export const city = "Alanya";

export function sayAlanya(a, b) {
    console.log("Alanya");
}

export default {
    log () {
        console.log(privateVariable);
    }
}

//Экспорт до объявления
// экспорт массива
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// экспорт константы
export const MODULES_BECAME_STANDARD_YEAR = 2015;
// экспорт класса
export class User {
  constructor(name) {
    this.name = name;
  }
}

//Не ставится точка с запятой после экспорта класса/функции
export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }  // без ; в конце

//Экспорт отдельно от объявления
// 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  export {sayHi, sayBye}; // список экспортируемых переменных

//Экспортировать «как»
export {sayHi as hi, sayBye as bye};

//Экспорт по умолчанию - удобен если Модуль, который объявляет что-то одно, например модуль user.js экспортирует только class User.
//Модули предоставляют специальный синтаксис export default («экспорт по умолчанию»)
export default class User { // просто добавьте "default"
    constructor(name) {
      this.name = name;
    }
  }
//в файле может быть не более одного export default. И потом импортируем без фигурных скобок:
import User from './user.js'; // не {User}, просто User
new User('John');


