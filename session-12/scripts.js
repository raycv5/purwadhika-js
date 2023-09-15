// 1

const majorityEl = (arr) => {
  let nums = {};
  for (let i = 0; i < arr.length; i++) {
    if (!Object.keys(nums).includes(arr[i].toString())) {
      nums[arr[i]] = 1;
    } else nums[arr[i]] += 1;
  }

  let maxKey = 0,
    maxValue = 0;

  for (let key in nums) {
    if (nums[key] > maxValue) {
      maxValue = nums[key];
      maxKey = key;
    }
  }

  return maxKey;
};

// 2

const romanNumeral = (str) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = str.split("");
  let res = 0,
    current = 0,
    next = 0;

  for (let i = 0; i < str.length; i++) {
    current = roman[arr[i]];
    next = roman[arr[i + 1]];
    if (current < next) res -= current;
    else res += current;
  }
  return res;
};

// 3
const pascalTriangle = (row) => {
  let res = [];
  if (row === 0) return res;
  res.push([1]);
  for (let i = 1; i < row; i++) {
    let list = [];
    list.push(1);
    for (let j = 1; j < res[i - 1].length; j++) {
      let sum = res[i - 1][j - 1] + res[i - 1][j];
      list.push(sum);
    }
    list.push(1);
    res.push([...list]);
  }
  return res;
};

// 4

const stock = (arr) => {
  let min = Math.min(...arr);
  let sliced = arr.slice(arr.indexOf(min));
  let max = Math.max(...sliced);
  return max - min;

  //   if (sliced.indexOf(min) < sliced.indexOf(max)) {
  //     return sliced[sliced.indexOf(max)] - sliced[sliced.indexOf(min)];
  //   } else return 0;
};

let arr = [
  [5, 6, 7, 8],
  [1, 2, 3, 4],
];

let res = arr.reduce((a, b) => a.concat(b));
