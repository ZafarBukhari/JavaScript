// CHAPTER-1 (Alerts)
// ==== Chapter # 1 and Task # 1
// alert("Welcome to my portfolio page.");

// ==== Chapter # 1 and Task # 2
// alert("Error! Please enter a valid password.");

// ==== Chapter # 1 and Task # 3
// alert("Welcome to JS Land... \nHappy Coding!");

// ==== Chapter # 1 and Task # 4
// alert("Welcome to JS Land...");
// alert("Happy Coding!")

// ==== Chapter # 1 and Task # 5
// console.log("popo... I can run JS through my web browser's web console.")

// ====================================

// CHAPTER-2 (Variables for Strings)
// ==== Chapter # 2 and Task # 1
// var userName;

// ==== Chapter # 2 and Task # 2
// var myName = "Syed Zafar Abbas Bukhary";

// ==== Chapter # 2 and Task # 3
// var message;
// message = "popo World";
// alert(message);

// ==== Chapter # 2 and Task # 4
// var studentName = "Zafar Abbas";
// var age = 35;
// var course = "Certified Mobile Application Development";
// alert(studentName);
// alert(age + " years old");
// alert(course);

// ==== Chapter # 2 and Task # 5
// var pizzaName = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(pizzaName);

// ==== Chapter # 2 and Task # 6
// var email = "bukhary72pk@yahoo.com";
// alert("My email address is " + email);

// ==== Chapter #2 and Task # 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// ==== Chapter # 2 and Task # 8
// var greetMsg = "Yah! I can write HTML content through JavaScript";
// document.write(greetMsg);

// ==== Chapter # 2 and Task # 9
// var msg = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(msg);

// ====================================

// CHAPTER-3 (Variables for Numbers)
// ==== Chapter # 3 and Task # 1
// age = 35;
// alert("I am " + age + " years old.");

// ==== Chapter # 3 and Task # 2
// numOfVisits = 14;
// alert("You've visited this site " + numOfVisits + " times.");

// ==== Chapter # 3 and Task # 3
// var birthYear = 1990;
// alert("My birth year is " + birthYear + "\nData type of my declared variable is " + typeof(birthYear));


// ==== Chapter # 3 and Task # 4
// var visitorName = "John Doe";
// var productTitle = "T-Shirt(s)";
// var quantityOrdered = 5;
// document.write(visitorName + " ordered " + quantityOrdered + " " + productTitle + " on XYZ Clothing Store")

// ====================================

// CHAPTER-4 (Variable Names Legal andpopegal)
// ==== Chapter # 4 and Task # 1
// var firstName, middleName, lastName;

// ==== Chapter # 4 and Task # 2
// Five legal Variable Names
// var courseTitle;
// var $batch;
// var name1;
// var Session;
// var _age = 12;

// Fivepopegal Variable Names
// var 1name;
// var %class;
// var first name;
// var var;
// var course*name;

// ==== Chapter # 4 and Task # 3
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain letters, numbers, '$' sign and '_' sign. For example: $my_1stVariable<br>");
// document.write("Variables must begin with a letter, '$' sign or '_' sign. For example: $name, _name or name<br>");
// document.write("Variable names are case-sensitive.<br>");
// document.write("Variable names should not be JS keywords.")


// ====================================

// CHAPTER-5 (Math expressions: Familiar operators)
// ==== Chapter # 5 and Task # 1
// var num1 = 3;
// var num2 = 5;
// var total = num1 + num2;
// document.write("Sum of " + num1);
// document.write(" and " + num2);
// document.write(" is " + total);

// ==== Chapter # 5 and Task # 2 (Substraction)
// var num1 = 3;
// var num2 = 5;
// var total = num2 - num1;
// document.write("Substrac " + num1);
// document.write(" from " + num2);
// document.write(" and result is " + total);


// ==== Chapter # 5 and Task # 2 (Multiplication)
// var num1 = 3;
// var num2 = 5;
// var total = num1 * num2;
// document.write("Multiply " + num1);
// document.write(" with " + num2);
// document.write(" and result is " + total);


// ==== Chapter # 5 and Task # 2 (Division)
// var num1 = 3;
// var num2 = 5;
// var total = num2 / num1;
// document.write("Divide " + num2);
// document.write(" with " + num1);
// document.write(" and result is " + total);


// ==== Chapter # 5 and Task # 2 (Modulus)
// var num1 = 3;
// var num2 = 5;
// var total = num2 % num1;
// document.write("Modulus of " + num2);
// document.write(" by dividing " + num1);
// document.write(" is " + total);


// ==== Chapter # 5 and Task # 3
// var num;
// document.write("Value after variable declaration is " + num);

// num = 5;
// document.write("<br>")
// document.write("Initial value: " + num);

// num += 1;
// document.write("<br>")
// document.write("Value after increment is: " + num);

// num = num + 7;
// document.write("<br>")
// document.write("Value after addition is: " + num);

// num -= 1;
// document.write("<br>")
// document.write("Value after decrement is: " + num);

// num = num % 3;
// document.write("<br>")
// document.write("The remainder is : " + num);


// ==== Chapter # 5 and Task # 4
// var ticketCost = 600;
// var ticketSale = 5;
// document.write("Total cost to buy " + ticketSale);
// document.write(" tickets to a movie is " + ticketCost * ticketSale);
// document.write("PKR")


// ==== Chapter # 5 and Task # 5
// for (var i = 1; i <= 10; i++) {
//   document.write("4" +  "\t\tx" + "\t\t" + i + "\t\t" + "\t\t=" + "\t\t" + 4*i + "<br>");
// }


// ==== Chapter # 5 and Task # 6
// var celsius = +prompt("Enter Temperture in Celsius degree", "25");
// var cToF = (celsius * 9/5) + 32;       //conversion to fahrenheit
// document.write(celsius + "&degC is " + cToF + "&degF");

// var fahrenheit = +prompt("Enter Temperture in Fahrenheit degree", "98.6");
// var fToC = (fahrenheit - 32) * 5/9;    //conversion to celsius
// document.write("<br>")
// document.write(fahrenheit + "&degF is " + fToC + "&degC");


// ==== Chapter # 5 and Task # 7
// Checkout Process of a Shopping Cart
// var priceItem1 = 650;
// var priceItem2 = 100;
// var shippingCharges = 100;

// var qtyOrderedItem1 = +prompt("Please order quantity of item-1","2");
// var qtyOrderedItem2 = +prompt("Please order quantity of item-2","2");
// var totalCost = (priceItem1 * (+qtyOrderedItem1)) + (priceItem2 * (+qtyOrderedItem2)) + shippingCharges;

// document.write("<h1>Shopping Cart</h1>")
// document.write("<br>");
// document.write("Price of Item-1 is " + priceItem1);
// document.write("<br>");
// document.write("Quantity of Item-1 is " + qtyOrderedItem1);

