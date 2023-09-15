/*
Create a function
Input : "Pig latin is cool !"
Output : "igPay atinlay siay oolcay !ay"
*/

const exercise = (str) => {
  let arr = str.split(" ");
  let res = [];
  for (let word of arr) {
    let modified = word.slice(1) + word[0] + "ay";
    res.push(modified);
  }
  return res.join(" ");
};

// 2 -------------------------------------------------------------------------

const exercise2 = (str) => {
  let arr = str.split(" ");
  let res = [];
  for (let word of arr) {
    let modified = [];
    if (/^[aeiouAIUEO]/.test(word)) {
      modified = word.slice(1) + word[0] + "way";
      res.push(modified);
    } else {
      modified = word.slice(1) + word[0] + "ay";
      res.push(modified);
    }
  }
  return res.join(" ");
};

// 3

const exercise3 = (str) => {
  let cleaned = str.replaceAll("way", "").replaceAll("ay", "").split(" ");
  let res = [];
  for (let word of cleaned) {
    let modified = word[word.length - 1] + word.slice(0, word.length - 1);
    res.push(modified);
  }
  return res.join(" ");
};

/* Exercise 4
censoredWord = ['anjing','babi']
input : "budi memberi makan anjing"
output : "budi memberi makan a****g"

input 2 : "babi dan anjing"
output 2: "b**i dan a****g"
*/

const censorWord = (str) => {
  let censoredWord = ["anjing", "babi"];
  let res = str;
  for (let word of censoredWord) {
    let censored =
      word[0] + "*".repeat(word.length - 2) + word[word.length - 1];
    res = res.replaceAll(word, censored);
  }
  return res;
};
