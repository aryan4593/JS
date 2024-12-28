// for of - used for string and arrays

let str = "Aryan Pungale";

for(let i of str){  ///iterator
    console.log(i);
}

///we can't use it for objects

// so we have for in llop for it

let student ={
name: "Rahul Kumar",
age: 20,
cgpa:7.5,
isPass: true
};

for(let key in student){
    // console.log("key =" , key, "val=",student[key]);
    console.log( key, ":",student[key]);
}
