//operation function
function add(a,b){
    return a+b;
};
function sub(a,b){
    return a-b
};
function mul(a,b){
    return a*b;
};
function div(a,b){
    if ( b == 0){
        return 'error'
    }
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
let decimal = document.querySelector('.decimal')
decimal.addEventListener('click', ()=>{
    if(currentNumber.innerText.includes('.')){ return}
    else {currentNumber.innerText += decimal.innerText}
})
for (let i = 0; i< op.length; i++){
    op[i].addEventListener('click', ()=>{
        if (currentOp === ''){
        firstNum = parseInt(currentNumber.innerText);
        currentOp = op[i].innerText;
        previousNumber.innerText = currentNumber.innerText;
        currentNumber.innerText= '';
        return firstNum, currentOp;
        }else if (currentOp !== ''){
            firstNum = parseInt(previousNumber.innerText);
            secondNum = parseInt(currentNumber.innerText);
            let middleRes = operate(firstNum, secondNum, currentOp);
            previousNumber.innerText = middleRes;
            currentNumber.innerText = '';
            firstNum = middleRes;
            currentOp = op[i].innerText;
        }
})
};

//evaluating op
equal.addEventListener('click', ()=>{
    if(currentNumber.innerText === '' || previousNumber.innerText === ''){
        currentNumber.innerText = 'Error'

    }else {
    secondNum = parseInt(currentNumber.innerText);
    previousText = secondNum;
    previousNumber.innerText = currentNumber.innerText;
    currentNumber.innerText = operate(firstNum, secondNum, currentOp);
    //reset operand, if not empty can't operate
    currentOp = '';}
});

//clear btn
clear.addEventListener('click', ()=>{
    currentNumber.innerText = '';
    previousNumber.innerText = '';
    firstNum = 0;
    currentOp = "";
    secondNum = 0;
})

//Canc button
let canc = document.querySelector('.canc');
canc.addEventListener('click', ()=>{
    currentNumber.innerText = currentNumber.innerText.slice(0, -1)
    })

//keyboard listener
document.addEventListener('keydown', logKey);

function logKey(e) {
    if (Number.isNaN(parseInt(e.key))){
      return
  } else {
      currentNumber.innerText += e.key;
    }
  
  }



//document.getElementById('divide').click();