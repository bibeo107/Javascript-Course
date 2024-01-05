// ---------------------------------------------------------
// Restaurant example
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
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`\nHere is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(`\nmainIngredient:`, mainIngredient);
        if (otherIngredients.length > 0) {
            console.log(`otherIngredients:`, otherIngredients);
        }
    }
};

// 1. Destructuring
// --------------------------------------------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, '1. Destructuring');

// Extract properties
// ----------------------------------
const { name, categories, openingHours } = restaurant;

console.log(`name:`, name);
console.log(`categories:`, categories);
console.log(`opningHours:`, openingHours);

// Rename properties
// -------------------------------------
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;

console.log(`\nrestaurantName:`, restaurantName);
console.log(`tags:`, tags);
console.log(`hours:`, hours);

// Default values
// ----------------------------------------
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(`\nmenu`, menu);
console.log(`starters`, starters);

// Nested Objects
// ------------------------------------------
const {
    fri: { open: o, close: c }
} = openingHours;

console.log(`\nopen: ${o}, close: ${c}`);
console.groupEnd();

// 2. Spread operator
// --------------------------------------------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, '\n2. Spread operator');

const ingredients = [1, 2, 3];
restaurant.orderPasta(...ingredients);

// shallow copy
//--------------------------
const copyRestaurant = { ...restaurant, name: 'Ristorante Roma' };

console.log('\nrestaurant.name: ', restaurant.name);
console.log('copyRestaurant.name: ', copyRestaurant.name);

//--------------------------
const newRestaurant = { foundedIn: 2000, ...restaurant, founder: 'Sara' };

console.log('\nnewRestaurant: ', newRestaurant);

// Array
//--------------------------
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(`\npizza:`, pizza);
console.log(`risotto:`, risotto);
console.log(`otherFood:`, otherFood);

// Objects
//--------------------------
const { sat, ...weekdays } = restaurant.openingHours;

console.log(`\nsat:`, sat);
console.log(`weekdays:`, weekdays);

// Functions
//--------------------------
restaurant.orderPizza('mushroom', 'onion', 'olives', 'beef');
restaurant.orderPizza('mushroom');

console.groupEnd();

// 3. short circuiting
// ---------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, '\n3. short circuiting');

restaurant.numGuests = 0; // NOTE: case = 0
// restaurant.numGuests = 5;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; // ternary operator
const guest2 = restaurant.numGuests || 10; // short circuiting

// Nullish: null and undefined ( NOT 0 or '')
const guest3 = restaurant.numGuests ?? 10; // Nullish coalescing

console.log('\nguest1: ', guest1);
console.log('guest2: ', guest2);
console.log('guest3: ', guest3); // Correct

console.groupEnd();

// 4. optional chain
// ---------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, '\n4. optional chain');

// Ex: opening hours
// -------------------
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

const optionalChain = restaurant.openingHours?.mon?.open;
console.log(`optionalChain:`, restaurant.openingHours?.mon?.open);

// Ex: Opening days
// -------------------
console.log(`\nOpening days`);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingDays = [];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    // eslint-disable-next-line no-unused-expressions
    (open !== 'closed' && console.log(`On ${day}, we open at ${open}`)) ||
        (open === 'closed' && console.log(`On ${day}, we closed`));
}

// Method
// -------------------
const order = restaurant.order?.(0, 1) ?? 'Method does not exist';
const orderRisotto = restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist';

console.log(`\norder:`, order);
console.log(`orderRisotto:`, orderRisotto);

// Array
// -------------------
// const users = [];

const users = [
    {
        name: 'Tom',
        email: 'veraklor@fajeri.uk'
    }
];

const userName = users[0]?.name ?? ' User array is empty';

console.log(`userName:`, userName);

// eslint-disable-next-line no-unused-expressions
(users.length > 0 && console.log(users[0].name)) || console.log('user array empty');

console.groupEnd();

// 5. optional chain combine nullish coalescing
// ---------------------------------------------------------
console.group(`\x1b[1m%s\x1b[0m`, '\n5. optional chain combine nullish coalescing');

console.log(restaurant.order?.(0, 1) ?? 'Method do not exist');

console.groupEnd();
