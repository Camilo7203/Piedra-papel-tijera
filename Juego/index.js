let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const result = document.getElementById ("result")
const restart =document.getElementById("restart")

function getCpuChoice(){
    const choice = [ "rock" , "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    console.log(choice[randomNumber])
    return choice[randomNumber];
}
getCpuChoice()

function main (){
    rock_div.addEventListener("click",function(){
        console.log("rock")
        play("rock");
        return "rock"
    })
    paper_div.addEventListener("click",function(){
        console.log("paper")
        play("paper");
        return "paper"
    })
    scissors_div.addEventListener("click",function(){
        console.log("scissors")
        play("scissors");
        return "scissors"
    })
}
main()
function play(userChoice) {
    const cpuChoice = getCpuChoice();
    switch (userChoice + cpuChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            console.log("win")
            win(userChoice, cpuChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            console.log("lose")
            lose(userChoice, cpuChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            console.log("draw")
            draw(userChoice, cpuChoice);
            break;
    }
}
function win(userChoice, cpuChoice){
    userScore ++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML= cpuScore;
    result.innerHTML = `<h3 class="text-win">You Win!</h3> <p>Computer choose <strong>${cpuChoice}</strong></p>`;
}
function lose(userChoice, cpuChoice){
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result.innerHTML = `<h3 class="text-lose">You lose!</h3> <p>Computer choose <strong>${cpuChoice}</strong></p>`;
}
function draw(userChoice, cpuChoice){
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result.innerHTML = `<h3 class="text-draw">it's a draw</h3> <p>you both choose <strong>${cpuChoice}</strong></p>`;
}
function restartGame(){
    userScore = 0;
    cpuScore = 0;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
}
restart.addEventListener('click', restartGame);