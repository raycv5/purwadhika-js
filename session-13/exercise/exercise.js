// function convertToIndonesianTime(time) {
//   let [hour, minute] = time.split(":").map(Number);
//   let res = "";

//   if (hour === 0) {
//     res = 12;
//   }

//   if (hour > 12) {
//     hour -= 12;
//   }

//   if (minute === 0) {
//     res = `jam ${hour}`;
//   } else if (minute === 15) {
//     res = `jam ${hour} seperempat`;
//   } else if (minute === 30) {
//     res = `jam setengah ${hour + 1}`;
//   } else if (minute === 45) {
//     res = `jam ${hour + 1} kurang seperempat`;
//   } else if (minute >= 1 && minute <= 14) {
//     res = `jam ${hour} lewat ${minute}`;
//   } else if (minute >= 16 && minute <= 29) {
//     res = `jam ${hour} lewat ${minute} `;
//   } else if (minute >= 31 && minute <= 44) {
//     res = `jam ${hour + 1} kurang ${60 - minute}`;
//   } else if (minute >= 46 && minute <= 59) {
//     res = `jam ${hour + 1} kurang ${60 - minute}`;
//   }

//   return res;
// }

// Sample inputs and outputs

function tellIndonesianTime(time) {
  const [hour, minutes] = time.split(":").map(Number);
  let idTime = hour;
  if (hour > 12) {
    idTime -= 12;
  } else if (hour === 0) {
    idTime = 12;
  }

  if (minutes === 0) {
    return `jam ${idTime}`;
  } else if (minutes >= 1 && minutes <= 14) {
    return `jam ${idTime} lewat ${minutes}`;
  } else if (minutes === 15) {
    return `jam ${idTime} seperempat`;
  } else if (minutes >= 16 && minutes <= 29) {
    return `jam ${idTime} lewat ${minutes}`;
  } else if (minutes === 30) {
    return `jam setengah ${idTime + 1}`;
  } else if (minutes >= 31 && minutes <= 44) {
    return `jam ${idTime + 1} kurang ${60 - minutes}`;
  } else if (minutes === 45) {
    return `jam ${idTime + 1} kurang seperempat`;
  } else if (minutes >= 46 && minutes <= 59) {
    return `jam ${idTime + 1} kurang ${minutes - 60}`;
  }
}

console.log(tellIndonesianTime("15:10")); // "jam 3 lewat 10"
console.log(tellIndonesianTime("13:20")); // "jam 1 lewat 20"
console.log(tellIndonesianTime("00:00")); // "jam 12"
console.log(tellIndonesianTime("12:15")); // "jam 12 seperempat"
console.log(tellIndonesianTime("05:20")); // "jam 5 lewat 20"

for (var i = 0; i < 10; i++) {
  console.log(i);
}
