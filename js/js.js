let options = {
  width: 1024,
  height: 1024,
  name: "test",
};
console.log(options.name);
options.bool = false;
options.colors = {
  border: "black",
  bg: "red",
};
delete options.bool;
console.log(options);
for (let key in options) {
}
let arr = [1, 2, 3, 4, 5];
arr.forEach(function (item, i, mass) {
  console.log(i + ": " + item + " (массив: " + mass + ")");
});
let mass = [1, 3, 4, 6, 7];
for (let key in mass) {
  console.log(key);
}
//let ans = prompt("", ""),
// array = [];

//array = ans.split(",");
//console.log(array);
//let arrr = ["are", 'asd','sdd', 'ra'],
//i = arrr.join(', ');
//console.log(i);
let arrr = [1, 15, 4],
  i = arrr.sort(compareNum);
function compareNum(a, b) {
  return a - b;
}
console.log(arrr);
let soldier = {
  health: 400,
  armor: 100,
};
let john = {
  health: 100,
};
john.__proto__ = soldier;
console.log(john);
console.log(john.armor);
