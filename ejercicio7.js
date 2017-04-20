/*
Escriba una función que reciba un arreglo de n posiciones, en cada una de estas posiciones está una
edad, debe retornar los años de nacimiento de sólo aquellas edades que sean mayores de 18 los números pares
[20,16,89,6] -> [1997, 1928]
*/


var edades = [20, 16, 89, 6, 21, 18, 22];

function edadPar(n) {
    if (n % 2 == 0) {
        return true;
    }
}

function mayorEdad(fechNac) {
    //en caso de que la persona naciera a lo mas en 1999 se trataria de un mayor de edad    
    if (fechNac <= 1999) {
        return true;
    } else {
        return false;
    }
}

function fechNacim(edades) {
    //Para obtener el año actual
    var hoy = new Date();
    var actual = hoy.getFullYear();
    var arr = edades.map(function(edad) {
            if (edadPar(edad)) {
                //regla de 3 para obtener la fecha de nacimiento por edad
                var fechaNacimiento = actual - edad;
            }
            return fechaNacimiento;
        }) //se aplica filter al arrego retornado por map para saber si son mayores de edad
        .filter(mayorEdad);
    return arr;
}

console.log(fechNacim(edades));