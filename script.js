
/*1- Write a program that allows the user to enter a number then print 

var number=window.prompt("Enter number");
if(number==5){
  console.log(number)
}
else(number==2) 
{
  console.log(number)
}

*/

/*
2- Write a program that takes a number from the user then print yes if that
number can divide by 3 and 4 at the same time, otherwise print no.

var num=12;
if(num%4==0 && num%3==0)
{
  console.log("yes")
}

var num_2 = 19;

if (num_2 % 4 == 0 && num_2 % 3 == 0) {
  console.log("yes");
} else {
  console.log("no");
}
*/
/*3- Write a program that allows the user to insert 2 integers then print the
max.

var minNum=5;
var maxNum=7;
if(maxNum>minNum){
  console.log(maxNum)
}
  var minNum=0;
var maxNum=2;
if(maxNum>minNum){
  console.log(maxNum)
}

*/
/*4- Write a program that allows the user to insert an integer then print
negative if it is negative number, otherwise print positive.


var positive_num = window.prompt("Enter a number");

if (positive_num == 5) {
  console.log("positive");
} else if (positive_num == -2) {
  console.log("negative");
}

*/
/*5- Write a program that takes 3 integers from the user then prints the max
element and the min element.


var first_elem=window.prompt("Enter a first num");
var second_elem=window.prompt("Enter a second num");
var third_elem=window.prompt("Enter a third elem");
var max = first_elem;
var min = first_elem;

// البحث عن القيمة العظمى
if (second_elem > max) {
  max = second_elem;
}
if (third_elem > max) {
  max = third_elem;
}
if (second_elem < min) {
  min = second_elem;
}
if (third_elem < min) {
  min = third_elem;
}
console.log(max + " is the max");
console.log(min + " is the min");

*/
/*6- Write a program that allows the user to insert an integer number then
check If a number is even or odd.

var find_num=window.prompt("enter a num");
if(find_num%2==0){
  console.log("even")
}
if(find_num%2==1){
  console.log("odd")
}
*/
/*7- Write a program that take character from user then if it is vowel chars
(a,e,I,o,u) then print vowel otherwise print consonant
Note: lowercase and uppercase are important.
var char=window.prompt("enter characters");
char = char.toLowerCase();
if(char=="a"||char=="e" || char=="o" ||char=="u"||char=="I")
{
  console.log("vowels")
}
else{
  console.log("constant")
}
*/
/*8- Write a program that allows the user to enter a number then print all the
numbers starting from 1 to the user entered 
var enter_num=window.prompt("enter num");
for(i=1;i<=enter_num;i++){
  console.log(i);
}
*/
/*9- Write a program that allows the user to insert an integer then print a
multiplication table up to 12.
var multiplication_num = window.prompt("enter num");
for (i = 1; i <= multiplication_num; i++) {

      console.log(multiplication_num + " x " + i + " = " + (multiplication_num * i));

  

}
      */
     /*10- Write a program that allows the user to enter a number then print all the
only evens numbers starting from 1 to the user entered number.
var enter_num = window.prompt("enter num");
for (i = 1; i <= enter_num; i++) {
  if(i%2==0)
  
  console.log(i);
}
  */
 /*11- Write a program that allows the user to enter two numbers and print the
result to make the second number power the first number.
var first_num=window.prompt("enter first num");
var second_num=window.prompt("enter second num");
console.log(second_num**first_num)

var first_mark = Number(window.prompt("Enter first mark:"));
var second_mark = Number(window.prompt("Enter second mark:"));
var third_mark = Number(window.prompt("Enter third mark:"));
var fourth_mark = Number(window.prompt("Enter fourth mark:"));
var fifth_mark = Number(window.prompt("Enter fifth mark:"));


var sum = first_mark + second_mark + third_mark + fourth_mark + fifth_mark;


var average = sum / 5;


var percent = (sum / 500) * 100;


console.log(
  "Total : " +
    sum +
  +""
    "Average :" +
    average +
    " and" +
    "Percentage:  " +
    percent +
    "%"
);

*/
/*12- Write a program to enter marks of five subjects and calculate total,
average and percentage.
Note: The total subject mark is from 100 and user should be able to enter 5
numbers; each number presents a subject mark.


// Declare variables to store the marks
let first_sub, second_sub, third_sub, fourth_sub, fifth_sub;

// Input marks for each subject using prompt
first_sub = Number(window.prompt("Enter first mark:"));
second_sub = Number(window.prompt("Enter second mark:"));
third_sub = Number(window.prompt("Enter third mark:"));
fourth_sub = Number(window.prompt("Enter fourth mark:"));
fifth_sub = Number(window.prompt("Enter fifth mark:"));
let total = 0;
total += first_sub;
total += second_sub;
total += third_sub;
total += fourth_sub;
total += fifth_sub;

let average = total / 5;

let percentage = (total / 500) * 100;


if (true) { 
    console.log("Total : " + total + ", Average : " + average.toFixed(1) + " and Percentage : " + percentage.toFixed(1) + "%");
}
*/
/*
13- Write a program to input the month number and print the number of
days in that month.
Ex: if the user enters 10 as a number ⇒ should log 31 days.
Ex: if the user enters 6 as a number ⇒ should log 30 


// Prompt user to enter the month number
let month = Number(window.prompt("Enter the month number (1-12):"));


if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
  console.log("31 days");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log("30 days");
} else if (month === 2) {
  console.log("28 days");
} else {
  console.log("Invalid month number. Please enter a number between 1 and 12.");
}
*/







