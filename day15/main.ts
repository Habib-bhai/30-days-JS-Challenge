//     CLOSURES

// Activity.NO.1: Understanding Closures.
// TASK 1

// function outer(name: string){
//     return function (){
//         console.log(`Hello ${name}`);
        
//     }
// }

// let hello = outer("Habib")
//     hello()

// TASK 2

// function privateCounter(){
//         let counter: number = 0

//         return ()=>{
//                return counter++
//         }
// }

// let a = privateCounter()
// console.log(a()); // 0
// console.log(a()); // 1
// console.log(a()); // 2
// console.log(a()); // 3
// console.log(a()); // 4
// console.log(a()); // 5
// console.log(a()); // 6


//  Activity.NO.2: Practical Closures.
// TASK 3

// function IDGenerator(){
//     let random: string = ""
//     let arr = [0,1,2,3,4,5,6,7,8,9]
//     for(let i=0; i<5; i++){
//          random += arr[Math.floor(Math.random() * 10)]
        
//     }
//     return {
//         incrementID: ()=> {
//             random + 1
//             return random
//         },
//         getID: ()=> random,
//     }
       
// }
// More correct implementation
// function IDGenerator() {
//     let lastID = 0;

//     return {
//         incrementID: () => {
//             lastID++;
//             return lastID;
//         },
//         getID: () => lastID
//     };
// }


// let a = IDGenerator()
// console.log(a.getID());
// console.log(a.incrementID());
// console.log(a.getID());


// TASK 4
// function userGreeter(name: string){

//     return function (){
//         console.log(`HELLO ${name}`);
        
//     }
// }


// let greet = userGreeter("Habib")

// greet()


//  Activity.NO.3: Closures in Loops
// TASK 5

// function outer(){
//     let arrOfFunctions: Function[]= []
//     for(let i = 0; i<5; i++) {
//         arrOfFunctions.push(
//             (( index: number)=>{

//               return ()=> {
//                 console.log(index);
                
//               }  
//         })(i))

//     }

// return arrOfFunctions

// }    
 
// let functions = outer()
// functions[0]()
// functions[1]()
// functions[2]()
// functions[3]()
// functions[4]()

//This function implements by retaining the parent function and inside it the loop and the variable of loop its each function is using to print its index.


//  Activity.NO.4 : Module Pattern
//  TASK 6

// const ItemsManager =(function moduleForManagingItems(){

//     let collectionOfItems: string[ ] = []

//     function add(...item: string[]){
//         collectionOfItems.push(...item)
//         console.log(`After adding Collection: ${collectionOfItems}`);
        
//     }

//     function remove(index: number){
//         collectionOfItems.splice(index,1)
//         console.log(`The updated Collection: ${collectionOfItems}`);
//     }

//     function list(){
//         return collectionOfItems
//     }


//     return  {
//         add: add,
//         remove: remove,
//         list: list
//     }
// })()

// ItemsManager.add("Polo Shirt","Shoes", "i9 laptops")

// Activity.NO.5: Memorization
//  TASK 7

// function memoizeFunc(fn: (...arg)=> void){
//     let cache: {} = {}

//     return function(...args: number[]){
//         let arg = JSON.stringify(args)
//         if(cache[arg]){
//             console.log(cache[arg], "cached result");
//         }

//         else {
//             let result = fn(...args)
//             cache[arg] = result
//             console.log(result, "computed result");
            
//         }

//     }
// }


// function memoizeFunc(a:number, b: number) {
//     let cache: {} = {}
//     let arg1 = a.toString()
//     let arg2 = b.
//     if(cache[a,b]){}

// }

// function sum(a: number, b: number){
//     return a + b
// }

// let finalResult = memoizeFunc(sum)

// finalResult(10 , 20)
// finalResult(10 , 20)
// finalResult(10 , 20)


//  TASK 8

function memoizeFactorialFunction(){

  let cache: { [key: string]: number } = {};

    return function (num: number){
        let strNum = num.toString()
        if(cache[strNum]){
            console.log("Printing Cached result");
            
            return cache[strNum]
        }

        else {
            let result = 1
            for(let i= num; i>=1; i--){
                result *= i
            }
            cache[strNum] = result
            console.log("logging computed result");
            
            return result
        }

    }
}

let fact = memoizeFactorialFunction()

console.log(fact(5))
console.log(fact(5))

//      EXAM REVISION 

// function abc(x: string) : string
// function abc(x: number) : number
// function abc(x: any) : any {

//     return true
// }

// console.log(abc(10))
// abc(true)

// async function fetchData(): Promise<number> {
//     return 42;
// }

// async function main() {
//     const result = await fetchData();
//     console.log(typeof result);
// }

// main();

// function process(value: number | string): Promise<number> {
//     return new Promise((resolve, reject) => {
//         if (typeof value === 'number') {
//             resolve(value * 2);
//         } else {
//             resolve(value.length);
//         }
//     });
// }

// const result = process(5);
// console.log( result);

// async function asyncFunc(x: number): Promise<number> {
//     return x * 2
// }

// async function anotherFunc() {
//     const result = asyncFunc(5);
//     console.log(result);
// }

// anotherFunc();

// function logValues(a: number, b: number = 5, c: number = 10): void {
//     console.log(a, b, c);
// }

// logValues(1, undefined, 20);

// function func1(a: string, b = 5, c: boolean): void {}   

function computeSum(a: number, b: number = 0, c?: number): number {
    return a + b + (c || 0);
}


// console.log(computeSum(1, 2, undefined))

