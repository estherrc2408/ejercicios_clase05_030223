/*
Realiza una página en HTML, que disponga de dos botones, uno de ellos tendrá el texto "Añadir" y al
pulsarlo insertará una fruta nueva en el array de frutas de nuestro ejemplo y le mostrará el array al
usuario; el otro tendrá el texto "Borrar" y eliminará la última fruta del array y volverá a mostrarlo.
*/
var m = Mango;
var frutas = [m, m, m];
var nfrutas = frutas.length;
console.log("inicialmente tenemos "+nfrutas+" mangos")

function anadir(){
    ++nfrutas;//se sumara una unidad a la variable nfrutas
    alert('Has anadido un mango, ahora hay '+nfrutas+' mangos');
}

function borrar(){
    --nfrutas;//se restara una unidad a la variable nfrutas
    alert('Has borrado un mango, ahora quedan '+nfrutas+' mangos');
}