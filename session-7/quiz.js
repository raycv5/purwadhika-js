// 1
const primeChecker = (number) => {
  //   if ((number > 1 && number % 2 !== 0) || number === 2) return true;
  //   return false;
  return (number > 1 && number % 2 !== 0) || number === 2 ? 1 : 0;
};

// 2

const convert = (arr) => {
  letterOrder = " abcdefghijklmnopqrstuvwxyz";
  let res = "";
  for (let num of arr) {
    res += letterOrder[num];
  }
  return res;
};

const sumLetter = (s) => {
  let letterOrder = " abcdefghijklmnopqrstuvwxyz";
  let specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") res += 5;
    else if (s[i].match(specialChar)) res += 10;
    else res += letterOrder.indexOf(s[i].toLowerCase());
  }
  return res;
};

const conversionMoney = (number) => {
  const bankNotes = [100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000];
  let res = [];
  for (let i = 0; i < bankNotes.length; i++) {
    if (bankNotes[i] <= number) {
      while (bankNotes[i] <= number) {
        number -= bankNotes[i];
        res.push(bankNotes[i]);
      }
    }
  }
  return res;
};
