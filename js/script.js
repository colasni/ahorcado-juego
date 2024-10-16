let palabras = ["javascript","mentirosos","html","programación", "piopio", "frontend"]
let palabraElegida = palabras[Math.floor(Math.random()*palabras.length)]
let palabraGuiones = Array(palabraElegida.length).fill("_")
let letrasUsadas =[]
let intentos = 7
let partesAhorcado = [
    "_________ \n",
    "|       | \n",
    "|       O \n",
    " |      -|- \n",
    " |      _|_ \n",
    "|          \n",
    "_________ \n"
]
let estadoAhorcado = ""
let errores = 0

document.addEventListener("DOMContentLoaded",function() {
    document.getElementById("palabra").textContent = palabraGuiones.join('')
})

function adivinarLetra(){
    let letra = document.getElementById("inputLetra").value.toLowerCase()
    if (letrasUsadas.includes(letra)|| letra ===""){
        document.getElementById("mensaje").textContent="Letra ya utilizada o invalida"
        return
    }
    letrasUsadas.push(letra)
    document.getElementById("letras").textContent = letrasUsadas.join('')
    if(palabraElegida.includes(letra)){
        for (let i=0; i<palabraElegida.length; i++){
            if(palabraElegida[i]===letra){
                palabraGuiones[i]=letra
            }
        }
        document.getElementById("palabra").textContent = palabraGuiones.join('')
    }else{
        errores++
        actualizarDibujoAhorcado()
        if(errores === intentos){
            document.getElementById("mensaje").textContent="Perdiste, la palabra era "+palabraElegida
            deshabilitarInput()
        }
    }
    if(palabraGuiones.join('')=== palabraElegida){
        document.getElementById("mensaje").textContent="Ganaste, felicitaciones!! "
    }
    document.getElementById("inputLetra").value = ""
}

function actualizarDibujoAhorcado(){
    estadoAhorcado += partesAhorcado[errores-1]
    document.getElementById("dibujo-ahorcado").textContent= estadoAhorcado
}

function deshabilitarInput(){
    document.getElementById("inputLetra").disabled = true
}
