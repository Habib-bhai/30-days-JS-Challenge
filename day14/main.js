// //  CLASSES
// // Activity.NO.1 : Class Definition
// // TASK 1
// class Person {
//         constructor(public name: string, public age: number){}
//         static genericGreeter(){
//             console.log(`hello ${this.name}`);
//         }
//         greeting(){
//             return `Hello ${this.name}`
//         }
//         update(){       // TASK 2
//             console.log(`new age ${this.age +1}`);
//         }
// }
//  Person.genericGreeter()
// // let user = new Person("Habib",18)
// // user.update()
// //  Activity.NO.2: Class Inheritance.
// // TASK 3
// // class Student extends Person {
// //     studentId: number
// //     constructor(student: number, name: string, age: number){
// //         super(name, age )// Calls the constructor & methods of the parent class.
// //         this.studentId = student
// //     }
// //     greeting(): string {    // "greeting" method overridden, TASK 4
// //         return `Hello ${this.name}, You ID is ${this.studentId}`
// //     }
// //     getStudentId(){
// //         return this.studentId
// //     }
// // }
// // let std1 = new Student(1203,"KK", 20)
// // // console.log(std1)
// // console.log(std1.greeting())
//  // Activity.NO.3: Static Methods & Properties.
// TASK 5
//     class Person {
//         constructor(public name: string){}
//             sum(){
//                 console.log(10 + 20);
//             }
//         static genericGreeting() {
//             console.log(`Hello world`);
//         }
//     }
// // Person.genericGreeting()
// TASK 6
// class Student {
//     static numberOfStudentsCreated :number = 0
//     constructor(public name: string){
//          Student.numberOfStudentsCreated++  // called the property using recursion (meaning called the class and accessed the property)
//     }
//    static numberofSTDs(){
//         return Student.numberOfStudentsCreated
//     }
// }
// let obj1 = new Student("habib")
// let obj2 = new Student("habib")
// let obj3 = new Student("habib")
// console.log(Student.numberofSTDs())
//  Activity.NO.4: GETTERS & SETTERS
// TASK 7
class Person {
    firstName;
    lastName;
    // constructor( public firstName: string, public lastName: string){} // This was for TASK 7
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._setFirstName = this.firstName;
        this._setLastName = this.lastName;
    }
    set _setFirstName(a) {
        if (a === "") {
            throw new Error("cannot assign empty string");
        }
        else
            this.firstName = a;
    }
    set _setLastName(val) {
        if (val === "") {
            throw new Error("cannot assign empty string");
        }
        else
            this.lastName = val;
    }
    get _fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let p1 = new Person("Habib", "Ullah");
// console.log(p1.fullName);
// TASK 8
// console.log(p1._fullName);
// Activity.NO.5: Private Fields
// TASK 9
import inquirer from "inquirer";
class Account {
    balance = 0;
    async depositMoney() {
        let answer = await inquirer.prompt({
            name: "deposit",
            type: "number",
            message: "Enter the amount you wanna deposit"
        });
        this.balance = answer.deposit;
        console.log(`Your new balance after depositing ${answer.deposit}: ${this.balance}`);
    }
    async withdraw() {
        console.log(`your current balance is: ${this.balance}`);
        let answer = await inquirer.prompt({
            name: "withdraw",
            type: "number",
            message: "Enter the amount you wanna withdraw"
        });
        this.balance -= answer.withdraw;
        console.log(`Your new balance is ${this.balance}`);
    }
}
// TASK 10 -> test task 9
let a1 = new Account();
// // a1.depositMoney()
// a1.withdraw()
async function testAccount() {
    let answer;
    do {
        answer = await inquirer.prompt({
            name: "selectOperation",
            type: "list",
            choices: ["deposit", "withdraw", "exit"]
        });
        if (answer.selectOperation === "deposit") {
            await a1.depositMoney();
        }
        else if (answer.selectOperation === "withdraw") {
            await a1.withdraw();
        }
        else {
            break;
        }
    } while (answer.selectOperation != "exit");
}
testAccount();
// ====================================================================================================================
// class details {
//     constructor(private name: string){
//         this.Name = name
//     }
//       private  set Name(val: string) {
//                 if(this.name === ""){
//                     throw new Error("errrrrrrrrrrrrrrr")
//                 }
//                 else 
//                 this.name = val
//         }
//     get  getName() {
//         return this.name
//     }
// }
// let obj = new details("")
// console.log(obj.getName);
// class Details {
// // private _name: string
//     constructor(private _name: string) {
//         this.name = _name; // use setter here to apply validation
//     }
//     set name(val: string) {
//         if (val === "") {
//        throw new Error("Name cannot be empty");
//         }
//         this._name = val;
//     }
//     get name() {
//         return this._name;
//     }
// }
// let obj = new Details("Habib");
// console.log(obj.name);
// class MyClass {
//     // private _property: string;
//     constructor(private _property: string) {
//         // Direct assignment does not call the setter
//         // this._property = value;
//         // Calling the setter to ensure checks are performed
//         this.property = _property;
//     }
//     get property(): string {
//         return this._property;
//     }
//     set property(value: string) {
//         if (value.length > 0) {
//             this._property = value;
//         } else {
//             throw new Error("Property value must be non-empty.");
//         }
//     }
// }
// try {
//     const instance = new MyClass("valid value");  // Works fine
//     console.log(instance.property);
//     // Uncommenting the following line will throw an error
//     // const invalidInstance = new MyClass("");  // Throws error
// } catch (error) {
//     console.error(error);
// }
