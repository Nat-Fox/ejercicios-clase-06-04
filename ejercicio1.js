//Input example
var num = 9;
var arr = [4, 4, 5, 12];

//Multiplica cada numero del arreglo
var multiplicacion = arr.reduce(function(valAnt, valAct) {
    return valAnt * valAct;
});

//Multiplica el resultado final el num dado
console.log(multiplicacion * num);