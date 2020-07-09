//Consumo del servicio de Spotify para traer concaciones de un artista.

//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1.

//1: Definir la URL del servicio.

let URL= "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56/top-tracks?country=US";

// 2. Definir el token o permiso de acceso

let token = "Bearer BQDCKfiTDObZJw_FHgkz0bghucXaS7DS0bm4-L43_wSUYj8PkahtgBPrcdnOJhwvT_5JJT9kCrsCqYhNr2lyDWgJjcO7CqSeYLeNU_6XUjvAyqHtsq5rvKlbkibdUgF8rhuCmt2Y0cfSUoimduK1ab3jNoxxqrWrqiU"

// 3. Definir el objeto AJAX

let obAJAX = new XMLHttpRequest();

// 4. Abrir la conexión
obAJAX.open('GET', URL, true);

// 5. Crear un encabezado de conexión.

obAJAX.setRequestHeader('Authorization', token);

// 6. Cargamos los datos del servicio.

obAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta);
    console.log(respuesta.tracks);
    console.log(respuesta.tracks[0]);
}

//7. Enviamos la petición.

obAJAX.send();