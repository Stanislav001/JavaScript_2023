const user = {
  firstName: "Stanislav",
  lastName: "Stanchev",
  age: 23,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  yearOfBirth: function () {
    const currentYear = new Date();
    const result = currentYear.getFullYear() - this.age;

    return result;
  },
};

user.yearOfBirth();

console.log(user.firstName);

delete user.firstName;

for (const key in user) {
  if (typeof user[key] !== "function") {
    console.log(`${key}: ${user[key]}`);
  }
}

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getYearOfBirth() {
    const currentYear = new Date();
    const result = currentYear.getFullYear() - this.age;

    return result;
  }
}

const stanislav = new User("Stanislav", "Todorov", 20);
console.log(stanislav);
console.log(stanislav.getFullName());
