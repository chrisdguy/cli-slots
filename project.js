// TODO
// Check Win

// Update Player Balance

// Play again/Out of Money

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  X: -1,
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

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randIndex, 1);
    }
  }
  return reels;
};

const transpose = (matrix) => {
  const transposed = [];
  for (let i = 0; i < ROWS; i++) {
    transposed.push([]);
    for (let j = 0; j < COLS; j++) {
      transposed[i].push(matrix[j][i]);
    }
  }
  return transposed;
};

const checkWin = (lines) => {
  const linesWon = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].every((val) => val === lines[i][0])) {
      linesWon.push(lines[i][0]);
    } else {
      linesWon.push("X");
    }
  }
  return linesWon;
};

const updateBalance = (balance, betAmount, linesToBet, wins) => {
  let newBalance = balance - betAmount * linesToBet;
  for (let i = 0; i < linesToBet; i++) {
    if (wins[i] === "X") {
    } else {
      newBalance += betAmount * SYMBOL_VALUES[wins[i]];
    }
  }
  return newBalance;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowStr = "|";
    for (let i = 0; i < ROWS; i++) {
      rowStr += ` ${row[i]} |`;
    }
    console.log(rowStr);
  }
};

const main = () => {
  let balance = deposit();
  while (true) {
    console.log(balance)
    const linesToBet = getLinesToBet();
    const betAmount = getBetAmount(balance, linesToBet);
    const reels = spin();
    const lines = transpose(reels);
    const wins = checkWin(lines);
    balance = updateBalance(balance, betAmount, linesToBet, wins);
    printRows(reels);
    console.log(`Balance: $${balance}`);
    if (balance = 0) {
        console.log("You are out of money.")
        break;
    }
    const again = prompt("Spin Again? (y/n) ");
    if (again.lower == "n"){
        console.log("Thanks for playing!");
        break;
    }
  }
};

main();

//tests
