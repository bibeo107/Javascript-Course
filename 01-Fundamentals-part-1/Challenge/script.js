// Coding Challenge #1
/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. StoreMark'sandJohn'smassandheightinvariables
2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
versions)
3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
whether Mark has a higher BMI than John. */

const massMark = 78;
const heightMark = 1.69;
const massJon = 92;
const heightJon = 1.95;

const BMIMark = massMark / (heightMark **2);
const BMIJohn = massJon / (heightJon ** heightJon);

console.log("BMIMark " + BMIMark);
console.log("BMIJohn " + BMIJohn);

const markHeigherBMI = BMIMark > BMIJohn;
console.log ("Mark has a higher BMI than John " + markHeigherBMI);