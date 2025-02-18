const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number ", (n) => {
  n = parseInt(n);
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  console.log(sum);
  rl.close();
  //do not forget to close this input connection
});
