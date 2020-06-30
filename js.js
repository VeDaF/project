let money = prompt("Ваш бюджет за месяц", ''),

    time = prompt("Ваше время ", 'yyyy-mm-dd', '');

let AppData = {
    budjet: money,
    timedata: time,
    expenses: {},
    Optionalexp: {},
    income: [],
    saving: false
};
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        AppData.expenses[a] = b;

    } else {

    }


};
AppData.moneyPerDay = AppData.budjet / 30;

alert("Ежедневный бюджет: " + AppData.moneyPerDay);
if (AppData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка ")
} else if (AppData.moneyPerDay > 100 && AppData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (AppData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Неверный тип данных");
}
let i = 0;
//while (i < 2) 
//{
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//      b = prompt("Во сколько обойдется?", '');
//if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//  console.log("done");
//AppData.expenses[a] = b;

//} else{
//  console.log("bad result")
//i--;
//}
//}
//for (let i = 0; i < 2; i++) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//      b = prompt("Во сколько обойдется?", '');
//if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//  console.log("done");
//AppData.expenses[a] = b;
//} else {
//console.result("bad result");
//i--;
//}
//}

//do {
//let i = 0;
//let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//  b = prompt("Во сколько обойдется?", '');
//if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
// console.log("done");
//  AppData.expenses[a] = b;
//} else {
//    console.log("bad result");
//      i--;
//    }      
//}
//while(i=0)
//i++;