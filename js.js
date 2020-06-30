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
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');
AppData.expenses.a1 = a2;
AppData.expenses.a3 = a4;
alert(AppData.budjet / 30);