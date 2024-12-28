let newBtn = document.createElement("button");
// first create elemnt
newBtn.innerText = "Click me";

div = document.querySelector("div");
div.append(newBtn); //at end of div
div.prepend(newBtn); // at start of div 
div.before(newBtn); //just before div
div.after(newBtn); //just after div


let pageHeading = document.createElement("h1");
pageHeading.innerHTML = "<b> <i> Hello, JavaScript!!</i> </b>";
let body =  document.querySelector("body");
body.prepend(pageHeading);

para = document.querySelector("p");
para.remove();