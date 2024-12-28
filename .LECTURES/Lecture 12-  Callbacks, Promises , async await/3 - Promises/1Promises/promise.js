// let promise  = new Promise((resolve , reject) =>{
//     console.log("I am a promise");
//     // resolve("successs");
//     reject("some error occured!!!");
// });



function getData (userId , getNextData){

    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log(`data, ${userId}`);

            resolve("success");
            if(getNextData){
                getNextData();
            }

        }, 4000);
    })
}