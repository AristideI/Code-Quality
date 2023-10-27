function reduce(arr, callBack, acc, index = 0) {
  if (index === arr.length) return acc;
  if (!acc && index === 0) {
    return reduce(arr, callBack, arr[index], index + 1);
  }
  let value = callBack(acc, arr[index], index, arr);
  return reduce(arr, callBack, value, index + 1);
}
