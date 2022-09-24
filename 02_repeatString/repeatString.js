const repeatString = function (text, num) {
  if (num < 0) {
    return 'ERROR';
  }

  let result = '';

  for (i = 1; num >= i; i++) {
    result += text;
  }

  return result;
};

module.exports = repeatString;
