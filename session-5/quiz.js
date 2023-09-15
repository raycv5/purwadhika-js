// Odd, even
function oddEven(arr) {
  let odd = arr.filter((n) => n % 2 === 1);
  let even = arr.filter((n) => n % 2 === 0);
  return [odd.length, even.length];
}

function upperLower(s) {
  let temp = s.replace(/\s/g, "").split("");
  let lowerCase = 0;
  let upperCase = 0;

  for (let i = 0; i < temp.length; i++) {
    if (temp[i].match(/[a-z]/)) {
      lowerCase++;
    } else if (temp[i].match(/[A-Z]/)) {
      upperCase++;
    }
  }

  return [lowerCase, upperCase];
}

function vowel(s) {
  let matches = s.match(/[aiueo]/gi);
  return matches === null ? 0 : matches.length;
}

function lengthMaximumValue(arr) {
  let sorted = arr.sort((a, b) => b - a);
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] === sorted[0]) counter++;
  }
  return counter;
}

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    // Printing spaces
    for (let j = n - i; j > 0; j--) {
      row += " ";
    }
    //Printing hashtags
    for (let k = 1; k <= i; k++) row += "#";
    console.log(row);
  }
}
