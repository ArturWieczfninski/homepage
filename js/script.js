console.log("Cześć!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});

let myNumber = 4;

let double = number => {
    console.log("myNumber wynosi " + myNumber)
    return number * 0.1;
};



console.log(double(myNumber));

