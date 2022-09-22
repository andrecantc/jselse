var prompt = require('prompt-sync')();
const num1 = parseFloat(prompt("skriv ditt första nummer: "));
const num2 = parseFloat(prompt("skirv ditt andra nummer: "));
const num3 = parseFloat(prompt("skriv ditt tredje nummer: "));

function crackcocaine(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = [num1, num2, num3];
  crackcocaine(numbers);
  console.log(numbers);