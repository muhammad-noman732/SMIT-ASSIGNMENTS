//           Assignment 01 (JS)..
//  question based on if else conditions


//  Q1. Light Bulb Experiment
//     Objective: Simulate a light bulb's on/off state.
//     Task:
//     Write a program that asks the user to input either 1 (turn on) or 0 (turn off).
//     Use an if condition to print "The light is ON" or "The light is OFF."
//     Extension: Add a third option to print "Invalid Input" if the user enters anything other than 1 or 0. -->

let userInput = prompt("enter input either 1 or 0");
if (userInput == 1){
       console.log("The light is ON");
    }
else if (userInput == 0){
      console.log("The light is OF");
    }
else{
    console.log("invalid input");
    
}


// Q2. Traffic Light Simulator
// Objective: Simulate traffic light behavior.
// Task:
// Accept an input (Red, Yellow, Green) from the user.
// Use if conditions to display:
// "Stop" for Red
// "Slow Down" for Yellow
// "Go" for Green
// Extension: Add a default message for invalid inputs like "Invalid Color."

let color = prompt("enter a color (Green , Red , Yellow)")
if (color === "red"){
    console.log("Stop");
    
}
else if( color ==="yellow"){
    console.log("Slow Down");
}
else if (color ==="green"){
    console.log("Go");
    }
else{
    console.log("invalid input .please Enter (Red ,Green , Yellow)");
    
}

// 3. Water Temperature Checker
// Objective: Categorize water temperature based on input.
// Task:
// Ask the user to input the temperature in Celsius.
// Use if conditions to print:
// "Freezing" if temperature <= 0
// "Cold" if temperature > 0 and <= 15
// "Warm" if temperature > 15 and <= 30
// "Hot" if temperature > 30

let temperature = prompt("enter the temperature ")
if ( temperature <= 0){
    console.log("Freezing" );    
}
else if (temperature > 0 && temperature <= 15){
      console.log("Cold");
}
else if (temperature > 15 && temperature <= 30){
    console.log("warm");
}
else{
    console.log("hot");
    
}

// 4. Rock-Paper-Scissors Game
// Objective: Simulate a simple game.
// Task:
// Accept inputs for two players (rock, paper, or scissors).
// Use if conditions to determine the winner:
// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper
// Print "Player 1 Wins," "Player 2 Wins," or "It's a Tie!"


let player1 = prompt("enter your choice from(rock , scissors, paper)").toLocaleLowerCase();
let player2 = prompt("enter your choice from(rock , scissors, paper)").toLocaleLowerCase();

if (player1 === "rock" && player2 === "scissors"){
    console.log( "Player 1 Wins,  Rock beats Scissors");
}
else if (player1 === "scissors" &&  player2 === "paper"){
    console.log( "player 1 wins , Scissors beats Paper");
    
}
else if( player1 === "paper" && player2 === "rock"){
    console.log("player 1 wins ,Paper beats Rock");
    
}
else if (player1 === player2){
    console.log("tie");
    
}
// If none of the above cases match, Player 2 wins.
else{
    console.log("player 2 wins ");   
}


// 5. Simple Alarm System
// Objective: Simulate an alarm trigger based on conditions.
// Task:
// Ask the user two yes/no questions:
// Is the door open? (yes or no)
// Is motion detected? (yes or no)
// Use if conditions to print:
// "Alarm Triggered" if either condition is yes.
// "All Safe" if both conditions are no.

let userChoice1 = prompt("Is the door open? (yes or no)").toLocaleLowerCase();
let userChoice2 = prompt("Is motion detected? (yes or no)").toLocaleLowerCase();

if (userChoice1 ==="yes" || userChoice2 === "yes"){
    console.log("Alarm Triggered");
    }
else if(userChoice1 ==="no" && userChoice2 === "no"){
    console.log("All Safe");
    
}
else{
    console.log("invalid choice");
    
}


// 6. Simple Temperature Conversion
// Objective: Convert Celsius to Fahrenheit or vice versa.
// Task:
// Ask the user to choose a conversion type: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius.
// Take the temperature as input and use the formulas:
// C to F: F=(C×9/5)+32F = (C \times 9/5) + 32F=(C×9/5)+32
// F to C: C=(F−32)×5/9C = (F - 32) \times 5/9C=(F−32)×5/9
// Print the result using if conditions to ensure the correct formula is applied.

