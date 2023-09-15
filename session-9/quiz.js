const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "1" : "0";
};

const isAnagram = (str1, str2) => {
  const string1 = str1
    .replace(/\s+/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  const string2 = str2
    .replace(/\s+/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  if (string1 === string2) return 1;
  return 0;
};

// if ((number > 1 && number % 2 !== 0) || number === 2) return true;

const generatePrimes = (num1, num2) => {
  const primeChecker = (number) => {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  let res = [];
  for (let i = num1; i <= num2; i++) {
    if (primeChecker(i)) res.push(i);
  }
  return res;
};

function highestLockerNumber(floor) {
  if (floor <= 0) {
    return [0, 0];
  }

  let lockersPerFloor = 0;
  let highestLocker = 0;

  for (let i = 1; i <= floor; i++) {
    if (i % 3 === 1) {
      lockersPerFloor = 5;
    } else {
      lockersPerFloor++;
    }
    highestLocker += lockersPerFloor;
  }

  return [floor, highestLocker];
}

// Sample Inputs
console.log(highestLockerNumber(3)); // Output: [3, 18]
console.log(highestLockerNumber(5)); // Output: [5, 29]
console.log(highestLockerNumber(7)); // Output: [7, 41]
console.log(highestLockerNumber(9)); // Output: [9, 54]

// Sample Inputs

const getgetFloors = (floor) => {
  let lockers = 0;
  let highestLocker = 0;

  if (floor <= 0) return [0, 0];

  if (floor % 3 === 0) lockers = 7;
  else if (floor % 3 === 2) lockers = 6;
  else lockers = 5;

  highestLocker = (floor - 1) * lockers + lockers;
  return [floor, highestLocker];
};

const getFloors = (floor) => {
  let lockers = 0;
  let highestLocker = 0;

  for (let i = 1; i <= floor; i++) {
    if (i % 3 === 1) lockers = 5;
    else lockers++;
    highestLocker += lockers;
  }
  return [floor, highestLocker];
};
