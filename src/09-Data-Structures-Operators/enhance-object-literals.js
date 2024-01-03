/* eslint-disable object-shorthand */
// Enhanced object literals

const firstName = 'Sara';
const lastName = 'Joe';
const age = '20';

// 1. attribute declaring
// In Es5 need to enter both key and variable key which hold value
const emp1 = {
    firstName: firstName,
    lastName: lastName,
    age: age
};

// In Es6 enter both object and variable key at once

const emp2 = {
    firstName,
    lastName,
    age
};

console.log(`Es5:`, emp1);
console.log(`Es6:`, emp2);

// 2. method declaring

// ES5 need to enter keyword function for declaring function inside object
const emp3 = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

// ES6 don't need to enter keyword for function
const emp4 = {
    firstName,
    lastName,
    age,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// 3. ES6 attribute and method declaring
// directly enter attribute and method name inside object
const fullName = ' Sara Joe';
const showName = () => {
    console.log(`\nHello ${fullName}`);
};

const emp5 = {
    fullName,
    showName
};

console.log(emp5);
emp5.showName();

// 4. ES6 can use dynamic attribute name or key
const createPerson = function (name, phoneType, phoneNumber, addressType, addressValue) {
    return {
        name,
        [`${phoneType}Phone`]: phoneNumber,
        // ES6 computed property name based on addressType
        [addressType]: addressValue,
        introduce() {
            console.log(`Hi, My name 's ${this.name}, and I live at ${this[addressType]}.`);
        }
    };
};

// Create a person with dynamic properties
const person1 = createPerson('Sara', 'mobile', '123 456', 'homeAddress', '123 Main Street');
const person2 = createPerson('Tom', 'home', '4567 334', 'companyAddress', '34 Sub Street');

console.log(person1);
console.log(person2);

// 5. ES6 return as object
const createUser = (username, nickname) => ({ username, nickname });

const john = createUser('john', 'jk');
console.log(john);

// 6. object declared using array
const properties = ['fistName', 'lastName', 'city'];
const values = ['Tom', 'Doe', 'New York'];

const user = Object.fromEntries(properties.map((name, index) => [name, values[index]]));
console.log(user);
