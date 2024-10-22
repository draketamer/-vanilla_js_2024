const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

// console.log(calculator.add(2, 4));
// console.log(calculator.minus(2, 4));
// console.log(calculator.times(2, 4));
// console.log(calculator.divide(2, 4));
// console.log(calculator.power(2, 4));

const plusResult = calculator.add(2, 4);
const minusResult = calculator.minus(plusResult, 3);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, plusResult);

console.log(powerResult);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
