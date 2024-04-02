const displayTop = document.querySelector('.topDisplay');
const displayBottom = document.querySelector('.bottomDisplay');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearbtn = document.querySelector('.clear');
const equals = document.querySelector('.equals')
let bottomDisplayText = displayBottom.textContent;
let topDisplayText = displayTop.textContent;
let operatorPressed = false;
let numberPressed = false;
let currentValue = 0;


function clearDisplay() {
    displayTop.textContent = '';
    displayBottom.textContent='';
    operatorPressed = false;
    numberPressed = false;
    console.log('cleared')
};

function updateBottomDisplay(button) {
    bottomDisplayText = displayBottom.textContent;
    topDisplayText = displayTop.textContent;
    displayBottom.textContent = bottomDisplayText + button.textContent;
    // displayTop.textContent = topDisplayText + button.textContent;
    
}

function sum() {
    bottomDisplayText = displayBottom.textContent;
    let array = bottomDisplayText.split(' ');
    let numbersArray = array.filter(function(str) {
        return !isNaN(str)
    })
    console.log(numbersArray)
    //console.log(array)
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
    if (operatorPressed === true && numberPressed === true) {
        currentValue = sum()
        
        console.log(button.textContent)
        //updateBottomDisplay(button);
        
        //console.log(currentValue)
    }
})

numbers.forEach(function(button) {
    button.addEventListener('click', function() {
        
        numberPressed = true;
        
        console.log(button.innerHTML);
        updateBottomDisplay(button)
    })

})

operators.forEach(function(button) {
    button.addEventListener('click', function() {
        

        // if (button.id == 'equals') {
        //     console.log('equals')
        // }

        if (operatorPressed === false && numberPressed  === true) {
            //console.log('false')
            operatorPressed = true;
            numberPressed = false;
            //console.log(button.innerHTML);
            updateBottomDisplay(button)
        } else if (operatorPressed === true && numberPressed === true) {
            currentValue = sum()
            numberPressed = false;
            updateBottomDisplay(button);
            
            //console.log(currentValue)
        }

        
    })
})
