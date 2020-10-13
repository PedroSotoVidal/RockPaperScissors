let userScore = 0;
let comScore = 0;
const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("com-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//...............................................

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "s") return "Scissors";
    if(letter === "p") return "Paper";
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUser = "user".fontsize(3).sub();
    const smallCom = "com".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUser} beats ${convertToWord(computer)} ${smallCom}. You Win!`;
    const user_div = document.getElementById(user);
    user_div.classList.add('green-border');
    setTimeout(() => user_div.classList.remove('green-border'),1000);

}

function lose(user, computer){
    comScore++;
    comScore_span.innerHTML = comScore;
    const smallUser = "user".fontsize(3).sub();
    const smallCom = "com".fontsize(3).sub();
    const user_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(computer)}${smallCom} beats ${convertToWord(user)}${smallUser}. You Lose!`;
    user_div.classList.add('red-border');
    setTimeout(() =>  user_div.classList.remove('red-border'),1000);
}

function draw(user, computer){
    const smallUser = "user".fontsize(3).sub();
    const smallCom = "com".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(computer)}${smallCom} equals to ${convertToWord(user)}${smallUser}. Draw!`;
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;            
    }

}

function main(){

    rock_div.addEventListener('click', () => game("r")) ;   
    paper_div.addEventListener('click', () => game("p")   );
    scissors_div.addEventListener('click', () => game("s"));
}

main();