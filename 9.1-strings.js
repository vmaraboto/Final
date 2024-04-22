function isPalindrome(str) { // Function that checks if string is a palindrome
    const processedStr = str.toLowerCase().replace(/\s/g, ''); // Removes spaces and lower cases everything
    return processedStr === processedStr.split('').reverse().join(''); // Confirms if string is the same fowards and backwards
}

// Loop
while (true) {
    const userInput = prompt("Enter a string:"); // Asks user for a string
    
    if (userInput === null || userInput === "") { // Checks if user wants to end program
        alert("Exiting the program."); // Notifies that they are leaving the program
        break;
    }
    
    if (isPalindrome(userInput)) { // Checks if string is a palindrome
        alert(`"${userInput}" is a palindrome.`); // Tells user that it is a palindrome
    } else { // If not, runs
        alert(`"${userInput}" is not a palindrome.`); //Tells user that it is not a palindrome
    }
}