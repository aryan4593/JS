let toggleBtn = document.querySelector("#mode"); 

let mode = "light";

toggleBtn.addEventListener("click" , () =>{

    let body = document.querySelector("body");
    if(mode == "light"){
        mode = "dark";
        // body.style.backgroundColor= "black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        mode = "light";
        // body.style.backgroundColor = "white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})