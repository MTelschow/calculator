let calcultion = document.getElementById('calcultion');
let results = document.getElementById('results');

let inputNumber = '';
let firstNumber = undefined;

//Funcions

function reset(){
    calcultion.innerHTML = '';
    results.innerHTML = '0';
    inputNumber = '';
    firstNumber = undefined;
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

function makeInputValid (){
    if (inputNumber == ''){
        inputNumber = '0';
    }
    if (inputNumber.charAt(inputNumber.length - 1) == "."){
        inputNumber = inputNumber.slice(0,-1);
    }
    results.innerHTML = inputNumber;
}


function add (a, b){
    return a+b;
}
function subtract (a, b){
    return a-b;
}
function mutiply (a, b){
    return a*b;
}
function divide (a, b){
    return a/b;
}
function modulo (a, b){
    return a%b;
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
const btnEquals = document.getElementById('=');
btnEquals.addEventListener('click', function(){
})
