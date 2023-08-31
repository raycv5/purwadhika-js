// 1. Write a code to convert celcius to farenheit
// Formula : Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.

const celciusToFarenheit = (celcius) => (celcius * 9) / 5 + 32;

// 2. Write a code to check whether the number is odd or even

const oddOrEven = (num) => (num % 2 === 0 ? "Even" : "Odd");

// 3. Write a code to check whether the number is prime number or not

const primeChecker = (num) => {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) return `${num} is a prime number`;
  else return `${num} is not a prime number`;
};

// 4. Write a code to find the sum of the numbers 1 to N
//  Example : 5 → 1 + 2 + 3 + 4 + 5 = 15

const sumNum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};

// 5. Write a code to find factorial of a number

const factorialNum = (num) => {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum = sum * i;
  }
  return sum;
};