// document.write("<br>");
// document.write("Price of Item-2 is " + priceItem2);
// document.write("<br>");
// document.write("Quantity of Item-2 is " + qtyOrderedItem2);

// document.write("<br>");
// document.write("Shipping charges " + shippingCharges);

// document.write("<br>");
// document.write("<h4>Total cost of your order is " + totalCost + "</h4>");


// ==== Chapter # 5 and Task # 8
// Marks Sheet
// var totalMarks = 980;
// var obtainedMarks = +prompt("Enter marks obtained", "655");
// for (var i = 0; i < totalMarks; i++){
//     if (obtainedMarks > totalMarks) {
//         alert("Enter obtained marks maximum upto total marks i.e. " + totalMarks);    
//         obtainedMarks = +prompt("Enter marks obtained", "655");
//     }    
// }

// var percentMarks = ((obtainedMarks / totalMarks) * 100).toFixed(2);

// document.write("<h1>Marks Sheet</h1>");
// document.write("<br>");

// document.write("Total marks: " + totalMarks);
// document.write("<br>");
// document.write("Marks obtained: " + obtainedMarks);
// document.write("<br>");
// document.write("Percentage: " + percentMarks + "%");

// ==== Chapter # 5 and Task # 9
// Currency conversion
// var poparRate = 104.80;
// var riyalRate = 28;
// var popar = 10;
// var riyal = 25;
// document.write("Total Currency in PKR: " + ((popar * poparRate) + (riyal * riyalRate)));

// ==== Chapter # 5 and Task # 10
// var x = 10;
// document.write("<h3>Result is: " + (x + 5) * 10/2 + "</h3>");



// ==== Chapter # 5 and Task # 11
// Age Calculator
// var currentYear = 2020;
// var birthYear = 1992;
// var age = currentYear - birthYear;
// document.write("<h3>You're " + age + " years old. </h3>");


// ==== Chapter # 5 and Task # 12

// var radius = 20;
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * (radius * radius);

// document.write("<h1>The Geometrizer</h1>")
// document.write("Radius of a circle is: " + radius);

// document.write("<br>");
// document.write("The circumference is: " + circumference);

// document.write("<br>");
// document.write("The area is: " + area);


// ==== Chapter # 5 and Task # 13
// Lifetime Supply Calculator

// var favouriteSnake = "chocolate chip";
// var currentAge = 15;
// var maxAge = 65;
// var snakePerDay = 3;

// document.write("<h1>The Lifetime Supply Calculator</h1>");

// document.write("Favourite snake: " + favouriteSnake);
// document.write("<br>");
// document.write("Current age: " + currentAge);
// document.write("<br>");
// document.write("Amount of snakes per day: " + snakePerDay);

// document.write("<br>");
// document.write("You pop need " + (maxAge - currentAge) * 3 + " " + favouriteSnake + " to last you until the ripe old age of " + maxAge);

// ====================================

// CHAPTER-6 ~ 8 (Math expressions, Concatenation)

// ==== Chapter # 6~8 and Task # 1
// var a = 10;
// document.write("Result:");
// document.write("<br>");
// document.write("The value of a is: " + a);
// document.write("<br>........................................")

// ++a;
// document.write("<br><br>");
// document.write("The value of ++a is: " + a);

// a;
// document.write("<br>");
// document.write("Now the value of a is: " + a);

// --a;
// a++;
// document.write("<br><br>");
// document.write("The value of a++ is: " + a);

// a++;
// document.write("<br>");
// document.write("Now the value of a is: " + a);

// --a;
// document.write("<br><br>");
// document.write("The value of --a is: " + a);
// document.write("<br>");
// document.write("Now the value of a is: " + a);

// a++;
// a--;
// document.write("<br><br>");
// document.write("The value of a-- is: " + a);

// --a;
// document.write("<br>");
// document.write("Now the value of a is: " + a);


// ==== Chapter # 6~8 and Task # 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--
// /*     3   =(2-1)-(1-1)+(1+0)+(1)   */

// document.write("a is " + a);
// document.write("<br> b is " + b);
// document.write("<br> result is " + result);

// document.write("<br><br> <h3> Explanation at Each Step:</h3>");

// document.write("At Step-1, value of --a is: 1");
// document.write("<br> Next, value of --a - --b is: 1");
// document.write("<br> Next, value of --a - --b + ++b is: 2");
// document.write("<br> At last, value of --a - --b + ++b + b-- is: 3")

// document.write("<h3> Sequence of var a:</h3>")

// a = 2;
// document.write("Initial value of a is " + a);

// --a;
// document.write("<br> Then value by --a is " + a);


// document.write("<br><br> <h3>Sequence of var b:</h3>")

// b = 1;
// document.write("Initial value of b is " + b);
// --b;
// document.write("<br> Then value by --b is " + b);

// ++b;
// document.write("<br> Then value by ++b is " + b);

// b--;
// document.write("<br> At last, value by b-- is " + b);


// ==== Chapter # 6~8 and Task # 3
// var name = prompt("Enter your name","Your name");
// document.write("<h3> Hi " + name + " you're welcome here.</h3>")


// ---- Task - 4 is empty in given assignment questions


// ==== Chapter # 6~8 and Task # 5
// var num = +prompt("Enter table number","5");
// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + num * i + "<br>");
// }

// ==== Chapter # 6~8 and Task # 6

// var subj1 = prompt("Enter subject-1", "Subject-1");
// var subj2 = prompt("Enter subject-2", "Subject-2");
// var subj3 = prompt("Enter subject-3", "Subject-3");
// var subjects = [];
// subjects.push(subj1); 
// subjects.push(subj2);
// subjects.push(subj3); 
// for (var i = 0; i < subjects.length; i++){    
//     // prompt("Enter obtained marks in "+ subjects[i]);

//     // console.log(subjects[i]);
//     subjects[i].values= prompt("Enter obtained marks of "+ subjects[i]);
//     document.write(subjects[i] + "  " + subjects.values);
// }
// var totalMarks = 300;
// // document.write(subj1 + ", " + subj2 + ", " + subj3);
// // document.write(subjects);

// ====================================

// CHAPTER-9 ~ 11 (User Input & Conditional Statements)

// ==== Chapter # 9~11 and Task # 1
// var city = prompt("Enter your city name: ","Name of City");
// city = city.toLowerCase();
// if (city === "karachi"){
//     document.write("Welcome to city of lights");
// }

// ==== Chapter # 9~11 and Task # 2
// var gender = prompt("Enter your gender","Your gender");
// gender = gender.toLowerCase();
// if(gender === "male"){
//     document.write("Good Morning Sir.");
// }else{document.write("Good Morning Ma'am.");}


