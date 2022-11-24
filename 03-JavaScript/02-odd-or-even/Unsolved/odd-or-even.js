// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

const oddOrEven = (num) => {

  // Checks if the number has any remainders when divided by 2. If it is even then there should never be a remainder.
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};
