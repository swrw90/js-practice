// 1. Have the function QuestionsMarks( ) take the str string parameter, 
// which will contain single digit numbers, letters, and question marks, 
// and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. 
// If so, then your program should return the string true, otherwise it should return the string false. 
// If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 
// question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string. 

function QuestionsMarks(str) {

  return str;

}

// QuestionsMarks(readline());     


// 2. Using the JavaScript language, have the function VowelSquare( ) take the strArr parameter being passed which will be a 2D matrix of some arbitrary size 
// filled with letters from the alphabet, and determine if a 2x2 square composed entirely of vowels exists in the matrix. 
// For example: strArr is ["abcd", "eikr", "oufj"] then this matrix looks like the following: 

// a b c d 
// e i k r
// f j 

// Within this matrix there is a 2x2 square of vowels starting in the second row and first column, 
// namely, ei, ou. If a 2x2 square of vowels is found your program should return the top-left position (row-column) of the square, 
// so for this example your program should return 1-0. If no 2x2 square of vowels exists, then return the string not found . 
// If there are multiple squares of vowels, return the one that is at the most top-left position in the whole matrix. The input matrix will at least be of size 2x2. 

function VowelSquare(strArr) {

  // code goes here  
  return strArr;

}

// VowelSquare(readline());                            

// 3. Using the JavaScript language, have the function ScaleBalancing( ) read strArr which will contain two elements, 
// the first being the two positive integer weights on a balance scale (left and right sides) 
// and the second element being a list of available weights as positive integers. 
// Your goal is to determine if you can balance the scale by using the least amount of weights from the list, but using at most only 2 weights. 
// For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then this means there is a balance scale with a weight of 5 on the left side and 9 on the right side. 
// It is in fact possible to balance this scale by adding a 6 to the left side from the list of weights and adding a 2 to the right side. 
// Both scales will now equal 11 and they are perfectly balanced. 
// Your program should return a comma separated string of the weights that were used from the list in ascending order, 
// so for this example your program should return the string 2,6 

// // There will only ever be one unique solution and the list of available weights will not be empty. 
// It is also possible to add two weights to only one side of the scale to balance it. 
// If it is not possible to balance the scale then your program should return the string not possible . 


function ScaleBalancing(strArr) {

  // code goes here  
  return strArr;

}

// ScaleBalancing(readline());                            




//1. Write a function that converts F to C.
// Function will return a value instead of output to console.

let converFahrenheitToCelcius = num => (.5556 * num) - 32
// console.log(converFahrenheitToCelcius(80));
