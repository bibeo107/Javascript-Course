// Coding Challenge #1
/* Chanllege description:
Mark and John are trying to compare their BMI, which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John. */

/*
// Test Data 1:
const massMark = 78;
const heightMark = 1.69;
const massJon = 92;
const heightJon = 1.95;
*/

// Test Data 2:
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** heightJohn);

console.log('BMIMark ', BMIMark);
console.log('BMIJohn ', BMIJohn);

const markHeigherBMI = BMIMark > BMIJohn;
console.log('Mark has a higher BMI than John ', markHeigherBMI);
