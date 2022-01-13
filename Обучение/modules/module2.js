import Logger, {city, sayAlanya} from "./module1"
//синтаксис для импортирования всего сразу в переменную, далее доступ к отдельным импортируемым частям получается через эту переменную
import * as Module from "./module1"

//Получили приватную переменную через exportDefaul
Logger.log();

//Импорт *
//Обычно мы располагаем список того, что хотим импортировать, в фигурных скобках import {...}, например вот так:
import {sayHi, sayBye} from './say.js';
sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

//Но если импортировать нужно много чего, мы можем импортировать всё сразу в виде объекта, используя import * as <obj>. Например:
import * as say from './say.js';
say.sayHi('John');
say.sayBye('John');

//Импорт «как»
//Мы также можем использовать as, чтобы импортировать под другими именами.
import {sayHi as hi, sayBye as bye} from './say.js';
hi('John'); // Hello, John!
bye('John'); // Bye, John!

//Выражение import() Выражение import(module) загружает модуль и возвращает промис, результатом которого становится объект модуля, содержащий все его экспорты.
let modulePath = prompt("Какой модуль загружать?");
import(modulePath);
  //.then(obj => <объект модуля>)
  //.catch(err => <ошибка загрузки, например если нет такого модуля>)

