const buttons = document.querySelectorAll('.buttons');
const display = document.querySelector('#display');
let x = [];
let currentOperand = '';
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=> {
        if(e.target.textContent != "=") {
            x.push(e.target.textContent);
            currentOperand = x.join('');
            display.textContent = currentOperand;
        
        } else if(e.target.textContent === "="){
            const delimiters = /[+\/x-]/;
            let numArray = currentOperand.split(delimiters);
            let numbers = numArray.map(Number);
            let operators =[]
            for(let i = 0; i< currentOperand.length; i++) {
                if(["x", "/", "+", "-"].includes(currentOperand[i])) {
                    operators.push(currentOperand[i]); 
                
                }
            };
            console.log(operators);
            for(let i = 0; i< operators.length; i++) {
                if(operators[i]== "x") {
                    numbers[i+1] = numbers[i] * numbers[i+1];
                    
                } else if (operators[i]== "-") {
                    numbers[i+1] = numbers[i] - numbers[i+1];
                    
                } else if (operators[i]== "/") {
                    numbers[i+1] = numbers[i] / numbers[i+1];
                    
                } else if (operators[i]== "+") {
                    numbers[i+1] = numbers[i] + numbers[i+1];
                    
                }

            
            }
            display.textContent = `${numbers[numbers.length-1]}`;
            x = [numbers[numbers.length -1]];
             
            

        }
        

    })
})



    
