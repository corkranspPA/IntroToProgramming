function fahrenheitToCelsius(tempF) {
    return (tempF - 32) * (5 / 9);
}

function celsiusToFahrenheit(tempC) {
    return ((9 / 5) * tempC) + 32;
}

exports.fahrenheitToCelsius = fahrenheitToCelsius;
exports.celsiusToFahrenheit = celsiusToFahrenheit;