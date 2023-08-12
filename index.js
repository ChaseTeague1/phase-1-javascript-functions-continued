// code your solution here
function saturdayFun(someValue = "roller-skate"){
    return `This Saturday, I want to ${someValue}!`;
}
let mondayWork = function(someValue = 'go to the office'){
    return `This Monday, I will ${someValue}.`;
}
let wrapAdjective = function(value="*"){
    return function(value2 = "special"){
        return `You are ${value}${value2}${value}!`
    }
}