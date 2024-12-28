let marks = [87,86,34,68,99,89,95,43];

let toppers = marks.filter((val , index) => {
    if(val > 85)
    return {val , index};
})
console.log(toppers);


let n = prompt ("Enter a number: ");
let arr = [];
for(let i = 1 ; i <= n ; i++){
    arr.push(i);
}