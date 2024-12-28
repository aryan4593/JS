// try catch

let a = 5, b =10;

console.log("a+b" , a+b);
console.log("a*b" , a*b);

try{
    console.log("a/b" , a/c); //c is undefined
} catch(err){ //it takes error arguement
    console.log(err);
}
console.log("a**b" , a**b);
console.log("a==b" , a==b);
console.log("a+b" , a+b);
console.log("a+b" , a+b);


// why?
// when error occurs our js code stops executing so we use try - catch