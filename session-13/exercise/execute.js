const QueueClass = require("./exercise.js");

let queue = new QueueClass([
  "Queue 1",
  "Queue 2",
  "Queue 3",
  "Queue 4",
  "Queue 5",
  "Queue 6",
]);

console.log(queue.data);
queue.run();
