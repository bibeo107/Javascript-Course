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

console.log(`\nuniqueLastNameCoworkers: `, uniqueLastNameCoworkers);
console.log(`[...uniqueLastNameCoworkers]: `, [...uniqueLastNameCoworkers]);
