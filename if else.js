var prompt = require('prompt-sync')();
//input från human
var number = prompt ("Skriv ett nummer:");
console.log ("du skrev:" + number )
// kolla om nummer är mer än 0
if (number > 0) {
    console.log("nummret är positivt");
}
// om nummret är 0
else if (number == 0) {
  console.log("Nummret är 0");
}
// om nummer är mindre än 0
else {
     console.log("Nummret är mindre än 0");
}