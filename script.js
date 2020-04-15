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
    expenses : {},
    optionalExpenses : {},
    savings : false
};

function chooseExpences(){
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
    
}

chooseExpences();
// let i = 0;
// while(i<2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце","");
//     let b = +prompt("Во сколько обойдется?","");
//     if((typeof(a))==='string' && typeof(a) != null &&typeof(b) != null && a!='' && b!='' && a.length<50 ){
//         console.log('done');
//         appData.expenses[a] = b;
//         i++;
//     }
// }

// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце","");
//     let b = +prompt("Во сколько обойдется?","");
//     if((typeof(a))==='string' && typeof(a) != null &&typeof(b) != null && a!='' && b!='' && a.length<50 ){
//         console.log('done');
//         appData.expenses[a] = b;
//         i++;
//     }
// }
// while(i<2);




if(appData.moneyPerDay < 100){
    console.log("Минимальный урвень дохода");
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay <2000){
    console.log("Средний урвень дохода");
}else if(appData.moneyPerDay > 2000){
    console.log("Высокий урвень дохода");
}else{
    console.log("Произошла ошибка");
}

function checkSavings(){
    if(applicationCache.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        detectLevel(save, percent);
    }
}

checkSavings();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed(1);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    
}

detectDayBudget();

function detectLevel(save, percent){
    appData.monthIncome = save/100/12*percent;
        alert("Доход с вашего депозита: " + appData.monthIncome);
}

function chooseOptExpenses(){
    for(let i = 0; i<3; i++){
        let askOptionalExp = +prompt("Статья необязательных расходов?", "");
        appData.optionalExpenses[i] = askOptionalExp;
    }
}