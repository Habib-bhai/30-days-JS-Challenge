// DOM Manipulation
// Activity.NO.1:   Selecting & Manipulating Elements
//TASK1
// const heading = document.body.querySelector("#hello") as HTMLElement
// heading.innerHTML = "Change kardiya Bhai <br> <h2> This is the second heading </h2>"
// TASK2
// const heading = document.body.querySelector("h1") as HTMLElement
// heading.style.backgroundColor = "green"
// heading.style.color = "white"
//  Activity.NO.2: Creating and Appending Elements
// TASK 3
// let newElem: HTMLDivElement = document.createElement("div") 
// newElem.textContent = "This is a div"
// document.body.appendChild(newElem)
// TASK 4
// document.body.querySelector(".list")?.insertAdjacentHTML("beforeend", "<li>fourth</li>" )
// Activity.NO.3 : Removing elements
// document.body.querySelector("#hello")?.remove()  //TASK 5
// document.body.querySelector(".list")?.lastElementChild?.remove() // TASK 6
// Activity.NO.4: Modifying Attributes and Classes
// document.body.querySelector(".emoj")?.setAttribute('src', "emoji.jpg") // TASK 7
// let elem: HTMLElement = document.body.querySelector(".header")  as HTMLElement
// elem.classList.add("new-class")
// elem.classList.remove("new-class")
// Activity.NO.5 : Event Handling
// let btn = document.body.querySelector(".btn")
// btn?.addEventListener("click", ()=> {
//    let para: HTMLElement =  document.body.querySelector(".paragraph") as HTMLElement
//    para.textContent =  "Event listener, listened successfuly and the content is changed"
// })
var heading = document.querySelector(".header");
heading.addEventListener("mouseover", function () {
    heading.style.border = "10px solid blue";
});
