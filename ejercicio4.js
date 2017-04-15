/*
Desarrolle una función que reciba un arreglo y retorne un arreglo con el doble de cada una de las posiciones
incrementando en 1.
Ejemplo:
Input: [2,5,7,2,3,8,10]
Output: [5,11,15,5,7,17,21]

TIP: map(function(...){...}).map(function(...){...})
*/

var array = [2, 5, 7, 2, 3, 8, 10];

function porDos(num) {
    return num * 2;
}

function masUno(num) {
    return num + 1;
}

/*Si bien todo puede ser realizado en un solo map, se hicieron 2 funciones con las dos 
acciones correspondientes concatenadas*/
function calculo() {
    return array.map(porDos).map(masUno);
}

console.log(calculo());