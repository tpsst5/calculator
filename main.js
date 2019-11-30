const operators = {
    add : add = (a, b) =>{
        return a + b;
    },
    subtract : subtract = (a, b) =>{
        return a - b;
    },
    multiply : multiply = (a, b) =>{
        return a * b;
    },
    divide : divide = (a, b) =>{
        return a/b;
    }
};

const operate = (operator, a, b) =>{
    let operatorKeys = Object.keys(operators);
    let selectedOperator;
    for(let i = 0; i < operatorKeys.length; i++){
        if(operatorKeys[i] === operator){
            selectedOperator = operatorKeys[i];
        }
    }
    result = operators[selectedOperator](a, b);
    return result;
}







// getting both numbers
const numberBtns = document.getElementsByClassName('number');

const display = document.getElementsByClassName('calculator-screen');

const displayNums = function(){
    let x = this.value;
    if(display[0].value.length < 10 && typeof(operator) === 'undefined' && typeof(result) === 'undefined'){
        display[0].value = (display[0].value + x) * 1;
        a = parseInt(display[0].value);
    } else{
        display[0].value = 0;
        if(display[0].value.length < 10){
            display[0].value = (display[0].value + x) * 1;
            b = parseInt(display[0].value);
            if(typeof(result) !== 'undefined'){
                a = result;
            }
        }
    }
};

const getNums = Array.from(numberBtns).forEach(function(element){
    element.addEventListener('click', displayNums);
});



// getting the operator
const operatorBtns = document.getElementsByClassName('operator');

const operatorFunc = function(){
    operator = this.id;
};

const getOperator = Array.from(operatorBtns).forEach(function(element){
    element.addEventListener('click', operatorFunc);
});


// equals result
const equalsBtn = document.getElementsByClassName('equal-sign');

const getResult = equalsBtn[0].addEventListener('click', function(){
    display[0].value = operate(operator, a, b);
});