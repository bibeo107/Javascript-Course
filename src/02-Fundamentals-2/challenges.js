console.log('\x1b[1m%s\x1b[0m', `Challenge 1`);
const calcAverage = (first, second, third) => (first + second + third) / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log(`No team wins!`);
    }
};

// DATA1
let scroreDolphins = calcAverage(44, 23, 71);
let scroreKoalas = calcAverage(65, 54, 49);
checkWinner(scroreDolphins, scroreKoalas);

// DATA2
scroreDolphins = calcAverage(85, 54, 41);
scroreKoalas = calcAverage(23, 34, 27);
checkWinner(scroreDolphins, scroreKoalas);

// Challenge
console.group(`\x1b[1m%s\x1b[0m`, `\nChalenges 2`);
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge() {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    },
    getSummary() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${
            this.hasDriversLicense ? 'a' : 'no'
        } driver's license.`;
    }
};

console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}; `
);

// Object method
console.log(jonas.calcAge());
console.log(jonas.age);

// Challenge
console.log(jonas.getSummary());

//------------------------------------------------------
// Chanllenge 3:
console.log('\x1b[1m%s\x1b[0m', `\nChallenge 3`);

function PersonBMI(fullName, mass, height) {
    this.fullName = fullName;
    this.mass = mass;
    this.height = height;
    this.calcBMI = () => {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    };
}
const mark = new PersonBMI('Mark Miller', 78, 1.69);
const john = new PersonBMI('John Smith', 92, 1.95);
mark.calcBMI();
john.calcBMI();
const BMIMark = Number(mark.bmi).toFixed(1);
const BMIJohn = Number(john.bmi).toFixed(1);
const result =
    BMIMark > BMIJohn
        ? `${mark.fullName}'s BMI (${BMIMark})is higher than ${john.fullName}'s (${BMIJohn})`
        : `${john.fullName}'s BMI (${BMIJohn} is higher than ${mark.fullName}'s (${BMIMark})`;
console.log(result);
console.groupEnd();

// Challenge 4:
console.log('\x1b[1m%s\x1b[0m', `\nChallenge 4`);

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i += 1) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(totals);
