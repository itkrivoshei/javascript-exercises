const sumAll = function (fromNum, toNum) {
  if (
    fromNum < 0 ||
    toNum < 0 ||
    typeof fromNum !== 'number' ||
    typeof toNum !== 'number'
  )
    return 'ERROR';

  if (fromNum > toNum) {
    let i = fromNum;
    fromNum = toNum;
    toNum = i;
  }

  let sum = 0;

  for (let i = fromNum; i <= toNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
