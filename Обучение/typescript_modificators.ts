//Модификаторы доступа позволяют сокрыть состояние объекта от внешнего доступа и управлять доступом к этому состоянию. В TypeScript три модификатора: public, protected и private. Если к свойствам и функциям классов не применяется модификатор, то такие свойства и функции расцениваются как будто они определены с модификатором public
//public
class Person {    
    public name: string;
    public year: number;
}

//private - Если же к свойствам и методам применяется модификатор private, то к ним нельзя будет обратиться извне при создании объекта данного класса.
class Person1 {
      
    private _name: string;
    private _year: number;
  
    constructor(name: string, age: number) {
  
        this._name = name;
        this._year = this.setYear(age);
    }
    public print(): void {
        console.log(`Имя: ${this._name}  Год рождения: ${this._year}`);
    }
  
    private setYear(age: number): number {
  
        return new Date().getFullYear() - age;
    }
}
  
let tom2 = new Person1("Tom", 24);
tom2.print();
// console.log(tom._name); // нельзя обратиться, так как _name - private
// tom.setYear(45); // нельзя обратиться, так как функция - private

//protected - определяет поля и методы, которые из вне класса видны только в классах-наследниках:
class Person2 {
    protected name: string;
    constructor(name: string, age: number) {
  
        this.name = name;
    }
    protected printPerson(): void {
 
        console.log(`Имя: ${this.name}}`);
    }
}

//определение полей через конструктор - Использование модификаторов в параметрах конструктора позволяет сократить написание кода. Например, пусть у нас есть следующий класс:
class Person3 {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    printPerson(): void {
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}
//он будет полностью аналогичек следующему
class Person4 {
     
    constructor(private name: string, private age: number) {  }
     
    printPerson(): void {
 
        console.log(`Имя: ${this.name}  Возраст: ${this.age}`);
    }
}


