// Deposit Money

// Get Bet Lines

// Get Bet Amount

// Spin Slots

// Check Win

// Update Player Balance

// Play again/Out of Money

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("How much would you like to deposit? ");
        const numDepositAmount = parseFloat(depositAmount);
        if (isNaN(numDepositAmount) || numDepositAmount <= 0) {
            console.log("Invalid deposit amount, please try again. ");
        } else {
            return numDepositAmount;
        }
    }
};

const linesToBet = () => {
    while (true) {
        const betLines = prompt("How many lines would you like to bet on? ")
    }
}

const depositAmount = deposit();