let newButton = document.createElement("button");
newButton.innerText = "click me!";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";

let body = document.querySelector("body");
body.prepend(newButton);

let para = document.querySelector("p");
// set attribute will overwrite class name 
para.classList.add("newClass");