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
    result = Number(Math.round(operators[selectedOperator](a, b) + 'e7') + 'e-7');
    
    return (isNaN(result)) ? 'Stop that!' : result;
}


// number butttons
const numberBtns = document.getElementsByClassName('number');

// operator buttons
const operatorBtns = document.getElementsByClassName('operator');

// calculator display
const display = document.getElementsByClassName('calculator-screen');


// display the right numbers when clicked
let firstInput = null; 
const getFirstInput = function(){
    let firstNum = this.value;
    if(secondInput === null && operator === null && display[0].value.length < 10){
        display[0].value = (display[0].value + firstNum) * 1;
        firstInput = parseFloat(display[0].value, 10);
        console.log(firstInput);
    }
};

let secondInput = null;
let result = null;
const getSecInput = function(){
    let secondNum = this.value;
    if(operator !== null && result === null && secondInput === null){
        display[0].value = 0;
        // decimal = null;
    }
    if(operator !== null && result === null && display[0].value.length < 10){
        display[0].value = (display[0].value + secondNum) * 1;
        secondInput = parseFloat(display[0].value, 10);
        console.log(secondInput);
    } 
};

const numberBtnArray = Array.from(numberBtns);
const numberSelected = numberBtnArray.forEach(element =>{                           element.addEventListener('click', getFirstInput);
    element.addEventListener('click', getSecInput);
});




let operator = null;
let operatorArray = [];
const operatorFunc = function(){
    operator = this.id;
    operatorArray.push(operator);
    decimal = null;
    let operatorInput = operatorArray[operatorArray.length - 2];
    console.log(operatorInput);
    if(firstInput !== null && secondInput !== null){
        display[0].value = operate(operatorInput, firstInput, secondInput);
        firstInput = result;
        result = null;
        secondInput = null;
    }
};


const operatorBtnArray = Array.from(operatorBtns);
const getOperator = operatorBtnArray.forEach(element => element.addEventListener('click', operatorFunc));


// equals result
const equalsBtn = document.getElementsByClassName('equal-sign');

const getResult = equalsBtn[0].addEventListener('click', function(){
    display[0].value = operate(operator, firstInput, secondInput);
});


// clear display and variables
const clearBtn = document.getElementsByClassName('all-clear');

const clear = clearBtn[0].addEventListener('click', function(){
    display[0].value = 0;
    firstInput = null;
    secondInput = null;
    result = null;
    operator = null;
    decimal = null;
});


// delete last number input
const deleteBtn = document.getElementsByClassName('delete');

const deleteLastInput = deleteBtn[0].addEventListener('click', function(){
    if(display[0].value == firstInput){
        display[0].value = display[0].value.substring(0, display[0].value.length - 1);
        firstInput = Math.floor(firstInput / 1e1);
    }else if(display[0].value == secondInput){
        display[0].value = display[0].value.substring(0, display[0].value.length - 1);
        secondInput = Math.floor(secondInput / 1e1);
    }
});


// insert decimal point to either input
const decimalBtn = document.getElementsByClassName('decimal');

let decimal = null;
const insertDecimal = decimalBtn[0].addEventListener('click', function(){
    decimal = decimal + 1;
    if(result === null && secondInput === null && decimal < 2 && operator === null){
        display[0].value = display[0].value + ('.');
    } else if(result === null && secondInput === null && decimal < 2){
        display[0].value = '0.';
        secondInput = '0.';
    } else if(operator !== null && result === null && decimal < 2){
        display[0].value = display[0].value + ('.');
    }
});
//  Issue using DEL btn.


// keyboard support
// const keyDepressed = document.addEventListener('keydown', logKey);

// function logKey(e){
//     let key = [e.code];
//     // console.log(typeof(key));
//     // console.log(key);
//     console.log(this);
//     console.log(key);
// }








// TO DO:

//      1. Fix insertDecimal
//      2. Result will go over 10 character limit if there's more than 1 digit before the decimal
//      3. Add keyboard support