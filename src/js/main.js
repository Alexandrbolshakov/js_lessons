"use strict";

let butt = document.getElementById("start"),
    budget = document.getElementsByClassName("budget-value")[0],
    daybudget = document.getElementsByClassName("daybudget-value")[0],
    level = document.getElementsByClassName("level-value")[0],
    expenses = document.getElementsByClassName("expenses-value")[0],
    optionalexpenses = document.getElementsByClassName("optionalexpenses-value")[0],
    income = document.getElementsByClassName("income-value")[0],
    monthsavings = document.getElementsByClassName("monthsavings-value")[0],
    yearsavings = document.getElementsByClassName("yearsavings-value")[0],
    inputExpenc = document.getElementsByClassName("expenses-item"),
    submit = document.getElementsByTagName("button")[0],
    optionalexpensesBtn = document.getElementsByTagName("button")[1],
    countBudgetBtn = document.querySelector(".count-budget-btn"),
    optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    incomeItem = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    sum = document.querySelector(".choose-sum"),
    percent = document.querySelector(".choose-percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value"),
    money,
    time;

submit.disabled = true;
optionalexpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

butt.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", ""); 
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", ""); 
    }
    appData.budget = money;
    appData.timeDate = time;

    budget.textContent = money.toFixed();

    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() +1;
    day.value = new Date(Date.parse(time)).getDate();

    submit.disabled = false;
    optionalexpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

submit.addEventListener('click', function(){
    let sum = 0;

    for(let i = 0; i<inputExpenc.length; i++){
        let a = inputExpenc[i].value;
        let b = inputExpenc[++i].value;
        if((typeof(a))==='string' && typeof(a) != null &&typeof(b) != null && a!='' && b!='' && a.length<50 ){
            console.log('done');
            appData.expenses[a] = b;
            sum+= +b;
        }else{
            i--;
        }    
    }
    expenses.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function(){
    for(let i = 0; i<optionalexpensesItem.length; i++){
        let askOptionalExp = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = askOptionalExp;
        optionalexpenses.textContent += appData.optionalExpenses[i]+ ', ';
    }
});

countBudgetBtn.addEventListener('click', function(){
    if(money != undefined){
        appData.moneyPerDay = ((appData.budget - +expenses.textContent)/30).toFixed();
        daybudget.textContent = appData.moneyPerDay;
    
        if(appData.moneyPerDay < 100){
            level.textContent = "Минимальный урвень дохода";
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000){
            level.textContent("Средний урвень дохода");
        }else if(appData.moneyPerDay > 2000){
            level.textContent = "Высокий урвень дохода";
        }else{
            level.textContent = "Произошла ошибка";
        }
    }else{
        daybudget.textContent = "Произошла ошибка";
    }  
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
    appData.income = items.split(', ');

    income.textContent = appData.income;
});

savings.addEventListener('click', function(){
    if(savings == true){
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

sum.addEventListener('input', function(){
    if(appData.savings == true){
        let summ = +sum.value;
        let percentValue = +percent.value;
        appData.monthIncome = summ/100/12*percentValue;
        appData.yearIncome = summ/100*percentValue;

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function(){
    if(appData.savings == true){
        let summ = +sum.value;
        let percentValue = +percent.value;
        appData.monthIncome = summ/100/12*percentValue;
        appData.yearIncome = summ/100*percentValue;

        monthsavings.textContent = appData.monthIncome.toFixed(1);
        yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget : money,
    timeDate : time,
    income: [],
    expenses : {},
    optionalExpenses : {},
    savings : false,

};


