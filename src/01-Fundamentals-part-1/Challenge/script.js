// Coding Challenge #1
console.log('Coding Challenge #1');
// Test Data 1:
/* const massMark = 78;
const heightMark = 1.69;
const massJon = 92;
const heightJon = 1.95;
 */
// Test Data 2:
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** heightJohn;

console.log('BMIMark ', BMIMark);
console.log('BMIJohn ', BMIJohn);

const markHeigherBMI = BMIMark > BMIJohn;
console.log('Mark has a higher BMI than John ', markHeigherBMI);

// Coding Challenge #2
console.log('Coding Challenge #2');
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}

//----------------------------------------------------------------
// Chanllege 3

const scroreDolphins = (96 + 108 + 89) / 3;
const scroreKoalas = (88 + 91 + 110) / 3;
console.log(scroreDolphins, scroreKoalas);

if (scroreDolphins === scroreKoalas && scroreKoalas >= 100 && scroreDolphins >= 100) {
    console.log('Both win the trophy');
} else if (scroreDolphins > scroreKoalas && scroreDolphins >= 100) {
    console.log('Dolphins win the trophy ');
} else if (scroreKoalas > scroreDolphins && scroreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else console.log('No team wins the trophy');
