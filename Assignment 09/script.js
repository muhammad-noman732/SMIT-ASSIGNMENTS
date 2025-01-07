//                                  List of loop programming exercises


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

let asciiValue = 97; // ASCII value of 'a'

while (asciiValue <= 122) { // ASCII value of 'z' is 122
  console.log(String.fromCharCode(asciiValue)); // Convert ASCII to character
  asciiValue++; // Increment to the next ASCII value
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
while (num <=100){
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
while (num <=100){
    if(num %2 !== 0){
       sum2+= num;
    }
    num++;
}
console.log("sum :", sum2);