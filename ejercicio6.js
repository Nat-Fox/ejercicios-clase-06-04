/**
 * Desarrolla una función que recibe un arreglo y retorne el producto de sus elementos
 */

var numeros = [1, 2, 3, 4];

function multiplicar(array) {
    //reduce toma el valAnt y el valAct del arreglo numeros y los multiplica
    return array.reduce(function(valAnt, valAct) {
        return valAnt * valAct;
    });
}

console.log(multiplicar(numeros));