function numberFormat(number) {
  const sign = number / Math.abs(number);
  number = String(Math.abs(number));
  let ret = "";
  let counter = 0;

  for (let i = number.length - 1; i >= 0; i--) {
    if (counter && counter % 3 === 0) {
      ret = "," + ret;
    }
    ret = number[i] + ret;
    counter++;
  }

  return sign === -1 ? "-" + ret : ret;
}

// Perfect Way

const formatter = (number) => number.toLocaleString();