// async function getValue(): Promise<number> {
//     return new Promise((resolve) => setTimeout(() => resolve(10), 1000));
// }

// async function showValue() {
//     const value = await getValue();
//     console.log(value);
// }

// showValue();


// async function getData(): Promise<void> {
//     // No return statement
// }

// console.log(getData());

// function abc(x: Function = ()=> {}){

//     console.log(x);
    

// }


// let arr = [10, "str", true]

// arr.length = 10
// // arr[3] = "three"

// console.log(arr);


// console.log(3-+1)

// let arr = new Array<number>(1, 2, 3);
// console.log(arr);


// enum Numbers {
//     Zero,
//     One = 1,
//     Two,
//     Three
// }

// const num = Numbers[2];
// console.log(num);

// console.log(3  - (1));

// let a = "3"

// console.log("3" +- 3)

// type TupleType = [number, string, boolean];
// declare let myTuple: [number, string] 
// myTuple =  [42, "Hello"];

// myTuple[1] = "World"; // Valid

// // myTuple.push(true)
// console.log(myTuple);


// let arr = [1,2,3,4]  


// let result = arr.map((item)=> item * 2 )
// console.log(arr);

// console.log(result);


// console.log(arr);


// function abc(): [string, number, boolean] {

//     return  ["str", 100, true]

// }


// let tuple : [number, string] = [200, "str"]

// console.log(...tuple);

// const arr: (number | string)[] = [1, 'two', 3, 'four'];
// arr[1] = 'five';
// arr[4] = 6;

// console.log(arr[4]); // ?

// const  obj = {
//     a : "name"
// }

// obj.a = "habib"

// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7]
// let Arr = [8,9,10]

// let n = arr1.concat(arr2, Arr)

// console.log(n);
// console.log(arr1);

// let str = "habib"

// let arrFromstr = Array.from(str)

// console.log(arrFromstr);
// const nums: [number, number] = [1, 2];
// nums.push(3); // ?



// const {a, b} = [1, 2];

// const [a, b] = Array.from([1, 2]);

// // console.log(a, b);

// type NumberOrString = number | string;
// const myArray: NumberOrString[] = [1, "two", 3];

// // myArray.length = 5;
// // console.log(myArray[4]); // ?


// function cba(a:[string, number], ): [number, string, boolean]{

//     return [10, "str", true]
// }


// let arr3 = [1,2,3,4]

// let result = arr3.reduce((p,c) => p + c)
// console.log(result);

// console.log(5 +  "str");
// const arr4 = [1, 2, 3];
// const [first, ...rest] = arr4;

// console.log(rest); // ?


// let arr5 = [1,2,3,4,5]

// let result = arr5.filter(item=> {
//     return item >2
// })

// console.log(result);


// let obj = {
//     a : 20,
//     b: 30
// // }
// // let result = obj.find((item)=> {return item > 5})
// // console.log(result);

// console.log( undefined);

// let arr6 = [1,2]
// let strArr = ["a", "b"]
// console.log(typeof arr6);

// let result = arr6.concat()

// arr6
//  console.log(result);
 

async function ABC()  {

return 1000
    }

// no return  -> value = "undefined"  -> type of -> void
// async -> type -> Promise<void>

// Promise {90}

//     void
//      Promise<void>

// Promise {1000}


// promise{ number}


//  Promise {State: fulfilled, value : 1000}
    // console.log( ABC());

    
    // let array1 = [1,2,3]

    
//      CONTROL STRUCTURES

// If - Else  -> agar magar/varna

// let a = 10

// let marks = 70

//   true       


//                      Boolean/ Logical operator --> && Logical AND , || Logical OR
// if(marks > 30   &&  marks <50)  {

//     console.log("PASS");
    
// }

// else if(marks > 50 && marks < 80){
//     console.log("VERY GOOD");
    
// }

// else {
//         console.log("FAIL")
// }

//  FUNCTIONS
// keyword     () -> input  , {} -> work
                // parameter
//    function tea(milk: number, sugar: number, tea: number){  
//      // Code -> reuseable
//  // limited
//     return  milk
// }
// //  argument
// // -> Calling Function 

// let result = tea(1,2,3)

// if(result >= 6){
//     console.log("Sugar thaee wadheeka khandru na khao maranden");
    
// }
//   {} object
//         // array   
// let arr = [1,2,3,4,5,6,7,8]

// console.log(arr[]);

// let globalVar = "Global";
// function testScope() {
//   let localVar = "Local";
//   console.log(globalVar);
//   console.log(localVar);
// }
// testScope();
// console.log(localVar);

// async function abc()  {
//         try {

//         }
//         finally{}
// }
// try {
//     throw new Error("Something went wrong");
//   } catch (error) {
//     console.log((error).message);
//   }
  
// console.log(foo);
// var foo = function() {
//   return 1;
// }
// console.log(foo());

// console.log(Boolean(0));
// let obj = {
//     name: "string"
// }

// if("name" in obj){
//     console.log("hello worlllldd");
    
// }


// type abc = { name: string } & { address?: string } 

// let obj : abc = {
//     name: "hello world"
// }
type Nested = {
    a: {
      b: {
        c: number;
      };
    };
  };

//   let obj = { a: { b: { c: 10, d: 20 } } }

type X = { a: string } & { b: number };
type Y = { c: boolean };

// const result: X & Y = { a: "hello", b: 10, c: true };


// function processValue(value: any): void {
//     console.log(value.toFixed(2));
// }

// processValue(5); // Calls with a number
// processValue("Hello"); // Calls with a string
function getValue(value: never): string {
    return "Value is never";
}

// const result = getValue(); // TypeError
