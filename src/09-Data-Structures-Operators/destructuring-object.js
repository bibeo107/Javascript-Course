/* eslint-disable prefer-const */
// Destructuring Objects
console.group(`\x1b[1m%s\x1b[0m`, `Destructuring Objects`);

const user = {
    id: 1,
    username: 'john_doe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: {
        city: 'New York',
        zipCode: '10001'
    }
};

// Variable assignment

// without destructuring
const id1 = user.id;
const userName1 = user.username;
const city1 = user.address.city;

// with destructuring
// Extracting and  renaming properties
const {
    id,
    username,
    email,
    address: { city }
} = user;
console.log(`\nid:`, id);
console.log(`username:`, username);
console.log(`email:`, email);
console.log(`city:`, city);

// create a shallow copy with additional properties
const modifiedUser = { ...user, isAdmin: false };
console.log(`\nmodifiedUser:`, modifiedUser);

// ---------------------------------------------------------
// Parameter Handling
const bookInfo = {
    title: 'Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing',
    author: {
        authorName: 'Elisabeth',
        birthYear: 'Hendrickson'
    },
    publishedYear: 2013
};
// without destructuring
function printBookInfo1(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.authorName}`);
    console.log(`Birth year: ${book.birthYear}`);
    console.log(`Published Year: ${book.year}`);
}
printBookInfo1(bookInfo);

// Destructuring
function printBookInfo({ title = 'Default Book Title', author: { authorName, birthYear }, year }) {
    console.log(`Title: ${title}`);
    console.log(`Author: ${authorName}`);
    console.log(`Birth year: ${birthYear}`);
    console.log(`Published Year: ${year}`);
}
printBookInfo(bookInfo);

// ---------------------------------------------------------

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24
        }
    },
    order(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    }
};

// ---------------------------------------------------------
// Extract properties
const { name, categories, openingHours } = restaurant;
console.log(`name:`, name);
console.log(`categories:`, categories);
console.log(`opningHours:`, openingHours);

// ---------------------------------------------------------
// Rename properties
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(`\nrestaurantName:`, restaurantName);
console.log(`tags:`, tags);
console.log(`hours:`, hours);

// ---------------------------------------------------------
// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(`\nmenu`, menu);
console.log(`starters`, starters);

// ---------------------------------------------------------
// Mutating variables
let a = 10;
let b = 30;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(`a: ${a}, b: ${b}`);

// ------ mutating variable
const student = {
    studentName: 'Alice',
    age: 20,
    grade: 'A',
    subject: 'Math'
};
let { studentName, age, grade, subject } = student;

grade = 'B';
console.log(`student: ${studentName}, grade: ${grade}`);

// ---------------------------------------------------------
// Nested Objects
const {
    fri: { open: o, close: c }
} = openingHours;
console.log(`\nopen: ${o}, close: ${c}`);

// ---------------------------------------------------------
// Function returns
function config() {
    return {
        baseUrl: 'https://opensource-demo.orangehrmlive.com',
        timeout: 5000,
        credentials: {
            admin: 'Admin',
            password: 'admin123'
        }
    };
}

const {
    baseUrl,
    timeout,
    credentials: { admin, password }
} = config();