// ==== Chapter # 9~11 and Task # 3
// var trafficSignal = prompt("Enter any of traffic signal color", "Enter any color from 'Red', 'popow', 'Green'","Red, popow or green");
// trafficSignal = trafficSignal.toLowerCase();
// if(trafficSignal === "red" || trafficSignal === "popow" || trafficSignal === "green"){
//     if(trafficSignal === "red"){
//         document.write("Must stop");
//     }else if(trafficSignal === "popow"){
//         document.write("Ready to move");
//     }else{document.write("Move now")}
// }else{
//     trafficSignal = prompt("Select any of color from 'Red', 'popow', 'Green'","Red, popow or green");
// }



// ==== Chapter # 9~11 and Task # 4
// var remFuel = +prompt("Enter remaining fuel","Remaing fuel in ltrs");
// if(remFuel < .25){
//     document.write("Please re-pop the fuel in your car.");
// }



// ==== Chapter # 9~11 and Task # 5
// === Section - a:

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// } // output of section-1 is: condition fulpoped, statement executed.

// === Section - b:
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// } // OUTPUT of section-2 is: Condition not fulpoped, hence no execution of if statement.


// === Section - c:
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true"); // false
// }
// if (c === 13){
//     alert("condition 2 is true");  // true
// }
// if (++c < 14){
//     alert("condition 3 is true");  // false
// }
// if(c === 14){
//     alert("condition 4 is true");  // true
// }


// === Section - d:
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }  // conditions fulpoped, so if statements executes.


// === Section - e:
// if (true){
//     alert("True");
//     }if (false){
//         alert("False");
//     }  // true condition is fulpoped, hence exectues "True"


// === Section - f:
// if("car" < "cat"){
//     alert("car is spoper than cat");
//     }// ASCII Code of 't' is greater than 'r', so 'car' is spoper than 'cat'


// ==== Chapter # 9~11 and Task # 6
// var totalMarks = +prompt("Enter total marks","Total Marks");
// var obtainedMarks = +prompt("Enter obtained marks ", "Obtained Marks");
// var perCent = ((obtainedMarks / totalMarks) * 100).toFixed(2);

// document.write("<h1>Marks Sheet</h1>")
// document.write("<br> Total Marks: " + totalMarks);
// document.write("<br> Marks obtained: " + obtainedMarks);
// document.write("<br> Percentage: " + perCent + "%");
// if(perCent >= 80){
//     document.write("<br> Grade: A-one");
//     document.write("<br> Remarks: Expopent");
// }else if(perCent < 80 && perCent >= 70 + "%"){
//     document.write("<br> Grade: A");
//     document.write("<br> Remarks: Good");
// }else if(perCent < 70 && perCent >= 60 + "%"){
//     document.write("<br> Grade: B");
//     document.write("<br> Remarks: You need to imporve");
// }else{
//     document.write("<br> Grade: Fail");
//     document.write("<br> Remarks: Sorry");
// }


// ==== Chapter # 9~11 and Task # 7
//==== Guess Number Game ====

// var secretNum = (Math.random() * 11);
// secretNum = Math.floor(secretNum);
// var guessNum = +prompt("Guess any number upto 10","Guess any number upto 10");
// document.write("<h1>Guess Number Game</h1>")
// if(guessNum === secretNum){
//     document.write("Bingo! Correct answer");
// }else if(guessNum + 1 === secretNum) {
//     document.write("Close enough to the correct answer");
// }else{
//     document.write("Oh ho! try any other number");
// }



// ==== Chapter # 9~11 and Task # 8
// ==== Check Number Divisible by 3 ===

// var givenNum = +prompt("Enter any number","Enter number");
// if(givenNum % 3 === 0){
//     document.write("Number " + givenNum + " is divisible by 3");
// }else{
//     document.write("Number " + givenNum + " is not divisible by 3");
// }


// ==== Chapter # 9~11 and Task # 9
// document.write("<h1>Check Odd / Even Number</h1>")
// var givenNum = +prompt("Enter any number","Enter number");
// if(givenNum % 2 !== 0){
//     document.write("Number " + givenNum + " is an odd number");
// }else{
//     document.write("Number " + givenNum + " is an even number");
// }



// ==== Chapter # 9~11 and Task # 10
// document.write("<h1>Check Temperature</h1>")
// var temp = +prompt("Enter temperature between 10 ~ 40 Degree","37");
// if(temp >= 40){
//     document.write("It is too hot outside.");
// }else if(temp < 40 && temp >= 30){
//     document.write("The Weather today is Normal.");
// }else if(temp < 30 && temp >= 20){
//     document.write("Today’s Weather is cool.");
// }else{
//     document.write("OMG! Today’s weather is so Cool.")
// }



// ==== Chapter # 9~11 and Task # 11
// document.write("<h1>Calculator</h1>")

// var firstNum = prompt("Enter first number","40");
// firstNum = Number(firstNum);
// var secondNum = prompt("Enter second number","78");
// secondNum = Number(secondNum);
// var operator = prompt("Enter any operator /(+,-,*,/,%/)");
// if(operator == "+"){
//    document.write(firstNum + " " + operator + " " + secondNum + " = " + Number(firstNum) + Number(secondNum));
// }else if(operator === "-"){
//     document.write(firstNum + " " + operator + " " + secondNum + " = " + Number(firstNum) - Number(secondNum));
// }  // yet incomplete

// ====================================

// CHAPTER-12 ~ 13 (If, Else & if, else if, Testing of Condition)

// ==== Chapter # 12~13 and Task # 1
// === Check whether first letter is UpperCase letter, LowerCase Letter or any number

// document.write("<h1>First Letter Checking Program</h1>")
// var userInput = prompt("Enter UpperCase letter, LowerCase letter or a Number","A or a or 5");
// if (userInput.charCodeAt(0) >= 48 && userInput.charCodeAt(0) <= 57 ){
//     document.write("Your given input is a Number.");
// }else if (userInput.charCodeAt(0) >= 65 && userInput.charCodeAt(0) <= 90){
//     document.write("Your given input is an Upper Case Letter.");
// }else if(userInput.charCodeAt(0) >= 97 && userInput.charCodeAt(0) <= 122){
//     document.write("Your given input is a Lower Case Letter.");
// }else{
//     alert("Invalid entry. Please enter again.");
//     document.write("Invalid entry.");
// }


// ==== Chapter # 12~13 and Task # 2

// document.write("<h1>Integer Checking Program</h1>")
// var var1 = prompt("Enter first integer.","35");
// var var2 = prompt("Enter second integer","50");
// if (parseInt(var1) === parseInt(var2)){
//     document.write(var1 + " is equal to " + var2);
// }else if (parseInt(var1) > parseInt(var2)){
//     document.write(var1 + " is greater than " + var2);
// }else {
//     document.write(var1 + " is less than " + var2);
// }


// ==== Chapter # 12~13 and Task # 3
// === check entered number is positive, negative or zero number====

