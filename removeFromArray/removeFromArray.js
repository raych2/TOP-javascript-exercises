const removeFromArray = function(...args) {
  let arr = args[0];
  return arr.filter(val => !args.includes(val));
}

module.exports = removeFromArray
