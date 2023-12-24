/* eslint-disable no-new-func */

// Objects vs. primitives

// Primitive types
let lastName = 'Williams';
const oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log(`\nBefore marriage:`, jessica.fullName()); //
console.log(`After marriage: `, marriedJessica.fullName());

// Copy objects
// Shallow copy
const jennifer = {
    firstName: 'Jennifer',
    lastName: 'Williams',
    age: 27,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    family: ['Bob']
};
const shallowCopyOfJennifer = { ...jennifer }; // shallow copy
shallowCopyOfJennifer.lastName = 'Davis';
shallowCopyOfJennifer.family.push('Min'); // NOTE: effect to jennifer
shallowCopyOfJennifer.family.push('Mun');

console.log(`\nBefore marriage: ${jennifer.fullName()} \nfamily: ${jennifer.family}`);

console.log(
    `After marriage: ${shallowCopyOfJennifer.fullName()} \nfamily: ${shallowCopyOfJennifer.family}`
);

// Deep copy
const diana = {
    firstName: 'Diana',
    lastName: 'Williams',
    age: 30
};

const deepCopyOfDiana = JSON.parse(JSON.stringify(diana));
deepCopyOfDiana.lastName = 'Davis';
console.log();
console.log(`Before marriage: ${diana.firstName} ${diana.lastName}`);
console.log(`After marriage: ${deepCopyOfDiana.firstName} ${deepCopyOfDiana.lastName}`);

const sophia = {
    firstName: 'Sophia',
    lastName: 'Williams',
    age: 27,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    family: ['Bob']
};
// NOTE: Could NOT deep clone object with functions
// const deepCopyOfSophia = JSON.parse(JSON.stringify(sophia));
// const deepCopyOfSophia = structuredClone(sophia);

// DeepClone
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Clone arrays
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }

    // Clone objects
    const clonedObject = {};
    for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) {
            clonedObject[key] = deepClone(obj[key]);
        }
    }

    return clonedObject;
}
const deepCopyOfSophia = deepClone(sophia);

deepCopyOfSophia.lastName = 'Davis';
deepCopyOfSophia.family.push('Min');
deepCopyOfSophia.family.push('Mun');

console.log(`\nBefore marriage: ${sophia.fullName()} \nfamily: ${sophia.family}`);

console.log(`After marriage: ${deepCopyOfSophia.fullName()} \nfamily: ${deepCopyOfSophia.family}`);
