const student = {
    fullName : "Aryan p",
    marks : 93,
    printMarks: () =>{
        console.log(this.marks);
    },
};

const employes = {
    calctax (){
        console.log ("tax rate is 10%");
    }
};

const karanArjun = {
    salary : 50000,
};

karanArjun.__proto__ = employes;

// now we can use functions and method s fof emplyes in karanarjun

karanArjun.calctax();