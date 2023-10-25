function fibonaci(n) {
  if (n <= 1) return n;
  return fibonaci(n - 1) + fibonaci(n - 2);
}

function fibbonaci(n) {
  const fibArr = [0, 1];
  while (fibArr.length < n) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 1]);
  }
  return fibArr;
}
