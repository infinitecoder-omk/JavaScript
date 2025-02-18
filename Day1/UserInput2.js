const readline = require("readline");

const Input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Input.question("Enter Your name", (n) => {
  console.log("your name is ", n);
  Input.close();
  //do not forget to close this input connection
});

// const readline = require("readline");
// const omk = readline.createInterface({
//     input: process.stdin,
//     output : process.stdout
// });

// omk.question("Enter Your age" ,(age)=>{
// console.log("Your age is",age);
// omk.close();
// }

// )
