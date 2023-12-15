function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    // Validate input as a number
    if (isNaN(temperatureInput)) {
        resultElement.innerHTML = "Please enter a valid number.";
        return;
    }

    // Convert temperature
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
    var resultUnit;

    if (unit === "celsius") {
        convertedTemperature = (temperature * 9 / 5) + 32;
        resultUnit = "Fahrenheit";
    } else {
        convertedTemperature = (temperature - 32) * 5 / 9;
        resultUnit = "Celsius";
    }

    resultElement.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " " + resultUnit;
}