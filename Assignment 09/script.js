//                                  List of loop programming exercises

// https://docs.google.com/document/d/19H4pI1swK6cD6-P5T1pH4BEEiJvUYHCo9_hHOWwDUag/edit?tab=t.0

// 1. Write a js program to print all natural numbers from 1 to n. - using while loop

var num = prompt("Enter a Number to which print ");
var start = 1 ;
while(start <= num){
    console.log(start);
    start++;
}

// Q2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop

var num = prompt("Enter a Number :");
while(num >= 1){
    console.log(num);
    num--;
}

// 3. Write a js program to print all alphabets from a to z. - using while loop

var asciiValue = 97;
while (asciiValue <= 122) { 
  // ye ik predefined method h js m iske ilawa koi hl nhi h cpp m wese 
  // ho jata h yha nhi hota 
  console.log(String.fromCharCode(asciiValue));
  
  asciiValue++; 
}

// 4. Write a js program to print all even numbers between 1 to 100. - using while loop

var num = 0;
while(num <= 100){
    if(num %2 ===0){
        console.log(num);
    }
    num++;
}

// 5. Write a js program to print all odd number between 1 to 100.

var num = 0;
while(num <= 100){
    if(num %2 !==0){
        console.log(num);
    }
    num++;
}

// 6. Write a js program to find sum of all natural numbers between 1 to n.

var sum = 0 ;
var num = 1 ;
while ( num <=100 ){
    sum+= num;
    num++;
}
console.log("sum :", sum);

// 7. Write a js program to find sum of all even numbers between 1 to n.

var sum1 = 0 ;
var num = 1 ;
while (num <=100){
    if(num %2 === 0){
       sum1+= num;
    }
    num++;
}
console.log("sum :", sum1);

// 8. Write a js program to find sum of all odd numbers between 1 to n.

var sum2 = 0 ;
var num = 1 ;
while (num <= 100){
    if(num %2 !== 0){
       sum2+= num;
    }
    num++;
}
console.log("sum :", sum2);

// Q9. Write a js program to print multiplication table of any number.

var table= prompt("enter table to print");

for (var i = 0 ; i <= 10 ; i++ ){
    console.log(`${table} x  ${i} = ${table * i}`);

}

// Q10. Write a js program to count number of digits in a number.

var number = Number(prompt("enter a number: "));
var count = 0 ;

while( number > 0){ 
    number = number  / 10;
    number = parseInt(number)
    count++;
}
  console.log(count);

// Q11. Write a js program to find first and last digit of a number.

var number = Number(prompt("enter a number: "));
var lastDigit = number % 10 ;
// console.log(lastDigit);
while(number >= 10){
      number =  Math.floor(number / 10);
}
var firstDigit = number;
console.log("first digit is :", firstDigit);
console.log("last digit is :", lastDigit);

// Q12. Write a js program to find sum of first and last digit of a number.

var number = Number(prompt("enter a number: "));
var firstDigit = number % 10 ;

while(number >=10){
  // yha se numbe rko 10 tk divide krna h jb tk single digit na rhe
  number = Math.floor(number / 10);
}
var lastDigit = number;
var sumOfFirstAndLAstDigit = firstDigit + lastDigit;
console.log("sum of first and last digit is ", sumOfFirstAndLAstDigit);

// 13. Write a js program to swap first and last digits of a number.

var number = Number(prompt("enter a number: "));
var lastDigit = number % 10 ;

while(number >=10){
  // yha se numbe rko 10 tk divide krna h jb tk single digit na rhe
  number = Math.floor(number / 10);
}

var firstDigit = number;
var temp ;
temp = lastDigit;
lastDigit = firstDigit ;
firstDigit = temp;
console.log("first digit is :" , firstDigit);

console.log("lastDigit is :" , lastDigit);

// 14. Write a js program to calculate sum of digits of a number.

var number = Number(prompt("enter a number: "));
var sum = 0 ;

while(number > 0){
        sum += number % 10;

       number = parseInt(number/10);
}
console.log("sum of digits of a number:" , sum);

// Q15. Write a js program to calculate product of digits of a number.

var number = Number(prompt("enter a number: "));
var products = 1 ;
while(number > 0){
        products *= number % 10; // extracts last digit
        number = parseInt(number/10); // remove last digit
}
console.log("product of digits of a number:" , products);

