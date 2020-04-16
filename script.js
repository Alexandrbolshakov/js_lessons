'use script';

let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", ""); 
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", ""); 
    }
}

start();


let appData = {
    budget : money,
    timeDate : time,
    income: [],
    expenses : {},
    optionalExpenses : {},
    savings : false,
    chooseExpences: function(){
        for(let i = 0; i<2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце","");
            let b = +prompt("Во сколько обойдется?","");
            if((typeof(a))==='string' && typeof(a) != null &&typeof(b) != null && a!='' && b!='' && a.length<50 ){
                console.log('done');
                appData.expenses[a] = b;
            }else{
                i--;
            }
            
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed(1);
        alert("Ежедневный бюджет: " + appData.moneyPerDay + " руб.");
        
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log("Минимальный урвень дохода");
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000){
            console.log("Средний урвень дохода");
        }else if(appData.moneyPerDay > 2000){
            console.log("Высокий урвень дохода");
        }else{
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if(applicationCache.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for(let i = 0; i<3; i++){
            let askOptionalExp = +prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = askOptionalExp;
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесёт дополнительный доход? (Введите через запятую)", "");
        while(items==null || items == "" || typeof(items)!='string'){
            items = prompt("Что принесёт дополнительный доход? (Введите через запятую)", "");           
        }

        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?", ""));
        appData.income.sort();

        alert("Способы доп. заработка: ");
        appData.income.forEach(function(item, i){
            alert((i+1)+ ": "+ item);
        });

        alert("Наша программа включает в себя данные: ");
        for(let key in appData.income){
           alert(appData.income[key]);
        }
    }
};
appData.chooseIncome();
