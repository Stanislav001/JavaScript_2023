const input = "Hello world!";

// Reverse string with for loop
let reversedString = "";
for (let index = input.length - 1; index >= 0; index--) {
  reversedString += input[index];
}
console.log(reversedString);

// Reverse string with split() reverse() and join()
let reverse = "";
reverse = input.split("").reverse().join("");
console.log(reverse);

// Search oo in foo
const fooString = "foo";
const searchString = "oo";

// Use includes()
const result = fooString.includes(searchString);
console.log(result); // -> return true

// Use indexOf()
const res = fooString.indexOf(searchString);
console.log(res); // -> return 1

// Replacement
let inputString = "Please visit Microsoft!";
const replacingWord = "W3Schools";
const upperCaseWord = replacingWord.toUpperCase();
inputString = inputString.replace("Microsoft", upperCaseWord);
console.log(inputString);
