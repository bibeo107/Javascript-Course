// The spread operator
//---------------------------------------------------------------
// 1. Spread in Array literals
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Shallow copy - the nested array inside copied array, the reference still remain.
const views = [
    [5, 10, 20],
    [10, 20, 30]
];

const viewsCopy = [...views]; // Shallow copy

console.log(`\nviews:`, views);
console.log(`viewsCopy:`, viewsCopy);

viewsCopy[1].push(40);
viewsCopy[0].pop(20);

console.log(`\nviews:`, views);
console.log(`viewsCopy:`, viewsCopy);

//---------------------------------------------------------------
// Add elements from array to another array
const parts1 = ['shoulders', 'knees'];
const lyrics = ['head', ...parts1, 'and', 'toes'];
console.log(`\nlyrics:`, lyrics);

// Concatenate arrays
console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);

// Conditionally adding values to an array
const isSpring = true;
const isSummer = false;
const fruits = [
    'Apple',
    'Banana',
    ...(isSpring ? ['Cherry', 'Strawberry', 'Mango'] : []),
    ...(isSummer ? ['Watermelon', 'Kiwi', 'Grapes'] : [])
];

console.log(`\nfruits:`, fruits);

const fruitNumbers = {
    apple: 10,
    banana: 5,
    watermelon: isSummer ? 30 : undefined,
    ...(isSpring && { cherry: 30 })
};
console.log(`\nfruitNumbers`, fruitNumbers);

//---------------------------------------------------------------
// 2. Spread in Object literals

// shallow copy object - the nested object inside copied object, the reference still remain.
const user = { firstName: 'Thom', lastName: 'Vu' };
const user1 = { ...user };
user1.firstName = 'Tham';

// optimize code
const user2 = { ...user, firstName: 'Thoa' }; // Note: the same key twice inside an object, the last one wins

console.log('\nuser: ', user);
console.log('user1: ', user1);
console.log('user2: ', user2);

//---------------------------------------------------------------
// be careful with nested object when using shallow copy with the spread operator
const roles1 = { isAdmin: true };
const roles2 = { isAdmin: true };
const admin1 = { firstName: 'Admin1', lastName: 'Vu', role: roles1 };
const admin2 = { firstName: 'Admin2', lastName: 'Vu', role: roles2 };

const tutor1 = { ...admin1, firstName: 'Tutor1' };
tutor1.role.isAdmin = false; // the nested object will be effect (isAdmin = false)

const tutor2 = { ...admin2, firstName: 'Tutor2', role: { isAdmin: false } }; // the nested object will not be effected since the same key twice inside an object, the last one wins

console.log(`\nroles1`, roles1);
console.log(`roles2`, roles2);
console.log(`\nadmin1:`, admin1);
console.log(`tutor1:`, tutor1);
console.log(`\nadmin2:`, admin2);
console.log(`tutor2:`, tutor2);

//---------------------------------------------------------------
// Combining Objects
const userInfo = { id: 1, firstName: 'George', lastName: 'Doe' };
const userRole = { roles: ['admin', 'manager'] };
const token = { accessToken: 'eyJhbGc9', refreshToken: 'abcd1234' };

const currentUser = { ...userInfo, ...userRole, ...token };
console.log(`\ncurrentUser:`, currentUser);

//---------------------------------------------------------------
// Overriding properties
const obj1 = { foo: 'bar', x: 80 };
const obj2 = { foo: 'hello', y: 100 };
const mergedObj = { x: 10, ...obj1, ...obj2, y: 200 };

console.log(`\nmergedObj: `, mergedObj); // { x: 80, foo: 'hello', y: 200 }

//---------------------------------------------------------------
// Conditionally add properties to an object

let getRole = () => 'admin';
let getAccess = () => 'free';

const admin = {
    firstName: 'John',
    lastName: 'Doe',
    ...(getRole() === 'admin' ? { isAdmin: true } : {}), // spread and ternary operator
    ...(getAccess() === 'premium' && { premiumAccess: true }) // spread and && operator
};

console.log(`\nadmin initial`, admin);

// update based on changed condition
getRole = () => 'author';
getAccess = () => 'premium';

// Update properties
admin.isAdmin = getRole() === 'admin';
admin.premiumAccess = getAccess() === 'premium';
console.log(`\nadmin after update`, admin);

//---------------------------------------------------------------
// Another example:
const animal = {
    name: 'Koala',
    kingdom: 'Australia',
    cute: true,
    friends: [
        {
            name: 'Kangaroo',
            kingdom: 'Australia'
        }
    ]
};

// shallow copy
const koala = {
    ...animal,
    tail: false
};

console.log(`\nanimal:`, animal);
console.log(`\nkoala:`, koala);

animal.cute = false;

console.log(`\nanimal:`, animal);
console.log(`\nkoala:`, koala);

animal.friends[0].cute = false; // shallow copy then this property will effect koala property

console.log(`\nanimal:`, animal);
console.log(`\nkoala:`, koala);

//---------------------------------------------------------------
// DEEP COPY
const superhero = {
    name: 'Bruce Wayne',
    alias: 'Batman',
    universe: 'DC',
    happy: false,
    enemies: ['Joker', 'Catwoman', 'Bane'],
    bestMovie: {
        title: 'The Dark Knight',
        rate: 95
    }
};
// Deep copy solution only using the spread operator

const copySuperhero = {
    ...superhero,
    enemies: [...superhero.enemies, 'Poison Ivy'],
    bestMovie: { ...superhero.bestMovie, year: 2008 }
};

console.log(`\nsuperhero:`, superhero);
console.log(`\nsuperheroCopy:`, copySuperhero);

// Deep copy solution with JSON.parse and JSON.stringify
const copySuperhero2 = JSON.parse(JSON.stringify(superhero));

console.log(`\nsuperhero:`, superhero);
console.log(`\ncopySuperhero2:`, copySuperhero2);

copySuperhero2.enemies.push('Poison Ivy');
copySuperhero2.bestMovie.year = 2008;

console.log(`\nsuperhero:`, superhero);
console.log(`\ncopySuperhero2:`, copySuperhero2);
