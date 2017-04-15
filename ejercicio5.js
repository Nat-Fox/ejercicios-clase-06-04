var tempCelsius = [0, 15, 30, 28];

function transformar(celsiusArray) {
    //recorre el arreglo celciusArray y por cada valor en celcius lo retorna en Farenheit
    return celsiusArray.map(function(celsius) {
        return ((celsius * (9 / 5)) + 32);
    });
}

console.log(transformar(tempCelsius));