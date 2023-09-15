const students = [
  {
    Name: "John Doe",
    Email: "john.doe@example.com",
    Age: new Date("2006-03-25"),
    Score: 71,
  },
  {
    Name: "Jane Smith",
    Email: "jane.smith@example.com",
    Age: new Date("2003-05-21"),
    Score: 92,
  },
  {
    Name: "David Johnson",
    Email: "david.johnson@example.com",
    Age: new Date("1995-06-21"),
    Score: 67,
  },
  {
    Name: "Emily Wilson",
    Email: "emily.wilson@example.com",
    Age: new Date("1998-02-02"),
    Score: 85,
  },
];

const calculateArray = (arr) => {
  // Using map and reduce ---------------------------------------------
  let maxScore = Math.max(...arr.map((item) => item.score));
  let minScore = Math.min(...arr.map((item) => item.score));
  let avgScore =
    arr.map((item) => item.score).reduce((a, b) => a + b) / arr.length;
  // ------------------------------------------------------------------

  let highestScore = 0;
  let lowestScore = 100;
  let totalScores = 0;
  for (let student of arr) {
    if (student.Score > highestScore) highestScore = student.Score;
    if (student.Score < lowestScore) lowestScore = student.Score;
    totalScores += student.Score;
  }

  let averageScores = totalScores / arr.length;

  // Date to age
  let now = new Date();

  let highestAge = 0;
  let lowestAge = 100;
  let totalAge = 0;

  for (let student of arr) {
    const age = Math.floor(
      (now - student.Age) / (365.25 * 24 * 60 * 60 * 1000)
    );
    totalAge += age;
    if (age > highestAge) highestAge = age;
    if (age < lowestAge) lowestAge = age;
  }
  let averageAges = totalAge / arr.length;

  return {
    score: { max: highestScore, min: lowestScore, avg: averageScores },
    age: { max: highestAge, min: lowestAge, avg: averageAges },
  };
};

// -------------------------------------------------------------------------------------------------
