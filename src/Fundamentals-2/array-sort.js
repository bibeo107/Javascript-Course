/* eslint-disable no-unused-expressions */
console.group(`\x1b[1m%s\x1b[0m`, `Sort() returns the reference to the same array & sorted. `);
const months = ['Mar', 'Oct', 'Jan', 'Feb', 'Dec'];

const compareMonths = (a, b) => {
    const monthOder = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];
    return monthOder.indexOf(a) - monthOder.indexOf(b);
};
console.log(`\nmonths: `, months);
console.log(`months.sort(): `, months.sort());
console.log(`months.sort(compareMonths):`, months.sort(compareMonths));

const alphabets = ['a', 'B', 'c', 'b', 'A', 'D', 'C', 'd'];
const customAscendingAlphabets = (a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();

    if (lowerA > lowerB) {
        return 1;
    }
    if (lowerA < lowerB) {
        return -1;
    }

    // If the lowercase versions are the same, compare the original strings
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }

    return 0;
};
console.log(`Custom Ascending alphabets:`, alphabets.sort(customAscendingAlphabets));

const friends = ['Thắm', 'Thơm', 'Thoa', 'Thuý', 'Thắng', 'Thảo', 'An', 'Tin'];
const compareFriends = (a, b) => a.localeCompare(b, 'vn');
console.log(`\nfriends.sort(compareItems):`, friends.sort(compareFriends));

const numbers = [2, 11, 1, 101, 77, 23];
console.log(
    `\nnumbers.sort(numbers.sort((a, b) => b - a))`,
    numbers.sort((a, b) => b - a)
);
console.log(
    `numbers.sort(numbers.sort((a, b) => a - b))`,
    numbers.sort((a, b) => a - b)
);
console.log(`numbers.reverse():`, numbers.reverse());

const people = [
    { id: 2, name: 'Winnie' },
    { id: 1, name: 'Sam' },
    { id: 3, name: 'Sally' }
];
const compareName = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
};
console.log(
    `\nSort by ID `,
    people.sort((a, b) => a.id - b.id)
);

console.log(`people.sort(compareName)`, people.sort(compareName));
const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'The', value: -13 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

console.log(items.sort(compareName));
console.groupEnd();

console.group(
    `\x1b[1m%s\x1b[0m`,
    `\ntoSorted() returns a new array with the elements sorted in ascending order. `
);
const unchanging = [2, 11, 1, 101, 77, 23];
const increaseNumbers = unchanging.toSorted((a, b) => a - b);
const descreaNumbers = unchanging.toSorted((a, b) => b - a);
console.log(`unchanging:`, unchanging);
console.log(`unchanging.toSorted((a, b) => a - b):`, increaseNumbers);
console.log(`unchanging.toSorted((a, b) => a - b):`, descreaNumbers);
console.log(`unchanging:`, unchanging);
console.groupEnd();
