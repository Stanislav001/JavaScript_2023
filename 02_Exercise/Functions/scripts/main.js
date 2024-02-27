// Search char in string
function countOfChar(input, searchChar) {
    let counter = 0;

    for (let index = 0; index < input.length; index++) {
        if (input.charAt(index) == searchChar) {
            counter += 1;
        }
    }
    return counter;
}

const result = countOfChar("w3resource.com", "o");
console.log("Result: ", result);

// Search string in string with indexOf and splice
function removeFirstOccurrence(input, searchString) {
    const index = input.indexOf(searchString);

    if (index === -1) {
        return input;
    }
    return input.slice(0, index) + input.slice(index + searchString.length);
}

const res = removeFirstOccurrence("the laptop is not broken", "not");
console.log(res);

// Search string in string with indexOf and reduce
function removeString(input, searchInput) {
    const res = input.replace(searchInput, '');
    return res;
}
const secondResult = removeString("the laptop is not broken", "not");
console.log(secondResult)