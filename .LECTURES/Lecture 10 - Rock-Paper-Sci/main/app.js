let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
const getCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randIndex = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    return options[randIndex];
}

const showWinner = (win) => {
    if(win){
        msg.innerText = "You win!";
        user_score.innerText = ++userScore;

    } else {
        msg.innerText = "Computer wins!";
        comp_score.innerText = ++compScore;
    }
}

const draw = () => {
    msg.innerText = "Game was a draw!";
}

const playGame = (userChoice) => {
    let compChoice = getCompChoice();

    if(compChoice === userChoice){
        draw();
        return;
    }

    let win = true;
    if(userChoice === "rock"){
        win = (compChoice === "scissor") ? true : false;
    }
    if(userChoice === "paper"){
        win = (compChoice === "rock") ? true : false;
    }
    if(userChoice === "scissor"){
        win = (compChoice === "paper") ? true : false;
    }

    showWinner(win);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
