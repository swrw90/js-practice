// Factorial 
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