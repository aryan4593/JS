class Parent{
    hello(){
        console.log("Hello!");
    }
}

class child extends Parent{

}

let obj1 = new child();

obj1.hello();

class Person{
    constructor(name){
        this.species = "HomoSepian";
    }
    eat(){
        console.log("Eat");
    }

    sleep() {
        console.log("Sleep");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name); //this invokes parent class constructor , commnt this to see error

    }
    work(){
        super.eat();
        console.log("solves problem");
    }
}

let eng = new Engineer("Aryan");

// super keyword

// The super keyword is used to call the constructor of its parent class to access the parent's
// properties and methods.
// super( args ) // calls Parent's constructor
// super.parentmethod( args )


// in short super is like this keywor of parent