// var inputNum = prompt("Enter any positive, negative or zero number","5 or -3 or 0");
// if(Math.sign(inputNum) === 0){
//     document.write("You entered Zero");
// }else if(inputNum.charAt(0) === "-"){
//     document.write("You entered a negative number");
// }else if (inputNum.charAt(0) !== "-"){
//     document.write("Yor enter a positive number");
// }else{
//     alert("Enter correct number.");
// }


// ==== Chapter # 12~13 and Task # 4
// === Vowel Checking Program ====

// var checkLetter = prompt("Enter a single letter","Enter single letter");
// if (checkLetter === "a" ||
//     checkLetter === "e" ||
//     checkLetter === "i" ||
//     checkLetter === "o" ||
//     checkLetter === "u"){
//         document.write("True");
// } else {
//     document.write("False");
// }


// ==== Chapter # 12~13 and Task # 5
// === Password Match Program ====

// var password = prompt("Enter your password","Enter password");
// var verifyPassword = prompt("Confirm Password","Confirm password");
// if (password === ""){
//     alert("Enter your password");
//     verifyPassword = prompt("Confirm Password","Confirm password");
// }else if (password === verifyPassword){
//     document.write("Correct! The password you entered matches the original password");
// }else{
//     document.write("Incorrect password");
// }

// ==== Chapter # 12~13 and Task # 6
// === Fix Program ====

// var greetDay = "Good day";   
// var greetEvening = "Good eveining";
// var hour = 13;
// if (hour < 18) {
//     document.write(greetDay);
// }else {
//     document.write(greetEvening);
// }


// ==== Chapter # 12~13 and Task # 7
// === Time Checking ====

// var time = +prompt("Enter time in 24 hours format","1900");
// if(time >= 0000 && time < 1200){
//     document.write("Good morning!");
// }else if(time >= 1200 && time < 1700){
//     document.write("Good afternoon!");
// }else if(time >= 1700 && time < 2100){
//     document.write("Good evening!");
// }else if(time >= 2100 && time <=2359){
//     document.write("Good night!");
// }else{
//     alert("Enter time in 24-hrs format");
//     time = +prompt("Enter time in 24 hours format","1900");
// }


// ====================================

// CHAPTER-14 ~ 16 (Arrays)

// ==== Chapter # 14~16 and Task # 1
// === Javascript Array using Litral notaiton

// var students = [];
// console.log(students);
// console.log(students);


// ==== Chapter # 14~16 and Task # 2
// === Javascript Array using Object notaiton

// var studentRecord = {};
// console.log(studentRecord);
// console.log(typeof studentRecord);


// ==== Chapter # 14~16 and Task # 3
// === Declare & Inialize a string Array

// var students = ["Zafar", "Ismail", "Adnan", "Ali"];


// ==== Chapter # 14~16 and Task # 4
// === Declare & Inialize a number Array

// var ages = [35, 30, 28, 47];


// ==== Chapter # 14~16 and Task # 5
// === Declare & Inialize a boolean Array

// var boolArray = [true, false, false, true, false];


// ==== Chapter # 14~16 and Task # 6
// === Declare & Inialize a mixed Array

// var studentRecord = ["Zafar", "Abbas", 38, true];


// ==== Chapter # 14~16 and Task # 7
// === Declare & Inialize an Array with educations

// var quals = ["SSC", "HSC", "BCS", "BS", "B.Com", "MS", "M.Phil", "PhD"];
// for (var i = 0; i < quals.length; i++){
//     document.write((i+1) + ") " + quals[i] + "<br>");
// }


// ==== Chapter # 14~16 and Task # 8
// ==== Students Marks Sheet ====

// document.write("<h1>Students Marks Sheet</h1>");
// var students = ["Michael", "John", "Tony"];
// var scores = [320, 230, 480];
// var totalScore = 500;
// for (var i = 0; i < students.length; i++){
//     document.write("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + ((scores[i] / totalScore) * 100) + "% <br>");    
// }


// ==== Chapter # 14~16 and Task # 9
// ==== Students Marks Sheet ====

// document.write("<h1>Addition / Delition from Array</h1>")
// var colors = ["red","green", "blue"]; // initial declaration & inialization
// document.write(colors);  // display of initial array elements

// //Section-A:   addition at beginning
// colors.unpop(prompt("Enter color to add at beginning","Enter color name to add at beginning").toLowerCase());
// document.write("<br>" + colors); // display after addition at beginning

//Section-B:   addition at End
// colors.push(prompt("Enter color to add at beginning","Enter color name to add at beginning").toLowerCase());
// document.write("<br><br>" + colors); // display after addition at end

//Section-C:   addition of two more colors at Beginning
// colors.unpop(prompt("Enter color to add at beginning","Enter color name to add at beginning").toLowerCase());
// colors.unpop(prompt("Enter color to add at beginning","Enter color name to add at beginning").toLowerCase());
// document.write("<br><br>" + colors); // display after adding two more colors at beginning

//Section-D:   Delition of color from Beginning
// colors.pop();
// document.write("<br><br>" + colors); // display after deleting color from beginning

//Section-E:   Delition last color from array
// colors.pop();
// document.write("<br><br>" + colors); // display after deleting last color

//Section-F:   Ask from user and insert color at desired place
// colors.splice(prompt("Enter insertion index and colors to insert","1, 0, 'black'").toLowerCase());
// document.write("<br><br>" + colors); 

//Section-G:   Ask from user and delete color from desired index
// colors.splice(prompt("Enter insertion and no of colors to delete","1, 1"));
// document.write("<br><br>" + colors); 


// ==== Chapter # 14~16 and Task # 10
// ==== Store Students Marks in an Array & Sort in ascending order ====

// var studentsMarks = [320, 230, 480, 120];
// document.write("Score of Students: "+ studentsMarks);
// document.write("<br> Ordered Score of Students: "+ studentsMarks.sort());



// ==== Chapter # 14~16 and Task # 11
// ==== Create array of cities and create another with selected citeis from it====

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2,4);
// document.write("Cities list: <br>" + cities);
// document.write("<br><br> Selected cities list: <br>" + selectedCities);



// ==== Chapter # 14~16 and Task # 12
// === create array and join it using join() function ===

// var arr = ["This", "is", "my", "cat"];
// document.write("Array: <br>" + arr);
// document.write("<br><br> String: <br>" + arr.join(" "));


// ==== Chapter # 14~16 and Task # 13
// === Create an Array and Delete items one by one with FIFO Method ===

// var devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("Devices: <br>" + devices);

// var poppedItem = devices.pop();
// document.write("<br><br> Out: <br>" + poppedItem);

// var poppedItem = devices.pop();
// document.write("<br><br> Out: <br>" + poppedItem);

// var poppedItem = devices.pop();
// document.write("<br><br> Out: <br>" + poppedItem);

// var poppedItem = devices.pop();
// document.write("<br><br> Out: <br>" + poppedItem);

