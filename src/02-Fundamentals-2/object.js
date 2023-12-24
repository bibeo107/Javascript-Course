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
    if (!new.target) return new Author(firstName, lastName, birthYear);
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
const author2 = Author('John', 'Doe', 1800);

author1.getfullName();
author2.getfullName();

console.log(`\nauthor1.fullName:`, author1.fullName);
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
//------------------------------------------------------
