function main() {
  const arr = [1, 2, 3, 4, 5, 6];
  function SumofArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
    //reduce() is used for iterate through the start to end all the numbers
  }

  let SumResult = SumofArray(arr);
  console.log(SumResult);
}

main();
