let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let person = {
    name: "John",
    age: 25
};

// Log variables to the console
console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is student: " + isStudent + " (Type: " + typeof isStudent + ")");
console.log("Hobbies: " + hobbies + " (Type: " + typeof hobbies + ")");
console.log("Person: " + JSON.stringify(person) + " (Type: " + typeof person + ")");

// 2. Operators: Simple calculator function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert("Result: " + result);
}

// 3. Functions: Greet User
function greetUser(name) {
    return "Hello, " + name + "! Welcome to the site.";
}

// Output the greeting message
document.getElementById("output").innerHTML = greetUser("Jane");

// Part 2: JavaScript Control Structures

// 1. If Statements: Check voting eligibility
function checkVotingEligibility() {
    let age = prompt("Enter your age:");
    age = parseInt(age);

    if (age >= 18) {
        document.getElementById("output").innerHTML = "You are eligible to vote.";
    } else {
        document.getElementById("output").innerHTML = "You are not eligible to vote.";
    }
}

// Call checkVotingEligibility function
checkVotingEligibility();

// 2. Loops: Display numbers 1 to 10
function displayNumbers() {
    let list = "<ol>";
    for (let i = 1; i <= 10; i++) {
        list += "<li>" + i + "</li>";
    }
    list += "</ol>";
    document.getElementById("output").innerHTML += list;
}

// Call displayNumbers function
displayNumbers();

// Part 3: Introduction to the DOM

// 1. Modify HTML Structure
document.querySelector("h1").innerText = "JavaScript in Action!";

// 2. Add content dynamically
let dynamicContentDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContentDiv.appendChild(newParagraph);
