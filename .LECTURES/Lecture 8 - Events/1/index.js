let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("Button 1 was clicked");
    let a = 4;
    a++;
    console.log(a);
}

let div = document.querySelector(".box");

div.onmouseover = () => {
    console.log("You're inside div");
    div.style.backgroundColor = "red";
}

div.onmouseleave= () =>{
    div.style.backgroundColor = "green";
}

btn1.onclick = (evt) => {
    console.log("Button 1 was clicked");
    let a = 4;
    a++;
    console.log(a);
    
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX  , evt.clientY)
}
//e is event object