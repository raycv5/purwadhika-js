const student1 = {
  Name: "John Doe",
  Email: "john.doe@example.com",
  Age: new Date("2006-03-25"),
  Score: 71,
};

const student2 = {
  Name: "John Doe",
  Email: "john.doe@example.com",
  Age: new Date("2006-03-25"),
  Score: 71,
};

const student3 = {
  Name: "John Doe",
  Email: "john.doe@example.com",
  Age: new Date("2006-03-25"),
  Score: 72,
};

// 1. Create a function to check if two objects are equal

const isObjectsEqual = (a, b) => {
  let sortA = {};
  let sortB = {};
  Object.keys(a)
    .sort()
    .map((item) => (sortA[item] = a[item]));
  Object.keys(b)
    .sort()
    .map((item) => (sortB[item] = b[item]));
  return JSON.stringify(sortA) === JSON.stringify(sortB);
};

// 2. Create a function to get the intersection of two objects
// Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }

const a = { b: 3, a: 1, e: 5, c: 4 };
const b = { a: 1, b: 2, c: 3, d: 4, e: 5 };

const intersectionObject = (a, b) => {
  let res = {};
  for (let key in a) {
    if (a[key] === b[key]) {
      res[key] = a[key];
    }
  }
  return res;
};

// 3. Create a function to merge two array of student data and remove duplicate data

const array1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
  { name: "Student 5", email: "student5@mail.com" },
];

const array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
  { name: "Student 4", email: "student4@mail.com" },
];

const mergeArray = (arr1, arr2) => {
  let merged = [...arr1, ...arr2];
  let uniqueName = new Set();
  let res = [];
  for (let i = 0; i < merged.length; i++) {
    if (!uniqueName.has(merged[i].name)) {
      res.push(merged[i]);
      uniqueName.add(merged[i].name);
    }
  }
  return res;
};

// 4. Create a function that can accept input as an array of objects and switch all values into
//     property and property into value

let object = {
  name: "david",
  age: 25,
};
const switchKey = (input) => {
  let res = {};
  Object.keys(input).map((key) => {
    res[input[key]] = key;
  });
  return res;
};

// 5. Create a function to find a factorial number using recursion

const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
