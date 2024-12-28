// const heading = document.getElementById("heading");
// heading.style.backgroundColor="black";

// const head = document.getElementsByClassName("head");

// let para = document.getElementsByTagName("p");
// para[0].innerText = "Aryan";

// query selector can select all 3

let firstEle = document.querySelector("p");
console.dir(firstEle);

let allEle = document.querySelectorAll("p"); //returns nodelist
console.dir(allEle);

 let clss = document.querySelector(".head"); // class

 let button = document.querySelector("#ButtonID");

 button.innerText = "Just click";

 list = document.querySelectorAll("div")[0];

//  list.children[1].innerText = "These are fruits";