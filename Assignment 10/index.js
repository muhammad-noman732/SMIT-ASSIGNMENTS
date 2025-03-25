// String Exercise

//               note
//                   strings are immutable we cannot chnage value like
//                   str[0]= "H"
//             replace()=> only replace from first occurence dont know bout loop






// 1. Write a js program to find length of a string.

var str = "i love js ";
console.log(str.length);

// 2. Write a js program to copy one string to another string.

var originalString = "noman ";
var copiedString = originalString;
console.log("original string " , originalString);
console.log("copy string" , copiedString);



// 3. Write a js program to concatenate two strings.

var str1 = "hello gee  am noman in the ";
var str2 = "world of web developmet under guidnece of sir Naveed sarwar in SMIT";
console.log(str1.concat(str2));

// 4. Write a js program to compare two strings.
var str1 = "noman";
var str2 = " noman ";
if(str1.length === str2.length &&  str1.trim() === str2.trim()){
    console.log(`${str1} is equal to ${str2}`);
}
else{
    console.log(`${str1} is not equal to ${str2}`);
}

// 5. Write a js program to convert lowercase string to uppercase.

var name = "noman baghoor";
console.log(name.toUpperCase());

// 6. Write a js program to convert uppercase string to lowercase.

var name = "noman baghoor";
console.log(name.toLowerCase());

// 7. Write a js program to toggle case of each character of a string.
// 8. Write a js program to find total number of alphabets, digits or special character in a string.

var specialStr = "hello, gee i am muhamad noman! who? are you. my rolnmner is 799 , semeter is 5.";
var specialCharacters = "./!@#$%^&*()_+=.,/?";
var digit = "1234567890"
var alphabets = "ABCSEFGHIJKLMNOPQRSTUVWXYZabcdefghjklmnopqrstuvwxyz";
var specialCharacterCount = 0 ;
var alphbetsCount = 0 ;
var digitsCount = 0 ;
for (let i = 0 ; i < specialStr.length ; i++){

    if(specialCharacters.includes(specialStr[i])){
    specialCharacterCount += 1;
    }
else if(digit.includes(specialStr[i])){
        digitsCount += 1;
    }
else if(alphabets.includes(specialStr[i]) ){
    alphbetsCount += 1;
     }
}
console.log(`string contain ${specialCharacterCount} special characters ${digitsCount} digits 
    and ${alphbetsCount} alphabets`);

// 9. Write a js program to count total number of vowels and consonants in a string.

var str = prompt("enter a string ");
var vowels ="aeiouAEIOU";
var consonants = "BCDFGHJKLMNPQRSTVWZYZbcdfghjklmnvcxzaqrtyp";
var vowelsCount = 0 ;
var consonantCount = 0 ;
for (let i of str) {
    if(vowels.includes(str[i])){
        vowelsCount += 1 ;
    }
    else{
        consonantCount += 1
    }
}
console.log(`string containt ${vowelsCount} vowels and ${consonantCount} consonants`);
    

// 10. Write a js program to count total number of words in a string.

var str = " hello ge i am noman";
var count = 0 ;
for (const val in str) {
       count ++;
}
console.log("string contain " , count ,"words") ;

// 11. Write a js program to find reverse of a string.

var str = "nomani";
let start = 0 ;
let end = str.length - 1 ;
let reversedString = "";
        while(end >= start){
           reversedString += str[end];
           end-- ;
}
console.log(reversedString);
                      Alternative approach
    firstof all convert string into array 
var str= "nomani";
var charArry = str.split("");
charArry.reverse();
var  reversedStr = charArry.join("");
console.log(reversedStr);

// 12. Write a js program to check whether a string is palindrome or not.

var originalString = "madami";
var start = 0 ;
var end   = originalString.length -1 ;
var reversedString = "";
while ( end >= start){
    reversedString += originalString[end];
    end-- ;
}
if(originalString === reversedString){
    console.log("string is palindrom"); 
}
else{
    console.log("string is not palindrom");
}

// 13. Write a js program to reverse order of words in a given string

var str = "Hello world this is JavaScript";
var wordsArr = str.split(" ");
// console.log(wordsArr);
wordsArr.reverse(); // reverse the array
// console.log(wordsArr);
var reversedWordStr = wordsArr.join(" ");
console.log(reversedWordStr);

