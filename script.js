var marcadorUsuario = 0;
var marcadorMaquina = 0;

function actualizarMarcador() {
    document.getElementById("marcador").innerHTML = "Marcador: Usuario " + marcadorUsuario + " - Máquina " + marcadorMaquina;
}

function jugar(jugadas) {
    var jugadaMaquina = jugadas[Math.floor(Math.random() * jugadas.length)];
    var jugadaUsuario = prompt("Ingresa tu jugada (piedra, papel o tijeras):").toLowerCase();

    if (!["piedra", "papel", "tijeras"].includes(jugadaUsuario)) {
        alert("Por favor, ingresa una jugada válida.");
        return "invalida";
    }

    alert("La máquina elige: " + jugadaMaquina);

    if (jugadaUsuario === jugadaMaquina) {
        alert("¡Es un empate! Vuelve a intentarlo.");
        return "empate";
    } else if (
        (jugadaUsuario === "piedra" && jugadaMaquina === "tijeras") ||
        (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
        (jugadaUsuario === "tijeras" && jugadaMaquina === "papel")
    ) {
        alert("¡Ganaste!");
        return "usuario";
    } else {
        alert("¡La máquina gana!");
        return "maquina";
    }
}

function iniciarJuego() {
    marcadorUsuario = 0;
    marcadorMaquina = 0;
    actualizarMarcador();
    document.getElementById("resultado").innerHTML = "";

    var numJuegos = parseInt(document.getElementById("numJuegos").value);
    
    if (!Number.isInteger(numJuegos) || numJuegos <= 0) {
        alert("Por favor, ingresa un número válido de juegos.");
        return;
    }
    
    var jugadas = ["piedra", "papel", "tijeras"];
    var ganadorGeneral;
    for (var i = 0; i < numJuegos; i++) {
        alert("Juego #" + (i + 1));
        var resultado;
        do {
            resultado = jugar(jugadas);
        } while (resultado === "empate");
        
        if (resultado === "usuario") {
            marcadorUsuario++;
        } else if (resultado === "maquina") {
            marcadorMaquina++;
        }
        actualizarMarcador();
    }

    if (marcadorUsuario > marcadorMaquina) {
        ganadorGeneral = "usuario";
    } else if (marcadorUsuario < marcadorMaquina) {
        ganadorGeneral = "maquina";
    } else {
        ganadorGeneral = "empate";
    }

    if (ganadorGeneral === "empate") {
        document.getElementById("resultado").innerHTML = "¡El juego terminó en empate!";
    } else {
        document.getElementById("resultado").innerHTML = "¡" + (ganadorGeneral === "usuario" ? "Felicidades! Has ganado más partidas." : "La máquina ha ganado más partidas!") ;
    }
}