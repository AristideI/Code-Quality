function flattenArray(arr) {
  return arr.flat(getNestingDepth(arr));
}

function getNestingDepth(arr) {
  if (!Array.isArray(arr)) return 0;
  let maxDepth = 0;
  for (let elt of arr) {
    let currentDepth = getNestingDepth(elt);
    if (currentDepth > maxDepth) {
      maxDepth = currentDepth;
    }
  }
  return 1 + maxDepth;
}
