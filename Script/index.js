let number1 = null;
let number2 = null;
let operation = null;


// console.log(number1 + number2 + number3);
// console.log(number1 - number2 - number3);
// console.log(number1 * number2 * number3);
// console.log(number1 / number3);
// console.log(number1 % number3);







// console.log(Math.round(123.789));
// console.log(123.789567.toFixed(3));
// console.log(123.789567.toFixed(5));



// console.log(document.getElementById('7'));  
// console.log(document.querySelectorAll('button'));


let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');
let screen = document.getElementById('screen');

// console.log(numberButtons);


// for (let i=0; i<numberButtons.length; i++){
//     console.log(numberButtons[i]);
// }
// console.log('///////////////////////////////////////////////')
// numberButtons.forEach(number => console.log(number));
// console.log('///////////////////////////////////////////////')
// numberButtons.forEach(func1 );
// function func1 (number){
//     console.log(number)
// }
// console.log('///////////////////////////////////////////////')
// let func2 = (number) => {
//     console.log(number)
// }
// numberButtons.forEach(func2 );

numberButtons.forEach(( number ) => {
        number.addEventListener('click', () => {

            if(number1){
                number1 = number1 + number.innerText;
            } else{
                number1 = number.innerText;
            } 
            //  console.log(number1);
            // number2 = number1;
            screen.innerText = number1;
        });
        // number1 = 0
}); 

operatorButtons.forEach(operator => {
    operator.addEventListener ('click', () =>{
        if (operator.id !== 'equal'){
            screen.innerText = 0;
            operation = operator.id;
            number2 = number1;
            number1 = null;
        }else{ 
            switch (operation){
                case 'add':
                    screen.innerText = parseInt(number2) + parseInt(number1); 
                    break;
            
                case 'sub':
                    screen.innerText = parseInt(number2) - parseInt(number1); 
                    break;
            
                case 'mul':
                    screen.innerText = parseInt(number2) * parseInt(number1); 
                    break;
            
                case 'div':
                    screen.innerText = parseInt(number2) / parseInt(number1); 
                    break;
            };
        };
    });
});






