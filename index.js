const arr = [1, 2, 3, 4, 5, 6, 7];

// O(1)

function constantFunc(arr) {
  console.log(1000 * 100000);
}

// O(n)

function linearFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(1000 * 100000); // constante -> é ignorado
  }
}

// O(n^2)

function square(n) {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      console.log(i, j);
    }
  }
}

// O(n^3)

function square(n) {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      for (let k = 0; k < n.length; k++) {
        console.log(i, j, k);
      }
    }
  }
}

// O(log n)

// Recursive
function logFunc(n) {
  if (n === 0) return "Done";
  n = Math.floor(n / 2);
  return logFunc(n);
}

// Iterative
function logn(n) {
  while (n > 1) {
    n = Math.floor(n / 2);
  }
}

// O(n log n)

function nLogNFunc(n) {
  const y = n; // mantém o valor original de n

  // O(log n)
  while (n > 1) {
    n = Math.floor(n / 2);

    // O(n)
    for (let i = 1; i <= y; i++) {
      console.log(i);
    }
  }
}

// O (2^n)

function fib(n) {
  // na verdade a complexidade é O(2^(n-1)), mas ignoramos constante portanto O(2^n)
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// O(n!)

function fat(n) {
  if (n === 0) {
    console.log("*");
    return;
  }

  for (let i = 0; i < n; i++) {
    fat(n - 1);
  }
}
