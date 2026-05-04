// let js = "amazing";

// //Variable name conventions
// let country = "United States";
// let continent = "North America";
// let population = 331000000;

// // print all 3 into console
// console.log(country);
// console.log(continent);
// console.log(population);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);

//* This is and example of String Templates

// firstName = "Jeff";

// const jeffNew = `I'm ${firstName}.`;

// console.log(jeffNew);

// console.log(`Just a regular strings...`)

// console.log(`String with a \n multiple \n lines`)

// console.log(`String
// with a
// multiple
// line`)

// const age = 15;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//     console.log("Sarah can start driving license 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;
// let century;

// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century)

//* Type Conversion vs. Type Coercion

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number(inputYear) + 18);

// let inputValue = `hello world`;

// if (isNaN(inputValue)) {
//     console.log("This is not a number");
// } else {
//     console.log("This is a string");
// }

//* 5 falsy values: 0, '', undefined, null, NaN
//* They are not exactly false, but they will be coerced to false when we try to convert them to a boolean


//*  === Strict equality operator (does not perform type coercion)
//*  == Loose equality operator (performs type coercion)

const favoriteNumber = Number(prompt(`What's your favorite number?`));
console.log(favoriteNumber);
console.log(typeof favoriteNumber)

if (favoriteNumber === 23) {
    console.log("Cool! 23 is an amazing number!");
}