/*
Tenemos un "array" que contiene diversos números de celular, pero solo queremos quedarnos con los números
válidos, los cuales "comienzan" o "terminan" por un número de 3 cifras ya estabecido.
Por lo tanto, tenemos otro "array" con los números de tres cifras que hacen que un número sea válido.
Utiliza el método filter para quedarte solo con los números válidos.
*/

var numerosCel = [784123123, 355676784, 3423543554];
//pasamos el valido a string para poder comparar 
var valido = [784].toString();

function esValido(numCel) {
    /*Pasamos el numero a string para poder usar la función substring y definir el inicio y el final del 
    numero de telefono (de 3 cifras)*/
    var ini = numCel.toString().substring(0, 3);
    var fin = numCel.toString().substring(numCel.toString().length - 3, numCel.toString().length);
    if (ini === valido || fin === valido) {
        return true;
    } else {
        return false;
    }
}

//filtramos los numeros de celular que si tienen el num valido
function filtered(numerosCel, valido) {
    return numerosCel.filter(esValido);
}

console.log(filtered(numerosCel, valido));