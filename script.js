let stone = document.getElementById("stone")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let winner = document.getElementById("winner")
let CompChoice = document.getElementById("CompChoice")

let myArr = { 1: "Stone", 2: "Paper", 3: "Scissors" }
// console.log(winCondition[0] === winCondition[0][1]);
stone.addEventListener(('click'), () => {
    let computerTurn = Math.floor(Math.random() * 3) + 1
    stoneSelected(myArr[computerTurn], "Stone")
})
paper.addEventListener(('click'), () => {
    let computerTurn = Math.floor(Math.random() * 3) + 1
    paperSelected(myArr[computerTurn], "Paper")
})
scissors.addEventListener(('click'), () => {
    let computerTurn = Math.floor(Math.random() * 3) + 1
    scissorsSelectd(myArr[computerTurn], "Scissors")
})

function stoneSelected(compChoice, userChoice) {
    if (compChoice === userChoice) {
        winner.innerText = "Tie"
        CompChoice.innerText = `Computer Also Chose ${compChoice}`
        return
    }
    if (compChoice === "Paper") {
        winner.innerText = "Computer Won"
        CompChoice.innerText = `Computer Chose ${compChoice}`
        return
    }
    else {
        winner.innerText = "Player Won"
        CompChoice.innerText = `Computer Chose ${compChoice}`
        return
    }
}
function paperSelected(compChoice, userChoice) {
    if (compChoice === userChoice) {
        winner.innerText = "Tie"
        CompChoice.innerText = `Computer Also Chose ${compChoice}`
        return
    }
    if (compChoice === "Scissors") {
        winner.innerText = "Computer Won"
        CompChoice.innerText = `Computer Chose ${compChoice}`
        return
    }
    else {
        winner.innerText = "Player Won"
        CompChoice.innerText = `Computer Chose ${compChoice}`
        return
    }
}
function scissorsSelectd(compChoice, userChoice) {
    if (compChoice === userChoice) {
        winner.innerText = "Tie"
        CompChoice.innerText = `Computer Also Chose ${compChoice}`
        return
    }
    if (compChoice === "Stone") {
        winner.innerText = "Computer Won"
        CompChoice.innerText = `Computer Chose ${compChoice}`
        return
    }
    else {
        winner.innerText = "Player Won"
        CompChoice.innerText = `Computer Chose ${compChoice}`
        return
    }
}