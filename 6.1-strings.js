function validateForm() { // Function that is run when submit button is pressed
    const firstName = document.getElementById("firstName").value; // Gets the value of the first name input
    const lastName = document.getElementById("lastName").value; // Gets the value of the last name input
    const zipCode = document.getElementById("zipCode").value; // Gets the value of the zip code input

    let fullName = firstName + " " + lastName; // Saves the full name in desired format
    let fullZip = zipCode + ""; // Saves the zip code
    let lengthName = fullName.length; // Counts length of full name
    let lengthZip = fullZip.length; // Counts length of zip code

    if (lengthName > 20 && lengthZip == 5) { // Runs code if lenght of name is greater than 20 and if lenght of zip code is equal to 5
        alert("Congratulations! You've reached the secret message!"); // Secret message alert
    } else { // Runs if condition isn't met
        alert("Invalid input."); // Invalid input alert
    }
}