/* eslint-disable func-names */
console.group(`\x1b[1m%s\x1b[0m`, `Object creation`);
// Object Literal -----------------------------------------------------------------
const user = {
    firstName: 'Ánh',
    lastName: 'Nguyễn',
    birthYear: 1955,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    }
};

console.log(user.firstName);
console.log(user.greet());

// Constructor Function -----------------------------------------------------------------
function Author(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.getfullName = function () {
        this.fullName = `${this.firstName} ${this.lastName}`;
        return this.fullName;
    };
    this.greet = function () {
        return `Hello, ${this.fullName}!`;
    };
}

// creating instances using the constructor function
const author1 = new Author('Hữu', 'Tố', 1920);
const author2 = new Author('John', 'Doe', 1800);

author1.getfullName();
author2.getfullName();

console.log(`author1.fullName:`, author1.fullName);
console.log(`author2.fullName:`, author2.fullName);
console.log(author2.greet());

// Class Approach -----------------------------------------------------------------
class Admin {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    getFullName() {
        this.fullName = `${this.firstName} ${this.lastName}`;
        return this.fullName;
    }

    greet() {
        return `Hello, ${this.fullName}`;
    }
}

// Creating instances using the class
const admin1 = new Admin('Thắm', 'Vũ', 2000);
const admin2 = new Admin('Thảo', 'Vũ', 1960);
admin1.getFullName();
admin2.getFullName();
console.log(admin1.fullName);
console.log(admin2.greet());
console.groupEnd();

// Dot vs. bracket notation ( bracket notation can use expression)
console.group(`\x1b[1m%s\x1b[0m`, `\nChalenges`);
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge() {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    },
    getSummary() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${
            this.hasDriversLicense ? 'a' : 'no'
        } driver's license.`;
    }
};

// Challenge
console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}; `
);

// Object method
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);

// Challenge
console.log(jonas.getSummary());
// Chanllenge 3:
function PersonBMI(fullName, mass, height) {
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
    this.calcBMI = () => {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    };
}
const mark = new PersonBMI('Mark Miller', 78, 1.69);
const john = new PersonBMI('John Smith', 92, 1.95);
mark.calcBMI();
john.calcBMI();
const BMIMark = Number(mark.bmi).toFixed(1);
const BMIJohn = Number(john.bmi).toFixed(1);
const result =
    BMIMark > BMIJohn
        ? `${mark.fullName}'s BMI (${BMIMark})is higher than ${john.fullName}'s (${BMIJohn})`
        : `${john.fullName}'s BMI (${BMIJohn} is higher than ${mark.fullName}'s (${BMIMark})`;
console.log(result);
console.groupEnd();
