// DESAFÍOS
/* 
- El programa solo debe aceptar links que contengan formatos de imagen.
- Hacer click en la imagen y que redireccione a el trailer en youtube.
- Almacenar los links ingresados en un array.
- Crear un botón para eliminar una película en la pantalla.
*/

var listaSeries = [
    { imagen: 'https://i.ytimg.com/vi/HhesaQXLuRY/hq720.jpg', trailer: 'https://www.youtube.com/watch?v=HhesaQXLuRY&t=1s' },
    { imagen: 'https://i.ytimg.com/vi/Qz3u06eXf0E/hq720.jpg', trailer: 'https://www.youtube.com/watch?v=Qz3u06eXf0E' },
    { imagen: 'https://i.ytimg.com/vi/KPLWWIOCOOQ/hq720.jpg', trailer: 'https://www.youtube.com/watch?v=KPLWWIOCOOQ&t=4s' },
    { imagen: 'https://i.ytimg.com/vi/220ClSxwhxY/hq720.jpg', trailer: 'https://www.youtube.com/watch?v=220ClSxwhxY' },
    { imagen: 'https://i.ytimg.com/vi/9GgxinPwAGc/hq720.jpg', trailer: 'https://www.youtube.com/watch?v=9GgxinPwAGc' },
    { imagen: 'https://i.ytimg.com/vi/MczMB8nU1sY/hq720.jpg', trailer: 'https://www.youtube.com/watch?v=MczMB8nU1sY' },
    { imagen: 'https://i.ytimg.com/vi/YgHc99YPNxY/hq720.jpg', trailer: 'https://www.youtube.com/watch?v=YgHc99YPNxY' },
    { imagen: 'https://i.ytimg.com/vi/vY0qzXi5oJg/hq720.jpg', trailer: 'https://www.youtube.com/watch?v=vY0qzXi5oJg' },
    { imagen: 'https://i.ytimg.com/vi/mQLV9qjnK60/hq720.jpg', trailer: 'https://www.youtube.com/watch?v=mQLV9qjnK60' }
];

// Esta función se ejecuta cuando se presiona el botón "Agregar Serie"
function agregarSerie() {
    var serieFavorita = document.getElementById('serie').value
    var linkTrailer = document.getElementById('linkTrailer').value

    document.getElementById('serie').value = ""
    document.getElementById('linkTrailer').value = ""

    var formatoImagen = /\.(jpg|jpeg|png|gif)$/i

    if (formatoImagen.test(serieFavorita)) {
        var nuevaSerie = {          // Crear un nuevo objeto con la imagen y el trailer
            imagen: serieFavorita,
            trailer: linkTrailer
        };
        listaSeries.push(nuevaSerie)   // Agregar la nueva serie a la lista
        actualizarListaSeries()
    } else {
        alert('El link no contiene un formato de imagen')
    }
}

// Esta función actualiza la lista de series en la página HTML
function actualizarListaSeries() {
    var elementoListaSeries = document.getElementById('listaSeries')
    elementoListaSeries.innerHTML = ""

    for (var i = 0; i < listaSeries.length; i++) {
        var serie = listaSeries[i]

        if (serie.imagen && serie.trailer) {    // Verifica que ambos posean un valor osea que no sean nulos ni indefinidos
            // Agregar un enlace a la página del trailer y una imagen de la serie
            elementoListaSeries.innerHTML += `
                <a href="${serie.trailer}" target="_blank">
                    <img src="${serie.imagen}" />
                </a>
                <button class="btnEliminar" onclick="eliminarSerie(${i})">x</button>
                `;
        }
    }
}

// Esta función elimina una serie de la lista
function eliminarSerie(index) {
    listaSeries.splice(index, 1)    // Indica cuantos elementos se quieren eliminar a partir del index
    actualizarListaSeries()
}

// Esta función se ejecuta cuando se carga la página
window.onload = actualizarListaSeries


/* splice() de JavaScript. Este método se utiliza para modificar el contenido de un array 
eliminando, reemplazando o agregando elementos. */

/* window.onload es un evento en JavaScript que se dispara cuando todo el contenido de la 
página (como HTML, CSS, imágenes y otros recursos) ha sido completamente cargado en el navegador.
Es útil cuando quieres asegurarte de que tu código JavaScript se ejecute después de que la página 
haya terminado de cargar completamente. Esto es importante porque si intentas interactuar con 
elementos de la página antes de que se carguen, es posible que no estén disponibles y tu código 
podría fallar. */