// Q16. Write a js program to enter a number and print its reverse.

var number = Number(prompt("enter a number :"));
var reverse = 0  ;
while(number > 0){
        var lastDigit = number % 10;
        reverse = reverse * 10  + lastDigit
        number  = parseInt(number /10);
}
console.log("revrese of number is " , reverse);

// 17. Write a js program to check whether a number is palindrome or not.

var number = Number(prompt("enter a number :"));
var origninalNumber = number;
console.log(number);

var reverseNumber = 0 ;
while(number > 0){
      var lastDigit = number % 10 ;
      reverseNumber = reverseNumber * 10 + lastDigit;
      number  = parseInt(number /10);
}
console.log(reverseNumber);
if(origninalNumber === reverseNumber){
        console.log(origninalNumber , "is palindrom");
}
else{
        console.log(origninalNumber ,"is not palindrom");
}

// 18. Write a js program to find frequency of each digit in a given integer.

var number = Number(prompt("enter a number :"));
var count0 = 0,
  count1 =0,
  count2 =0,
  count3 =0,
  count4 =0,
  count5 =0,
  count6 =0,
  count7 =0,
  count8 =0,
  count9 =0;

while (number > 0) {
  var digit = number % 10;
  number = parseInt(number / 10);

  switch (digit) {
    case 0:
      count0++;
      break;
    case 1:
      count1++;
      break;
    case 2:
      count2++;
      break;
    case 3:
      count3++;
      break;
    case 4:
      count4++;
      break;
    case 5:
      count5++;
      break;
    case 6:
      count6++;
      break;
    case 7:
      count7++;
      break;
    case 8:
      count8++;
        break;
    case 9:
      count9++
      break;
  }
}
// Display the frequencies of each digit
if (count0 > 0)
    console.log(` 0 appears ${count0} times`);
if (count1 > 0) 
      console.log(`1 appears ${count1} times`);
if (count2 > 0)
       console.log(`2 appears ${count2} times`);
if (count3 > 0)
      console.log(`3 appears ${count3} times`);
if (count4 > 0)
      console.log(` 4 appears ${count4} times`);
if (count5 > 0)
      console.log(` 5 appears ${count5} times`);
if (count6 > 0)
      console.log(` 6 appears ${count6} times`);
if (count7 > 0) 
      console.log(` 7 appears ${count7} times`);
if (count8 > 0) 
      console.log(` 8 appears ${count8} times`);
if (count9 > 0) 
      console.log(` 9 appears ${count9} times`);

// 19. Write a js program to enter a number and print it in words.

// 20. Write a js program to print all ASCII character with their values.

for( var i = 1 ; i <= 127 ; i++){
  console.log(i , "asci code " , String.fromCharCode(i));
}


// Q21. Write a js program to find power of a number using for loop.

var number = Number(prompt("enter a number:"));
var power = Number(prompt("enter power for number"))
var ans = 1;
for(var i = 1 ; i <= power ; i++){
    ans = number * ans ;
}
console.log("power of numbr is " , ans );

// 22. Write a js program to find all factors of a number.

var number = Number(prompt("Enter a number :"));
for (var i = 1 ;  i <= number ; i++){
  if(number % i === 0 ){
    console.log(i ,"is the factor of " , number);
    
  }

}

// Q23. Write a js program to calculate factorial of a number.

var number = Number(prompt("Eter a number :"));
 var fac = 1;
 for ( var i = number ; i > 0 ; i -- ){
       fac = fac * i;
 }
 console.log(`factorial of number is: ${fac}`);
 

// Q24. Write a js program to find HCF (GCD) of two numbers.

var a = Number(prompt("enter 1st number:"));
var b =  Number(prompt("enter 2nd number:"));
while (b !== 0 ){
  // isko temp ka use kr k bhi kr skty h 
    [a, b] = [ b , a % b ];
}
console.log(Math.abs(a));

// Q25. Write a js program to find LCM of two numbers.

// Q26. Write a js program to check whether a number is Prime number or not.

var number = Number(prompt("Enter a number:"));
var isPrime = true;

if (number <= 1){
   isPrime= false;
}

