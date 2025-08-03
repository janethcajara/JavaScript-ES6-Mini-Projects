// Starter examples (function output expectations are provided in README)

// 1. Create makeMultiplier(factor) that returns multiplier function
const multiplierOutput = document.getElementById("multiplier-output");

const makeMultiplier = factor => number => number * factor;

// Example usage:
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

multiplierOutput.textContent = 
  `double(5) = ${double(5)}\n` +
  `triple(4) = ${triple(4)}`;

multiplierOutput.style.fontSize = "1.5rem";
multiplierOutput.style.color = "violet";
multiplierOutput.style.fontWeight = "bold";
multiplierOutput.style.fontFamily = "Times New Roman";

// 2. Create makeGreeter(greeting) that returns greeter function
const greeterOutput = document.getElementById("greeter-output");

const makeGreeter = greeting => name => `${greeting}, ${name}!`;

// Example usage:
const sayHi = makeGreeter("Hi");
const sayHello = makeGreeter("Hello");

greeterOutput.textContent = 
  `${sayHi("Mia")}\n` +
  `${sayHello("Liam")}`;

greeterOutput.style.fontSize = "1.5rem";
greeterOutput.style.color = "red";
greeterOutput.style.fontWeight = "bold";
greeterOutput.style.fontFamily = "Times New Roman";