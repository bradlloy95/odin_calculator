//make variables for all the buttons
const displayTop = document.querySelector('.topDisplay');
const displayBottom = document.querySelector('.bottomDisplay');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearbtn = document.querySelector('.clear');
const equals = document.querySelector('.equals')

// create variables to keep track of states
let bottomDisplayText = displayBottom.textContent;
let topDisplayText = displayTop.textContent;
let operatorPressed = false;
let numberPressed = false;
let equalPressed = false;
let currentValue = 0;


function clearDisplay() {
    displayTop.textContent = '';
    displayBottom.textContent='';
    operatorPressed = false;
    numberPressed = false;
    equalPressed = false;
    //console.log('cleared')
};



function updateBottomDisplay(button) {
    //get current display
    bottomDisplayText = displayBottom.textContent;
    topDisplayText = displayTop.textContent;
    // concat button value onto display
    displayBottom.textContent = bottomDisplayText + button.textContent;
  
    
}

function sum() {
    //create a copy of whats in the display
    bottomDisplayText = displayBottom.textContent;
    //split the string into an array
    let array = bottomDisplayText.split(' ');
    //filter out the numbers
    let numbersArray = array.filter(function(str) {
        return !isNaN(str)
    })
    
    //check for operator
    if (array.includes('+')) {

        //fitler out the numbers and turn to ints

        const result = numbersArray.reduce((total, currentItem) => {
             return total + parseInt(currentItem)
        }, 0); 
        displayTop.textContent = bottomDisplayText + ' = '
        displayBottom.textContent = result
        return result; 

    } else if (array.includes('-')) {
        const result = numbersArray.reduce((total, currentItem) => {
            return total - parseInt(currentItem);

        });
        displayTop.textContent = bottomDisplayText + ' = '
        displayBottom.textContent = result
        return result; 

    } else if (array.includes('/')) {
        const result = numbersArray.reduce((total, currentItem) => {
            return total / parseInt(currentItem);

        });
        displayTop.textContent = bottomDisplayText + ' = '
        displayBottom.textContent = result
        return result; 

    } else if (array.includes('x')) {
        const result = numbersArray.reduce((total, currentItem) => {
            return total * parseInt(currentItem);

        });
        displayTop.textContent = bottomDisplayText + ' = '
        displayBottom.textContent = result
        return result; 
    }
    

}



clearbtn.addEventListener('click', function() {
    clearDisplay()
})


equals.addEventListener('click', function(button) {
    // only runs when a valid equaltion entered
    if (operatorPressed === true && numberPressed === true) {
        // update states     
        equalPressed = true;        
        operatorPressed = false;
        // run sum and add to current value
        currentValue = sum()      
        }
})

numbers.forEach(function(button) {
    button.addEventListener('click', function() {
        // start new sum if no operator is pressed
        if (equalPressed === true) {
            clearDisplay();
        }
        // update state
        numberPressed = true;
        updateBottomDisplay(button)
    })

})

operators.forEach(function(button) {
    button.addEventListener('click', function() {
        // update state
        equalPressed = false;   
        // run if value 'a' has been entered and operator is added
        if (operatorPressed === false && numberPressed  === true) {
            // update states so only a number can be pressed next
            operatorPressed = true;
            numberPressed = false;
            updateBottomDisplay(button)
        // can only run if 2 numbers entered and 1 operator. works as 'equals'
        } else if (operatorPressed === true && numberPressed === true) {
            currentValue = sum()
            numberPressed = false;
            updateBottomDisplay(button);
        }        
    })
})
