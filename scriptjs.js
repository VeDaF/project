// - To String 
// 1)
console.log(typeof (String(4)));

//2)
console.log('ww' + 5)

console.log('https://vk.com/catalog/' + 5)
// - To Number

console.log(typeof (Number('5')));
//2

console.log(typeof (5 + +'5'));

//3 
console.log(typeof (parseInt('1', 10)));

let ans = +prompt("Hello", '');

// 0, ' ', null, undefined, NaN 
let switcher = null;

if (switcher) {
    console.log("Working")
}

switcher = 1;

if (switcher) {
    console.log("Working")
}


console.log(typeof (Boolean('5')));
//3 

console.log(typeof (!!'5'));

let x = 5;
console.log(+"infinity");