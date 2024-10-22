// const age = prompt("How old are you?");

// parseInt(age);

// console.log(typeof age, typeof parseInt(age));
// console.log(age, parseInt(age));

const age = parseInt(prompt("How old are you?"));

// console.log(age);

console.log(isNaN(age));

if (isNaN(age)) {
  console.log("please write a number."); // condition == true
} else {
  console.log(age);
  console.log("Thank you for writing your age."); // condition == false
}
