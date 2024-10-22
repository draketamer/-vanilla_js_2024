// console.log("Hlleo my name is Nico");

// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson);
//   console.log("I'm " + age + " years old");
// }

// sayHello("nico", 10);
// sayHello("lynn", 23);
// sayHello("dal", 21);

// function plus(a, b) {
//   console.log(a + b);
// }
// function divide(a, b) {
//   console.log(a / b);
// }

// plus(8, 60);
// divide(98, 20);

const player = {
  name: "nico",
  sayHello: function (otherPersonsname) {
    console.log("Hello " + otherPersonsname + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("dal");

const days = [];
days.push("aaa");
console.log(days[0]);
