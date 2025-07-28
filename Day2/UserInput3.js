const readline = require("readline");

const Input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Input.question("Enter Here Your good name", (name) => {
  Input.question("Enter Your age", (age) => {
    console.log("name is ", name);
    age = parseInt(age);
    printFunction(name, age);
    Input.close();
  });
});

const printFunction = (name, age) => {
  console.log(`Your name is ${name} and age is ${age}`);
};
