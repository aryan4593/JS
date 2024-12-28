let nums = [2,3,4,6,7,8,43];

nums.forEach((val)=>{
    console.log(val**2);
});


/// other way 
let square = (val)=>{
    console.log(val**3);
    return val**2;
}

console.log("\n\n");

nums.forEach(square);