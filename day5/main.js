"use strict";
// hello()
Object.defineProperty(exports, "__esModule", { value: true });
// // Named function is also referred with term "FUNCTION DECLARATION"
// function hello(){
//     console.log("hello world");
// }   //This is called hoisting, because when adding variables and function in the call stack js/ts puts variables and function to the top of the code, that is why I am able to call the function, even before it is declared, HOISTING WORKS IN FUNCTION DECLARATION ONLY.
// helloWorld()
// let helloWorld = function() {     // Declaraing an anonymous/lambda function is called "FUNCTION EXPRESSION", Because you are assigning a function as expression to a variable. 
//     console.log("hello world");
// }
// Activity.NO.1: Function Declaration
// function evenOrOdd(value: number) {
// value %2 === 0? console.log("Number is Even"): console.log("Number is Odd");
// }
// evenOrOdd(5)
// function square(value:number){
//     console.log(value * value);
// }
// square(5)
// Activity.NO.2: Function Expression
// const greatestNumFinder=(num1: number, num2: number): void=> {
//     if(num1> num2) console.log(`${num1} is the Greatest number`);
//     else console.log(`${num2} is the Greatest number`);
// }
// greatestNumFinder(10,2)
// let concat = function (str1: string, str2: string): string {
// return str1.concat(str2)
// }
// console.log(concat("Hello ", "World"))
// Activity.NO.3: Arrow Functions
// const sum = (num1: number, num2: number)=> {
// return num1 + num2
// }
// console.log(sum(10, 50))
// const charChecker= (str: string)=> {
// let valToCheckCharIn = "Habib"
// if(valToCheckCharIn.includes(str)) return true
// }
// console.log(charChecker("H"))
// Activity.NO.4: Function Parameters & Default Values
// function product(num1: number, num2: number= 2) {
//     return num1 * num2
// }
// console.log(product(9,9))
// function greeter(name: string, age: number = 18){
// return `Hello ${name}! You are ${age} Great!`
// }
// console.log(greeter("habib", 20))
// Activity.NO.5: Higher order functions
// function dynamicFunctionCaller(func: ()=> void, num: number) {
// if( num === 0 || num === 1) console.log(func());
// for(let i= 1; i<= num; i++){
//     console.log(`${func()}, ${i}`)
// }
// }
// dynamicFunctionCaller(()=> "hello", 100);
function twoFunctionApplier(func1, func2, val) {
    let result = func1(val);
    console.log(result);
    func2(result);
}
twoFunctionApplier((num) => num * num, (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}, 6);
