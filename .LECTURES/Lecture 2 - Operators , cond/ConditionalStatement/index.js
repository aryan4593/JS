function print( a){
    console.log(a);
}

let a = 18, b = "19";

if(a < b){
    console.log("Yes");
}
print(b);

let mode = "dark";
let color;
if (mode == "dark") color = "black";
if (mode === "Light") color = "white"


let name = prompt("Enter your name");
console.log("Hello!",name);

let num = prompt("Enter any number")

if(num%5) console.log(num ," Not divisible by 5");
else console.log(num ," Divisible by 5");