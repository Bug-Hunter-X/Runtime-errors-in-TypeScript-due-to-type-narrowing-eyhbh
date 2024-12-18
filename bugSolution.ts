function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result: number;

try {
  result = add(5, 3);
  console.log("Add Result: ", result);
  result = subtract(10, 5);
  console.log("Subtract Result: ", result);
  result = multiply(4, 6);
  console.log("Multiply Result: ", result);
  result = divide(10, 2);
  console.log("Divide Result: ", result);
  result = divide(10, 0);
  console.log("Divide Result: ", result);
} catch (e) {
  console.error("Error: ", e.message);
}
