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
    return operators[selectedOperator](a, b);
}