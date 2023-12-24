/* eslint-disable no-inner-declarations */
/* eslint-disable no-shadow */
/* eslint-disable vars-on-top */
/* eslint-disable no-undef */

// Scoping chain
var globalVar = "I'm global";

function outerFunction() {
    var outerVar = "I'm outer";
    var shadowVar = `I'm outer shadow`;
    function innerFunction() {
        var innerVar = "I'm inner";
        console.log(`\n ${globalVar} \n ${outerVar} \n ${shadowVar} \n ${innerVar}`);

        var shadowVar = `I'm inner shadow`;

        console.log(`\n ${globalVar} \n ${outerVar} \n ${shadowVar} \n ${innerVar}`);
    }

    innerFunction();
}

outerFunction();

// Block scope using let (ES6)
if (true) {
    const blockVar = "I'm block-scoped"; // Block-scoped variable
    console.log(`\n ${globalVar} \n ${blockVar}`);
}

try {
    console.log(innerVar);
} catch (error) {
    console.error(`\n ${error.message}`);
}

try {
    console.log(outerVar);
} catch (error) {
    console.error(`\n ${error.message}`);
}
