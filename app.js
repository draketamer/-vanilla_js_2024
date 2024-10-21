const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat];

// const nonsense = [1,2,"hello", false, null, true, undefined,"nico"]

// console.log(daysOfWeek,nonsense)

//Get Item from Array
console.log(daysOfWeek[5]);
console.log(daysOfWeek[-1]); //undefined
console.log(daysOfWeek[0,2]); // 3번째만 출력
console.log(daysOfWeek[1,3]); // 4번째만 출력

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek[6]);


