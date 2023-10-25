function reduce(arr, callBack, acc, index = 0) {
  if (i === arr.length) return acc;
  if (!acc && index === 0) {
    return reduce(arr, callBack, arr[index], i + 1);
  }
  let value = callBack(acc, arr[i], i, arr);
  return reduce(arr, callBack, value, index + 1);
}

console.log(reduce([1, 2, 3], (a, b) => a + b));
