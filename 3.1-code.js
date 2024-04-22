function craps() { // Function containing the code for the game
    var x = Math.floor((Math.random()*6)+1); // Creates the x variable also known as a random number between 1 and 6 corresponding to the first dice
    var y = Math.floor((Math.random()*6)+1); // Creates the y variable also known as a random number between 1 and 6 corresponding to the second dice
    var sum = x+y; // Adds the two values together

    if (sum==7 || sum==11) { // Checks if the sum of the dice is equal to 7 or 11
        document.getElementById("game").innerHTML="Dice 1:" + " " + x + "<br>" + "Dice 2:" + " " + y + "<br>" + "You lose!"; // If condition proved true, displays the value of each dice and the text "You lose!"
    } else if (x==y && x%2==0) { // If first condition isn't met, it checks if x and y have the same value and if they are even numbers
        document.getElementById("game").innerHTML="Dice 1:" + " " + x + "<br>" + "Dice 2:" + " " + y + "<br>" + "You won!"; // If condition proved true, displays the value of each dice and the text "You won!"
    } else { // If previous conditions aren't met, this code is run
        document.getElementById("game").innerHTML="Dice 1:" + " " + x + "<br>" + "Dice 2:" + " " + y + "<br>" + "You pushed!"; // If condition proved true, displays the value of each dice and the text "You pushed!"
    }
}