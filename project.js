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
        const numDepositeAmount = parseFloat(depositAmount);
        if (isNaN(numDepositeAmount) || numDepositeAmount <= 0) {
            console.log("Invalid deposit amount, please try again. ");
        } else {
            return numDepositeAmount;
        }
    }
};

const depositAmount = deposit();