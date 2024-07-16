// LOOPS
// Activity.NO.1: For Loop
// for(let i = 1; i<= 10; i++){
//     console.log(i);
// }
// for(let i = 1; i<= 10; i++){
//     console.log(`5 * ${i} = ${5 * i}`);   
// }
// Activity.NO.2: While Loop
// let a = 1
// let sum = 0
// while(a <= 10){
// sum +=  a 
// a++
// }
// console.log(sum);
// Activity.NO.3: Do-While Loop
// let num = 1
// do {
// console.log(num);
// num++
// } while(num <= 5)
// let numTofindFactorialOf = 5
// let factorial = 1
// do{
// if(numTofindFactorialOf == 1 || numTofindFactorialOf == 0){
//     factorial *= 1
// }
// else factorial *= numTofindFactorialOf
// numTofindFactorialOf--
// } while( numTofindFactorialOf >=1)
//     console.log(factorial);
// Activity.NO.4:  Nested Loops
// for(let i = 1; i<=5 ; i++){
// let row = ""
// for(let j = 1; j<= i; j++){
//     row += "* "
// }
// console.log(row);
// }
// Activity.NO.5: Loop control statements
// for(let i = 1; i<=10; i++) {
//     if(i===5){
//         continue;
//     }
//     else console.log(i);
// }
for (var i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    else
        console.log(i);
}
