function computerPlay() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[random];
}

function playRound(playerSelection, computerSelection) {
    let computerPlay = computerSelection.toLowerCase();
    let selectionPlayer = playerSelection.toLowerCase();
    let ganador = "";
    if (
        (selectionPlayer === "scissors" && computerPlay === "rock") ||
        (selectionPlayer === "rock" && computerPlay === "paper") ||
        (selectionPlayer === "paper" && computerPlay === "scissors")
    ) {
        ganador = "Has perdido";
        return ganador;
    } else if (
        (selectionPlayer === "paper" && computerPlay === "paper") ||
        (selectionPlayer === "scissors" && computerPlay === "scissors") ||
        (selectionPlayer === "rock" && computerPlay === "rock")
    ) {
        ganador = "Empate";
        return ganador;
    } else {
        ganador = "Has ganado";
        return ganador;
    }
}

console.log(playRound(computerPlay(), computerPlay()));