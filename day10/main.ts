// EVENT HANDLING


// Activity.NO.1: Basic Event Handling

let btn: HTMLElement = document.body.querySelector("button") as HTMLElement
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
let form: HTMLElement = document.body.querySelector("form") as HTMLElement

// TASK 7
// form.addEventListener("submit", (formData: any)=> {
// formData.preventDefault()

// // let finalFormData = new FormData(formData)

// for (const key in formData) {
//    console.log(`${key}:${formData[key]}`);
   
// }

// })

// TASK 8

// let select : HTMLElement = document.querySelector("select") as HTMLElement

// select.addEventListener("change", ()=> {

//     let p: any =document.body.querySelector('p') 
// p.textContent =  select.target.value

// })
