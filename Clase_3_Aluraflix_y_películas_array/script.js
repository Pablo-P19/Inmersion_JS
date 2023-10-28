//DESAFÍOS
/* 
- Elige tu tema favorito para adaptar a nuestro código, es decir, en lugar de películas, puede ser una lista de animes, cómics, cursos, capas de juegos, entre otros.
- Crear una segunda lista para agregar los nombres de las películas abajo de las imágenes.
- Crea una condición para no agregar películas repetidas, en caso de que ya hayan sido agregadas anteriormente.
- Crea un campo y un botón para agregar la imagen a través de la pantalla, y no directamente en el código.
*/

var listaAnimes = [
    { url: 'https://m.media-amazon.com/images/M/MV5BMzU1ZmRhNjctMTgwOS00M2ZhLWE4N2QtYzFhNTE2M2JmZmRjXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg', texto: 'Saint Seiya' },
    { url: 'https://areajugones.sport.es/wp-content/uploads/2019/09/posters-attack-on-titan-ataque-a-los-titanes-42x30cm-D_NQ_NP_854546-MLA28655820513_112018-F.jpg', texto: 'Shingeki no Kyojin' },
    { url: 'https://pics.filmaffinity.com/Fullmetal_Alchemist_Brotherhood_Serie_de_TV-748146576-large.jpg', texto: 'Fullmetal Alchemist' },
    { url: 'https://www.ecartelera.com/carteles-series/400/452/001_p.jpg', texto: 'Death Note' },
    { url: 'https://m.media-amazon.com/images/M/MV5BZWFlNDI2OTUtYTQ1MC00ZWUxLThhNGEtMDBhMzU2ZjZlNWM2XkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_.jpg', texto: 'Slam Dunk' },
    { url: 'https://pics.filmaffinity.com/Neon_Genesis_Evangelion_Serie_de_TV-672348474-large.jpg', texto: 'Neon Genesis Evangelion' },
    { url: 'https://pics.filmaffinity.com/Detective_Conan_Serie_de_TV-584039246-large.jpg', texto: 'Detective Conan' },
    { url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/41c3cd1d910578720cdaa307c9e06061.jpe', texto: 'Captain Tsubasa' },
    { url: 'https://m.media-amazon.com/images/M/MV5BZDI4MmMyMjgtNjgxMi00NDU4LTliOGUtMzgxNDE3ZmIxM2NkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg', texto: 'Sailor Moon' },
    { url: 'https://www.lavanguardia.com/peliculas-series/images/serie/poster/2008/8/w1280/gQWHV1WuJTZgw3KtmWQWIszbX7N.jpg', texto: 'Cobra' },
    { url: 'https://www.ecartelera.com/carteles-series/300/380/001_m.jpg', texto: 'Dragón Ball Z' },
    { url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpe', texto: 'Naruto' },
    { url: 'https://pics.filmaffinity.com/One_Piece_Serie_de_TV-647985949-large.jpg', texto: 'One Piece' },
    { url: 'https://pics.filmaffinity.com/one_punch_man-795033630-large.jpg', texto: 'One Punch Man' }
]

listaAnimes.push({ url: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpe', texto: 'Hunter x Hunter' });

// Función para agregar una imagen y texto a la lista
function agregarImagenTexto() {
    var nuevaImagen = document.getElementById("nuevaImagen").value
    var nuevoTexto = document.getElementById("nuevoTexto").value

    // Verificar si la URL ya existe
    for (var i = 0; i < listaAnimes.length; i++) {
        if (listaAnimes[i].url === nuevaImagen) {
            alert("¡Esta URL ya está en la lista");
            return // Salir de la función si la URL ya existe
        }
    }

    // Verifica el formato de la imagen
    if (nuevaImagen.endsWith('jpg') || nuevaImagen.endsWith('jpeg')) {
        listaAnimes.push({ url: nuevaImagen, texto: nuevoTexto })
        document.getElementById("nuevaImagen").value = ""   // deja el input vacío al hacer click en el botón
        document.getElementById("nuevoTexto").value = ""    // deja el input vacío al hacer click en el botón
    } else {
        alert('La URL debe terminar en jpg o jpeg');
    }

    actualizarImagenes()
}

// Función para actualizar la lista de imágenes en el HTML
function actualizarImagenes() {
    var contenedor = document.getElementById("contenedor-imagenes")
    contenedor.innerHTML = ""

    for (var i = 0; i < listaAnimes.length; i++) {
        var contenedorItem = document.createElement("div")
        contenedorItem.classList.add("item")

        var imagen = document.createElement("img")
        imagen.src = listaAnimes[i].url
        contenedorItem.appendChild(imagen)

        var texto = document.createElement("p")
        texto.textContent = listaAnimes[i].texto
        contenedorItem.appendChild(texto);

        contenedor.appendChild(contenedorItem)
    }
}

// Actualizar las imágenes al cargar la página
actualizarImagenes()

// Agregar un evento de escucha al botón de agregar
document.getElementById("agregar").addEventListener("click", agregarImagenTexto)