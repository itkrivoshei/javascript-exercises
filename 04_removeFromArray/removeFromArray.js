const removeFromArray = function (...args) {
  const res = args[0];

  args.map((el) => {
    if (Array.isArray(el) || !el || res.indexOf(el) === -1) return;

    res.splice(res.indexOf(el), 1);
  });

  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
