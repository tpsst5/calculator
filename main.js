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
    // console.log(typeof(firstNum));
    // // console.log(firstNum); 
    if(secondInput === null && operator === null && display[0].value.length < 10){
        display[0].value = (display[0].value + firstNum) * 1;
        firstInput = parseInt(display[0].value, 10);
        // console.log(firstInput);
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
        secondInput = parseInt(display[0].value, 10);
        // console.log(secondInput);
    }
};

const numberBtnArray = Array.from(numberBtns);
const numberSelected = numberBtnArray.forEach(element =>{                           element.addEventListener('click', getFirstInput);
    element.addEventListener('click', getSecInput);
});




let operator = null;
const operatorFunc = function(){
    // console.log(this.id);
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

// const insertDecimal = decimalBtn[0].addEventListener('click', function(){
//     if(display[0].value == firstInput){
//         display[0].value = display[0].value + ('.');
//         firstInput = parseInt(display[0].value);
//         console.log(firstInput);
//     }else if(display[0].value == secondInput){
//         display[0].value = display[0].value + ('.');
//         secondInput = Number((secondInput / 100).toFixed(0));
//     }
// });



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
//      2. Figure out how to string together nums and multiple operators
//      2. Add something for dividing by zero and NaN results(nums longer than 10 digits)  
//      3. Add keyboard support
//      4. If you have a result make sure you can use a new operator on that result