// 14. Write a js program to find first occurrence of a character in a given string.

var str = "oman";
var chr = "n";
for( let val in str){
    if(str[val] === chr){
         console.log("first occurence is " , val);
         break;   
    }
}
                     Alternative approach

var str = "oma";
var chr = "n";
var index = str.indexOf(chr);
if(index !== -1){
    console.log("first occurence is " , index);
}
else{
    console.log("character is not found ");
}


// 15. Write a js program to find last occurrence of a character in a given string.

var str = "noman";
var chr = "n";
for( let val = str.length-1 ; val >=0 ; val--){
    if(str[val] === chr){
        console.log("last occurence is " , val);
        break;
     }
}

               alternative approach

var str = "noman";
var chr = "n";
let index = str.lastIndexOf(chr);
if (index !== -1) {
    console.log("Last occurrence is", index);
} else {
    console.log("Character not found");
}

// 16. Write a js program to search all occurrences of a character in given string.

var str = "noman is a goood  in playing";
var chr = "a";
for( let val in str){
    if( str[val] === chr){
        console.log("occurence of  ",chr , "is" , val);    
    }
}
                     
// 17. Write a js program to count occurrences of a character in given string.

var str = "noman is a goood  in playing";
var chr = "a";
var count = 0 ;
for( let val of str){
    if(val === chr){
           count++ ; 
    }
}
console.log("character appears ", count, "times");

                     
// 18. Write a js program to find highest frequency character in a string.

var str = "i love js ,this is core of web";
var frequency ={};
var maxFrequency = 0;
var maxChar = ""; 
for ( let char of str ){
    if(char !==" "){
        frequency[char] = (frequency[char] || 0 ) + 1; 
    }
}

for(let char in frequency){
    if(frequency[char] > maxFrequency){
        maxFrequency = frequency[char];
        maxChar = char;
    }
}

console.log(`highest frequency character in a string is ${maxChar}`);

// 19. Write a js program to find lowest frequency character in a string.

var str = " react and trees will be the main part of your interview";
freqncy = {};
var lowestFrequecy = Infinity ;
var lowestChar = "";
for (const element of str) {
    if(element !== " " ){
         freqncy[element] = (freqncy[element ]|| 0 )+ 1
    }
}
    for (const key in freqncy) {
            if(freqncy[key] < lowestFrequecy ){
                 lowestFrequecy = freqncy[key];
                 lowestChar = key
            }
      }
    console.log(` lowest frequency character in a string is ${lowestChar}`);
    
// 20. Write a js program to count frequency of each character in a string.

var str = " react and trees will be the main part of your interview";
freqncy = {};
for (const element of str) {
    if(element !== " " ){
         freqncy[element] = (freqncy[element ]|| 0 )+ 1
    }
}
console.log(freqncy);


// 21. Write a js program to remove first occurrence of a character from string.

var str = "these are the tricky questions for problem solving skills";
var char = "a"
var newStr = str.replace (char , "")
console.log(newStr);

// 22. Write a js program to remove last occurrence of a character from string.

var str = "these are the tricky questions for problem solving skills";
var char = "s"
var newStr ;
var lastIndex= str.lastIndexOf(char);

if(lastIndex !== -1){
    newStr = str.slice(0 , lastIndex) + str.slice(lastIndex+1 );
}

console.log(newStr);


// 23. Write a js program to remove all occurrences of a character from string.

var str = "these are the tricky questions for problem solving skills";
var char = "s"
var newStr = str.split(char).join("");
console.log(newStr);

// 24. Write a js program to remove all repeated characters from a given string

var str = "hello world";
var charCount = {};
var   result = "";

 for (const element of str) {
      charCount[element] =(charCount[element] || 0) +1 ;
}

 for (const char of str) {
     if (charCount[char] == 1){
        result += char
     }
 }
 console.log(result);
 
// 25. Write a js program to replace first occurrence of a character with another in a string.

// 28. Write a js program to find first occurrence of a word in a given string
var str = "i am m noman in the world of web dev ";
var word = "web"
var wordsArr = str.split(" ")
var fisrtIndex = wordsArr.indexOf(word);
if(fisrtIndex != -1){
    console.log(fisrtIndex);
    
}

// 29. Write a js program to find last occurrence of a word in a given string.
// 30. Write a js program to search all occurrences of a word in given string.

