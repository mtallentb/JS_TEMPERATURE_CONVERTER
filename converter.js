"use strict"

const fahrenheitButton = document.getElementById("farenheit-radio-btn");
const celsiusButton = document.getElementById("celsius-radio-btn");
const displayValue = document.getElementById("display-value");

function toCelsius () {
	let fahrenheit = document.getElementById("toBeConverted").value;
	let celsius = ((fahrenheit - 32) * 5 / 9);
	displayValue.innerHTML = celsius;
	if (celsius > 32) {
		displayValue.className = "hot";
	} else if (celsius < 0) {
		displayValue.className = "cold";
	} else {
		displayValue.className = "mild";
	}
}

function toFahrenheit () {
	let celsius = document.getElementById("toBeConverted").value;
	let fahrenheit = (celsius * 9 / 5 + 32);
	displayValue.innerHTML = fahrenheit;
	if (fahrenheit > 90) {
		displayValue.className = "hot";
	} else if (fahrenheit < 32) {
		displayValue.className = "cold";
	} else {
		displayValue.className = "mild";
	}
}

// Get a reference to the button element in the DOM
let valueCheckButton = document.getElementById("btn-checkvalue");

// This function should determine which conversion should
// happen based on which radio button is selected.
let clickEvent = valueCheckButton.addEventListener("click", determineConverter);

function determineConverter (clickEvent) {
	if (fahrenheitButton.checked === true) {
		toFahrenheit();
	} else if (celsiusButton.checked === true) {
		toCelsius();
	} else {
		console.log("Pick a number.");
	}
  
}

// Assign a function to be executed when the button is clicked
valueCheckButton.addEventListener("click", determineConverter);


// Reset Button Functionality
let resetButton = document.getElementById("btn-reset");
resetButton.addEventListener("click", () => {
	document.getElementById("toBeConverted").value = "";
	fahrenheitButton.checked = false;
	celsiusButton.checked = false;
});

// Convert on 'Enter' keypress
function pressEnterKey(selectedField) {

	document.querySelector(selectedField).addEventListener('keypress', e => {
	    let key = e.which || e.keyCode;
	    if (key === 13) { 
	    	determineConverter();
	    }
	});
}

pressEnterKey("#toBeConverted");


