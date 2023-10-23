//exercise 1

function calculateAverage(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
}

//Exercise 2

function greet(name) {
  return name ? `Hello, ${name} !` : "Hello!";
}

//Exercise 3

function reverseString(str) {
  return [...str].reverse().join("");
}

//Exercise 4:

function findEvenNumbers(numbers) {
  return numbers.filter((elt) => elt % 2 === 0);
}

//Exercise 5:

function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

//Exercise 6:

const maxNumber = (a, b, c) => Math.max(a, b, c);

//Exercise 7:

const multiply = (x, y) => x * y;

//Exercise 8:

function discount(totalamount) {
  return totalamount > 100 ? totalamount * 0.1 : totalamount * 0.05;
}
//Exercise 9:

function calculateMatrixSum(matrix) {
  let sum = 0;
  for (const row of matrix) {
    for (const value of row) {
      sum += value;
    }
  }
  return sum;
}
