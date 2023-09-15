// //

// // Asynchronous

// const message = () => {
//   console.log("Async");
// };

// // setTimeout(message, 3000);

// // Promise

// const tryPromise = new Promise((resolve, reject) => {
//   let isError = false;
//   if (isError) reject("Error");
//   else reject("Success");
// });

// const asynAwait = () => {
//   console.log("satu");
//   tryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("finally done"));
//   console.log("dua");
// };

// asynAwait();

// const tryAndCatch = async () => {
//   try {
//     let result = await tryPromise;
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// // Export

// const name = require("./module.js");
// console.log(name);
