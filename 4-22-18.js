// Given an array of integers, write a function that determines whether the array contains any duplicates. 
// Your function should return true if any element appears at least twice in the array, 
// and it should return false if every element is distinct.

let arrInt = [2, 5, 3, 1];

function containsDuplicates(arr) {
    for (var i = 0; i < arr.length; i++) { 
        for (var j = 0; j < arr.length; j++) { 
            if (i != j) {
               if (arr[i] === arr[j]) {
                   return true;
               } 
            }
        }
    }
    return false
}

console.log(containsDuplicates(arrInt));