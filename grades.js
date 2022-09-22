var prompt = require('prompt-sync')();
//input från human
var number = prompt ("Skriv ett nummer:");
console.log ("du skrev:" + number)
if  (number == 90) {
  console.log("90%");
}

if (number == 80) {
    console.log("du fick betyg B");
}

if (number == 70) {
  console.log("du fick betyg C ");
}

if (number == 60 ) {
  console.log("du fick betyg D");
}

if (number == 40) {
  console.log("du fick betyg E");
}

if  (number == 39) {
  console.log("du fick betyg F");
}