let name = prompt("Enter your Full name:");

let userName = '@' + name.replace(" ", "");
userName+=userName.length;
userName = userName.toLowerCase();
console.log(`user name is ${userName}`);