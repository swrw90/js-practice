// 1. Factorial 
// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 120 

// 7! = 7 x 6 x 5 x 4 x 3 x 2 x 1
// 7! = 5040

let factorial = (num) => {
    let total = num;

    for (var i = 1; i < num; ++i) {
        total = total * (num - i);
    }

    return total;
};

// console.log(factorial(7));

//2. Recursive Factorial.

let fucktorial = (number) => {
    if (number < 0) {
        return -1;
    } else if (number == 0) {
        return 1;
    } else {
        return number * fucktorial(number - 1);
    }
}

console.log(fucktorial(50));

// CallStack 
//     - fucktorial(7) 5040 
//         - fuctorial(6) 720
//             - fucktorial(5) 120
//                 - fucktorial(4) 24
//                     - fucktorial(3) 6
//                         - fucktorial(2) 2 
//                             - fucktorial(1) 1 
//                                 - fucktorial(0) 1 