// ==== Chapter # 14~16 and Task # 14
// === Create an Array and Delete items one by one with LIFO Method ===

// var devices = ["keyboard", "mouse", "printer", "monitor"];

// document.write("Devices: <br>" + devices);

// var poppedItem = devices.pop();
// document.write("<br><br> Out: <br>" + poppedItem);

// var poppedItem = devices.pop();
// document.write("<br><br> Out: <br>" + poppedItem);

// var poppedItem = devices.pop();
// document.write("<br><br> Out: <br>" + poppedItem);

// var poppedItem = devices.pop();
// document.write("<br><br> Out: <br>" + poppedItem);


// ==== Chapter # 14~16 and Task # 15
// === Create an Array of Mobile Phone menufacturers ===

//  incomplete question, hence not attempted



// ====================================

// CHAPTER-17 ~ 20 (Arrays & Loops)

// ==== Chapter # 17~20 and Task # 1
// === Declare and Initialize a multi-dimensional array ===

// var fullNames = [];
// fullNames = [["Zafar", "Ismail", "Muhammad"],
//             ["Abbas", "Khan", "Adnan"]];


// ==== Chapter # 17~20 and Task # 2
// === Declare and Initialize a multi-dimensional array ===

// var arr = [[0,1,2,3],
//           [1,0,1,2],
//           [2,1,0,1]];


// ==== Chapter # 17~20 and Task # 3
// === Write a program to print numeric counting from 1 to 10 ===

// for(var i = 1; i < 11; i++){
//     document.write(i + "<br>");
// }


// ==== Chapter # 17~20 and Task # 4
// === program to print multiplication table of any number ===

// var tableNum = +prompt("Enter a Number to show its multiplication table","5");
// var maxNum = +prompt("Enter length of multiplication table","15");
// document.write("<h1>Table of " + tableNum + "</h1>")
// for (var i = 1; i <= maxNum; i++){
//     document.write(tableNum + " x " + i + " = " + tableNum * i + "<br>");
// }


// ==== Chapter # 17~20 and Task # 5
// === Write a program to print items of array ===

// var fruits = ["apple", "banana", "mango", " organe", "strawberry"];
// for (var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
//     document.write("Element at index " + i + " is " + fruits[i]);
// }

// ==== Chapter # 17~20 and Task # 6
// === Generate the series in your browser ===

// // Counting upto 15
// var counting = [];
// for (var i = 1; i <= 15; i++){
//     counting += i + ",";    
// }
// document.write("<h3>Counting:</h3>" + counting);

// // Reverse Counting from 10 to 1
// var counting = [];
// for (var i = 10; i >= 1; i--){
//     counting += i + ","; 
// }
// document.write("<h3>Reverse Counting:</h3>" + counting);

// // Even numbers upto 20
// var counting = [];
// for (var i = 0; i <= 20; i++){
//     if(i % 2 === 0){
//         counting += i + ",";
//     }
// }
// document.write("<h3>Even:</h3>" + counting);



// // Odd numbers upto 20
// var counting = [];
// for (var i = 0; i <= 20; i++){
//     if(i % 2 !== 0){
//         counting += i + ",";
//     }
// }
// document.write("<h3>Odd:</h3>" + counting);


// // Series of numbers upto 20k
// var counting = [];
// for (var i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         counting += i + "k,";
//     }
// }
// document.write("<h3>Series:</h3>" + counting);



// ==== Chapter # 17~20 and Task # 7
// === Item Search Program at Bakery ===

