module.exports = function check(str, bracketsConfig) {
  let openingBrackets = [];
  let closingBrackets = [];
  for (let arr of bracketsConfig) {
    openingBrackets.push(arr[0]);
    closingBrackets.push(arr[1]);
  }
  let opening = [];
  for (let bracket of str) {
    let brackets = bracketsConfig.find((arr) => arr[0] === bracket || arr[1] === bracket);
    if (closingBrackets.includes(bracket) && brackets[0] === opening[opening.length - 1]) {
      opening.pop();
    } else if (openingBrackets.includes(bracket)) {
      opening.push(bracket);
    } else {
      return false;
    }
  }
  return opening.length === 0;
};
