let arr = [1,2,3,4,5,6];
arr.push(7);
console.log(arr);

let foodItems = ["Vegetables" , "Fruits" ,'chinese' ,'others'];
foodItems.push("chips" , "burger" ,"Pizza");
console.log(foodItems);

let deletedItem = foodItems.pop();
console.log(foodItems);
console.log(deletedItem);

console.log(foodItems.toString());//don't change original array


let marvel = ["Thor" , "Hulk" , "Captain" , "Iron Man", "Wanda"];
let DC = ["Superman" , "Batman" , "this" ];

let heros = marvel.concat(DC ,marvel);
console.log(heros);

marvel.unshift("Antman"); //add from start 
// delted = marvel.shift(); '


// slice 
let sliced = heros.slice(2,6);
console.log(sliced);


// Splice() : change original array (add, remove, replace)

// splice( startldx, delCount, newE11... )
arr = [1,2,3,4,5,6,7,8,9,0];
arr.splice(2,4,69,70);
console.log(arr);