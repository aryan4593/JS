// we only use let and const mostly

// why not var

var age = 24;
var age = 59;
var age = 60;
{
    var age = 69;
}
console.log(age); //this will print 69 so inconvinient

// let
console.log("\n \n let")
let num = 24;
// let num = 69; //this is incorrect
num = 35 ; // this is allowd;
{
    let num = 39;
    console.log(num);
}
console.log(num);

//const 

const PI = 3.15
//we can't change it 