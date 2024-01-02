const rest1 = {
    name: 'Capri',
    numGuests: 0
};

const rest2 = {
    name: 'La Pizza',
    owner: 'Giovanni Rossi'
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

function config(options = {}) {
    const configOptions = options;
    configOptions.duration ??= 100;
    configOptions.speed ??= 20;
    return configOptions;
}

console.log(config({ duration: 150 }));
console.log(config());

// AND assignment operator

rest1.owner &&= 'Update Owner';
rest2.owner &&= 'Update Owner';

console.log(rest1);
console.log(rest2);

//
