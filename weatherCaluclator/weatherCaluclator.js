/* create a variable that store the temperature of today in Kelvin */

const kelvin = prompt('What is the Kelvin temperature today?');

/* create a variable that convert from kelvin to celsius with subtraction */

const celsius = kelvin - 273;

/* create a variable that calculate fahrenheit from celsius with equation */

let fahrenheit = celsius * (9/5) + 32;

/* get decimal round for fahrenheit temperature and assign new value to the let */

fahrenheit = Math.floor(fahrenheit);

/* print the temperature to the console with string interpolation */

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
