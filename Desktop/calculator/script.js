function calculate(val1, val2, op){
    let num1 = parseFloat(val1);
    let num2 = parseFloat(val2);
    let total = 0.0;

    if(op == "X") {
        total = num1*num2; 
    }

    else if(op == "--") {
        total = num1 - num2;
    }

    else if(op == "+") {
        total = num1 + num2;
    }

    else if(op == "/") {
        total = num1 / num2;
    }
    
    console.log(total);
    return total;
}

let numbers = document.querySelectorAll('.num');
let resultBox = document.querySelector('.result');
let operators = document.querySelectorAll('.operator');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let val1 = 0;
let val2 = 0;
let op = "";

numbers.forEach(num => {
    num.addEventListener('click', function(e){
        let value = num.textContent;
        let curr = resultBox.textContent;
        resultBox.textContent = curr+value;
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', function(e){
        val1 = resultBox.textContent;
        op = operator.textContent;
        resultBox.textContent = "";
    });
});

equal.addEventListener('click', function(e){
    val2 = resultBox.textContent;
    let result = calculate(val1,val2,op);
    
    resultBox.textContent = result.toString();
});

clear.addEventListener('click', function(e){
    resultBox.textContent = "";
    val1=0;
    val2=0;
    op = "";
    
})



