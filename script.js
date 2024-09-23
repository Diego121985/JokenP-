const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}
const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randonNumber = Math.floor(Math.random() * 3)


    return choices[randonNumber]
}
const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if
        (human === "paper" && machine === "rock" ||
        human === "rock" && machine === "scissors" ||
        human === "scissors" && machine === "paper") {
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber

        result.innerHTML = "Você ganhou!"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa!"
    }
console.log(human,machine)
}