for ( var i = 2 ; i < number ; i++){
    if ( number % i === 0 ){
         isPrime = false ;
         break;
    }
    
}
if(isPrime){
  console.log(`${number} is prime`);

}
else{
  console.log(`${number} is not prime`);
}


// Q27. Write a js program to print all Prime numbers between 1 to n.

var number = Number(prompt("Enter a number upto print prime :"));
var isPrime = false;

for (var num = 0 ; num < number ; num++){
  isPrime = true;

  if(num <=1){
    isPrime = false;
  }

   for ( var i = 2 ; i < num ; i++){
    if ( num % i === 0 ){
         isPrime = false;
         break;
    }
}
if(isPrime){
  console.log(`${num} `);
}
}


// 28. Write a js program to find sum of all prime numbers between 1 to n.

var number = Number(prompt("Enter a number upto print prime :"));
var isPrime = false;
var sum = 0 ;
for(var num = 0 ; num < number ; num++){
  isPrime = true;
  if(num <= 1){
    isPrime = false;
  }

  for(var i = 2 ; i < num ; i++){
    if(num % i ===0 ){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    sum += num;
    }
}
console.log("sum of prime number is " , sum);

// 29. Write a js program to find all prime factors of a number.


// 30. Write a js program to check whether a number is Armstrong number or not.

var number = Number(prompt("enter a number :"));
var origninalNumber = number ;
var result = number;
var sum = 0;
var count = 0 ;
// 123=1+8+9=18
while(number > 0){
  number = parseInt(number / 10);
  count++ ;
}
console.log(count);

for(var i = 0 ; i < count ; i++){
  var lastDigit = origninalNumber % 10 ;
  origninalNumber = parseInt(origninalNumber / 10) ;
  sum += Math.pow(lastDigit, count)
}
console.log(sum);
if(sum === result){
  console.log(`${result} is amstrong number `);
}
else{
  console.log(`${result} is not amstrong number `);
}

// Q31. Write a js program to print all Armstrong numbers between 1 to n.

// 32. Write a js program to check whether a number is Perfect number

var number = Number(prompt("enter a  number :"));
var sum = 0 ;
for( var i = 0 ; i < number ; i++){
  if ( number % i === 0){
        sum += i
  }
}
console.log(sum);

if( number === sum ){
  console.log(`${number} is perfect number `);
}
else{
  console.log(`${number} is not perfect number `);
}

// 33. Write a js program to print all Perfect numbers between 1 to n.

var number = Number(prompt("enter a  number :"));

for ( var num = 1 ; num <= number ; num++ ){
      var sum = 0 ;
      for(var i = 1 ; i < num ; i++){
        if (num % i === 0){
            sum += i;
        }
      }
    if(sum === num ){
      console.log(`${num}`);
      
    }
}

// 34. Write a js program to check whether a number is Strong number or not.

var number = Number(prompt("enter a number "));
var originalNumber = number ;
var lastDigit ;
var sum = 0 ;
while(number > 0 ){
    lastDigit = number % 10;
    number = parseInt(number / 10 );
    var fac = 1;
   for(var i = lastDigit  ; i > 0  ; i-- ){
        fac = fac * i ;
   }
   sum += fac ;
}
if(sum === originalNumber){
  console.log(`${originalNumber} is strong number `);  
}
else{
  console.log(`${originalNumber} is not strong number `);
}

// 35. Write a js program to print all Strong numbers between 1 to n.

var number = Number(prompt("enter a number "));
var lastDigit ;
var sum ;
for (var num = 1 ; num <= number ; num++){
     var temp = num ;
     sum = 0 ;
  while(temp > 0 ){
    lastDigit = temp % 10;
    temp = parseInt(temp / 10 );
    var fac = 1;
   for(var i = lastDigit  ; i > 0  ; i-- ){
        fac = fac * i ;
   }
   sum += fac ;
}
if (sum === num){
  console.log(`${num} is strong number `);  
}

}

// 36. Write a js program to print Fibonacci series up to n terms.

var num = Number(prompt("Enter a numbr :"));
var a = 0 ;
var b = 1;
console.log(a);
for(i = 1 ; i < num ; i++){
    [a, b]= [ b  , a+b]
    console.log(a);
}