// // document.write("<h1>Bakery Items Query System</h1>");
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var desiredItem = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i=0; i<items.length; i++){
//     if(items[i] === desiredItem){
//         document.write(desiredItem + " is <b>available</b> at index " + i + " in our bakery");
//     }else{
//         document.write("We are sorry. " + desiredItem + " is <b>not available</b> in our bakery");
//     }
// }


// ==== Chapter # 17~20 and Task # 8
// === Identify the largest number in an Array ===

// var num = [24,53,78,91,12];
// document.write("Array Items: " + num);
// document.write("<br> The largest number is " + Math.max(...num));


// ==== Chapter # 17~20 and Task # 9
// === Identify the smallest number in an Array ===

// var num = [24,53,78,91,12];
// document.write("Array Items: " + num);
// document.write("<br> The smallest number is " + Math.min(...num));


// ==== Chapter # 17~20 and Task # 10
// === Identify the smallest number in an Array ===

// for (var i = 1; i <= 100; i++){
//   if (i % 5 === 0){
//     document.write(i + ",");
//   }  
// }


// ====================================

// CHAPTER-21 ~ 25 (String Methods)

// ==== Chapter # 21~25 and Task # 1
// === Concatenation of Strings ===

// var firstName = prompt("Enter your first name","first name");
// var lastName = prompt("Enter your last name","last name");
// var fullName = firstName + " " + lastName;
// document.write("Welcome to you " + fullName);


// ==== Chapter # 21~25 and Task # 2
// === Measuring length of string ===

// var mobile = prompt("Enter your favourite mobile phone with model","Mobile phone");
// document.write("My favourite mobile is: " + mobile);
// document.write("<br> Length of string: " + mobile.length);


// ==== Chapter # 21~25 and Task # 3
// === Locating specific letter 'n' with index_number ===

// var x = "Pakistani"
// document.write("String: " + x);
// document.write("<br> Index of 'n'is: " + x.indexOf('n'));


// ==== Chapter # 21~25 and Task # 4
// === Locating last index of 'l' ===

// var myStr = "Hello World";
// document.write("String: " + myStr);
// document.write("<br> Last index of 'l' is: " + myStr.lastIndexOf('l'));


// ==== Chapter # 21~25 and Task # 5
// === Locating 3rd index of word 'Pakistani' ===

// var myStr = "Pakistani";
// document.write("String: " + myStr);
// document.write("<br> Character at index '3' is: " + myStr.slice(3,4));


// ==== Chapter # 21~25 and Task # 6
// === Concatenation using concat() ===

// var firstName = prompt("Enter your first name","first name");
// var lastName = prompt("Enter your last name","last name");
// document.write("Welcome to you " + firstName.concat(lastName));


// ==== Chapter # 21~25 and Task # 7
// === Replacing 'hyder' with 'islam ===

// var city = "Hyderabad";
// document.write("City: " + city);
// document.write("<br> After replacement: " + city.replace('Hyder','Islam'));


// ==== Chapter # 21~25 and Task # 8
// === Replace all occurance of word 'and' with '&' ===

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("<h4>String before replacement:</h4>" + message);
// document.write("<h4>Sring after replacement: </h4>" + message.replace(/and/g,"&"));


// ==== Chapter # 21~25 and Task # 9
// === Changing Type of string to number ===

// var myStr = "472";
// document.write("Value: " + myStr);
// document.write("<br>");
// document.write("Type: " + typeof(myStr));

// myStr = Number(myStr);
// document.write("<br>");
// document.write("Value: " + myStr);
// document.write("<br>");
// document.write("Type: " + typeof(myStr));


// ==== Chapter # 21~25 and Task # 10
// === Take input and convert it into UpperCase ===

// var userInput = prompt("Enter something","peanuts");
// document.write("User input: " + userInput);
// document.write("<br>");
// document.write("Upper case: " + userInput.toUpperCase());


// ==== Chapter # 21~25 and Task # 11
// === Take input and convert it into title case ===

// var userInput = prompt("Enter something","javascript");
// document.write("User input: " + userInput);

// var firstLetter = userInput.charAt(0).toUpperCase();
// var leftOverLetters = userInput.slice(1).toLowerCase();

// document.write("<br>");
// document.write("Title case: " + firstLetter + leftOverLetters);


// ==== Chapter # 21~25 and Task # 12
// === Converting variable 'num' from number to string===

// var num = 35.36;
// document.write("Number: " + num)

// var str = num.toString().split('');
// str.splice(2, 1);
// str = str.join('');
// document.write("<br> Result: " + str);


// ==== Chapter # 21~25 and Task # 13
// === Taking input and restricting special character ===

// var userName = prompt("Enter user name","username");
// for (var i = 0; i < userName.length; i++){
//   if (userName[i].charCodeAt(userName[i]) === 33 || 
//       userName[i].charCodeAt(userName[i]) === 44 || 
//       userName[i].charCodeAt(userName[i]) === 46 || 
//       userName[i].charCodeAt(userName[i]) === 64){
//     document.write("Please enter a valid user name.");
//   }
// }


// ==== Chapter # 21~25 and Task # 14
// === Item Search Program at Bakery ===

// document.write("<h1>Bakery Items Query System</h1>");
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var desiredItem = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i=0; i<items.length; i++){
//     if(items[i] === desiredItem.toLowerCase()){
//         document.write(desiredItem + " is <b>available</b> at index " + i + " in our bakery");
//     }else{
//         document.write("We are sorry. " + desiredItem + " is <b>not available</b> in our bakery");
//     }
// }


// ==== Chapter # 21~25 and Task # 15
// === Password Validation System ===

// var password = prompt("Enter password max upto 6 characters","password");
// for(var i = 0; i < password.length; i++){
//   if (password[i].charCodeAt(password[i]) === 33 ||
//       password[i].charCodeAt(password[i]) === 44 || 
//       password[i].charCodeAt(password[i]) === 46 || 
//       password[i].charCodeAt(password[i]) === 64) {
//         document.write("Entered password: " + password);
//         document.write("<br> Please don't use special characters");
//   }
// }
// if (password.length > 6){
//   document.write("Entered password: " + password);
//   document.write("<br> Please enter a valid password max upto 6 characters");
// } else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57 ){
//   document.write("Entered password: " + password);
//   document.write("<br> Password cannot begin with a number");
//   document.write("<br> Please enter a valid password");
// }


// ==== Chapter # 21~25 and Task # 16
// === Using string split method to convert string into Array ===

// var university = "University of Karachi";
// university = university.split("");
// for (var i = 0; i < university.length; i++){
//   document.write(university[i] + "<br>");
// }


// ==== Chapter # 21~25 and Task # 17
// === Display last character of user input ===

// var userInput = "Pakistan";
// document.write("User input: " + userInput)
// document.write("<br> Last character of input: " + userInput.charAt(userInput.length - 1));


// ==== Chapter # 21~25 and Task # 18
// === Count no of occurance of word 'the' in given string ===

// var myStr = "The quick brown fox jumps over the lazy dog";

// function count(myStr, word) 
//     {
//     myStr += '';
//     word += '';

//     if (word.length <= 0) 
//     {
//         return myStr.length + 1;
//     }

//        word = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (myStr.match(new RegExp(word, 'gi')) || []).length;
//     }

//     document.write("Text: " + myStr);
//     document.write("<br> There are " + count(myStr, 'the') + " Occurance(s) of word 'the'");


// ====================================

// CHAPTER-26 ~ 30 (Math Methods)

// ==== Chapter # 26~30 and Task # 1
// === positive floating point number and math functions ===

// var x = +prompt("Enter positive floating point number","3.45214");
// document.write("Number: " + x);
// document.write("<br> round off value: " + Math.round(x));
// document.write("<br> floor value: " + Math.floor(x));
// document.write("<br> ceil value: " + Math.ceil(x));


// ==== Chapter # 26~30 and Task # 2
// === Negative floating point number and math functions ===

// var x = +prompt("Enter negative floating point number","-2.673");
// document.write("Number: " + x);
// document.write("<br> round off value: " + Math.round(x));
// document.write("<br> floor value: " + Math.floor(x));
// document.write("<br> ceil value: " + Math.ceil(x));


// ==== Chapter # 26~30 and Task # 3
// === Taking absolute value of a negative or positive integer ===

// var x = +prompt("Enter any number","-4");
// document.write("The absolute value of " + x + " is " + Math.abs(x));


// ==== Chapter # 26~30 and Task # 4
// === Display Dice Value using Random() function ===

// var diceValue = (Math.random() * 100);
// diceValue = Math.floor(diceValue);
// document.write("<h2> Random Dice Value: " + diceValue + "</h2>");


// ==== Chapter # 26~30 and Task # 5
// === Display Coin Value using Random() function ===

// var diceValue = (Math.random() * 2);
// diceValue = Math.floor(diceValue);
// if(diceValue === 0){
//   document.write("<h1>" + (diceValue + 1) + "</h1>");
//   document.write("<h1>Random Coin Value: Tails</h1>")
// }else{
//   document.write("<h1>" + (diceValue + 1) + "</h1>");
//   document.write("<h1>Random Coin Value: Heads</h1>")
// }


// ==== Chapter # 26~30 and Task # 6
// === Display Random numbers between 1 & 100 ===

// var randNum = Math.random() * 100;
// document.write("<br>");
// randNum = Math.ceil(randNum);
// document.write("<h1> Random Numbers between 1 & 100: " + randNum + "</h1>");


// ==== Chapter # 26~30 and Task # 7
// === Display weight of user ===

// var weight = prompt("Enter your weight","50.2 Kilogram");
// document.write("<h1> The weight of user is  " + weight + "</h1>");


// ==== Chapter # 26~30 and Task # 8
// === Display Random numbers between 1 & 100 ===

// var secretNum = (Math.random() * 11);
// secretNum = Math.floor(secretNum);
// var guessNum = +prompt("Guess any number upto 10","7");
// document.write("<h1>Guess Number Game</h1>")
// if(guessNum === secretNum){
//     document.write("Hurra! Your answer is Correct");
// }else if(guessNum + 1 === secretNum) {
//     document.write("Close enough to the correct answer");
// }else{
//     document.write("Oh ho! try any other number");
// }



// ====================================

// CHAPTER-31 ~ 34 (Date Methods)

// ==== Chapter # 31~34 and Task # 1
// === Displaying current date and time in browser ===

// var rightNow = new Date();
// document.write(rightNow);


// ==== Chapter # 31~34 and Task # 2
// === Displaying current Month ===

// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var now = new Date();
// var indexOfMonth = now.getMonth();
// var monthName = months[indexOfMonth];
// document.write("Current Month: " + monthName);


// ==== Chapter # 31~34 and Task # 3
// === Displaying current Day ===

// var daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var indexOfDay = now.getDay();
// var day = daysOfWeek[indexOfDay];
// document.write("Today is " + day);


// ==== Chapter # 31~34 and Task # 4
// === Displaying Customized Message on Weekend days ===

// var daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var now = new Date();
// var indexOfDay = now.getDay();
// var day = daysOfWeek[indexOfDay];
// if(day === daysOfWeek[6] || day === daysOfWeek[0]){
//   document.write("It's fun day");
// }else{
//   document.write("<h1>It's not fun day</h1>");
// }


// ==== Chapter # 31~34 and Task # 5
// === Displaying Customized Message on first half or second half of month ===

// var now = new Date();
// var indexOfDate = now.getDate();
// // var day = daysOfWeek[indexOfDay];
// if(indexOfDate <= 14) {
//   document.write("<h1>First fifteen days of the month</h1>");
// } else if(indexOfDate >= 15){
//   document.write("<h1>Last fifteen days of the month</h1>");
// }


// ==== Chapter # 31~34 and Task # 6
// === Displaying Elapsed Minutes Since Jan 1, 1970 ===

// var now = new Date()
// var time = now.getTime();
// var minutes = time / (1000 * 60 * 60);
// document.write("<h3> Current Date: " + now + "</h3>");
// document.write("<h3> Elapsed Milliseconds since Jan 1, 1970 : " + time + "</h3>");
// document.write("<h3> Elapsed Minutes since Jan 1, 1970 : " + minutes + "</h3>");


// ==== Chapter # 31~34 and Task # 7
// === Displaying AM / PM ===

// var now = new Date();
// var hrs = now.getHours();
// if(hrs < 12){
//   document.write("<h1> It's AM </h1>");
// }else{
//   document.write("<h1> It's PM </h1>");
// }



// ==== Chapter # 31~34 and Task # 8
// === Displaying Later Date ===

// var laterDate = new Date("December 31, 2020 00:00:00");
// document.write("<h2> Later date: " + laterDate + "</h2>");


// ==== Chapter # 31~34 and Task # 9
// === Displaying Days elapsed since 25 Apr 2020 ===

// var now = new Date().getTime()/(1000 * 60 * 60 * 24);
// var earlierDate = new Date("April 25, 2020 00:00:00").getTime()/(1000 * 60 * 60 * 24);
// var daysPassed = now - earlierDate;
// document.write("<h2>" + Math.floor(daysPassed) + " days have passed since April 25, 2020 (1st Ramdhan) </h2>");


// ==== Chapter # 31~34 and Task # 10
// ===  Display Minuetes elapsed since Beginning of 2020 till reference date i.e. current date===
// === In given Questions seconds are asked whereas in example answer Minutes are calculate ===
// === So, here program is written to calculate 'Minutes' ====

// var now = new Date();
// document.write("<h2> On reference date " + now + "</h2>");
// var nowMinutes = now.getMinutes();

// var earlierDate = new Date("January 1, 2020");
// var earlierTime = earlierDate.getTime();
// var earlierDateMinutes = earlierTime / (1000 * 60 * 60);

// document.write("<h2>" + (earlierDateMinutes - nowMinutes) + " Minutes had passed since beginnig of 2020 </h2>");



// ==== Chapter # 31~34 and Task # 11
// ===  Display current time and then 1 hours ago time ===

// var now = new Date();
// var earlierDate = new Date(now); 
// earlierDate.setHours(earlierDate.getHours() - 1);
// document.write("<h2> Current date: " + now + "</h2>");
// document.write("<h2> 1 hour ago, it was " + earlierDate + "</h2>");


// ==== Chapter # 31~34 and Task # 12
// ===  Display current time and then 100 years ago time ===

// var now = new Date();
// var earlierDate = new Date(now); 
// earlierDate.setFullYear(earlierDate.getFullYear() - 100);
// document.write("<h2> Current date: " + now + "</h2>");
// document.write("<h2> 100 years ago, it was " + earlierDate + "</h2>");


// ==== Chapter # 31~34 and Task # 13
// ===  Ask from user and display age and birth year ===

// var yourName = prompt("Enter your name","Syeda Tabeer Fatima Bukhari");
// document.write("<h1> Your Name is: " + yourName + "</h1>");

// var birthDate = prompt("Enter your birth date","November 1, 2011");
// var earlierDate = new Date(birthDate);

// var now = new Date() ;

// var age = now.getFullYear() - earlierDate.getFullYear();

// document.write("<h2> Your age is: " + age + " Years</h2>");
// var birthYear = earlierDate.getFullYear();

// document.write("<h2> Your birth year is: " + birthYear + "</h2>")



// ==== Chapter # 31~34 and Task # 14
// ===  K-Electric Bill ===

// var custName = prompt("Enter customer name","ABC Customer");
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var monthIndex = new Date().getMonth();
// var currentMonth = months[monthIndex];
// var units = prompt("Enter number of units consumed","410")
// var ratePerUnit = 16;
// var lateSurcharge = 350;
// var netPayment = units * ratePerUnit;
// var grossPayment = netPayment + lateSurcharge;
// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name: <b>" + custName + "</b><br>");
// document.write("Month: <b>" + currentMonth + "</b><br>");
// document.write("Number of units: <b>" + units + "</b><br>");
// document.write("Charges per unit: <b>" + ratePerUnit + "</b><br>");
// document.write("<br>");
// document.write("Net Amount Payable (withing Due Date): <b>" + netPayment + "</b><br>");
// document.write("Late Payment Surcharge: <b>" + lateSurcharge + "</b><br>");
// document.write("Gross Amount Payable (after Due Date): <b>" + grossPayment + "</b>");


        // ====================================

        // CHAPTER-35 ~ 38 (Functions)

// ==== Chapter # 35~38 and Task # 1
// === Display Current Date & Time using function ===

// function currentTime(){
//   var now = new Date();
//   return now;
// }
// document.write("<h2>" + currentTime() + "</h2>");


// ==== Chapter # 35~38 and Task # 2
// === Greet user using function ===

// Option-1
// function greetUser(){
//   var firstName = prompt("Enter first name","Meesam");
//   var lastName = prompt("Enter last name","Turab");
//   var fullName = firstName + " " + lastName;
//   var greeting = "Hi " + fullName + ", you are welcome here."
//   return greeting;
// }
// document.write(greetUser());

// Option-2
// function greetUser(firstName, lastName){
//   var fullName = firstName + " " + lastName;
//   var greeting = "Hi " + fullName + ", you are welcome here."
//   return greeting;
// }
// document.write("<h3>" + greetUser("Tabeer","Fatima") + "</h3");


// ==== Chapter # 35~38 and Task # 3
// === Take input of two numbers and add them ===

// function addNumbers(){
//   var num1 = prompt("Enter first number","25");
//   var num2 = prompt("Enter second number","13");
//   var num3 = Number(num1) + Number(num2);
//   return num3;
// }
// document.write("Addition: " + addNumbers());


// ==== Chapter # 35~38 and Task # 4
// === Write a function that takes two numbers and operator to solve a problem ===

// function calc() {
//   var n1 = parseFloat(prompt("Enter first number","25"));
//   var oper = prompt("Enter operator +, - , / , *","+");
//   var n2 = parseFloat(prompt("Enter second number","13"));

//   var result = 0;

//   if (oper === '+') {
//     return result = n1 + n2;
//   }

//   if (oper === '-') {
//     return result = n1 - n2;
//   }

//   if (oper === '/') {
//     return result = n1 / n2;
//   }

//   if (oper === 'X' || oper === "x" || oper === "*") {
//     return result = n1 * n2;
//   }
// }
// document.write("<h3> Result: "  + calc() + "</h3>");


// ==== Chapter # 35~38 and Task # 5
// === Write a function that squares its argument ===

// function sqrtFunc(a){
//   return Math.sqrt(a);
// }

// document.write("<h3> Square root: " + sqrtFunc(9));


// ==== Chapter # 35~38 and Task # 6
// === Find factorial of a number using funciton ===

// function factorial(n) { 
//   var ans=1; 

//   for (var i = 2; i <= n; i++) 
//       ans = ans * i; 
//   return ans; 
// } 
// document.write("<h3> Factorial: " + factorial(6) + "</h3>");


// ==== Chapter # 35~38 and Task # 7
// === Take input of start and end number and display couting using function ===

// function counting(a = 5, b = 20) {
//   for (var i = a; i <= b; i++) {
//     document.write(i + ",");    
//   }
//   return count;
// }
// res = counting(3, 13);
// document.write(res);


// ==== Chapter # 35~38 and Task # 8
// === Nested function that computes hypotenuse of a right angle triangle ===

// function calculateHypotenuse(b,p){
//   function calculateSquare(){
//     hypotenuseSquare = ((b ** 2) + (p ** 2));
//     return hypotenuseSquare;
//   }  
//   return calculateSquare();
// }
// document.write("Hypotenuse: " + calculateHypotenuse(2,3));


// ==== Chapter # 35~38 and Task # 9
// === Write a function that calculates the area of a rectangle ===

// function calculateRectArea(x,y){
//   area = x * y;
//   return area;
// }
// // argument as values
// document.write("Area of Rectangle: " + calculateRectArea(5,3));

// // argument as variable
// width = 5;
// height = 3;
// document.write("<br><br> Area of Rectangle: " + calculateRectArea(width, height));



// ==== Chapter # 35~38 and Task # 10
// === function that checks whether a passed string is palindrome  ===

// function palindrome(str) {
//     var re = /[\W_]/g;
//     // var re = /[^A-Za-z0-9]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }
//   isPalindrome = palindrome("A man, a plan, a canal. Panama");
//   document.write(isPalindrome);


// ==== Chapter # 35~38 and Task # 11
// === Write a function to convert first letter into upperCase  ===

//capitalize_Words 
// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt)
//  {
//      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//  });
// }
// myStr = 'the quick brown fox'
// document.write("Original string is: " + myStr);
// document.write("<br><br> Capitalized string is: " + capitalize_Words(myStr));

// ==== Chapter # 35~38 and Task # 12
// === Write a function to find the longest word within the string  ===

// function findLongestWord(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// myStr = 'Web Development Tutorial'
// document.write("Original string is: " + myStr);
// document.write("<br><br> Longest word in string is: " + findLongestWord(myStr));


// ==== Chapter # 35~38 and Task # 13
// === Write a function to find the longest word within the string  ===

// function charCount(str, letter) 
// {
//  var letterCount = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//         letterCount += 1;
//       }
//   }
//   return letterCount;
// }

// myStr = "'JSResourceS.com', 'o'";
// document.write("Original string is: " + myStr);
// document.write("<br> <br> No of occurences of letter 'o' in string are: ")
// document.write(charCount('JSResourceS.com', 'o'));


// ==== Chapter # 35~38 and Task # 14
// === Write a function to find the longest word within the string  ===


// function calcArea(radius){
//     area = (Math.PI * radius * radius).toFixed(2);
//     return area;
// }

// function calcCircumference(radius){
//     circumference = (2 * Math.PI * radius).toFixed(2);
//     return circumference;
// }

// document.write("<h1>The Geometrizer</h1>")
// document.write('The circumference is = ', calcCircumference(4));
// document.write('<br><br>The Area is = ', calcArea(4));



        // ====================================

        // CHAPTER-38 ~ 44 (Functions, Decision Statements, Loops)

// ==== Chapter # 38~44 and Task # 1
// === Write a function to calculate the power of variable 'a' ===

// function power(a,b){
//     power = a ** b;
//     return power;
// }
// document.write("Result is: " + power(5,3));


// ==== Chapter # 38~44 and Task # 2
// === Write a function to check year is leap or not ===

// function checkLeapYear(year){
//     isLeap = false;
//     if(year % 4 === 0){
//         isLeap = true;
//         return isLeap;
//     }
//     return isLeap;
// }
// var yearToCheck = +prompt("Enter year to check","2019");
// document.write("Is " + yearToCheck + " a leap year: <b>" + checkLeapYear(yearToCheck) + "</b>" );


// ==== Chapter # 38~44 and Task # 3
// === Write a function to Area of Triangle ===

// function triArea(a,b,c) {    
// 	var s = (a+b+c)/2;
// 	var a = (Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2));
//     return a;
// }
// document.write("Area of triangle: " + triArea(11,9,9));


// ==== Chapter # 38~44 and Task # 4
// === Write a function to display result / percentage ===

// function mainFunction(s1,s2,s3){
//     obtainedMarks = s1 + s2 + s3;
//     totalMarks = 300;
//     numberOfSubj = 3; 
//     function average(){
//         avg = (obtainedMarks/numberOfSubj).toFixed(2);
//         return avg;
//     }
//     function percentage(){
//         percent = (average() * 100).toFixed(2);
//         return percent;
//     }
//     return average();
// }
// document.write("Average: " + mainFunction(65,70,85));
// document.write("<br> <br> Percentage: " + mainFunction(65,70,85)+"%");


// ==== Chapter # 38~44 and Task # 5
// === Write a function to display result / percentage ===