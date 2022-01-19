//Для определения нового класса применяется ключевое слово class
class User {}
//После определения класса мы можем создавать его объекты:
let tom: User = new User();
let alice = new User();

//Поля класса
class User1 {
    name: string;
    age: number;
}

class User2 {
  
    name1: string = "Tom Smith";
    age1: number = 18;
}
 
let tom1 = new User2();
tom1.name1 = "Tom";
tom1.age1 = 36;
console.log(`name: ${tom1.name1}  age: ${tom1.age1}`);  // name: Tom  age: 36

//Методы
class User3 {
  
    name: string;
    age: number;
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
    toString(): string{
        return `${this.name}: ${this.age}`;
    }
}
let tom3 = new User3();
tom3.name = "Tom";
tom3.age = 36;
tom3.print();                    // name: Tom  age: 36
console.log(tom.toString());    // Tom: 36

//конструкторы
class User4 {
  
    name: string;
    age: number;
    constructor(userName: string, userAge: number) {
 
        this.name = userName;
        this.age = userAge;
    }
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
}
let tom4 = new User4("Tom", 36);
tom4.print();        // name: Tom  age: 36

//Поля для чтения - Полям класса в процессе работы программы можно присваивать различные значения, которые соответствуют типу полей. Однако TypeScript также позволяет определять поля для чтения, значения которых нельзя изменить (кроме как в конструкторе). Для определения таких полей применяется ключевое слово readonly:
class User5 {
  
    readonly name: string = "Default user";
    age: number;
    constructor(userName: string, userAge: number) {
 
        this.name = userName;
        this.age = userAge;
    }
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
}
