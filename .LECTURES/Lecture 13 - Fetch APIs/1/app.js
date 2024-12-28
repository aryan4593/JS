const URL = "https://dog-api.kinduff.com/api/facts";

const factEle = document.querySelector("p");
const btn = document.querySelector("#btn");

// fetch sends a request to url
// let promise = fetch(URL);  //FETCH RETURNS A PROMISE
// console.log(promise)  we have to make it async

btn.addEventListener("click" , () => {
    getFact();
});

let data;
const getFact = async () => {
    console.log("Getting data...");
    let response = await fetch(URL); // Fetch data from the API
    console.log(response); // Logs the entire response object

    data = await response.json(); // Resolve the JSON promise
    console.log(data); // Logs the parsed data object
    factEle.innerText = data.facts
    
    
};



// // same thing with promise chaining

// function getFact() {
//     fetch(URL).then((res) =>{
//         return res.json();
//     }).then((data) =>{
//         console.log(data);
//     })
// }
