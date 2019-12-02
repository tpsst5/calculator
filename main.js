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
    result = Number(Math.round(operators[selectedOperator](a, b) + 'e9') + 'e-9');
    return result;
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
    // console.log(firstNum); 
    if(secondInput === null && operator === null && display[0].value.length < 10){
        display[0].value = (display[0].value + firstNum) * 1;
        firstInput = parseInt(display[0].value);
        console.log(firstInput);
    }
};

let secondInput = null;
let result = null;
const getSecInput = function(){
    let secondNum = this.value;
    // console.log(secondNum);
    if(operator !== null && result === null && secondInput === null){
        display[0].value = 0;
    }
    if(operator !== null && result === null && display[0].value.length < 10){
        display[0].value = (display[0].value + secondNum) * 1;
        secondInput = parseInt(display[0].value);
        console.log(secondInput);
    }
};

const numberBtnArray = Array.from(numberBtns);
const numberSelected = numberBtnArray.forEach(element =>{                           element.addEventListener('click', getFirstInput);
    element.addEventListener('click', getSecInput);
});




let operator = null;
const operatorFunc = function(){
    console.log(this.id);
    operator = this.id;
    // if(firstInput !== null && secondInput !== null && result === null){
    //     display[0].value = operate(operator, firstInput, secondInput);
    //     firstInput = display[0].value;
    // }
};

const operatorBtnArray = Array.from(operatorBtns);
const getOperator = operatorBtnArray.forEach(element => element.addEventListener('click', operatorFunc));







// equals result
const equalsBtn = document.getElementsByClassName('equal-sign');

const getResult = equalsBtn[0].addEventListener('click', function(){
    display[0].value = operate(operator, a, b);
});







// clear display and variables
const clearBtn = document.getElementsByClassName('all-clear');

const clear = clearBtn[0].addEventListener('click', function(){
    display[0].value = 0;
    a = undefined;
    b = undefined;
    result = undefined;
});



// BUGS LIST //

// 3. When the clear function runs the first number selected will be assigned to 'b' instead of 'a'

// 4. Shit.
