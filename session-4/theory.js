let city = ["jakarta", "bsd", "bandung", "batam", "jogja"];

city.forEach((item) => {
  console.log(item);
});

const removeOddNumbers = (arr) => {
  let res = [];
  for (let num of arr) {
    if (num % 2 !== 0) res.push(num);
  }
  return res;
};

const removeOddNumbers2 = (arr) => {
  const even = arr.filter((n) => n % 2 === 1);
  return even;
};

const triangleStars = (height) => {
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) console.log(`${i} `);
  }
};

triangleStars(5);
