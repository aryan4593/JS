let str = "NormalString";

console.log("Length is ", str.length)


// Templatae litrals
let specialString = `This is a tempalte litral`
//it is a special type of string
console.log(specialString)
let type = typeof specialString
console.log (type); // string

/// use - 

let item = 'mango' , price = 300;

let statement = `cost of item ${item} is ${price}`
console.log(statement);

console.log(`value is ${1 + 2 + 2}`)

let a = "Aryan\tPungale"
console.log(a.length); //length is 13 not 14 because \t takes only 1 not 2 