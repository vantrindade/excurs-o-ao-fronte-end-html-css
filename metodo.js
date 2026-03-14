let tempo = 20 * 60
let timer = null
let estado = "stopped"

function controlarTimer(){

    if(estado === "stopped" || estado === "paused"){
        iniciar()
    } 
    else if(estado === "running"){
        pausar()
    }

}

function iniciar(){

    estado = "running"

    document.getElementById("botaoTimer").innerText = "Pausar"

    timer = setInterval(() => {

        let minutos = Math.floor(tempo / 60)
        let segundos = tempo % 60

        document.getElementById("timer").innerText =
        `${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""}${segundos}`

        if(tempo <= 0){
            clearInterval(timer)
            estado = "stopped"
            return
        }

        tempo--

    },1000)

}

function pausar(){

    clearInterval(timer)

    estado = "paused"

    document.getElementById("botaoTimer").innerText = "Continuar"

}
