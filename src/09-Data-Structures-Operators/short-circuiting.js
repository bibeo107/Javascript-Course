// short-circuiting
// ---------------------------------------------------------
// Providing default values
const user = {
    name: null,
    age: 20,
    role: 'admin',
    active: true
};

// using || to provide a default value
const username = user.username || 'Anonymous';
const age = user.age || 18;

console.log(`username:`, username);
console.log(`age:`, age);

// ---------------------------------------------------------
// Checking conditions
// Using && to check conditions
const isAdmin = user.role === 'admin' && user.active;
console.log(`isAdmin:`, isAdmin);

// ---------------------------------------------------------
// Executing functions or statements

const apiResponse = { movieName: 'Avengers', movieRating: '' };
const movieName = apiResponse.movieName || 'Movie Not Found';
const movieRating = apiResponse.movieRating || 'Movie Rating Not Found';
console.log(`\nmovieName:`, movieName);
console.log(`\nmovieRating:`, movieRating);

// ---------------------------------------------------------
// Using || to execute a function if the first operand is falsy
const hasPremiumSubscription = true;
const isTrialExpired = false;
const accessPremiumContent = hasPremiumSubscription || isTrialExpired;
console.log(`\naccessPremiumContent: `, accessPremiumContent);

//---

const userConfig = null;
function getDefaultConfig() {
    return {
        headless: true,
        browser: 'chrome',
        timeout: 5000,
        screenshots: true,
        logLevel: 'info'
    };
}
const config = userConfig || getDefaultConfig();
console.log(`\nConfig:`, config);

// ---------------------------------------------------------
// Using && to execute a statement if the first operand is truthy
const isUser = true;
const hasAdminPermission = false;
const accessAdminPage = isUser && hasAdminPermission;
console.log(`\naccessAdminPage: `, accessAdminPage);

// Advanced nullish coalescing techniques
// Handling Default Values Precisely
const queryParams = '';
// const params = queryParams || 'No query params';
const params = queryParams ?? 'No query params'; // ? nullish coalescing
console.log(`\nparams:`, params);

// ---------------------------------------------------------
// Combining with Optional Chaining for Safer Object Property Access
const userData = {
    name: ' John',
    address: null
};
const city = userData.address?.city ?? 'Unknow';
console.log(`city:`, city);

// Handling complex data structures
const userInfo = {
    id: 1,
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Santa',
        country: 'Estonia',
        zipCode: 0
    },
    contacts: {
        email: 'safpur@rulhuic.vg',
        phone: {
            mobile: '090-34567',
            home: '090-34090'
        }
    }
};

// Using optional chaining to access nested properties
const street = userInfo?.address?.street;
const mobilePhone = userInfo?.contacts?.phone?.mobile;
console.log(`\nstreet: ${street}`);
console.log(`\nmobilePhone: ${mobilePhone}`);

// getIconPath example
// ---------------------------------------------------------
// Ternary operator
function getIconPath1(icon) {
    const path = icon.path ? icon.path : 'uploads/default.png';
    return `https://asset.foo.com/${path}`;
}

// short circuiting
function getIconPath2(icon) {
    const path = icon.path || 'uploads/default.png';
    return `https://asset.foo.com/${path}`;
}

// Default parameter values (ES6)
function getIconPath(icon = 'uploads/default.png') {
    const { path } = icon;
    return `https://asset.foo.com/${path}`;
}
