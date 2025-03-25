//                           If-else exercise

// Q1. Write a js program to find maximum between two numbers.
var num1 = prompt("enter a number:");
var num2 = prompt("enter a number:");

if(num1> num2){
    console.log(num1 ,"is gretaer than " , num2);    
}
else{
    console.log(num2 ,"is gretaer than" ,num1 );
    
 }

// Q2. Write a js program to find maximum between three numbers.
var number1  = prompt("enter a number:");
var number2  = prompt("enter a number:");
var number3  = prompt("enter a number:");

if(number1 > number2 && number1 > number3 ){
    console.log(number1 , "is greatest");    
}
else if(number2 > number1 && number2 > number3){
    console.log(number2 , "is greatest");  
}
else{
    console.log(number3 ,"is gretaes" );
    
}


// Q3. Write a js program to check whether a number is negative, positive or zero.
var num = prompt("enter a number :");
if( num > 0){
    console.log(num , "is positive ");
    }
else if( num < 0){
        console.log(num , "is negative ");
    }
else{
    console.log(num ,"is zero");
   
}


//Q4. Write a js program to check whether a number is divisible by 5 and 11 or not.
var num= prompt("enter a number");
if (num % 5== 0 && num % 11 == 0){
    console.log(`${num} is divisible by 5 and 11 `);
   }
else{
    console.log(`${num} is not divisible by 5 and 11 `);
}


//Q5. Write a js program to check whether a number is even or odd.
var num = prompt("enter a number :");
if( num % 2 === 0){
    console.log(num , "is even ");
    }
else{
    console.log(num ,"is odd");
   
}


// Q6. Write a js program to check whether a year is leap year or not.
var year = prompt("enter a year :");
if(year %4 ===0){
    console.log(`${year} is leap year`);   
}
else{
    console.log(`${year} is not leap year`);
    
}

// Q7.a js program to check whether a character is alphabet or not.

var character = prompt("enter a character:");
var listOfCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var isAlbhabet = false;
for (var i = 0 ; i < listOfCharacter.length  ; i++){
    if ( character === listOfCharacter[i] ){
         isAlbhabet = true;
         break;
    }
}
if(isAlbhabet){
    console.log(" character is alphabet");   
}
else{
    console.log(" character is not alphabet");   
}

        // Alternative solution

if ((character>="A" && character <="Z" ) ||(character>="a" && character <="z")){
    console.log("character is alphabet ");
}
else{
    console.log("character is not alphabet ");
}

//Q8. Write a js program to input any alphabet and check whether it is vowel or consonant.
var alphabet = prompt("enter a alphabet");
var vowel = "AEIOUaeiou";
var vow = false;
for ( var i = 0 ; i < vowel.length ; i++){
    if (alphabet === vowel[i]){
        vow = true
        break;
    }
}
if(vow){
    console.log('Alphabet is vowel');   
}
else{
    console.log('Alphabet is consonant ');
}

         // Alternative solution:
var alphabet = prompt("enter a alphabet");
var vowel = "AEIOUaeiou";
if(vowel.includes(alphabet)){
    console.log('Alphabet is vowel');       
}
else{
    console.log('Alphabet is consonant ');
}

// Q9. Write a js program to input any character and check whether it is alphabet, digit or special character.

var char = prompt("enter a character :");
    if ( (char <=0 || char >10 )){
        console.log("character is digit");
        
    }
    else if((char >='a' && char<='z' ) ||(char >='A' && char<='Z' ) ){
        console.log("character is alpabet");
        
    }
    else{
        console.log("character is special chracter:");
    }

// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

var char = prompt("enter a character :");
if(char >="A" && char <="Z"){
    console.log("character is uppercase");
}
else if(char >="a" && char <='z'){
    console.log("charcter is lowercase");
 }
else{
    console.log("enter a valid character:");
    
}


//Q11. Write a js program to input week number and print week day.
var weekNumber = prompt("enter week number");
        switch(weekNumber){
            case "1":
                console.log("Monday");
                break;
             case "2":
                console.log("Tuesday");
                    break;
            case "3":
                console.log("Wednesday");
                    break;
            case "4":
                console.log("Thusrsday");
                    break;
            case "5":
                console.log("Friday");
                    break;
            case "6":
                console.log("saturday");
                break;
            case "7":
                console.log("sunday");
                break;
            default:
                console.log("enter valid number");                                                                                   
}

//Q12. Write a js program to input month number and print number of days in that month.

