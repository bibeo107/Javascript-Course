// 1.  Write a JavaScript function to check whether an `input` is an array or not.
console.group(
    `\x1b[1m%s\x1b[0m`,
    `1. Write a JavaScript function to check whether an 'input' is an array or not`
);
const isArray = (input) => {
    return Array.isArray(input);
};
// Test data
const input1 = 'w3resource';
const input2 = [1, 2, 4, 0];
console.log(`isArray(${input1}):`, isArray(input1));
console.log(`isArray(${input2}):`, isArray(input2));
console.groupEnd();

// 2. Write a JavaScript function to clone an array.
console.group(`\x1b[1m%s\x1b[0m`, `\n2. Write a JavaScript function to clone an array.`);
const arrayClone = (array) => {
    return JSON.parse(JSON.stringify(array));
};
// const deepCopy = structuredClone(currencies);

// Test data:
const array1 = [1, 2, 4, 0];
const array2 = [1, 2, [4, 0]];

console.log(`arrayClone(${array1}):`, arrayClone(array1));
console.log(`arrayClone(${array1}):`, arrayClone(array1));

console.log(`\nstructuredClone(${array2}):`, structuredClone(array2));
console.log(`structuredClone(${array2}):`, structuredClone(array2));

console.groupEnd();

// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.`
);
const firstElements = (array, n = 1) => {
    if (!Array.isArray(array) || array.length === 0) return [];
    // return 'Please provide a non-empty array';
    if (!Number.isInteger(n) || n < 0) return [];
    // return 'Please provide a non-negative integer the first n elements of the array.';
    return array.slice(0, n);
};
const arrayDataTest = [7, 9, 0, -2];

// Test data
console.log(`firstElements([${arrayDataTest}]):`, firstElements(arrayDataTest));
console.log(`firstElements([], 3):`, firstElements([], 3));
console.log(`firstElements([${arrayDataTest}], 3):`, firstElements(arrayDataTest, 3));
console.log(`firstElements([${arrayDataTest}], 6):`, firstElements(arrayDataTest, 6));
console.log(`firstElements([${arrayDataTest}], -3):`, firstElements(arrayDataTest, -3));
console.groupEnd();

// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.`
);
const lastElements = (array, n = 1) => {
    if (!Array.isArray(array) || array.length === 0) return [];
    if (!Number.isInteger(n) || n < 0) return [];
    return array.slice(-n);
};

// Test data
console.log(`lastElements([${arrayDataTest}]):`, lastElements(arrayDataTest));
console.log(`lastElements([], 3):`, lastElements([], 3));
console.log(`lastElements([${arrayDataTest}], 3):`, lastElements(arrayDataTest, 3));
console.log(`lastElements([${arrayDataTest}], 6):`, lastElements(arrayDataTest, 6));
console.log(`lastElements([${arrayDataTest}], -3):`, lastElements(arrayDataTest, -3));
console.groupEnd();

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n5. Write a simple JavaScript program to join all elements of the following array into a string.`
);

// Test Data:
const myColor = ['Red', 'Green', 'White', 'Black'];

console.log(myColor.join(', '));
console.log(myColor.join('-'));
console.log(myColor.join('+'));
console.groupEnd();

// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.
console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.`
);

const insertDashes = (number) => {
    const splitNumber = number.toString().split('');
    let result = '';
    splitNumber.forEach((element, index) => {
        if (Number(element) % 2 === 0 && Number(splitNumber[index + 1]) % 2 === 0) {
            result += `${element}-`;
        } else {
            result += element;
        }
    });
    return result;
};

console.log(insertDashes(25468));
console.log(insertDashes(10287903));
console.groupEnd();

// 7. Write a JavaScript program to sort the items of an array.
console.group(`\x1b[1m%s\x1b[0m`, `\n7. Write a JavaScript program to sort the items of an array.`);
// Test data:
const numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1, 1, 10, 11, -31];
console.log(numbers.sort((first, second) => first - second));
console.groupEnd();

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

//  Give us an array of the inventor first and last names
console.group(`\x1b[1m%s\x1b[0m`, `8. Give us an array of the inventor first and last names`);
const fullNames = inventors.map((e) => ` ${e.first} ${e.last}`);
console.log(`Inventor full names: `, fullNames);
console.groupEnd();

// Sort the inventors by birthdate, oldest to youngest
console.group(`\x1b[1m%s\x1b[0m`, `\n9. Sort the inventors by birthdate, oldest to youngest`);
const sortInventors = inventors.toSorted((a, b) => (a.year - b.year ? 1 : -1));
console.log(sortInventors);
console.groupEnd();

// Sort the inventors by years lived
console.group(`\x1b[1m%s\x1b[0m`, `\n10. Sort the inventors by years lived`);
// const copyInventors = structuredClone(inventors).map((e) => {
//     return { ...e, livedYear: e.passed - e.year };
// });
const compareFn = (first, next) => {
    const firstLivedYears = first.passed - first.year;
    const nextLivedYears = next.passed - next.year;
    return firstLivedYears > nextLivedYears ? -1 : 1;
};

const oldest = inventors.toSorted(compareFn);
console.log(oldest);
console.groupEnd();

// Sort the people alphabetically by last name
console.group(`\x1b[1m%s\x1b[0m`, `\n11.Sort the people alphabetically by last name`);
const people = [
    'Bernhard, Sandra',
    'Bethea, Erin',
    'Becker, Carl',
    'Bentsen, Lloyd',
    'Beckett, Samuel',
    'Blake, William',
    'Berger, Ric',
    'Beddoes, Mick',
    'Beethoven, Ludwig',
    'Belloc, Hilaire',
    'Begin, Menachem',
    'Bellow, Saul',
    'Benchley, Robert',
    'Blair, Robert',
    'Benenson, Peter',
    'Benjamin, Walter',
    'Berlin, Irving',
    'Benn, Tony',
    'Benson, Leana',
    'Bent, Silas',
    'Berle, Milton',
    'Berry, Halle',
    'Biko, Steve',
    'Beck, Glenn',
    'Bergman, Ingmar',
    'Black, Elk',
    'Berio, Luciano',
    'Berne, Eric',
    'Berra, Yogi',
    'Berry, Wendell',
    'Bevan, Aneurin',
    'Ben-Gurion, David',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bennington, Chester',
    'Bierce, Ambrose',
    'Billings, Josh',
    'Birrell, Augustine',
    'Blair, Tony',
    'Beecher, Henry',
    'Biondo, Frank'
];

const sortLastName = people.sort((lastOne, nextOne) => {
    const [aLastName] = lastOne.split(', ');
    const [bLastName] = nextOne.split(', ');
    return aLastName > bLastName ? 1 : -1;
});
console.log(`sortLastName:`, sortLastName);

const sortFirstName = people.sort((lastOne, nextOne) => {
    const [, aFirstName] = lastOne.split(', ');
    const [, bFirstName] = nextOne.split(', ');
    return aFirstName > bFirstName ? 1 : -1;
});
console.log(`sortFirstName:`, sortFirstName);
