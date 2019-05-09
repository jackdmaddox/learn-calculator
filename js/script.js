"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
number.forEach(function(number){
    number.addEventListener('click', function(e){
        input.innerHTML += e.target.innerHTML;
        console.log(this.innerHTML);
    
// storing current input as a string and setting the last character 
// variable to check for operators

let currentString = input.innerHTML;
    console.log(currentString, "this is before operator current string");

let lastCharacter = currentString[currentString.length -1];
    console.log(lastCharacter, 'this is last character');


    });
});



// adding click handlers to the operation buttons

operator.forEach(function(operator){
    operator.addEventListener('click', function(e){

        let currentString = input.innerHTML;
        console.log(currentString, "this is current string");
    
        let lastCharacter = currentString[currentString.length -1];
        console.log(lastCharacter, 'this is last character');
    
    if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "×" || lastCharacter === "÷") {
        let newString = currentString.substring(0, currentString.length -1) + e.target.innerHTML;
        input.innerHTML = newString;
        } else if  (currentString.length == 0) {
            console.log('enter a number first');
        }
        else {
            input.innerHTML += e.target.innerHTML;
        }
    });
});


// on click of 'equal' button

result.addEventListener('click', function (e){
    console.log(e.target.innerHTML);
});


// clearing the input on press of clear

clear.addEventListener('click', function(e){
    input.innerHTML = '';

    });

