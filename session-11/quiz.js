const findMaxNum = (arr) => {
  return Number(arr.sort((a, b) => b - a).join(""));
};

// const footballMatch = (arr) => {
//   let scores = [3, 1, 0];
//   let res = [0, 0, 0];
//   let arrMathches = arr[0];
//   let arrScores = arr[1];
//   for (let i = 0; i < arr[0]; i++) {
//     if (scores[i] <= arrScores) {
//       while (scores[i] <= arrScores) {
//         arrScores -= scores[i];
//         res[i] += 1;
//         arrMathches -= 1;
//       }
//     }
//   }
//   return res;
// };

const footballMatch = (arr) => {
  let matches = arr[0];
  let points = arr[1];

  const winPoint = 3;
  const drawPoint = 1;

  let wins = 0,
    draws = 0,
    losses = 0;

  for (let i = 0; i < matches; i++) {
    if (points >= winPoint) {
      wins++;
      points -= winPoint;
    } else if (points >= drawPoint) {
      draws++;
      points -= drawPoint;
    } else losses++;
  }
  return [wins, draws, losses];
};

const rearrangeArray = (arr) => {
  arr.sort((a, b) => a - b);
  let res = [];

  let left = 0;
  let right = arr.length - 1;

  for (let i = 0; i <= right; i++) {
    res.push(arr[i]);
    if (left !== right) {
      res.push(arr[right]);
    }
    left++;
    right--;
  }
  return res;
};

let findFloorNumber = (roomNumber) => {
  let lockerPerFloor = [5, 6, 7, 5, 6, 7];
  let floor = 0;

  for (let i = 0; roomNumber > lockerPerFloor[i % 6]; i++) {
    roomNumber -= lockerPerFloor[i % 6];
    floor++;
  }

  floor += Math.ceil(roomNumber / 5);
  return floor;
};
