// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  // Reduces a single array into one single number.
  // Reducer requires two values, an accumulator and a current value.
  // We simply add every value to the sum and we set our initial value to 0.
  return arr.reduce((sum, currentValue) => sum + currentValue, 0);
};
