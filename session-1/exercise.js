// 1. Write a code to find area of rectangle
// Formula : Area = length x width
const rectangleLength = 10;
const rectangleWidth = 5;
const rectangleArea = rectangleLength * rectangleWidth;

// 2. Write a code to find perimeter of rectangle.
// Formula : 2 * (length * width)
const rectanglePerimeter = 2 * (rectangleLength * rectangleWidth);

// 3. Write a code to find diameter, circumference and area of a circle.
// Formula : D = 2 × r, C = 2 × π × r, A = π × r2
const circleRadius = 6;
const circleDiameter = 2 * circleRadius;
const circleCircumference = 2 * Math.PI * circleRadius;
const circleArea = Math.PI * (circleRadius * circleRadius);

// 4. Write a code to find angles of triangle if two angles are given.
// Formula : 180 - (a + b)
const a = 37;
const b = 24;
const c = 180 - (a + b);

// 5. Write a code to get difference between dates in days.
const now = new Date();
const newYear = new Date(2024, 0, 1);
const millisecondsPerDay = 86400000;
const daysDifference = Math.floor((newYear - now) / millisecondsPerDay);

// 6. Write a code to convert days to years, months, and days
//    1 year : 365 days, 1 month : 30 days;
const daysToConvert = 400;
const daysToYear = Math.floor(daysToConvert / 365);
const extraDays = daysToConvert % 365;
const daysToMonth = Math.floor(extraDays / 30);
const days = extraDays % 30;
console.log(
  `${daysToConvert} -> ${daysToYear} year, ${daysToMonth} months, ${days} days`
);
