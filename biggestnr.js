var prompt = require('prompt-sync')();
const num1 = parseFloat(prompt("skriv ditt första nummer: "));
const num2 = parseFloat(prompt("skirv ditt andra nummer: "));
const num3 = parseFloat(prompt("skriv ditt tredje nummer: "));

const largest = Math.max(num1, num2, num3);

console.log("Det största nummret är" + largest);