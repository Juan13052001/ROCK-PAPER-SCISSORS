let puntajeUsuario = 0;
let puntajeSistema = 0;
let resultados = document.getElementById("result");
let botones = document.querySelectorAll("input");

function blockButtton(e) {
    botones.forEach((boton) => (boton.disabled = true));
}

function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let resultado = "";
    if (
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")
    ) {
        puntajeSistema++;
        resultado = `Has perdido! ${computerSelection} es mejor que ${playerSelection} <br/>Computadora: ${puntajeSistema}<br/>Usuario: ${puntajeUsuario}`;
        if (puntajeSistema === 5) {
            resultado = `<br/>Has perdido el juego, recarga la pagina para intentarlo de nuevo`;
            blockButtton();
        }
    } else if (playerSelection === computerSelection) {
        resultado = `<br/> Empate, Escoge otra vez.<br/> Usuario: ${puntajeUsuario}<br/>Sistema: ${puntajeSistema}`;
    } else {
        puntajeUsuario++;
        resultado = `Ganaste,${playerSelection} es mejor que ${computerSelection} <br/>Computadora: ${puntajeSistema}<br/>Usuario: ${puntajeUsuario}`;
        if (puntajeUsuario === 5) {
            resultado = `<br/>Has ganado el juego, recarga la pagina para hacerlo de nuevo`;
            blockButtton();
        }
    }
    return (resultados.innerHTML = resultado);
}

botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        let eleccion = e.target.value;
        playRound(eleccion);
    });
});
