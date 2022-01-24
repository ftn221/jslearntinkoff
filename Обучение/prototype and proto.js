/*
[[Prototype]] - В JavaScript объекты имеют специальное скрытое свойство [[Prototype]] (так оно названо в спецификации), которое либо равно null, либо ссылается на другой объект. Этот объект называется «прототип»:

__proto__ - Свойство [[Prototype]] является внутренним и скрытым, но есть много способов задать его. Одним из них является использование __proto__
*/

//Создаем новый экземпляр класса Object, другой синтаксис {}
const person = new Object({
    name: "Niyaz",
    age: 25
})

//к прототипу класса object добавляем функцию sayHello. Теперь у нашего объекта person будет доступ к функции sayHello, так как она добавлена в прототип класса Object, а person создан от Object
Object.prototype.sayHello = function() {
    console.log("Hello");
}

//Создадим объект lena прототипом которого будет объект person, у которого в прототипе object есть функция sayhello и теперь у функции lena будет доступ ко всему этому
const lena = Object.create(person);
lena.name = "Elena";

//контекст
function hello() {
    console.log("Hello", this);
}
hello(); //выведет hello и контекст вызова, в данном случае объект window

function hello() {
    console.log("Hello", this);
}
hello();

const person1 = {
    name: "Niyaz",
    age: 25,
    sayHello: hello
}
person1.sayHello() // выведет hello и объект person1
//чтобы привязать другой контекст, используется метод bind
//sayHello: hello.bind(window)
//теперь контекст снова привязан к window

//super - используется для того, чтобы при переопределении вызвать метод родителя внутри изменяемого метода

//пример использования __proto__
let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)

  // теперь мы можем найти оба свойства в rabbit:
  alert( rabbit.eats ); // true (**)
  alert( rabbit.jumps ); // true

  //пример длинной цепочки прототипов
  let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };
  // walk взят из цепочки прототипов
  longEar.walk(); // Animal walk
  alert(longEar.jumps); // true (из rabbit)

