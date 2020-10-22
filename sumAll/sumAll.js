const sumAll = function(min, max) {
  if ((min < 0) || (max < 0) || typeof min !== 'number' || typeof max !== 'number') {
    return 'ERROR';
  }
  let sum = 0;
  if (max < min) {
      let temp = max;
      max = min;
      min = temp;
  }
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll
