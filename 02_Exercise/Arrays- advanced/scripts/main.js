const numbers = [10, 20, 30, 40, 50, 75, 125];

// Use forEach
// numbers.forEach((num) => console.log(num)); // console.log(numbers);

// Use Map
const newArray = numbers.map((item) => {
  if (item % 2 == 0) {
    return `${item} is even`;
  } else {
    return `${item} is odd`;
  }
});
console.log(newArray);

// Average of array elements with reduce
const average = numbers.reduce((a, b) => a + b / numbers.length);
console.log(average);

// Use Filter
const filteredNumbers = numbers.filter((num) => {
  return num >= 25;
});
console.log(filteredNumbers);

const oddNumbers = numbers.filter((num) => num % 2 != 0);
const evenNumbers = numbers.filter((num) => num % 2 == 0);

console.log("eventNumbers: ", evenNumbers);
console.log("oddNumbers: ", oddNumbers);
