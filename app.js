const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  // ||: or
  console.log("please write a real positive number."); // condition == true
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink."); // &&: and
} else if (age > 50 && age <= 80) {
  console.log("Can you drink ?");
} else if (age === 100) {
  console.log("WOW you are wise.");
} else if (age > 80) {
  console.log("You can do whatever you want.");
} else {
  console.log("You are too old. Be care for your condition."); // condition == false
}
