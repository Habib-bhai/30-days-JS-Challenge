// EVENT HANDLING
// Activity.NO.1: Basic Event Handling
var btn = document.body.querySelector("button");
// btn.addEventListener("click", ()=> {
//     let p = document.body.querySelector("p") as HTMLElement 
//     p.textContent = "The new content"
// }) // TASK 1
// let img: HTMLElement = document.body.querySelector("img") as HTMLElement
// btn.addEventListener("dblclick", () => {
//     img.classList.toggle("hidden")
// }) // TASK 2
// Activity.NO.2: Mouse Events
// btn.addEventListener("mouseover", () => {
//     btn.classList.toggle("bgColor")
// }) // TASK 3
// TASK 3 again 
// btn.addEventListener("mouseover",()=> btn.style.backgroundColor = "Blue" )
// // TASK 4
// btn.addEventListener("mouseout",()=> btn.style.backgroundColor = "silver")
// Activity.NO.3 : Keyboard Events
// let inp: HTMLElement = document.querySelector("input") as HTMLElement
// inp.addEventListener("keydown", (btnPressed: any)=> {
// console.log(btnPressed.target.value);
// }) // TASK 5
// inp.addEventListener("keyup", (btnPressed: any)=> {
//     console.log(btnPressed.target.value);
//     }) // TASK 6
// Activity.NO.4: FORM Events
// var form = document.body.querySelector("form");
// TASK 7
// form.addEventListener("submit", (formData: any)=> {
// formData.preventDefault()
// // let finalFormData = new FormData(formData)
// for (const key in formData) {
//    console.log(`${key}:${formData[key]}`);
// }
// })
// TASK 8
// let select  = document.querySelector("select") 
// select.addEventListener("change", (Event)=> {

//     let p =document.body.querySelector('p') 
// p.textContent = Event.target.value

// })


// Activity.NO.5: Event Delegation

// TASK 9


// document.querySelector("ul").addEventListener("click", (e)=> {
//    let trg = e.target
// console.log(trg.textContent)
// })

// TASK 10
// let ul = document.querySelector("ul")

// ul.addEventListener("click", ()=> {
//     console.log("UL's event executed");
    
// })

// let dynamicLi = document.createElement("li")
// dynamicLi.textContent = "Dynamic Element"

// ul.appendChild(dynamicLi)

// dynamicLi.addEventListener("click", ()=> {
//     console.log("Dynamic Element Clicked");
    
// })  // This code has a mistake

let ul = document.querySelector("ul");

ul.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "LI") {
        console.log("Dynamic Element Clicked");
    }
});

let dynamicLi = document.createElement("li");
dynamicLi.textContent = "Dynamic Element";

ul.appendChild(dynamicLi);  // This code has resolved that mistake.

