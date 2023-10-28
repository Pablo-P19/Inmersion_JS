//CONVERSIÓN DE PESOS
document.getElementById('name').addEventListener('input', function() {
    let nombre = this.value.toUpperCase()
    document.getElementById('texto-pesos').innerHTML = 'Hola <span class="nombre">' + nombre + '</span> tu resultado es:'
    document.getElementById('texto-temp').innerHTML = '<span class="nombre">' + nombre + '</span> por favor, ingresa el valor de la temperatura que deseas convertir: '
})

document.getElementById('pesos').addEventListener('input', function() {
    let pesos = this.value;
    document.getElementById('dol').innerHTML = '$ <span class="result">' + (pesos * 0.0011).toFixed(2) +'</span>'
    document.getElementById('eur').innerHTML = '€ <span class="result">' + (pesos * 0.0010).toFixed(2) +'</span>'
})


//CONVERSIÓN DE TEMPERATURAS
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos
    const inputCelsius = document.getElementById('temp-c')
    const inputFahrenheit = document.getElementById('temp-f')
    const inputKelvin = document.getElementById('temp-k')

    // Escuchar cambios en los inputs de Celsius
    inputCelsius.addEventListener('input', function() {
        const celsiusValue = parseFloat(this.value)

        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32
            inputFahrenheit.value = fahrenheitValue.toFixed(2)
            const kelvinValue = celsiusValue + 273.15
            inputKelvin.value = kelvinValue.toFixed(2)
        }
    })

    // Escuchar cambios en los inputs de Fahrenheit
    inputFahrenheit.addEventListener('input', function() {
        const fahrenheitValue = parseFloat(this.value)

        if (!isNaN(fahrenheitValue)) {
            const celsiusValue = (fahrenheitValue - 32) * 5/9
            inputCelsius.value = celsiusValue.toFixed(2)
            const kelvinValue = (fahrenheitValue - 32) * 5/9 + 273.15
            inputKelvin.value = kelvinValue.toFixed(2)
        }
    })

    // Escuchar cambios en los inputs de Kelvin
    inputKelvin.addEventListener('input', function(){
        const kelvinValue = parseFloat(this.value)

        if (!isNaN(kelvinValue)) {
            const celsiusValue = (kelvinValue - 273.15)
            inputCelsius.value = celsiusValue.toFixed(2)
            const fahrenheitValue = (kelvinValue - 273.15) * 9/5 + 32
            inputFahrenheit.value = fahrenheitValue.toFixed(2)
        }
        
    })

})

/* 
DOMContentLoaded indica que el navegador ha terminado de construir el DOM (Document Object Model) 
a partir del código HTML y está listo para interactuar con él a través de JavaScript.
*/