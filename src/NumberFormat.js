var numberFormat = function (number) {
  let counter = 0;
  const ret = [];
  number = String(number);
  for (let i = number.length - 1; i >= 0; i++) {
    if (counter === 3) {
      ret.unshift(",");
      counter = 0;
    }
    ret.unshift(number[i]);
    counter++;
  }

  return ret.join("");
};

numberFormat(123456);