/*
14- Write a program to enter marks of five subjects and find percentage
and grade. 


// 14- Program to enter marks of five subjects and show grade for each

var first_sub = Number(window.prompt("Enter first mark:"));
var second_sub = Number(window.prompt("Enter second mark:"));
var third_sub = Number(window.prompt("Enter third mark:"));
var fourth_sub = Number(window.prompt("Enter fourth mark:"));
var fifth_sub = Number(window.prompt("Enter fifth mark:"));

function printGrade(mark, subjectNumber) {
  var grade;

  if (mark >= 90 && mark <= 100) {
    grade = "A";
  } else if (mark >= 80 && mark < 90) {
    grade = "B";
  } else if (mark >= 70 && mark < 80) {
    grade = "C";
  } else if (mark >= 50 && mark < 70) {
    grade = "D";
  } else if (mark < 50 && mark >= 0) {
    grade = "F";
  } else {
    grade = "Invalid"; // For any incorrect input
  }

  if (grade !== "Invalid") {
    console.log(
      "Enter subject " +
        subjectNumber +
        " mark: " +
        grade +
        " and " +
        mark +
        "%"
    );
  } else {
    console.log("Invalid mark for subject " + subjectNumber);
  }
}

// Call function for each subject
printGrade(first_sub, 1);
printGrade(second_sub, 2);
printGrade(third_sub, 3);
printGrade(fourth_sub, 4);
printGrade(fifth_sub, 5);
*/





/*
Using switch case only and without array or object or any
built in methods, code the following questions:
15- Write a program to input the month number and print the number of
days in that month.

var month=Number(window.prompt("Enter Enter the month number (1-12)"));
switch(true){
  case(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12):
      console.log("31 days");
    break;
    case (month === 4 || month === 6 || month === 9 || month === 11):
      console.log("30 days");
  break;
  case(month === 2) :
  console.log("28 days");
  break;
 default:
  console.log("Invalid month number. Please enter a number between 1 and 12.");

}
  */
/*16- Write a program that take character from user then if it is vowel chars
(a,e,I,o,u) then print vowel otherwise print consonant
Note: lowercase and uppercase are important.
var character = window.prompt("Enter a character");

character = character.toLowerCase(); // نحول الحرف إلى صغير لتوحيد المقارنة

if (
  character === "a" ||
  character === "e" ||
  character === "i" ||
  character === "o" ||
  character === "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
*/
/*
17- Write a program that takes 2 integers from the user then prints the max
element.
var num1=window.prompt("Enter num one");
var num2 = window.prompt("Enter num two");
switch(true){
  case(num1>num2):
  console.log("Max"+"is"+num1);
  break;
  case(num2>num1):
    console.log("Max"+"is"+num2);
  break;
}
  */
 /*18- Write a program that allows the user to insert an integer number then
check If a number is even or odd.
var num = window.prompt("Enter num ");
switch (true) {
  case num % 2 == 0:
    console.log("Even");
    break;
  case num % 2 !== 0:
    console.log("Odd");
    break;
}
    */

/*19- Write a program that allows the user to insert an integer then print
negative if it is negative number, or print positive if it is a positive number or
zero if it is 
var num = window.prompt("Enter num ");
switch (true) {
  case num > 0:
    console.log("positive");
    break;
  case num < 0:
    console.log("negative");
    break;
  case num == 0:
    console.log("zero");
    break;
}
    */


/*
20- Write a program to create Simple Calculator. 

// إدخال الأرقام والعامل من المستخدم
var num1 = Number(window.prompt("Enter the first number:"));
var num2 = Number(window.prompt("Enter the second number:"));
var operator = window.prompt("Enter operator (+, -, *, /):");

// استخدام switch لتنفيذ العملية الحسابية
switch (operator) {
  case "+":
    console.log("Result: " + (num1 + num2));
    break;

  case "-":
    console.log("Result: " + (num1 - num2));
    break;

  case "*":
    console.log("Result: " + (num1 * num2));
    break;

  case "/":
    if (num2 !== 0) {
      console.log("Result: " + (num1 / num2));
    } else {
      console.log("Cannot divide by zero.");
    }
    break;

  default:
    console.log("Invalid operator. Please enter +, -, * or /");
}
    */