let choice = prompt("choose a conversion type: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius ");
let temp = Number(prompt("enter your temperature  "));
switch (choice){
    case "1":
        let F = (temp *9/5)+32;
        console.log("temperature from  Celsius to Fahrenheit:", F);
        break;
    
    case "2":
        let C=(temp - 32) * 5/9 ;
        console.log("temperature from Fahrenheit to Celsius  :" , C);
    
    default:
        console.log("invalid choice");
}

//            alternative using if else 
if(choice === "1"){
    let F = (temp *9/5)+32;
    console.log("temperature from  Celsius to Fahrenheit:", F);
    }

else if (choice === "2") {
       let C=(temp - 32) * 5/9 ;
       console.log("temperature from Fahrenheit to Celsius  :" , C);
}
else{
    console.log("invalid choice");
    
}


// Q7. Password Strength Checker
// Objective: Check the strength of a password.
// Task:
// Take a password as input and check conditions:
// Length >= 8: Print "Strong Password"
// Length between 5 and 7: Print "Moderate Password"
// Length < 5: Print "Weak Password"
// Extension: Check if the password contains numbers or special characters for more detailed feedback.

let password = prompt("enter a password");
if (!password){
    console.log("enter password");
}
else if (password.length >= 8){
    console.log("strong password");
    }

else if(password.length >=5 && password.length <= 7){
    console.log("moderate password");
    }
else if(password.length <5 ){
        console.log("weak passord");
        }


// 8. Coin Toss Simulator
// Objective: Simulate a coin toss.
// Task:
// Ask the user to input 1 for "Heads" or 0 for "Tails."
// Use the random module to simulate a coin toss (random.randint(0, 1)).
// Compare the user’s input with the result and print "You Win!" or "You Lose!"

let option = Number(prompt("Enter 1 for 'Heads' or 0 for 'Tails'."));
let result = Math.floor(Math.random()* 2);
console.log(result);

if (option === result ){
    console.log("You wins");   
}
else{
    console.log("You Lose");
}



// 9. Weather Suggestion Experiment
// Objective: Give outfit suggestions based on weather conditions.
// Task:
// Take weather input (Sunny, Rainy, Cold) from the user.
// Print:
// "Wear sunglasses" for Sunny
// "Take an umbrella" for Rainy
// "Wear a jacket" for Cold

let weatherInput = prompt("Enter weather input (Sunny, Rainy, Cold) .").toLocaleLowerCase();
if(weatherInput ==="sunny"){
    console.log("Wear sunglasses");
    }
else if(weatherInput === "rainy"){
    console.log("Take an umbrella");   
}

else if(weatherInput === "cold"){
    console.log("Wear a jacket");
    
}

else{
    console.log("invalid choice");
    
}


// 10. Simple Arithmetic Quiz
// Objective: Test arithmetic skills interactively.
// Task:
// Generate two random numbers and a random operator (+, -, *, /) using the random module.
// Ask the user to calculate the result.
// Compare the user's answer with the correct answer using an if condition and print "Correct!" or "Try Again!"m

let number1 = Math.floor(Math.random()* 100) +1;
let number2 = Math.floor(Math.random()* 100) +1;
console.log(number1);
console.log(number2);

let operators = ['+','-' , '*' ,'/','%'];
let selectedOperator = operators[Math.floor(Math.random() * operators.length)];
console.log(selectedOperator);

let correctAns;
switch(selectedOperator){
    case '+':
       correctAns = number1 + number2;
    //    console.log(correctAns);
       
       break;
    
    case '-':
        correctAns = number1 - number2;
        // console.log(correctAns);
        break;

    case '*':
        correctAns = number1  * number2;
        // console.log(correctAns);
        break;
          
    case '/':
        if (number2 !=0)
        correctAns = number1  / number2;
        // console.log(correctAns);
        break;
    case '%':
        correctAns = number1  % number2;
        // console.log(correctAns);
        break;
}

let userResult = Number(prompt("enter your result"));
if(correctAns === userResult ){
    console.log("Correct");
    
}
else{
    console.log("try again");
    
}


// 11. Eligibility for Voting
// Write a program that checks if a person is eligible to vote based on their age (age >= 18).

let userAge = prompt("enter your age");
if(userAge >=18){
    console.log("eligible for voting ");
    
}
else{
    console.log("not eligible");
    
}

// 12. Maximum of Two Numbers
// Write a program that accepts two numbers and prints the larger number using if conditions.

let num1 = Number(prompt("enter first number"));
let num2 = Number(prompt("enter second number"));
if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
    
}
else{
    console.log(`${num2} is greater than ${num1}`);
}
