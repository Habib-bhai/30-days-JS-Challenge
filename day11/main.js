"use strict";
// PROMISES & ASYNC AWAIT
Object.defineProperty(exports, "__esModule", { value: true });
// Activity.NO.1: Understanding Promises
// TASK 1
// new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         resolve("Promise Successfully Resolved")
//     }, 2000);
// }).then(value => console.log(value))
// TASK 2
// new Promise((res,reject)=> {
//     setTimeout(() => {
//         reject("Cannot resolve the Promise")
//     }, 2000);
// }).catch(val => { 
//     throw new Error(val)
// })
//  Activity.NO.2:  Chaining Promises
// TASK 3  
// new Promise((res,rej)=> {
//     res("Request sent to server")
// }).then(value => {
//     console.log(value);
//     return new Promise((res,rej)=> {
//         setTimeout(() => {
//             res("waiting for response")
//         }, 2000);
//     })
// }).then(val => {
//     console.log(val);
//     return new Promise((res,rej) => {
//         setTimeout(() => {
//             res("DATA fetched successfully")
//         }, 3000);
//     })
// }).then(val => {
//     console.log(val);
// })
// Activity.NO.3: Using Async/Await
// TASK 4
// async function prom(){
//     let result = await new  Promise((res,rej)=> {
//         setTimeout(() => {
//             console.log("Promise REsolved but this time in async function");
//         }, 2000);
//     })
//     console.log(result);
// }
// prom()
async function promRejection() {
    try {
        let result = await new Promise((res, rej) => {
            setTimeout(() => {
                rej("Unfortunately! Promise got rejected");
            }, 2000);
        });
    }
    catch (val) {
        if (typeof val === "string") {
            throw new Error(val);
        }
    }
}
promRejection();
