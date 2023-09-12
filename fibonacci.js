// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(number, fib = [0, 1]) {
  if (fib.length >= number) return fib;

  for (let i = 2; i < number; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibs(8));

// Now write another function fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

function fibsRec(number, fib = [0, 1]) {
  if (fib.length >= number) return fib;
  return fibsRec(number, [...fib, fib[fib.length - 2] + fib[fib.length - 1]]);
}

console.log(fibsRec(8));
