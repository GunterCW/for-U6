function getShortedSymbols(counter, symbol) {
  let result = "";
  if (counter > 2) {
    result += symbol + counter;
  } else if (counter === 2) {
    result += symbol + symbol;
  } else if (counter === 1) {
    result += symbol;
  }
  return result;
}

function resolve(str) {
  if (str.length === 0) {
    return "";
  }

  let counter = 1;
  let currentSymbol = str[0];
  let result = "";

  for (let i = 1; i < str.length; i++) {
    if (currentSymbol === str[i]) {
      counter++;
    } else {
      result += getShortedSymbols(counter, currentSymbol);
      currentSymbol = str[i];
      counter = 1;
    }
  }
  result += getShortedSymbols(counter, currentSymbol);

  return result;
}

const tests = ["", "a", "aa", "aaa", "abbccc", "abccccddda"];
tests.forEach((test) => console.log(`${test} -> ` + resolve(test)));
