var numeroSecreto = parseInt(Math.random() * 1000 + 1)
document.getElementById('numeroSecretoValor').textContent = numeroSecreto
var intentos = 0
var numeroDigitado
var maxIntentos = 10

while (numeroSecreto != numeroDigitado) {
    numeroDigitado = prompt(`Ingresa un número entre 1 y 1000, \nTienes ${maxIntentos - intentos} intentos`)
    intentos += 1
    var intentosRestantes = maxIntentos - intentos

    if (numeroDigitado === null) {
        alert('Has cancelado el juego. ¡Hasta luego!')
        break
    }

    if (numeroSecreto == numeroDigitado) {
        alert(`FELICITACIONES ACERTASTE!!`)
        confettiFalling()   /* llamada a la función con el efeco de confetti */
        break
    } else if (numeroSecreto > numeroDigitado) {
        alert(`Te equivocaste.. el número secreto es mayor que ${numeroDigitado} \nTe quedan ${intentosRestantes} intentos`)
    } else if (numeroSecreto < numeroDigitado) {
        alert(`Te equivocaste.. el número secreto es menor que ${numeroDigitado} \nTe quedan ${intentosRestantes} intentos`)
    }

    if (intentos == maxIntentos) {
        alert(`Ya utilizaste tus 10 intentos. El número secreto era: ${numeroSecreto} \nGAME OVER!!`)
        break
    }
}