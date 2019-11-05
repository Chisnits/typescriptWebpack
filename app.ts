// Implicit data types. Cannot reassign to a different data type.
//string
// let myName = 'Chase';
// myName = 29

//number
// let myAge = 25.5;
// myAge = 'Chase';

//boolean
// let hasHobbies = true;
// hasHobbies = 1;

//assign types
// let myRealAge: number;
// myRealAge = 25;
// myRealAge = "25";

//array
// let hobbies: any[] = ["Cooking", "Sports"];
// hobbies = [100];

// tuples
// are really just arrays with mixed types and unlimited number of items
// let address: [string, number] = ["Superstreet", 99];

//enum
//make numbers more expressive
// enum Color {
//     Gray, //0
//     Green = 100, //1
//     Blue = 2 //2
// };
// let myColor: Color = Color.Blue;
// console.log(myColor);

//any
// let car: any = "BMW";
// console.log(car);
// car = { brand: "BMW", series: 3};
// console.log(car);

//functions
// function returnMyName(): string {
//     return myName;
// }
// console.log(returnMyName());

//void
//there is nothing to be returned.
// function sayHello(): void {
//     console.log("Hello!");
// }

// argument types
// function multiply(value1: number, value2: number): number {
//     return value1 * value2;
// }
// console.log(multiply(2, 3));

//function types
// let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(5,2));

//objects
// let userData: { name: string, age: number } = {
//     name: 'Chase',
//     age: 25
// };
// userData = {
//     a: "Hello",
//     b: 22
// };

//complex object
// let complex: {data: number[], output: (all: boolean) => number[]} = {
//     data: [100, 3.99, 10],

//     output: function (all: boolean): number[] {
//         return this.data;
//     }
// };
// complex = {};

//type alias
// type Complex = {data: number[], output: (all: boolean) => number[]};

// let complex2: Complex  = {
//     data: [100, 3.99, 10],

//     output: function (all: boolean): number[] {
//         return this.data;
//     }
// };

//union types - can be number or string but not boolean. Use single pipe.
// let myRealRealAge: number | string = 27;
// myRealRealAge = 25;
// myRealRealAge = true;

//check types - when you check the typeof, you put the data type in quotes like "number", "string", "boolean", etc.
// let finalValue = 123;
// if (typeof finalValue == "number") {
//     console.log("Final value is a number");
// }

//never - may use in parts of code where it should never be reached.
// function neverReturns():never {
//     throw new Error('An error!');
// }

//Nullable Types - if you initialize a variable with type null it is not assumed to be type: any;
// let canBeNull: number | null = 12;
// canBeNull = null;
// let canAlsoBeNull;
// canAlsoBeNull = null;
// let canThisBeAny = null;
// canThisBeAny = 12;


//SECTION 4
//let & const
// console.log("LET & COSNT");
// let  variable = "Test";
// console.log(variable);
// variable = "Another Value";
// console.log(variable);

// const maxLevels = 100;
// console.log(maxLevels);
// maxLevels = 99; // Won't work

//Block scope
// function reset() {
//     let variable = null;
//     console.log(variable);
// }
// reset();
// console.log(variable);

//Arrow Functions
// console.log("ARROW FUNCTIONS");
// const addNumbers = function(number1: number, number2: number): number {
//     return number1 + number2;
// }
// console.log(addNumbers(10, 3));

// const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
// console.log(multiplyNumbers(10, 3));

// const greet = () => {
//     console.log("Hello!");
// }
// greet();

// const greetFriend = friend => console.log(friend);
// greetFriend("Chase");

//Default Parameters
// console.log("Default Parameters");
// const countdown = (start: number = 10): void => {
//     while(start > 0) {
//         start--;
//     }
//     console.log("Done!", start);
// }
// countdown(20);

//Rest & Spread
// console.log("REST");
// const numbers = [1, 10, 99, -5];
// console.log(Math.max(...numbers));

// function makeArray(name: string, ...args: number[]) {
//     console.log(args);
//     return args;
// }

// console.log(makeArray("Chase", 1, 10, 20, 30));

//Destructuring
// console.log("DESTRUCTURING");
// const myHobbies = ["Cooking", "Sports"];
// const [hobby1, hobby2] = myHobbies;
// console.log(hobby1, hobby2);

// const userData = {
//     userName: "Chase",
//     age: 25
// }
// const {userName: myName, age: myAge} = userData;
// console.log(myName, myAge);

