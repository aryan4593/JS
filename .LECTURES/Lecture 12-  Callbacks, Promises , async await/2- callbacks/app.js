// A callback is a function passed as an argument to another function.


function sum(a , b){
    console.log(a+b);
}

function calculator(a, b, callbackFunc){
    callbackFunc(a ,b);
}

calculator(2,3,sum);
calculator(2,3,(a,b) => {a*b});

// settime out also takes callback

// Callback Hell
// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)
// This style of programming becomes difficult to understand & manage.