'use script';

let money = prompt("Ваш бюджет на месяц?", ""); 
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget : money,
    timeDate : time,
    expenses : {},
    optionalExpenses : {},
    savings : false
};

let oneOne = prompt("Введите обязательную статью расходов в этом месяце","");
let oneTwo = prompt("Во сколько обойдется?","");
let twoOne = prompt("Введите обязательную статью расходов в этом месяце","");
let twoTwo = prompt("Во сколько обойдется?","");
appData.expenses[oneOne] = oneTwo;
appData.expenses[twoTwo] = twoTwo;

let result = appData.budget/30;
alert(result);