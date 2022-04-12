// level {2}

//Write a function in Javascript to print the sum of the first n fibonacci numbers.

const fibonacci = function (number) {
  const arr = [1, 1];
  for (let i = 2; i < number; i++) {
    const a = arr[i - 1] + arr[i - 2];
    arr.push(a);
  }
  console.log(arr.reduce((sum, i) => sum + i, 0));
}
fibonacci(6);