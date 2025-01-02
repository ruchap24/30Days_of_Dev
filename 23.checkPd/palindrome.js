// Getting the elements from DOM 
const btncheck = document.querySelector("button"); 
const str = document.querySelector("input"); 
const inputString = document.querySelector(".input-string"); 
const reverseString = document.querySelector(".reversed-string"); 
const outputText = document.querySelector(".output-text"); 

// Adding event listener when the 
// user clicks on the "Check" button 
btncheck.addEventListener("click", (e) => { 
	e.preventDefault(); 

	// Converting the input string to smallcase 
	const input = str.value.toLocaleLowerCase(); 

	// Split the string into an array 
	const string = input.split(""); 

	// Reversing the array 
	const rearray = string.reverse(); 

	// Join the array back to a string 
	const reversedString = rearray.join(""); 

	inputString.textContent = input; 
	reverseString.textContent = reversedString; 

	// Checking the input string and 
	// reversed string if they are the same 
	if (input == reversedString) { 
		outputText.textContent = 
		"The input string is a palindrome!"; 
	} else { 
		outputText.textContent = 
		"The input string is not a palindrome"; 
	} 

	// Reset the input value 
	str.value = ""; 
});