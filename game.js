const body = document.querySelector("body");
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
    console.log(computerPlay);
    console.log(selectionPlayer);

    let ganador = "";
    if (
        (selectionPlayer === "scissors" && computerPlay === "rock") ||
        (selectionPlayer === "rock" && computerPlay === "paper") ||
        (selectionPlayer === "paper" && computerPlay === "scissors")
    ) {
        ganador = "Has perdido";
        contadorSistema++;
        console.log(`Sistema: ${contadorSistema}`);
    } else if (
        (selectionPlayer === "paper" && computerPlay === "paper") ||
        (selectionPlayer === "scissors" && computerPlay === "scissors") ||
        (selectionPlayer === "rock" && computerPlay === "rock")
    ) {
        ganador = "Empate";
        console.log(ganador);
    } else {
        ganador = "Has ganado";
        contadorJugador++;
        console.log(`Jugador: ${contadorJugador}`);
    }
}

// *Seleccionar el div container para insertar mis botones
const container = document.querySelector(".container");

//*Crear tres botones
const buttonPiedra = document.createElement("button");

const buttonPapel = document.createElement("button");

const buttonTijeras = document.createElement("button");
//*Insertar el texto que debe de tener cada uno
buttonPiedra.innerText = "Piedra";

buttonPapel.innerText = "Papel";

buttonTijeras.innerText = "Tijeras";

//*Insertarles un id a los botones

buttonPiedra.setAttribute("id", "rock");

buttonPapel.setAttribute("id", "paper");

buttonTijeras.setAttribute("id", "scissors");

container.append(buttonPiedra, buttonPapel, buttonTijeras);

// console.log(
//     contadorJugador > contadorSistema
//         ? `Has ganado con ${contadorJugador} puntos`
//         : `Has perdido`
// );
// }
// function game() {
//     for (let i = 0; i < 5; i++) {
//         let eleccion = prompt("Escoge una opción: Paper, Rock, Scissors");
//         console.log(eleccion);
//         let juego = playRound(eleccion, computerPlay());
//         console.log(juego);
//     }
// }

// game();
let boton = document.querySelectorAll("button");
console.log(boton);

body.addEventListener("click", (e) => {
    let eleccion = e.target.id;
    playRound(eleccion, computerPlay());
});
