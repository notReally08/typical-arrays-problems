
exports.min = function min (array) {
  if(!array || !array.length) return 0;
  
  let minNum = array[0];
  array.forEach(num => {
    if(num < minNum) {
      minNum = num
    }
  })
  return minNum;
}

exports.max = function max (array) {
  if(!array || !array.length) return 0;
  
  let maxNum = array[0];
  array.forEach(num => {
    if(num > maxNum) {
      maxNum = num
    }
  })
  return maxNum;
}

exports.avg = function avg (array) {
  if(!array || !array.length) return 0;
  
  let res = 0;
  let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue)
  res = sum / array.length
  return res;
}
