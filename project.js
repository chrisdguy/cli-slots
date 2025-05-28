// Deposit Money

// Get Bet Lines

// Get Bet Amount

// Spin Slots

// Check Win

// Update Player Balance

// Play again/Out of Money

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
};

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};

const deposit = () => {
    while (true) {
        const depositAmount = prompt("How much would you like to deposit? ");
        const numDepositAmount = parseFloat(depositAmount);
        if (isNaN(numDepositAmount) || numDepositAmount <= 0) {
            console.log("Invalid deposit amount, please try again.");
        } else {
            return numDepositAmount;
        }
    }
};

const getLinesToBet = () => {
    while (true) {
        const lines = prompt("How many lines would you like to bet on? (1-3) ");
        const numOfLines = parseFloat(lines);
        if (isNaN(numOfLines) || numOfLines <= 0 || numOfLines > 3) {
            console.log("invalid number of lines, please try again.");
        } else {
            return numOfLines;
        }
    }
};

const getBetAmount = (balance, lines) => {
    const maxBet = balance / lines;
    while (true) {
        const betAmount = prompt("How much would you like to bet per line? ");
        const numBetAmount = parseFloat(betAmount);
        if (isNaN(numBetAmount) || numBetAmount <= 0 || numBetAmount > maxBet) {
            console.log(`Invalid bet amount, please try again. (1 - ${maxBet})`);
        } else {
            return numBetAmount;
        }
    }
};

let balance = deposit();
const linesToBet = getLinesToBet();
const betAmount = getBetAmount(balance, linesToBet);