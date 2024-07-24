// PROMISES & ASYNC AWAIT

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

// TASK 5
// async function promRejection() {
//     try {

//         let result = await new Promise((res,rej) => {
//             setTimeout(() => {
//                 rej("Unfortunately! Promise got rejected")
//             }, 2000);
//         })
//     }
//     catch(val: unknown){
//         if(typeof val=== "string"){

//             throw new Error(val)
//         }
//     }
// }

// promRejection()

//  Activity.NO.4: Fetching DATA from an API.
// TASK 6

let url = "https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=87b0b3db79197977b32e6b0c8819181e"
// fetch(url).then(res => {
//     return res.json()
// }).then(jsonResponse => {
//     console.log(jsonResponse);
    
// })

// TASK 7


// async function dataFetching(){

//     let response = await fetch(url)
//     let finalJsonResponse = await response.json()
//     console.log(finalJsonResponse);
    
// }

// dataFetching()

// Activity.NO.5: Concurrent Promises
// TASK 8
let prom1 = new Promise((res,rej)=> {
        // console.log("Hello world ");
        setTimeout(() => {
            res("Inside promise 1")
            
        }, 3000);
        
})

let prom2 = new Promise((res,rej)=> {
        setTimeout(() => {
            res("Inside promise 2")
            
        }, 2000);
})

let prom3 = new Promise((res,rej)=> {
        setTimeout(() => {
            res("Inside promise 3")
        }, 5000);
})


// Promise.all([prom1,prom2,prom3]).then(val => console.log(val))


// TASK 9
// Promise.race([prom1,prom2,prom3]).then(val=> console.log(val))


