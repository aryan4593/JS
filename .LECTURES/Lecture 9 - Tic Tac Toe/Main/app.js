let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = true; //if true then O else X

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = ()=>{
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach( (box) => {
    box.addEventListener("click" , ()=> {
        console.log("box was clicked");
        if(box.innerText == ""){
            let txt = (turn)  ? "O" : "X";
            box.innerText = txt;
            if(turn) box.style.color = "black";
            else box.style.color = "#ae3e3a";
            turn = !turn;
        }
        box.disabled = true; // disable button after clicking
        checkWinner();
    })
})

const disable = () =>{
    boxes.forEach( (box) => {
        box.disabled = true;
    })
}
const enableBoxes = () =>{
    boxes.forEach( (box) => {
        box.disabled = false ;
        box.innerText = "";
    })
}
const checkWinner = () =>{

    for(let pattern of winningPatterns){
        // console.log(pattern);
        let index1 = pattern[0] , index2 = pattern[1], index3 = pattern[2];
        
        let val1 = boxes[index1].innerText;
        let val2 = boxes[index2].innerText;
        let val3 = boxes[index3].innerText;


        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1===val2 && val2 ===val3) {
                console.log("winner is ",val1);
                showWinner(val1);
                disable();
            }
        }
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congrats ${winner} has won the game!!`;

    msgContainer.classList.remove("hide");
}



newBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click" ,resetGame);