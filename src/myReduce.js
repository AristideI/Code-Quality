function reduce(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + reduce(arr, i + 1);
}
