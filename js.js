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
    saving: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        AppData.moneyPerDay = (AppData.budjet / 30).toFixed();
        alert("бюджет на 1 день составляет " + AppData.moneyPerDay + "Руб")
    },
    detectlevel: function () {
        if (AppData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка ")
        } else if (AppData.moneyPerDay > 100 && AppData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (AppData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Неверный тип данных");
        }
    },
    checksaving: function () {
        if (AppData.saving == true) {
            let save = +prompt("Какова сумма накоплений");
            let percent = +prompt("Под какой процент?");
            AppData.monthincome = save / 100 / 12 * percent;
            alert("Доход в месяяц с вашего депозита: " + AppData.monthincome);
        }
    },
    chooseOptExpenses: function () {
        function chooseOptExpenses() {
            for (let i = 1; i <= 3; i++) {
                let questionOptExpenses = prompt("Статья необязательных расходов?");
                AppData.Optionalexp[i] = questionOptExpenses;
                console.log(AppData.Optionalexp);
            }
        }

    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        if (typeof (items) != "string" || items == "" || typeof (items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            AppData.income = items.split(", ");
            AppData.income.push(prompt("Может что-то еще?"));
            AppData.income.sort();
        }
        items.forEach(function (itemsmassive, i) {
            alert("Способы заработка :" + (i + 1) + "-" + itemsmassive);
        });
    }
};
for (let key in AppData) {
    alert("Наша программа включает в себя данные: " + key + "-" + AppData[key]);
}