var monthNumber =Number(prompt("enter month number"));
        switch(monthNumber){
            case 1:
                console.log("31");
                break;
             case 2:
                console.log("28");
                    break;
            case 3:
                console.log("31");
                    break;
            case 4:
                console.log("30");
                    break;
            case 5:
                console.log("31")
                    break;
            case 6:
                console.log("30");
                break;
            case 7:
                console.log("31");
                break;
            case 8:
                console.log("30");
                break;
            case 9:
                console.log("31");
                break;
            case 10:
                console.log("30");
                break;
            case 11:
                console.log("30");
                break;
            case 12:
                console.log("31");
                break;
            default:
                console.log("enter valid number");
                
        }

//Q14. Write a js program to input angles of a triangle and check whether triangle is valid or not.
var side1 = Number(prompt("Enter angle 1"));
var side2 = Number(prompt("Enter angle 2"));
var side3 = Number(prompt("Enter angle 3"));

if(side1 > 0 && side2 >0 && side3 >0){
    if(side1 + side2 +side3 === 180){
        console.log("triangle is valid :");
        }
    else{
        console.log("triangle is not valid :");
    }
   }
else{
    console.log("triangle is not valid :");
}


//Q15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

var side1 = Number(prompt("Enter side 1"));
var side2 = Number(prompt("Enter side 2"));
var side3 = Number(prompt("Enter side 3"));

if(side1 > 0 && side2 >0 && side3 >0){
    if(side1 + side2 >side3 && side1+side3 > side2 && side2+ side3 >side1){
        console.log("triangle is valid :");
        }
    else{
        console.log("triangle is not valid :");
    }
   }
else{
    console.log("triangle is not valid :");
}


// Q16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

var side1 = Number(prompt("Enter side 1"));
var side2 = Number(prompt("Enter side 2"));
var side3 = Number(prompt("Enter side 3"));
if(side1 == side2 && side1 == side3 && side2== side3){
    console.log("triangle is equilateral :");
 }
else if(side1 == side2   || side1 == side3 || side2 == side3 ){
    console.log("triangle is isosceles triangle :"); 
}

else{
    console.log("triangle is scalene triangle :"); 
}

// 18. Write a js program to calculate profit or loss.
var costPrice = Number(prompt("enter the cost price :"));
var sellPrice = Number(prompt("enter the sell price :"));
if ( sellPrice >  costPrice ){
    var profit = sellPrice - costPrice;
    console.log("Your profit is :" , profit);
}
else if (costPrice > sellPrice){
    var loss = costPrice - sellPrice;
    console.log(`you got a loss of  ${loss}`);    
}


// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

var physics = Number(prompt("Enter marks of physics :"));
var chemistry = Number(prompt("Enter marks of chemistry:"));
var biology = Number(prompt("Enter marks of biology:"));
var math  = Number(prompt("Enter marks of math:"));
var computer = Number(prompt("Enter marks of computer:"));

var totalMarks = physics + chemistry+ math+ biology +computer;
var percentage = (totalMarks/ 500) *100;
console.log(percentage);

if (percentage >= 90){
    console.log("Grade A");
 }
else if(percentage >= 80){
    console.log("Grade B");
}
else if(percentage >=70){
    console.log("grade C");  
}
else if(percentage >=60){
    console.log("Grade D");
}
else if(percentage >=50){
    console.log("Grade E");
}
else {
    console.log("Grade F");
}

//Q20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

var salary = Number(prompt("enter your salary:"));
var hra ;
var da;
var grossSalary 
if(salary <=10000){
    hra = 10000  * (20/100);
    da  = 10000  * (80/100);
    grossSalary = salary +hra + da;
    console.log("gross salary :" , grossSalary);
}
else if(salary <=20000){
    hra = 10000  * (25/100);
    da  = 10000  * (90/100);
    grossSalary = salary +hra + da;
    console.log("gross salary :" , grossSalary);
}
else if(salary > 20000){
    hra = 10000  * (30/100);
    da  = 10000  * (95/100);
    grossSalary = salary +hra + da;
    console.log("gross salary :" , grossSalary);
}

// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

var units = Number(prompt("Enter number of units"));
var bill;
var surcharge;
if(units<=50){
    bill = units * 0.50;
    surcharge = bill *(20/100);
    bill +=surcharge;
    console.log("bill:" , bill);
}
else if(units> 50 && units <=150){
    bill = units * 0.75;
    surcharge = bill *(20/100);
    bill +=surcharge;
    console.log("bill:" , bill);
}
else if(units > 150 && units<=250){
    bill = units * 1.20;
    surcharge = bill *(20/100);
    bill +=surcharge;
    console.log("bill:" , bill);
}
else{
    bill = units * 1.50;
    surcharge = bill *(20/100);
    bill +=surcharge;
    console.log("bill:" , bill);
    
}
