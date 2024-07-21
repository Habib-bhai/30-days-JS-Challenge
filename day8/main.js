//  ES6+ FEATURES
var _a;
// Activity.NO.1: Template Literals
// let pName = "habib"
// let age = 18
// console.log(`Hello ${pName}, your age is ${age}`);
// console.log(`Hello my name is ${pName} 
//     And  my age is ${age}
//     I'm an inspiring dev`);
//  Activity.NO.2: Destructuring
// let arr = [1,2,3,4,5,6]
// let [a,b] = arr
// console.log(a, b);
// let book = {
//     title: "feel good productivity",
//     author: "ali abdaal"
// }
// let {title, author} = book
// console.log(title, author);
//  Activity.NO.3: Spread and REST operators
// let arr = [1,2,3,4,5]
// console.log(...arr.concat(6,7,8));
// function sum(...val){
//     let sum = 0 
//     val.forEach(item => sum += item)
//     return sum
// }
// console.log(sum(1,2,3,4,5,6));
// Activity.NO.4: Default Parameters
// function product(first: number, second: number = 1 ) {
//     return first * second
// }
// console.log(product(10, 5)); // with
// console.log(product(10)); // without
// Activity.NO.5: Enhanced Object Literals
// let pname = "habib"
// let age = 18
// const person1 = {
//     pname,
//     age,
//     greeting() {
//       return `Hello ${this.pName}`;
//     }
// } 
// console.log(person1.greeting());
var userName = "name";
var obj = (_a = {},
    _a[userName] = "John",
    _a);
console.log(obj);
