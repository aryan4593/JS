class Car {
    constructor(x){
        this.val = x;
        // this is how you create custom constructor in JavaScript
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new Car();
fortuner.setBrand("NO.1");
console.log(fortuner.brand);
// console.log(typeof fortuner); //object



