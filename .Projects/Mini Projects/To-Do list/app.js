const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector('#list-container');

const btn = document.querySelector("button");

function addTask(){
    if(!inputBox.value){
        alert("Enter something");

    }
    else{
        let li = document.createElement('li');
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; /// cross icon
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}
btn.addEventListener('click' , addTask);

listContainer.addEventListener("click" , (event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();