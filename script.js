//operation function
function add(a,b){
    return a+b;
};
function sub(a,b){
    return a-b;
};
function mul(a,b){
    return a*b;
};
function div(a,b){
    return a/b;
};

function operate(a,b,op){
    if (op === '+'){
        return add(a,b)
    }else if (op === '-'){
        return sub(a,b)
    }else if (op === '*'){
        return mul(a,b)
    }else if (op === '/'){
        return div(a,b)
    }
};

//variables
let currentNumber = document.querySelector('.current-number');
let previousNumber = document.querySelector('.previous-number');
let num = document.getElementsByClassName('number');
let op = document.getElementsByClassName('operand');
let equal = document.querySelector('.equal')
let clear = document.querySelector('.clear');
console.log(num, op);

//event listener on num and adds to display
for (let i = 0; i< num.length; i++){
    num[i].addEventListener('click', ()=>{
    currentNumber.innerText += num[i].innerText
})};

//event listener on operand
let firstNum;
let secondNum
let currentOp = '';
for (let i = 0; i< op.length; i++){
    op[i].addEventListener('click', ()=>{
        if (currentOp === ''){
        firstNum = parseInt(currentNumber.innerText);
        currentOp = op[i].innerText;
        previousNumber.innerText = currentNumber.innerText;
        currentNumber.innerText= '';
        return firstNum, currentOp;
        }
})
};

//evaluating op
equal.addEventListener('click', ()=>{
    secondNum = parseInt(currentNumber.innerText);
    previousText = secondNum;
    currentNumber.innerText = operate(firstNum, secondNum, currentOp);
    //reset operand, if not empty can't operate
    currentOp = '';
});

//clear btn
clear.addEventListener('click', ()=>{
    currentNumber.innerText = '';
    previousNumber.innerText = '';
    firstNum = 0;
    currentOp = "";
    secondNum = 0;
})