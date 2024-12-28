let marks = [1,32,3,4,6,64,];
console.log(marks);
console.log(marks.length); //property
// type of array is object in cpp
console.log(typeof marks)


// in js , we can make array of multiple datatypes too
let random = ["Aryan" , 45 ,"Pungale" ,null];
console.log(random[0] , random[1])
// console.log(random[26]); //undefined

// unlike strings arrays are mutable

let arr = [1,2,3,4,5,6];
arr[2]= 10;
console.log(arr);

// looping
for(let i = 0 ; i < arr.length ; i++) console.log(arr[i]);  
console.log("\n");
for (let iter of arr) console.log(iter); // this iter isn't exact element of array it is a copyy