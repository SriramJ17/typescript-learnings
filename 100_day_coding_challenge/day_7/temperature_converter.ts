class TemperatureConverter {
    
    celsiusToFahrenheit(celsius: number):number {
        const x=celsius;
        const y= (x * 9/5) + 32
        return y
    }

    fahrenheitToCelsius(fahrenheit: number):number {
        const x=fahrenheit;
        const y= (x-32) * (5/9)
        return y
    }
}

const converter = new TemperatureConverter();
console.log(converter.celsiusToFahrenheit(20));
console.log(converter.fahrenheitToCelsius(25));