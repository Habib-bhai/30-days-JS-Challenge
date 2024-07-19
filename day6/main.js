"use strict";
// //  ARRAYS
Object.defineProperty(exports, "__esModule", { value: true });
// // Activity.NO.1: Array Creation and Access 
// // let numArray = [1,2,3,4,5]
// // console.log(numArray);
// // console.log(`First element: ${numArray[0]} & Second element: ${numArray[4]}`);
// //  Activity.NO.2: Array methods (Basic)
// // let arr = [1,2,3,4,5,6]
// // arr.push(8)
// // // console.log(arr);
// // arr.pop()
// // // console.log(arr);
// // arr.shift()
// // // console.log(arr);
// // arr.unshift(10)
// // // console.log(arr);
// //  Activity.NO.3: Array methods (Intermediate)
// // let arr2  = [2,4,6,8,10]
// // let result = arr2.map((value)=> {
// //     return value *2
// // })
// // console.log(result);
// // let mixedArr = [1,2,3,4,5,6,7,8,9,10]
// // console.log(mixedArr.filter((value)=> {
// //     return value %2 === 0
// // }));
// // console.log(mixedArr.reduce((prev,curr)=> {
// //     let sum =  prev + curr
// //     return sum
// // }));
// // const fruits: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// // const count: Record<string, number> = fruits.reduce((accumulator, currentValue) => {
// //     if (accumulator[currentValue]) {
// //         accumulator[currentValue]++;
// //     } else {
// //         accumulator[currentValue] = 1;
// //     }
// //     return accumulator;
// // }, {});
// // console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }
// // IN ABOVE CODE "Record<string, number> " IS A UTILITY TYPE, WHICH ARE PREDEFINED TYPES EACH HAVING IT'S OWN SPECIFIC PURPOSE.
// //  Activity.NO.4:  Array Iteration.
// // let arrToLoopThrough: number[] = [1,2,3,4,5,6,7,8,9,10]
// // looping throught the array using for loop.
// // for(let i =0; i<arrToLoopThrough.length ; i++ ) {
// //     console.log(arrToLoopThrough[i]);
// // }
// // arrToLoopThrough.forEach(element => {
// //     console.log(element);
// // })
// let multiDimentionalArray: number[][] = [[1,2,3], [4,5,6], [7,8,9] ]
// // multiDimentionalArray.forEach(element => {
// //     element.forEach(item => console.log(item))
// // })
// console.log(multiDimentionalArray[1][2]);
// function printAll(strs: string | string[] | null) {
//     if (Array.isArray(strs)) {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//   }
// } printAll(null)
let arr = [1, 2, 3];
for (const iterator of arr) {
    console.log(iterator);
}
