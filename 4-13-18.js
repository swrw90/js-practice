//  it asks the user to input current savings
// and then it will loop through and ask to enter multiple bills one at a time
// The have user enter income
// and do all the calculations
// spits out numbers

let logSavings = () => { console.log(userName + "'\s current savings: $" + userCurrentSavings) };

const readline = require('readline-sync');
userName = readline.question('Hello friend, I\'m Budget Buddy, what\'s your name? ');
userCurrentSavings = readline.question(userName + ", " + 'please enter your current savings. ');
setTimeout(logSavings, 1000);
