// 1. Write a code to display the multiplication table of a given integer.

let num = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 2. Write a code to check whether a string is a palindrome or not.

const palindromeChecker = (str) => {
  let spaceRemoved = str.replace(/\s/g, "");
  for (let i = 0; i < spaceRemoved.length / 2; i++)
    if (spaceRemoved[i] !== spaceRemoved[spaceRemoved.length - 1 - i]) {
      return false;
    }
  return true;
};

// 3. Write a code to convert centimeter to kilometer.

const centimeterToKm = (cm) => {
  return cm / 100000;
};

// 4. Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”

const currencyFormat = (idr) => {};

// 5. Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” -> “Ho world”

let word = "Hello World!";
let toRemove = "lo";
console.log(`${word.replace(toRemove, " ")}`);

// 6. Write a code to capitalize the first letter of each word in a string

const capitalizeFirstLet = (str) => {
  let finalSentence = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[0]) finalSentence += str[i].toUpperCase();
    else if (str[i] === " ") {
      finalSentence += str[i + 1].toUpperCase();
    } else finalSentence += str[i];
  }
  return finalSentence;
};

// 7. Write a code to reverse a string.

const reverseStr = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

// 8. Write a code to swap the case of each character from string

const swapChar = (str) => {
  let swappedChar = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) swappedChar += str[i].toUpperCase();
    else swappedChar += str[i].toLowerCase();
  }
  return swappedChar;
};

// 9. Write a code to find the largest of two given integers

const biggerNumber = (num1, num2) => (num1 > num2 ? num1 : num2);

// 10. Write a conditional statement to sort three numbers

let a = 2;
let b = 6;
let c = 1;
let d;

if (a > b) (d = a), (a = b), (b = d);
if (b > c) (d = b), (b = c), (c = d);

console.log(a, b, c);

// 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
// type.

// 12. Write a code to change every letter a into * from a string of input

const removeCharA = (str) => {
  let finalSentence = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") finalSentence += "*";
    else finalSentence += str[i];
  }
  return finalSentence;
};
