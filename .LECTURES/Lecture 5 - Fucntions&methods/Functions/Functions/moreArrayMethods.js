let arr = [1,2,3,98,5,7,9]

// map
// Creates a new array with the results of some operation. The value its callback returns are
// used to form new array

newArr = arr.map((val)=>{
    return val**2;
});

console.log(newArr);

// Filter
// Creates a new array of elements that give true for a conditionlfilter.
// Eg: all even elements

let newArrr = arr.filter( (val) => {
    return val%2 === 1;
});

console.log(newArrr);


// Reduce
// Performs some operations & reduces the array to a single value. It returns
// that single value.

const output = arr.reduce(( res , val ) =>{
    return res + val;
});

console.log(output);

const largest = arr.reduce((prev , val) => {
    return (prev>val) ? prev : val;
})
console.log(largest);