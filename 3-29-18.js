//1. Write a function that converts C to F.
// Function will return a value instead of output to console.
// F = 1.8 * C + 32

const celciusToFarenheit = num => (1.8 * num) + 32;
// console.log(celciusToFarenheit(100));


//2. Write a function that checks if text is longer than 7 Characters.
// Function will take a string as a parameter and returns a Boolean.

let minimumCharCount = 7;
const isValidLength = text => text.length > minimumCharCount;
console.log(isValidLength("pooped the bed"));
