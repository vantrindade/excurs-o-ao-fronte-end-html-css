let tempo = 20 * 60
let tempoInical = tempo
let timer = null
let estado = "stopped"

function controlarTimer(){

    if(estado === "stopped"){
        iniciar()
    } 
    else if(estado === "running"){
        resetar()
    }

}

function iniciar(){

    estado = "running"

    document.getElementById("botaoTimer").innerText = "resetar"

    timer = setInterval(() => {

        let minutos = Math.floor(tempo / 60)
        let segundos = tempo % 60

        document.getElementById("timer").innerText =
        `${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""}${segundos}`

        if(tempo <= 0){
            clearInterval(timer)
            estado = "stopped"
            tempo = tempoInical
            document.getElementById("botaoTimer").innerText = "reiniciar"

        }

        tempo--

    },1000)

}

function resetar(){
    clearInterval(timer)
    estado = "stopped"
    tempo = tempoInical
    document.getElementById("botaoTimer").innerText = "Continuar"
    
    let minutos = Math.floor(tempo / 60)
    let segundos = tempo % 60
    document.getElementById("timer").innerText =
    `${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""}${segundos}`
}
