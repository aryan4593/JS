//noramlly js executes in synchronous nature

function hello(){
    console.log(`Hello`);
};
console.log("one");
console.log("two");
setTimeout(hello ,2000); //execute after 2 second 2000 ms
// or
// setTimeout(() => {  
//     console.log("Arrow, Hello!!");
// }, 2000);


console.log("three"); 
console.log("four");

//this 3 and 4 will execure befor hello
