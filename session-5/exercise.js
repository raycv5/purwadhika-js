// 1. Write a function to get the lowest, highest and average value in the array (with and without sort
//    function).

// With sort method
const lowHighAvg = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  let avg = arr.reduce((acc, currentVal) => acc + currentVal) / arr.length;
  return `Lowest : ${sorted[0]}, Highest : ${
    sorted[sorted.length - 1]
  }, Average : ${Math.floor(avg)} `;
};

// Without sort method
const lowHighAvg2 = (arr) => {
  let highest = arr.reduce((acc, currentVal) => Math.max(acc, currentVal)); // Math.max(...arr)
  let lowest = arr.reduce((acc, currentVal) => Math.min(acc, currentVal)); // Math.min(...arr)
  let avg = arr.reduce((acc, currentVal) => acc + currentVal) / arr.length;
  return `Lowest : ${lowest}, Highest : ${highest}, Average : ${Math.floor(
    avg
  )} `;
};

// 2. Write a function that takes an array of words and returns a string by concatenating the words in
//    the array, separated by commas and - the last word - by an 'and'

const arrToString = (arr) => {
  let lastword = arr[arr.length - 1];
  arr.pop();
  return arr.join(", ") + ` and ${lastword}`;
};

// 3. Write a function to split a string and convert it into an array of words
//    Example : “Hello World” → [“Hello”, “World”]
const stringsToArray = (str) => str.split(" ");

// 4. Write a function to calculate each element in the same position from two arrays of integer.
//    Assume both arrays are of the same length.
//    Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const calculateArray = (arr1, arr2) => {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
  return sum;
};

// Using map
const calculateArray2 = (arr1, arr2) =>
  arr1.map((item, index) => item + arr2[index]);

// 5. Write a function that adds an element to the end of an array. However, the element should only
//    be added if it is not already in the array

let arrayFive = [1, 2, 3, 4, 5, "a"];

const addToArray = (arr, val) => {
  if (!arr.includes(val)) {
    arr.push(val);
    return arr;
  } else return `${val} is already in the array`;
};

// 6. Write a function to remove all odd numbers in an array and return a new array that contains even
//    numbers only

const removeOdds = (arr) => arr.filter((n) => n % 2 === 0);

// 7. Write a function to insert multiple given integer (not an array) to an array and have a maximum size
//    input. The array can only have a maximum size from a given input. (if the maximum size of the given
//    input is 5 than the array can only contain 5 elements).

const integerToArr = (maxSize, ...num) => {
  let res = [];
  for (let i = 0; i < maxSize; i++) {
    res.push(num[i]);
  }
  return res;
};

const integerToArr2 = (maxSize, ...num) => num.slice(0, maxSize);

// 8. Write a function that will combine 2 given array into one array

const combineArrays = (arr1, arr2) => arr1.concat(arr2);

// 9. Write a function to find duplicate values in an array

const duplicateVal = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      res.push(sorted[i]);
    }
  }
  return res;
};

// 10. Write a function to find the difference in 2 given array

const differenceInArray = (arr1, arr2) => {
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      res.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }
  return res;
};

// 11. Based on the array above write a function that will return primitive data types only

const primitiveOnly = (arr) => {
  let res = [];
  for (let val of arr) {
    if (typeof val !== "object") res.push(val);
  }
  return res;
};

// 12. Write a function from a given array of numbers and return the second smallest number

const secondSmallest = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[1];
};

// 13. Write a function from a given array of mixed data types and return the sum of all the number

const sumArray = (arr) => {
  let temp = [];
  for (let val of arr) {
    if (typeof val === "number") temp.push(val);
  }
  let res = temp.reduce((acc, currentVal) => acc + currentVal);
  return res;
};

// 14. Write a function from the above array of number that will return sum of duplicate values

const sumDuplicateVal = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      res.push(sorted[i], sorted[i + 1]);
    }
  }
  return res.reduce((acc, currentVal) => acc + currentVal);
};

// 15. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

const rockPaperScissors = (arg) => {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = "";
  let playerMove = arg.toLowerCase();
  if (randomNumber === 1) computerMove = "rock";
  else if (randomNumber === 2) computerMove = "paper";
  else computerMove = "scissors";
  //
  if (playerMove === computerMove) return "Draw";
  else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  )
    return `Computer chose : ${computerMove}, Player chose : ${playerMove}. Player Win`;
  else
    return `Computer chose : ${computerMove}, Player chose : ${playerMove}. Player Lost`;
};
