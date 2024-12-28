// String s1 = "hello";
// primitive data tpes (7)
/*
number
String
Boolean
Undefined
Null
BigInt
symbol

*/

a = 24;
console.log(typeof a);

let b;
console.log(typeof b);

let name = "Aryan";
console.log(typeof name);

let bool = true;
console.log(typeof bool);

let head = null;
console.log(typeof head);

let y = BigInt(1234);
console.log(typeof y);

let z = Symbol("Hello!");
console.log(typeof z);




// Non premetive datatypes - 


// objects - collectioin of values

const student = {
    fullName : "Aryan Pungale",
    age : 19,
    cgpa : undefined ,
    isPass : null
}

console.log(student);
console.log(typeof student);

name = student["fullName"];
console.log(name)
console.log(student.age)
student.age = 20;
console.log(student.age)