//1. Write a function that converts C to F.
// Function will return a value instead of output to console.
// F = 1.8 * C + 32

const celciusToFarenheit = num => (1.8 * num) + 32;
// console.log(celciusToFarenheit(100));


//2. Write a function that checks if text is longer than 7 Characters.
// Function will take a string as a parameter and returns a Boolean.

let minimumCharCount = 7;
const isValidLength = text => text.length > minimumCharCount;
// console.log(isValidLength("pooped the bed"));


//3. make problem #2 more flexible by passing in charCount to check for.
const checkCharLength = (text, count) => text.length >= count;
// console.log(checkCharLength("classic", minimumCharCount));


//4. Write a function that takes in a string and it will output the count of vowels in the string.

const countTextVowels = text => {
    let vowelCount = 0;
    let arr = text.toLowerCase().split("");
    arr.forEach(function (char) {
        switch (char) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowelCount++;
                break;
        }
    });
    // console.log(`Number of vowels in text: ${vowelCount}`);
};
//countTextVowels("YEAH");

//5. Write a function that takes in an array of Integers and returns the sum of the integers

let numbers = [58, 69, 22, 30];

let findSum = (total, num) => {
    return total + num;
}

let concat = (result, num) => {
    return result + `${num}`;
} 

//console.log(numbers.reduce(findSum, 21));