const lastNameCoworkers = ['Quan', 'Tien', 'Tien', 'Thao', 'Thao'];
const fullNameCoworkers = [
    { firstName: 'Vo', lastName: 'Quan' },
    { firstName: 'Vo', lastName: 'Tien' },
    { firstName: 'Tran', lastName: 'Tien' },
    { firstName: 'Vu', lastName: 'Thao' },
    { firstName: 'Pham', lastName: 'Thao' }
];
const uniqueLastNameCoworkers = new Set(lastNameCoworkers);
const uniqueFullnameCoworkers = new Set(fullNameCoworkers);

console.log(`\x1b[1m%s\x1b[0m`, `\n Array.from() ---------------`);
console.log(`Array.from('PHP'):`, Array.from('PHP'));

// array from set
console.log(`\nuniqueLNCoworkers `, uniqueLastNameCoworkers);
console.log(`Array.from(uniqueLatNameCoworkers) `, Array.from(uniqueLastNameCoworkers));

// array from
const contacts = new Map();
contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });
contacts.set('Hilary', { phone: '617-555-4321', address: '321 S 2nd St' });
console.log(`\ncontacts: `, contacts);
console.log(`Array.from(contacts):`, Array.from(contacts));
console.log(`Array.from(contacts.keys):`, Array.from(contacts.keys()));
console.log(`Array.from(contacts.values):`, Array.from(contacts.values()));

console.log(Array.from({ length: 4 }, (value, i) => i));
console.log(Array.from({ length: 4 }, (_, i) => i * 2));
// Create a Sequence of Numbers
const range = (start, end, step = 1) =>
    Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);

console.log(`\nrange(1, 10):`, range(1, 10));
console.log(`\nrange(1, 10, 2):`, range(1, 10, 2));

// Create the alphabet array & sort

const alphabet = range('A'.charCodeAt(0), 'Z'.charCodeAt(0)).map((x) => String.fromCharCode(x));
console.log(`\nCreate the alphabet array & sort:`, alphabet);
