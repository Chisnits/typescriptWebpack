// Implicit data types. Cannot reassign to a different data type.
//string
let myName = 'Chase';
// myName = 29;

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
function sayHello(): void {
    console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2, 3));

//function types
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

//objects
let userData: { name: string, age: number } = {
    name: 'Chase',
    age: 25
};
// userData = {
//     a: "Hello",
//     b: 22
// };