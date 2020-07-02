let money, time;

function start() {
    money = prompt("Ваш бюджет за месяц", '');
    time = prompt("Ваше время ", 'yyyy-mm-dd', '');
    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет за месяц", '');
    }
}
start();
let AppData = {
    budjet: money,
    timedata: time,
    expenses: {},
    Optionalexp: {},
    income: [],
    saving: true
};

function choseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            AppData.expenses[a] = b;

        } else {
            i = i - 1;
        }


    }
};
choseExpenses();

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
function checksaving() {
    if (AppData.saving == true) {
        let save = +prompt("Какова сумма накоплений");
        let percent = +prompt("Под какой процент?");
        AppData.monthincome = save / 100 / 12 * percent;
        alert("Доход в месяяц с вашего депозита: " + AppData.monthincome);
    }
};
checksaving();

function detectDayBudget() {
    AppData.moneyPerDay = (AppData.budjet / 30).toFixed();
    alert("бюджет на 1 день составляет " + AppData.moneyPerDay + "Руб")
}
detectDayBudget();

function detectlevel() {
    if (AppData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка ")
    } else if (AppData.moneyPerDay > 100 && AppData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (AppData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Неверный тип данных");
    }
}
detectlevel();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        AppData.Optionalexp[i] = questionOptExpenses;
        console.log(AppData.Optionalexp);
    }
}
chooseOptExpenses();