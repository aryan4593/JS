function asyncFunc1() {
    return new Promise((resolve ,reject) =>{
        setTimeout(()=>{
            console.log("some Data 1");
            resolve("Succeess");
        }, 4000)
    });


};

function asyncFunc2() {
    return new Promise((resolve ,reject) =>{
        setTimeout(()=>{
            console.log("some Data 2");
            resolve("Succeess");
        }, 4000)
    });


};


console.log("getting data1");
let p1 = asyncFunc1();

p1.then((res)=>{
    console.log(res);
    let p2 = asyncFunc2();
    
    console.log("getting data2");
    p2.then((res)=>{
        console.log(res);
    });
})

// same
// console.log("getting data1");
// asyncFunc1().then((res)=>{
//     asyncFunc2().then((res) =>{
//         console.log("Fetched")
//     })
// })
