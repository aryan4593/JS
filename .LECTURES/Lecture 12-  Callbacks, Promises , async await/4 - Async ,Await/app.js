// async function hello() {
//     console.log("Hello");
// }

// // async function always retrurn a promise

function api() {
    return new Promise((resolve ,reject)=>{
        setTimeout(() => {
            console.log("some data ");
            resolve(200);
        }, 2002);
    })
}

// api();

async function getWeather() {
    await api();
    await api();
} 
// getWeather();