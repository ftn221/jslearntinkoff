//Интерфейсы объектов - Интерфейс определяет свойства и методы, которые объект должен реализовать. Другими словами, интерфейс - это определение кастомного типа данных, но без реализации. Интерфейсы определяются с помощью ключевого слова interface
interface IUser {
    id: number;
    name: string;
}
//Интерфейс в фигурных скобках определяет два свойства: id, которое имеет тип number, и name, которая представляет строку.
//employee - обычный объект за тем исключением, что он имеет тип IUser. Если правильнее говорить, то employee реализует интерфейс IUser. Причем эта реализация накладывает на employee некоторые ограничения. Так, employee должен реализовать все свойства и методы интерфейса IUser, поэтому при определении employee данный объект обязательно должен включать в себя свойства id и name.
let employee: IUser = {
    id: 1, 
    name: "Tom"
}
//Параметры методов и функций также могут представлять интерфейсы - В этом случае аргумент, который передается в функцию, должен представлять объект или класс, который реализует соответствующий интерфейс.
function printUser(user: IUser): void {
    console.log("id: ", user.id);
    console.log("name: ",  user.name)
}
printUser(employee);
//И также можно возвращать объекты интерфейса:
interface IUser {
    id: number;
    name: string;
}
function buildUser(userId: number, userName: string): IUser {
    return { id: userId, name: userName };
}
let newUser = buildUser(2, "Bill");
console.log("id: ", newUser.id);
console.log("name: ", newUser.name);

//Необязательные свойства и свойства только для чтения - При определении интерфейса мы можем задать некоторые свойства как необязательные с помощью знака вопроса. Подобные свойства реализовать необязательно:
interface IUser {
    id: number;
    name: string;
    age?: number;
}
//Также интерфейс может содержать свойства только для чтения, значение которых нельзя изменять. Такие свойства определяются с помощью ключевого слова readonly. После определения интерфейса, менять данные будет нельзя
interface Point {
    readonly x: number;
    readonly y: number;
}

//Определение методов - Кроме свойств интерфейсы могут определять функции:
//объект, который реализует интерфейс, также обязан реализовать определенную в интерфейсе функцию с тем же набором параметров и тем типом выходного результата. В данном случае функция sayWords() в качестве параметра принимает строку и ничего возвращает, выводя на консоль некоторое сообщение.
interface IUser1 {
    id: number;
    name: string;
    sayWords(words: string): void;
}
let employee1: IUser1 = {
    id: 1, 
    name: "Alice",
    sayWords: function(words: string): void{
        console.log(`${name} говорит "${words}"`);
    }
}
employee1.sayWords("Привет, как дела?");

//Интерфейсы классов - Интерфейсы могут быть реализованы не только объектами, но и классами. Для этого используется ключевое слово implements:
interface IUser2 {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
class User2 implements IUser2{
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname: string): string {
 
        return this.name + " " + surname;
    }
}
let tom = new User2(1, "Tom", 23);
console.log(tom.getFullName("Simpson"));

//Расширение интерфейса - TypeScript позволяет добавлять в интерфейс новые поля и методы, просто объявив интерфейс с тем же именем и определив в нем необходимые поля и методы. Например:
interface IUser3 {
    id: number;
    name: string;
}
interface IUser3{
    age: number;
}
let employee3: IUser3 = {
    id: 1, 
    name: "Alice",
    age: 31
}
function printUser3(user: IUser): void {
    console.log(`id: ${user.id}  name: ${user.name}  age: ${user.age}`);
}
printUser(employee3);

//Наследование интерфейсов - Интерфейсы, как и классы, могут наследоваться:
interface IMovable {
    speed: number;
    move(): void;
}
interface ICar extends IMovable {
    fill(): void;
}
class Car implements ICar {
    speed: number;
    move(): void {
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    }
    fill(): void {
        console.log("Заправляем машину топливом");
    }
}
let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();

//Интерфейсы функций - Здесь определен интерфейс FullNameBuilder, который лишь содержит сигнатуру функции. Далее определяется переменная simpleBuilder, которая имеет тип FullNameBuilder и поэтому должна представлять функцию с данной сигнатурой.
interface FullNameBuilder {
    (name: string, surname: string): string;
}
let simpleBuilder: FullNameBuilder = function (name:string, surname: string): string {
        return "Mr. " + name + " " + surname;
}
let fullName = simpleBuilder("Bob", "Simpson");
console.log(fullName); // Mr. Bob Simpson

//Интерфейсы массивов - Интерфейсы массивов описывают объекты, к которым можно обращаться по индексу, как, например, к массивам
interface StringArray {
    [index: number]: string;
}
let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
let myPhone: string = phones[0];
console.log(myPhone);