//Template Literals
// const myName = "Chase";
// const greeting = `This is a heading!
// Hello, I'm ${myName}
// This is cool!
// `;
// console.log(greeting);

//private properties are only available within the object it is declared.
//protected properties are also accessible from any objects/classes that inherit
// class Person {
//     private type: string;
    //initialize properties right when declaring them.
    // protected age: number = 25;

    //shorthand initialization of variables in the constructor by using public/private/protected
    // constructor(public name: string, public username: string) {
    // }

    // printAge() {
    //how you can access private properties from outside your class.
    //     console.log(this.age);
    //     this.setType("Old Guy")
    // }
    //how you create methods which you can access from outside.
//     setType(type:string) {
//         this.type = type;
//         console.log(this.type);
//     }
// }

// const person = new Person('Chase', 'Chisnits');
// console.log(person);
// person.printAge();
// person.setType("Cool Guy"); //won't work with private method.

//Inheritance
// class Chase extends Person {
    //when extending a class you have to call super() first.
    //Which calls the constructor of the parent class
//     constructor(username: string) {
//         super("Chase", username);
//         this.age = 31;
//     }
// }

// const chase = new Chase("charles");
// console.log(chase);

//Getters & Setters
// class Plant {
//     private _species: string = "Default";


//     get species() {
//         return this._species;
//     }

//     set species(value: string) {
//         if(value.length > 3) {
//             this._species = value;
//         } else {
//             this._species = "Default";
//         }
//     }
// }

// let plant = new Plant();
// console.log(plant.species);
// plant.species = "Green Plant";
// console.log(plant.species);

//Static Properties & Methods
// class Helpers {
//     static PI: number = 3.14;
//     static calcCircumference(diameter: number): number {
//         return this.PI * diameter;
//     }
// }
// console.log(2 * Helpers.PI);
// console.log(Helpers.calcCircumference(8));

//Abstract Classes
// abstract class Project {
//     projectName: string = "Default";
//     budget: number = 1000;

//     abstract changeName(name: string): void;

//     calcBudget() {
//         return this.budget * 2;
//     }
// }

// class ITProject extends Project {
//     changeName(name: string): void {
//         this.projectName = name;
//     }
// }

// let newProject = new ITProject();
// console.log(newProject);
// newProject.changeName("Super IT Project");
// console.log(newProject);

//Private Constructors
// class OnlyOne {
//     private static instance: OnlyOne;

//     private constructor(public readonly name: string) {}

//     static getInstance() {
//         if (!OnlyOne.instance) {
//             OnlyOne.instance = new OnlyOne('The Only One');
//         }
//         return OnlyOne.instance;
//     }
// }

// let wrong = new OnlyOne('The Only One');
// let right = OnlyOne.getInstance();
// console.log(right.name);
// right.name = 'Something Else';

// namespace Singleton {
//     // ... any one time initialization goes here ...
//     export function someMethod() {
//         return 2 * 2;
//     }
// }
// console.log(Singleton.someMethod());

// /// <reference path="./namespace/circleMath.ts" />
// /// <reference path="./namespace/rectangleMath.ts" />

// //Setting up an alias for MyMath.Cicle
// import CircleMath = MyMath.Circle;



// console.log(MyMath.Circle.calculateRectangle(10,20));
// console.log(CircleMath.calculateRectangle(10,20));
// console.log(MyMath.calculateCircumfrence(3));

// import { PI, calculateCircumfrence } from './math/circle';
// import calc from './math/rectangle';

// console.log(PI);
// console.log(calculateCircumfrence(3));
// console.log(calc(20,50));


//age? is an optional argument.
//object literals are checked much more strictly than if you assign them to a constant first.
interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet?(lastName: string): void;
    greetMe?(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
};

const person = {
    firstName: "Chase",
    age: 27,
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

greet({firstName: "Chase", age: 27, hobbies:["Cooking", "Sports"], greet(lastName: string) {console.log("Hi, I am " + this.firstName + " " + lastName);}});
changeName(person);
greet(person);
person.greet("anything");

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greetMe(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

const myPerson = new Person();
myPerson.firstName = "Charles";
myPerson.lastName = "Derr";
myPerson.greetMe(myPerson.lastName);

//Function Types

interface DoubleValueFunc {
    (number1: number, number2: number) : number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(val1: number, val2: number) {
    return (val1 + val2) * 2;
}

console.log(myDoubleFunction(10, 20));

//Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Chase",
    greet(lastName: string) {
        console.log("Hello");
    }
};

console.log(oldPerson);