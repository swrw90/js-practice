//  it asks the user to input current savings
// and then it will loop through and ask to enter multiple bills one at a time
// The have user enter income
// and do all the calculations
// spits out numbers

const readline = require('readline-sync');
let userBill;
let userBills = [];


let logSavings = () => { console.log(userName + "'\s current savings: $" + userCurrentSavings) };
let addPayee = () => { payee = readline.question(userName + ", " + "please enter one of your payees. ") };
let addDebt = () => { userName + "How much do you owe? " };

userName = readline.question('Hello friend, I\'m Budget Buddy, what\'s your name? ');
userCurrentSavings = readline.question(userName + ", " + 'please enter your current savings. ');
logSavings();
addPayee();

morePayees = readline.keyInYN("Do you have any additional payees you'\d like to add?");

let finalizePayees = (morePayees) => {
    if (morePayees) {
        addPayee();
    } else {
        console.log('something')
    }
}

finalizePayees(morePayees);
// userBills.push(userPayee);