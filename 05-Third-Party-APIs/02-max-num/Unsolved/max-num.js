// Write code to return the largest number in the given array

var maxNum = function (arr) {
  let max = arr[0];

  // Loops through every array and compares it to the largest number thats been passed so far

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max;
};