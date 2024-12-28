hello = document.querySelector("h2");
hello.append(" ~From Aryan");

divs = document.querySelectorAll(".box");
// divs[0].innerText = "Hello 0";
// divs[1].innerText = "Hello 1";
// divs[2].innerText = "Hello 2";
index = 0;
for(let div of divs){
    div.innerText = "newUnique value " + index++;
}