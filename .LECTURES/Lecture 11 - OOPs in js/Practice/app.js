class user{
    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    viewData (){
        console.log(`name: ${this.name} \nemail: ${this.email}`);
    }
}

class Admin extends user{
    constructor(name , email){
        super(name ,email);
    }
    editData(){
        super.name  = "Edited name"
    }
}
let student1 = new user("aryan" ,  "abc@xyz");

let Admin1 = new Admin("admin" , "access@xyz");