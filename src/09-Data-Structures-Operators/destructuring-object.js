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
// ---------------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `Variable assignment`);

// without destructuring
const id1 = user.id;
const userName1 = user.username;
const city1 = user.address.city;

// with destructuring
// Extracting , renaming properties and set default value
const {
    id,
    username,
    email,
    address: { city }
} = user;
console.log(`id:`, id);
console.log(`username:`, username);
console.log(`email:`, email);
console.log(`city:`, city);

// create a shallow copy with additional properties
// ---------------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\ncreate a shallow copy with additional properties`);
const modifiedUser = { ...user, isAdmin: false };
console.log(`modifiedUser:`, modifiedUser);

// Parameter Handling
// ---------------------------------------------------------
const bookInfo = {
    title: 'Explore It!: Reduce Risk and Increase Confidence with Exploratory Testing',
    author: {
        authorName: 'Elisabeth',
        birthYear: 'Hendrickson'
    },
    publishedYear: 2013
};
// without destructuring
console.log(`\x1b[1m%s\x1b[0m`, `\nwithout destructuring`);

function printBookInfo1(book) {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author.authorName}`);
    console.log(`Birth year: ${book.author.birthYear}`);
    console.log(`Published Year: ${book.publishedYear}`);
}
printBookInfo1(bookInfo);

// with Destructuring
console.log(`\x1b[1m%s\x1b[0m`, `\nwith destructuring`);
function printBookInfo({
    title = 'Default Book Title',
    author: { authorName, birthYear },
    publishedYear: year
}) {
    console.log(`Title: ${title}`);
    console.log(`Author: ${authorName}`);
    console.log(`Birth year: ${birthYear}`);
    console.log(`Published Year: ${year}`);
}
printBookInfo(bookInfo);

// ---------------------------------------------------------
// Mutating variables
let a = 10;
let b = 30;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(`a: ${a}, b: ${b}`);

// mutating variable
// ---------------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\nmutating variable`);

const student = {
    studentName: 'Alice',
    age: 20,
    grade: 'A',
    subject: 'Math'
};
let { studentName, age, grade, subject } = student;

grade = 'B';
console.log(`student: ${studentName}, grade: ${grade}`);

// Nested Objects
// ---------------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\nNested Objects`);

const {
    author: { authorName = 'Default Name', authorYear: birthYear }
} = bookInfo;

console.log(`authorName: ${authorName}, birthYear: ${birthYear}`);

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
console.groupEnd();
