function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Recursion

function isPrime2(n, i = 2) {
  if (n <= 1) return false;
  if (i * i > n) return true;
  if (n % i === 0) return false;
  return isPrime2(n, i + 1);
}

console.log(isPrime2(5));
