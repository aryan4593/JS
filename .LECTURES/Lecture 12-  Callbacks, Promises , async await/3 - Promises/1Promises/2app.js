const getPromise =  () =>{
   return new Promise((resolve ,reject) => {
        console.log("I am a promise");

        resolve("Success!!");
        reject("error");
    });
};
 
let prom = getPromise();

prom.then( (res) =>{
    console.log("Promise fullfilled");
})


prom.catch((err)=>{
    // catches error
    console.log("rejected");
})