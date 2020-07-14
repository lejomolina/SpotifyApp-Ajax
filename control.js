//Consumo del servicio de Spotify para traer concaciones de un artista.

//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1.

//1: Definir la URL del servicio.

let URL= "https://api.spotify.com/v1/artists/1w5Kfo2jwwIPruYS2UWh56/top-tracks?country=US";

// 2. Definir el token o permiso de acceso

let token = "Bearer BQAdL8updBUTTJlI6L0KZCAp7oaUD6x62J0hHJOLJ4hqPF_RQRClLIfSq0zWpDll-yD0uBknIqOQhnL2dEk1aL_2mDAYrvhR8uIvlEULv5T6uejJg_XqlxvLzQkMCj32753SnPMplOe5NpUzDN9BcQ7Nu6Muua6t17M";

// 3. Definir el objeto AJAX

let obAJAX = new XMLHttpRequest();

// 4. Abrir la conexión
obAJAX.open('GET', URL, true);

// 5. Crear un encabezado de conexión.

obAJAX.setRequestHeader('Authorization', token);

// 6. Cargamos los datos del servicio.

obAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    
    /*Se depura la localización de la imagen. La dejo así para en caso de que se me olvide, 
    venir a este código y consultar...
    console.log(respuesta);
    console.log(respuesta.tracks);
    console.log(respuesta.tracks[0]);
    console.log(respuesta.tracks[0].album);
    console.log(respuesta.tracks[0].album.images);
   
    //Estos console.log se crearon para probar si efectivamente se están trayendo los servicios de la web.
    console.log(respuesta.tracks[0].album.images[0].url);
    console.log(respuesta.tracks[0].album.name);
    console.log(respuesta.tracks[0].preview_url);

    console.log(respuesta.tracks[1].album.images[0].url);
    console.log(respuesta.tracks[1].album.name);
    console.log(respuesta.tracks[1].preview_url);
        
    console.log(respuesta.tracks[2].album.images[0].url);
    console.log(respuesta.tracks[2].album.name);
    console.log(respuesta.tracks[2].preview_url);*/

    //Se crean las variables para llamar a las etiquetas.
    let imagen0 = document.getElementById("imgjam0");
    let titulo0 = document.getElementById("namejam0");
    let audio0 = document.getElementById("sonidojam0");

    //Ya se tiene la etiqueta en la variable, ahora se le da al atributo SRC, el contenido de la URL que tiene el servicio.  
    imagen0.src=respuesta.tracks[0].album.images[0].url;
    titulo0.textContent = respuesta.tracks[0].album.name
    audio0.src= respuesta.tracks[0].preview_url;


    let respuesta1 = JSON.parse(this.responseText);
    let imagen1 = document.getElementById("imgjam1");
    let titulo1 = document.getElementById("namejam1");
    let audio1 = document.getElementById("sonidojam1");
    imagen1.src=respuesta1.tracks[1].album.images[0].url;
    titulo1.textContent = respuesta1.tracks[1].album.name;
    audio1.src= respuesta1.tracks[1].preview_url;

    let respuesta2 = JSON.parse(this.responseText);
    let imagen2 = document.getElementById("imgjam2");
    let titulo2 = document.getElementById("namejam2");
    let audio2 = document.getElementById("sonidojam2");
    imagen2.src=respuesta2.tracks[2].album.images[0].url;
    titulo2.textContent = respuesta2.tracks[2].album.name;
    audio2.src= respuesta2.tracks[2].preview_url;
}
//7. Enviamos la petición.

obAJAX.send();