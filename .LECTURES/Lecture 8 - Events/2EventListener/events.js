let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click" ,() => {
    console.log("Button 1 was clicked!!! handeller 1");
})

const handeler2 = (evt) => {
    console.log("Button 1 was clicked!!! handeller 2");
    console.log("Event obj is "  ,  evt);
}

btn1.addEventListener("click" , handeler2);


btn1.removeEventListener("click" , handeler2);