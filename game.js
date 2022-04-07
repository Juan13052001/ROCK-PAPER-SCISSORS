function computerPlay() {
    const rockPaperScissors = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * rockPaperScissors.length);
    return rockPaperScissors[random];
}
let contadorSistema = 0;
let contadorJugador = 0;
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
        contadorSistema++;
        return `Sistema: ${contadorSistema}`;
    } else if (
        (selectionPlayer === "paper" && computerPlay === "paper") ||
        (selectionPlayer === "scissors" && computerPlay === "scissors") ||
        (selectionPlayer === "rock" && computerPlay === "rock")
    ) {
        ganador = "Empate";
        return ganador;
    } else {
        ganador = "Has ganado";
        contadorJugador++;
        return `Jugador: ${contadorJugador}`;
    }
    // console.log(
    //     contadorJugador > contadorSistema
    //         ? `Has ganado con ${contadorJugador} puntos`
    //         : `Has perdido`
    // );
}
function game() {
    for (let i = 0; i < 5; i++) {
        let eleccion = prompt("Escoge una opción: Paper, Rock, Scissors");
        console.log(eleccion);
        let juego = playRound(eleccion, computerPlay());
        console.log(juego);
    }
}

game();
