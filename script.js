const displayTop = document.querySelector('.topDisplay');
const displayBottom = document.querySelector('.bottomDisplay');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearbtn = document.querySelector('.clear');
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
    
    console.log(array)
    if (array.includes('+')) {

        //fitler out the numbers and turn to ints

        const result = array.reduce((total, currentItem) => {
             return total + currentItem
        }, 0);  
        return result; 
    }
    

}



clearbtn.addEventListener('click', function() {
    clearDisplay()
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
            console.log(currentValue)
        }

        
    })
})
