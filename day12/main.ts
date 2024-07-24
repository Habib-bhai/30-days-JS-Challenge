// ERROR HANDLING
// TASK 1
// async function errorThrowing(){
//     try{
//         await new Promise((res,rej)=> rej("oops failed"))
//     }
//     catch(erro){
//         console.error(erro)
//     }
// }


// errorThrowing()

// TASK 2
// async function divisionPerformer(a: number, b: number){
//     try{
//         if(b=== 0){
//             throw new Error("The divisor is 0 can't perform this division as it is leading to infinity") 
//         }
//         else {
//             console.log(a/b);

//         }
//     }
//     catch(error){
// console.log(error);

//     }

// }

// divisionPerformer(10,10)


//  Activity.NO.2: Finally Block

// async function obeservations(){
//     try{

//         type User = "normal" | "Paid" | "Standard"

//    const comparisonObservation =(user: User)=> {


//        if(user === "normal" || user === "Paid"){
//            console.log(`you are a ${user} user`);

//         }
//         else {
//             throw new Error(" This user doesn't exist")
//         }
//     }

//     comparisonObservation("Standard")

//     }
//     catch(error){
//         console.log(error);

//     }
// finally{
//     console.log("Good to have you");

// }
// }
// obeservations()



//  Activity.NO.3: Custom Error Objects
// TASK 4

// class CustomError extends Error {

//     constructor(message: string) {
//         super(message)
//         this.name = "CustomEroor"

//     }
// }

// function errorHandler() {
// try{

// let obj = new CustomError("This error is made by me")

// throw  obj

// }
// catch(error) {
//     console.log(error);

// }
// }

// errorHandler()

// TASK 5


// async function inputValidator(inp: string) {

//     try {
//         if (inp.length === 0) {
//             throw new CustomError("The provided string is empty")
//         }

//         console.log(inp);

//     }
//     catch (error) {
//         console.log(error);

//     }

// }

// inputValidator("")


// Activity.NO.4: Error Handling in Promises
// TASK 6
// new Promise((res,rej)=> {
//     setTimeout(() => {
//         let a = Math.floor(Math.random() * 10 +1)
//         if(a >5){
//             res("Wow, Promises successful")
//         }
//         else {

//             rej("Sorry, promise got rejected")
//         }
//     }, 1000);
// }).then(res=> {
//     console.log(res, "Resolved");

// }).catch(rej => console.log(rej, "rejected"))

// TASK 7
// async function errorOrResolve() {
//     try {
//         let response = await new Promise((res,rej)=> {
//             setTimeout(() => {
//                 let a = Math.floor(Math.random() * 10 +1)
//                 if(a >5){
//                     res("Wow, Promises successful")
//                 }
//                 else {
        
//                     rej("Sorry, promise got rejected")
//                 }
//             }, 1000);
//         })
//             console.log(response, "Resolved");



//     }
//     catch (error) {
//         console.error(error)
//     }
// }
// errorOrResolve()

// TASK 8

// async function invalidReq() {
//     try{

//         let response = await fetch("https://www.google.com/data")
//         console.log(response);
        
//     }
//     catch(error) {
            
//       let err =   JSON.stringify(error)
//                 throw new Error(err)
            
        
        
//     }

// }
// invalidReq()
