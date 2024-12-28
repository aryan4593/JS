////// no string method changes original string



let str = "AryanPungale";
console.log(str);
console.log(str.toUpperCase());
console.log(str);

console.log("\n\n");

console.log("lowerCase is ", str.toLowerCase());
console.log(str);


// trim - removes white spaces ex ____aryan_____ -> aryan
let tempString = "    aryan    ";
console.log(tempString);
console.log(tempString.trim());


// slice return part of string  str.slice (st , end)  => return string from [st,end)
let numStr = "0123456";
console.log(numStr.slice(3,5))


// concat 
str1 = "aryan" , str2 = "pungale";

console.log(str1.concat(str2));
// easy way
str1 = str1 +" "+ str2;
console.log(str1);

console.log("Hello" + 123);
console.log("456" + 123); //concat
console.log("456" - 123); //minus operation


// replace(searchVal , newVal)
str = "abcdefgh";
console.log(str.replace('b' , 'd'))
console.log(str.replace('bcd' , 'd'))

ttemp = "abcabc";
console.log(ttemp.replace("abc","a")); //replace first occurance 
console.log(ttemp.replaceAll("abc","a")); // replace all

// charAt(index);

strr = "aryanP";
console.log(strr.charAt(2));//char at 2nd index




//////// original string is immutable   ////////

let tempStr = "Aryan";
tempStr[0] = 'p';
console.log(tempStr); // this will still print aryan as original string is immutable

// so
tempStr = tempStr.replace("A" , "p");
console.log(tempStr);