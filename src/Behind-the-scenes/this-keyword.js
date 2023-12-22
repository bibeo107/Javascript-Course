// The this keyword practice

// 1. Global context

function showGlobalThis() {
    console.log(this);
}

showGlobalThis(); // In a browser environment, this will refer to the global object (e.g., window)

// 2. Object Method
const user = {
    prop: 'Hello World',
    showProp() {
        console.log(this.prop);
    }
};

user.showProp(); //  `this` refers to the object (user)

// 3. Constructor function

function Person(name) {
    this.name = name;
    this.sayHello = function () {
        console.log(`Hello, ${this.name}`);
    };
}

const staff = new Person('Minh');
staff.sayHello(); // This refers to the newly created object (staff)

const admin = new Person('Hung');
admin.sayHello(); // This refers to the newly created object (admin)

// 4. Arrow functions
const myObject = {
    prop: `Hello Lexical Scope`,
    showProp() {
        setTimeout(() => {
            console.log(this.prop); // `this` retains the value from the enclosing scope (lexical scope)
        }, 1000);
    }
};

myObject.showProp();

// 5. Event Handler
