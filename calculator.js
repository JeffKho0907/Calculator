const buttons = document.querySelectorAll('.buttons');
const display = document.querySelector('#display');
const displayOne = document.querySelector('.one');
const displayTwo = document.querySelector('.two');
const numButtons = document.querySelectorAll('.numbers')
const opButtons = document.querySelectorAll('.operators'); 
const calculate = document.querySelector('.calculate');
const del = document.querySelector('#delete');
const clear = document.querySelector('#clear');


//First Take 
// let x = [];
// let num1 ; 
// let num2 ;
// let currentOperand = '';
// buttons.forEach((button)=>{
//     button.addEventListener('click', (e)=> {
//         if(e.target.textContent != "=") {
//             displayTwo.textContent = "-";
//             x.push(e.target.textContent);
//             currentEquation = x.join('');
//             displayOne.textContent = currentEquation;
        
//         } else if(e.target.textContent === "="){
//             const regex = /[+\/x-]/;
//             let numArray = currentEquation.split(regex);
//             let numbers = numArray.map(Number);
//             let operators =[]
//             for(let i = 0; i< currentEquation.length; i++) {
//                 if(["x", "/", "+", "-"].includes(currentEquation[i])) {
//                     operators.push(currentEquation[i]); 
                
//                 }
//             };
//             console.log(operators);
//             for(let i = 0; i< operators.length; i++) {
//                 if(operators[i]== "x") {
//                     numbers[i+1] = numbers[i] * numbers[i+1];
                    
//                 } else if (operators[i]== "-") {
//                     numbers[i+1] = numbers[i] - numbers[i+1];
                    
//                 } else if (operators[i]== "/") {
//                     numbers[i+1] = numbers[i] / numbers[i+1];
                    
//                 } else if (operators[i]== "+") {
//                     numbers[i+1] = numbers[i] + numbers[i+1];
                    
//                 } else if (operators[i] == "-" && operators[i+1] == "-") {
//                     operators[i] = "+";
//                     operators.slice(i)
//                     numbers[i+1] = numbers[i] + numbers[i+1];
//                 }

            
//             }
//             if(numbers[numbers.length-1] === Infinity) {
//                 displayTwo.textContent = "Dividing by Zero is just not Legal at all";
//                 x = [];
//             } else {
//                 displayTwo.textContent = `${numbers[numbers.length-1]}`;
//                 x = [numbers[numbers.length -1]];
//             }

            
            
            
             
            

//         }
        

//     })
// })


//Second Take

let firstNumber = '';
let secondNumber = '';
let operator = '';

numButtons.forEach((button) => {
    button.addEventListener('click', (e)=> {        
        if(operator === '') {
            if(displayOne.textContent === '0') {
                displayOne.textContent = '';
            }
            if(displayTwo.textContent != '' && displayTwo.textContent != '0') {
                firstNumber = '';
                displayOne.textContent = '';
                displayTwo.textContent = '0';
            }
            firstNumber += e.target.textContent;
        } else {
            secondNumber += e.target.textContent;
        }
        displayOne.textContent += e.target.textContent;
    } )
})

opButtons.forEach((button) => {
    
    button.addEventListener('click', (e) => {
        // if(!operatorClicked) {
        //     operator = e.target.textContent;
        //     displayOne.textContent += operator;
        //     operatorClicked = true; 

        //     if( displayTwo.textContent != '0' && displayTwo.textContent != '') {
        //         displayTwo.textContent = '-';
        //         displayOne.textContent = firstNumber + operator;
        // }
            
        //  }

        if(operator != '') {
            operate(firstNumber, secondNumber);
            operator = e.target.textContent;
            displayOne.textContent = firstNumber + operator;
            displayTwo.textContent = firstNumber ;
        } else if(displayTwo.textContent != '0' && displayTwo.textContent != '') {
            operator = e.target.textContent;
            displayTwo.textContent = '0';
            displayOne.textContent = firstNumber + operator;
        } else {
            operator = e.target.textContent;
            displayOne.textContent += operator;
            
        }
    })
})
calculate.addEventListener('click', ()=> {
    operate(firstNumber, secondNumber);
    
})

function operate(x, y) {
    y = parseFloat(y);
    x = parseFloat(x); 

    if((secondNumber === '' && operator !='') || (secondNumber ==='' && operator === '')){
        firstNumber = x;
        displayTwo.textContent = firstNumber;
    } else {
        if(operator === "+") {
        firstNumber = x+y;
        
        } else if(operator === "-") {
            firstNumber = x-y;
            
        } else if (operator === "x") {
            firstNumber = x*y;
            
        } else if (operator === "/") {
            firstNumber = x/y;
            if(firstNumber === Infinity ) {
                displayTwo.textContent = "Can't divide by 0";
                firstNumber = '';
            }
            
        }
        firstNumber = firstNumber.toFixed(1);
        secondNumber = '';
        displayTwo.textContent = firstNumber;

    }
    
    operator = '';
}

del.addEventListener('click', ()=>{
    
        if(secondNumber === '' && operator ==='') {
        firstNumber = firstNumber.slice(0,-1);
        displayOne.textContent = displayOne.textContent.slice(0,-1);
            if(firstNumber === '') {
                firstNumber = '0';
                displayOne.textContent ='0';
            }
        } else if (operator != '' && secondNumber === '') {
            operator = '';
            operatorClicked = false;
            displayOne.textContent =displayOne.textContent.slice(0,-1);
        } else {
            secondNumber = secondNumber.slice(0,-1);
            displayOne.textContent = displayOne.textContent.slice(0,-1);
        }
    
    
})

clear.addEventListener('click', ()=>{
    operator = '';
    firstNumber = '';
    secondNumber ='';
    displayOne.textContent ='0';
    displayTwo.textContent = '0';
    
})