function add() { // Addition Function
    var num1 = parseFloat(document.getElementById("num1").value); // Identifies and saves first number value as a float
    var num2 = parseFloat(document.getElementById("num2").value); // Identifies and saves second number value as a float
    var add = num1 + num2; // Adds the desired numbers together

    document.getElementById("result").innerHTML="The addition of" + " " + num1 + " " + "and" + " " + num2 + " " + "is equal to" + " " + add; // Displays final value of the equation
}

function sub() { // Substraction Function
    var num1 = parseFloat(document.getElementById("num1").value); // Identifies and saves first number value as a float
    var num2 = parseFloat(document.getElementById("num2").value); // Identifies and saves second number value as a float
    var sub = num1 - num2; // Substracts the desired numbers from each other

    document.getElementById("result").innerHTML="The substraction of" + " " + num1 + " " + "and" + " " + num2 + " " + "is equal to" + " " + sub; // Displays final value of the equation
}

function div() { // Division Function
    var num1 = parseFloat(document.getElementById("num1").value); // Identifies and saves first number value as a float
    var num2 = parseFloat(document.getElementById("num2").value); // Identifies and saves second number value as a float
    if (num1 > num2) { //Checks to see if num1 is greater than num2
        var div = num1 / num2; // Divides desired numbers
        document.getElementById("result").innerHTML="The division of" + " " + num1 + " " + "and" + " " + num2 + " " + "is equal to" + " " + div; // Displays final value of the equation
    } else if (num2 > num1) { //Checks to see if num2 is greater than num1
        var div = num2 / num1; // Divides desired numbers
        document.getElementById("result").innerHTML="The division of" + " " + num2 + " " + "and" + " " + num1 + " " + "is equal to" + " " + div; // Displays final value of the equation
    } else {
        var div = num1 / num2; // Divides desired numbers
        document.getElementById("result").innerHTML="The division of" + " " + num1 + " " + "and" + " " + num2 + " " + "is equal to" + " " + div; // Displays final value of the equation
    }
}

function mul() { // Multiplication Function
    var num1 = parseFloat(document.getElementById("num1").value); // Identifies and saves first number value as a float
    var num2 = parseFloat(document.getElementById("num2").value); // Identifies and saves second number value as a float
    var mul = num1 * num2; // Multiplies desired numbers

    document.getElementById("result").innerHTML="The multiplication of" + " " + num1 + " " + "and" + " " + num2 + " " + "is equal to" + " " + mul; // Displays final value of the equation
}