/*
Tenemos dos parámetros, el primero tiene números aleatorios y el segundo un "número x".
Queremos saber qué números  del primer array son múltiplos del número "x".
Utiliza el método forEach()

Input:
[7,21,44,80,77,35],7
Output: 
[7,21,77,35]
*/

//Input example
var numAleatorio = [7, 21, 44, 80, 77, 35];
var numX = 7;

function sonMultiplos(numAleatorio, numX) {
    var arr = [];
    numAleatorio.forEach(function(element) {
        //si el elemento del arreglo es divisible por el numX  lo agregamos al arreglo arr
        if (element % numX === 0) {
            arr.push(element);
        }
    });

    return arr;
}

console.log(sonMultiplos(numAleatorio, numX));