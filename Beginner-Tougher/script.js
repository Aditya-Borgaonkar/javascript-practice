// 1 - print numbers from 1 to 10  loop from 1 to 10 and print each numbers .
// for (let a = 1; a <=10; a++){
//     console.log(a);
// }

// 2 - print only even numbers from 1 to 20 use loop and conditions to print even ones . 

// for (let a = 1; a<=20;a++){
//     if(a % 2===0){
//     console.log(`Even Nunbers:-${a}`);
//     }
// }

// 3 - print numbers from 10 to 1 reverse loop with a decrement .
// for (let i = 10; i>=1;i--) {
//     console.log(i)
// }

// 4 - print the word "yes" 5 times repeat using a loop
// for(let i=1;i<=5;i++){
//     console.log("YES");

// }

// 5 - print whether numbers from 1 to 10 are even or odd  for each number check :"even", else -> "odd"
// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(`${i}:-Is enen number`); 
//     }else{
//         console.log(`${i}:-Is odd number`);

//     }
// }

// 6 - ask user for a number and say if its  positive or negative  use prompt() and a condition

// let i= +prompt("Enter any number:-");
// if (i>=0) {
//     console.log(`Entered Number is positive:-${i}`);
// }else{
//     console.log(`Entered Number is negaitive:-${i}`);
// }


// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”

let age = +prompt("Age kya hai....!");
if (age >= 18) console.log("Eligible For Vote.✌️");
else console.log("Your Not Elegible for Vote🥲")

// aa = typeof (age);
// if (age === null) {
//     console.log("Please write somthing....!");

// }



// 8. Print multiplication table of 5 Use loop to print 5 × 1 to 5 × 10.
// for(let x=1;x<=10;x++){
//     console.log(`${x*5}`);
// }

// 9. Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.
// let a = 0;
// for (let x = 1; x <= 15; x++) {
//     if (x < 8) {
//         a++;
//     }
// }

// console.log(`(${a}) Numers are greter then 8`);

// Ask user for password and print access status Hardcoded correct password. Compare with user input.

// const pass="password"
// let userpass=prompt("Enter Password");
// if (pass===userpass) {
//     console.log("Access Allowed");
// }else{
//     console.log("Access denied");

// }

// Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

// let attempt = 0;
// let pass = "Aditya";
// let userpass = prompt("Enter Your Password:-");
// attempt++;
// while (pass !== userpass) {
//     let userpass = prompt("Enter Your Password:-");
//     attempt++;
//     if (attempt == 3) {
//         console.error("Account locked please contact support!!");
//         break;
//     }
// }
// if(pass===userpass)console.log("Done");

// 2-way
// let attempt = 0;
// let pass = "Aditya";
// let userpass = prompt("Enter Your Password:-");
// attempt++;
// while (attempt < 3 && pass !== userpass) {
//     let userpass = prompt("Enter Your Password:-");
//     attempt++;
// }
// if (attempt == 3 && pass !== userpass) {
//     console.error("Account Loucked Please Contact Support!!");
// }else console.log("Account Open..");



// Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".
// console.log('Ask words, exit on “stop”. Count “yes"-');
// let counter = 0
// let word = prompt("Enter any words:-")
// while (word !== "stop") {
//     if(word ==="yes") counter++
//     word = prompt("Enter any words:-");
// }

// console.log(`Yes count is ${counter}`);

//Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

// for (let x = 1; x <= 50; x++) {
//     if (x % 7 === 0) {
//         console.log(x);

//     }
// }

//14. Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.
// let sum=0;
// for(let x=1;x<=30;x++){
//   if(x%2!==0){
//     sum=sum+x;
//   }
// }

// console.log(`Addition of all add numbers ${sum}`);

//Keep asking number until user enters an even number Use while loop. Stop only if input is even.
// let number;
// while(number%2!==0){
//     number= +prompt("Enter any number")
// }

//Print numbers between two user inputs Input start and end using prompt() → print all between.

// let num1 = +prompt("Enter Frist Number:-");
// let num2 = +prompt("Enter secand Number:-");
// if (num1 > num2) console.error("First Number can not be bigger than Secand one !! {BAKCHODI MAT MAT BHAI!!!}");

// for (let i = num1; i <= num2; i++) {
//     console.log(i);
// }

//Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.
// let counter=0;
// for(let i=1;i<=20;i++){
//     if(counter==3) break;
//     if(i%2!==0){
//         console.log(i);
//         counter++;
//     }
// }

//Ask user 5 numbers. Count how many are positive Use loop + condition + counter.
// let count=0
// for(let i=1;i<=5;i++){
//     let num = +prompt(`Enetr ${i} Number`);
//     if(num>=0) count++;
// }

// console.log(`The Positive Numbers is ${count}`);

// ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let balance = 1000;
// let withdrawal = 0;
// let amount;
// let count = 0
// while (balancex > 0 && count !== 3) {
//     amount = +prompt("Withdrawal amount");
//     if (amount > balance) {
//         console.log("Insufficient balance");
//         break;
//     }
//     balance -= amount;
//     count++;
// }
// console.log(`Available balance : ${balance}`);
