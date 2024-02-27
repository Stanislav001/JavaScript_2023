const number = 10;
let name = "Stanislav";

console.log(typeof number);

name = "Pesho";

console.log(`Name: ${name}`);

function introduce() {
  console.log(`My name is ${name}`);
}
introduce();

let isMale = false;

if (!isMale) {
  console.log("true");
} else {
  console.log("false");
}

const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
  console.log(element);
});

const person = {
  name: "Pesho",
  age: 20,
  isMale: true,
};

person.name = "Gosho";

console.log(person.name);
console.log(person.age);
console.log(person.isMale);

const firstNumber = 10;
const secondNumber = "10";

if (firstNumber === secondNumber) {
  // == || === && != || !==
  console.log("Equal");
} else {
  console.log("Not equal");
}

// TASKS

const arrowIntroduce = (inputName, inputAge, inputCity) => {
  console.log(
    `My name is ${inputName}, I am ${inputAge} years old and I am from ${inputCity}`
  );
};
arrowIntroduce("Gosho", 30, "Sofia");

const sumTwoNumbers = (firstNumber, secondNumber) => firstNumber + secondNumber;

const sum = sumTwoNumbers(5, 10);
console.log(`The sum is: ${sum}`);
