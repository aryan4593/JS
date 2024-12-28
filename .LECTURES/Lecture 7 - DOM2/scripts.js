let div = document.querySelector("div");

let id = div.getAttribute("id");
console.log("id of div is: ", id);

let para = document.querySelector("p");

console.log(para.getAttribute("class"));

para.setAttribute("class" , "newClass");
console.log(para.getAttribute("class"));


console.dir(div.style);

div.style.backgroundColor = "purple";
// div.innerText ="This is box";