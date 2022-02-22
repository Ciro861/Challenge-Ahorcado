//Palabras Ahorcado
var palabras = ["GATO", "PERRO", "LORO", "VACA", "GALLINA", "CERDO"];






//Funciones Ahorcado

function palabraAleatoria() {

    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];

}

function separarLetras(palabra) {
    return palabra.split("").join(" ");
}


function listadoletras() {

    var lista;
    for (var letra in split) {
        var li = document.createElement('li');

    }


}




//Botones

function botonInicio(evento) {

    document.getElementById("index").style.display = 'none';
    document.getElementById("juego").style.display = 'Block';

}

var btnInicio = document.getElementById('iniciar');
btnInicio.onclick = botonInicio;

function botonAgregar(evento) {
    document.getElementById("index").style.display = 'none';
    document.getElementById("agregarPalabra").style.display = 'Block';

}

var btnagregar = document.getElementById('agregar');
btnagregar.onclick = botonAgregar;

function volverIndex(evento) {
    document.getElementById("index").style.display = 'Block';
    document.getElementById("juego").style.display = 'none';
    document.getElementById("agregarPalabra").style.display = 'none';

}

var btnVolverJuego = document.getElementById("volverJuego");
btnVolverJuego.onclick = volverIndex;

var btnVolverAgregar = document.getElementById("volverAgregar");
btnVolverAgregar.onclick = volverIndex;

var btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", function(evento) {
    var nuevaPalabra = document.getElementById("nuevaPalabra");
    var input = nuevaPalabra.value;
    if (input) {
        palabras.push(nuevaPalabra.value);
        console.log(palabras);
    }

});