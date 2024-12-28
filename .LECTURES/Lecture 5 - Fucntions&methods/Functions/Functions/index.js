// function myFunction(msg){
//     console.log(msg)
// }

// myFunction("Arayn");


// function add(a,b){
//     return a+b;
// }

// console.log(add(3,4));


// Arrow functions

(a,b) => {
    console.log(a+b);
}; // this is arrow function but to call this we've to store this function into some variable

const arrowSum = (a,b)=>{
    return a+b;
};  

console.log(arrowSum(2,4));


const multi = (a,b)=> {
    return a*b;
};

console.log(multi(3,6));


const returnVowel = (str) =>{
    let count = 0;
    let vowels = ['a', 'e','i','o','u'];
    for(let c of str){
        if(vowels.includes(c)) count++;
    }
    return count;
};

console.log(returnVowel("aeiuttt")); // Output: 5


// for each in array it is a method when we associate a function to a object it becomes method

let arr = [1,23,4,5,67,67,1];
arr.forEach( (val)=>{
    val+=3;

})
// this is a call back function  we can return and pass fumnctions in js
// *A callback is a function passed as an argument to another function. ex.
console.log("\n\n")
arr.forEach(function printVal(val,index){
    // forEach will pass all values of array to this function
    console.log(index , ":" , val);
})

arr.forEach((val ,index) => {
    console.log(index * val);
});

// forEach(value , index , array)

// Higher order fuctions 
// functions which takes other functions as parameter or rreturns any functions are higher order fucntions , forEach is higherk order function>