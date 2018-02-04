/* create a const variable and assign my age */

const myAge = 24;

/* create a variable that store the value of the first two years */

let earlyYears = 2;

/* assign a new value to the var multiplying the first two human years with 10.5 dog years */

earlyYears *= 10.5;

/* reassign the var myAge subtracting the 2 years counted in the var above */

let laterYears = myAge - 2;

/* multiply the laterYears var by 4 (which is the dog years after the first 2) and reassign it to same var */

laterYears *= 4;

/* add together and sum first years and later years and assign it to a var */

const myAgeInDogYears = earlyYears + laterYears;

/* create a var and assign my name as string */

const myName = 'Susanna';

/* use built-in method toLowerCase on the var myName in order to make the string apper in lower case letters */

myName.toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`)
