// 1
const excelColumn = (str) => {
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    n = str[i].charCodeAt() - 64 + n * 26;
  }
  return n;
};

// 2
const removeDuplicate = (arr) => {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res ^= arr[i];
    console.log(res, arr[i]);
  }
  return res;
};

// 3
const anagram = (s, t) => {
  return (
    s.toLowerCase().split("").sort().join("") ===
    t.toLowerCase().split("").sort().join("")
  );
};

// 4
const climbStairs = (n) => {
  if (n <= 2) return n;
  let ways = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n];
};

/* 
n = 4
first iteration
ways[3] = ways[3 - 1] + ways[3 - 2] = 3
ways[4] = ways[4 - 1] + ways[4 - 2] = 3 + 2
ways[5] = ways[5 - 1] + ways[5 - 2] = 5 + 3
ways[6] = ways[6 - 1] + ways[6 - 2] = 8 + 5
ways[7] = ways[7 - 1] + ways[7 - 2] = 13 + 8
*/
