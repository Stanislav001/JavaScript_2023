let peoples = ["Greg", "Mary", "Devon", "James"];

// Print elements of array
// for (let index = 0; index < peoples.length; index++) {
//   console.log(peoples[index]);
// }

// // Use forEach()
peoples.forEach((people) => console.log(people));

// Remove first element
peoples.shift();

// Remove last element
peoples.pop();

// Add new element in index 0
peoples.unshift("Matt");

// Add new last element
peoples.push("Stanislav");

// Use indexOf()
const foo = peoples.indexOf("Foo");
console.log(foo); // -> return -1

// Use splice()
peoples = ["Greg", "Mary", "Devon", "James"];
peoples.splice(2, 1, "Elizabeth", "Artie");
console.log(peoples);

// First task
console.log("=====");
let data = ["Greg", "Mary", "Devon", "James"];

data.shift();
data.pop();

console.log("Array after removing first and last elements:");
console.log(data);

data.push("John", "Alice");
data.unshift("Michael");

console.log("Array after adding new elements in the beginning and the end:");
console.log(data);
