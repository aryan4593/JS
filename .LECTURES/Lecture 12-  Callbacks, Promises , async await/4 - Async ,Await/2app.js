function getData(dataId){
    return new Promise( ( resolve, reject) =>{
        setTimeout(()=>{
            console.log("data" , dataId);
            resolve("success!!");
        } ,2500)
    });
    
}

async function getDataAsync() {
    // we can use await inside async func only

    await getData(1);
    await getData(2); 
    await getData(3); 
}
// getDataAsync(); we hae to do an extra call  to avoid this we have iife
// IIFE : Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined.


// (function () {
//     //...
// }) ();

// this is syntax , here func can be async and arrow function too
// (func)();

(async function () {
    // we can use await inside async func only

    await getData(1);
    await getData(2); 
    await getData(3); 
}) ();