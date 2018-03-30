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


//6.  Write a function that takes in an array of Strings then output one long text separated with space " "
//    the each string must be atleast 5 characters long

let arrString = ["Fuck", "Shit", "ginger", "Bulbasaur", "nipple", "butt"];

// results should be "ginger Bulbasaur nipple"

// let checkStringLength = (arr) => {
//     var newArray = [];
//     arr.forEach(function (element, index) {
//         if (element.length >= 5) {
//             newArray.push(element);
//         }
//     });
//     return newArray.join(" ");
// }
// console.log(checkStringLength(arrString));

var newArray = arrString.filter(word => word.length > 5).join(" ");




// something = {
//     "key": "value"
// }

// something = {
//     key: 90
// }


//6. Write a function that takes in a string and returns the middle two characters as a string

// let findMiddleTwoChar = (text) => {
//     var stringMedian = (text.length / 2) - 1;
//     var countOfCharToInclude = 2;
//     console.log(text.substr(stringMedian, countOfCharToInclude));
// }
// findMiddleTwoChar("SuckDick");


//7. // Given two strings, a and b, return the result of putting them together in the
// order abba, e.g. 'Hi' and 'Bye' returns 'HiByeByeHi'.

var makeAbba = function (text1, text2) {
    return text1 + text2 + text2 + text1
}
// console.log(makeAbba("shit", "fuck"));


//8.Given 2 int values, return true if either of them is in the range 10..20 inclusive.
var max = 20
var min = 10
var in1020 = (a, b) => (a >= min && a <= max) && (b >= min && b <= max);
console.log(in1020(13, 13));


//9. Given a string, return a virgin without both the first and last char of the
// string. The string may be any length, including 0.

var withoutEnd2=function(str) { 

}
