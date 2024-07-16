//  CONTROL STRUCTURES
// Activity.No.1: If-Else Statements
// let a = 8
// if(a> 0) console.log(`${a} is a positive Number`);
// else if(a == 0) console.log("Number is 0");
// else console.log("number is negative");
// let age = 18
// if(age >= 18) console.log("You are Eligible to vote");
// else console.log("You are underage, so, cannot vote");
// Activity.No.2: Nested If-Else Statements
// let first = 11;
// let second = 12;
// let third = 13;
// if (first > second) {
//     if (first > third) {
//         console.log(`${first} is the largest number`);
//     } else {
//         console.log(`${third} is the largest number`);
//     }
// } else {
//     if (second > third) {
//         console.log(`${second} is the largest number`);
//     } else {
//         console.log(`${third} is the largest number`);
//     }
// }
// Activity.No.3: Switch Case
// let dayNumber = 5
// switch(dayNumber) {
//     case 1:
//         console.log("Today is 'MONDAY'");
//         break
//     case 2:
//         console.log("Today is 'TUESDAY'");
//         break
//     case 3:
//         console.log("Today is 'WEDNESDAY'");
//         break
//     case 4:
//         console.log("Today is 'THURSDAY'");
//         break
//     case 5:
//         console.log("Today is 'FRIDAY'");
//         break
//     case 6:
//         console.log("Today is 'SATURDAY'");
//         break
//     case 7:
//         console.log("Today is 'SUNDAY'");
//         break
// }
// let score = 30;
// function gradeGiver(value: number) {
//     // Calculate a base for the switch cases
//     let range = Math.floor(value / 10);
//     switch (true) {
//         case (range >= 7 && range <= 10): // Covers scores 70 to 100
//             console.log("Congratulations! You got an 'A'");
//             break;
//         case (range >= 6 && range < 7): // Covers scores 60 to 69
//             console.log("Congratulations! You got a 'B'");
//             break;
//         case (range >= 5 && range < 6): // Covers scores 50 to 59
//             console.log("Congratulations! You got a 'C', but you need to work hard");
//             break;
//         case (range >= 4 && range < 5): // Covers scores 40 to 49
//             console.log("You got a 'D', you need to work very hard");
//             break;
//         case (range >= 0 && range < 4): // Covers scores 0 to 39
//             console.log("Failed! You need to work extremely hard");
//             break;
//         default:
//             console.log("Invalid score");
//     }
// }
// gradeGiver(score);
// Activity.NO.4: Ternary operator
// let num = 2
// num % 2 === 0 ? console.log(`${num} is an EVEN Number`) : console.log(`${num} is an ODD Number`);
// Activity.NO.5: Combining Conditions
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("".concat(year, " is a Leap year"));
    }
    else {
        console.log("".concat(year, " is Not a Leap year"));
    }
}
isLeapYear(2024);
