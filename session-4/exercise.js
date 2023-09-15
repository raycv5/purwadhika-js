// 1. Create a function that can create a triangle pattern according to the height we provide like the following :
//    01
//    02 03
//    04 05 06
//    07 08 09 10

const triangleStars = (height) => {
  let currentNumber = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `${currentNumber.toString().padStart(2, "0")} `;
      currentNumber++;
    }
    console.log(row);
  }
};

//
// 2. Create a function that can loop the number of times according to the input we provide, and will
//    replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
//    "FizzBuzz".

const fizzBuzz = (num) => {
  let res = [];
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) res.push("FizzBuzz");
    else if (i % 3 === 0) res.push("Fizz");
    else if (i % 5 === 0) res.push("Buzz");
    else res.push(i);
  }
  return res;
};

//
// 3. Create a function to calculate Body Mass Index (BMI)
//    Formula : BMI = weight (kg) / (height (meter))²
//    Parameters : weight & height
//    Return values :
//    ○ < 18.5 return “less weight”
//    ○ 18.5 - 24.9 return “ideal”
//    ○ 25.0 - 29.9 return “overweight”
//    ○ 30.0 - 39.9 return “very overweight”
//    ○ > 39.9 return “obesity”

const BMICal = (weight, height) => {
  let BMI = weight / (height * height);
  if (BMI < 18.5) return "less weight";
  else if (BMI <= 24.9) return "ideal";
  else if (BMI <= 29.9) return "overweight";
  else if (BMI <= 39.9) return "very overweight";
  else return "obesity";
};

// 4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

const removeOddNumbers = (arr) => {
  let res = [];
  for (let num of arr) {
    if (num % 2 === 0) res.push(num);
  }
  return res;
};

// Using filter
const removeOddNumbers2 = (arr) => {
  const even = arr.filter((n) => n % 2 === 0);
  return even;
};

// 5. Write a function to split a string and convert it into an array of words
//    Example : “Hello World” → [“Hello”, “World”]

const stringsToArray = (str) => str.split(" ");

// 6.

const addNum = (arr) => arr.reduce((acc, currentVal) => acc + currentVal);
