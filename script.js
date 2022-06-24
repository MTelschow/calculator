let calcultion = document.getElementById('calcultion');
let results = document.getElementById('results');

let inputNumber = '';
let savedNumber = undefined;
let operator = undefined;

//Funcions

function reset(){
    calcultion.innerHTML = '';
    results.innerHTML = '0';
    inputNumber = '';
    savedNumber = undefined;
    operator = undefined;
}

function removeDigit(){
    inputNumber = inputNumber.slice(0,-1);
    results.innerHTML = inputNumber;
}

function addDigit(digit){
    if(digit=='.' && inputNumber==''){
        inputNumber += '0';
    }
    if(!(digit==0 && inputNumber=='')){
        inputNumber += digit;
        results.innerHTML = inputNumber;
    }
    
}



function useOperator (newOperator){
    makeInputValid();
    if(operator !== undefined){
        inputNumber = calculte(savedNumber, inputNumber);
    }
    savedNumber = inputNumber;
    inputNumber = '';
    operator = newOperator;
    calcultion.innerHTML = `${savedNumber} ${operator}`;
    results.innerHTML = '0';

}

function makeInputValid (){
    if (inputNumber == ''){
        inputNumber = '0';
    }
    if (inputNumber.charAt(inputNumber.length - 1) == "."){
        inputNumber = inputNumber.slice(0,-1);
    }
    inputNumber = parseFloat(inputNumber);
}

function calculte (a, b){
    if(operator == '+'){
        return a+b;
    }
    if(operator == '-'){
        return a-b;
    }
    if(operator == 'x'){
        return a*b;
    }
    if(operator == '/'){
        if(b==0){
            alert('ERROR! CANT DIVIDE BY 0! Please clear your calculator')
        }
        return a/b;
    }
    if(operator == '%'){
        if(b==0){
            alert('ERROR! CANT DIVIDE BY 0! Please clear your calculator')
        }
        return a%b;
    }
}


function displayResult(){
    if(operator !== undefined){
        makeInputValid();
        let temp = inputNumber;
        inputNumber = `${calculte(savedNumber, inputNumber)}`;
        calcultion.innerHTML = `${savedNumber} ${operator} ${temp} =`;
        results.innerHTML = inputNumber;
        savedNumber = undefined;
        operator = undefined;
        }
    
}



//Button onclick

const btnAc = document.getElementById('AC');
btnAc.addEventListener('click', e => reset());
const btnC = document.getElementById('C');
btnC.addEventListener('click', e => removeDigit());


const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
btn0.addEventListener('click', e => addDigit(0));
btn1.addEventListener('click', e => addDigit(1));
btn2.addEventListener('click', e => addDigit(2));
btn3.addEventListener('click', e => addDigit(3));
btn4.addEventListener('click', e => addDigit(4));
btn5.addEventListener('click', e => addDigit(5));
btn6.addEventListener('click', e => addDigit(6));
btn7.addEventListener('click', e => addDigit(7));
btn8.addEventListener('click', e => addDigit(8));
btn9.addEventListener('click', e => addDigit(9));

const btnDot = document.getElementById('.');
btnDot.addEventListener('click', function(){
    if(inputNumber.includes('.')) return;
    if(inputNumber==''){
        inputNumber += '0';
    }
    addDigit('.');
});


//Operators
const btnAdd = document.getElementById('+');
btnAdd.addEventListener('click', e => useOperator('+'));
const btnSubtract = document.getElementById('-');
btnSubtract.addEventListener('click', e => useOperator('-'));
const btnMultiply = document.getElementById('x');
btnMultiply.addEventListener('click', e => useOperator('x'));
const btnDivide = document.getElementById('/');
btnDivide.addEventListener('click', e => useOperator('/'));
const btnModulo = document.getElementById('%');
btnModulo.addEventListener('click', e => useOperator('%'));

const btnEquals = document.getElementById('=');
btnEquals.addEventListener('click', e => displayResult());

