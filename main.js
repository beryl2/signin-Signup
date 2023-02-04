// const number = prompt("enter a number:");
// if (number > 0){
//     console.log("The number is positive");
// }
// else{
//     console.log("The number is negative")
// }
// console.log("The if else statement is easy");

// const number = prompt("enter a number: ");
// if (number > 0){
//     console.log("The number is positive");
// }
// else if (number == 0){
//     console.log("the number is 0");
// }
// else{
//     console.log("The number is negative");
// }
// console.log("If else if else statement is easy");

// //Nested if else statement

// const trial = prompt("enter a number");

// if (number >= 0){
//     if (number == 0){
//         console.log("you entered number 0");
//     }else{
//         console.log("you entered a positive number");
//     }  
// }else{
//     console.log("You entered a negative number")
// }

// //Declare a function

// function greet(name){
//     console.log("Hello" + name + ":)");
// }
// let name = prompt("enter a name: ");
// greet();

// function add(a,b){
//     return a + b;
// }

// let number1 = parseFloat(prompt("Enter the first number: "));
// let number2 = parsefloat(prompt("enter second number: "));

// let result = add(number1, number2);

// console.log("The sum is " + result);
// //changing variable name
// let a = "hello";

// function greet(){
//     a = 3
// }
// //before the function call

// console.log(a);

// greet();
// console.log(a);

// //recursion
// function countDown(number){
//     console.log(number);
//     const newNumber = number - 1;
//     if (newNumber > 0){
//         countDown(newNumber);
//     }
// }
// countDown(4);
// let student = { }
// student.name = 'john';
// student.greet = function(){console.log('hello');}
// student.greet();

// const student = {
//     firstName : 'Monica',
//     get getName(){
//         return this.firstName;
//     }
// }
// console.log(student.firstName);
// console.log(student.getName);
// console.log(student.getName());

// //setter
// const student = {
//     firstName: 'Monica',
//     set changeName(newName){
//         this.firstName = newName;
//     }
// };
// console.log(student.firstName);
// student.changeName = 'sarah';
// console.log(student.firstName); 

// //setting property
// Object.defineProperty(studen, "cangeName",{
//     set : function(value{
//         this.firstName = value;
//     })
// });
// console.log(student.firstName);