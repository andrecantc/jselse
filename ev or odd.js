var prompt = require('prompt-sync')();
const number = prompt("Skriv ett nummer: ");
if(number % 2 == 0) {
    console.log("Nummret är jämnt.");
}
else {
    console.log("Nummret är udda.");
}