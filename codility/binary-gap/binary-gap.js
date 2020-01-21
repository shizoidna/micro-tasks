'use strict';

function solution(N) {
  const binary = numToBinaryString(N);
  const binaryArr = binary.split('1');
  binaryArr.shift();
  binaryArr.pop();

  return binaryArr
    .map((el) => el.length)
    .reduce((acc, el) => {
      return acc > el ? acc : el;
    }, 0);
}

function numToBinaryString(num) {
  return (num).toString(2);
}

module.exports = solution;
