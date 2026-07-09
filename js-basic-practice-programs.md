# JavaScript Basic Practice Programs

## 1. Print Programs
- Print "Hello World"
- Print your name
- Print multiple messages
- Print numbers from 1 to 10
- Print today's date
- Print using template literals
- Print variables in a sentence

## 2. Variables (var, let, const)
- Declare a variable using var
- Declare a variable using let
- Declare a constant using const
- Store name and age
- Swap two variables
- Change variable values
- Declare multiple variables
- Store different data types
- Create constants for PI and GST
- Variable scope practice

## 3. Data Types
- String variable
- Number variable
- Boolean variable
- Undefined variable
- Null variable
- Object variable
- Array variable
- Check variable type using typeof

## 4. Operators
- Addition
- Subtraction
- Multiplication
- Division
- Modulus
- Exponent
- Increment
- Decrement
- Assignment operators
- Comparison operators
- Logical operators
- Ternary operator

## 5. User Input
- Read name
- Read age
- Read two numbers
- Calculate sum from input
- Read boolean value

## 6. If Statements
- Positive or negative
- Even or odd
- Largest of two numbers
- Largest of three numbers
- Eligible to vote
- Pass or fail
- Divisible by 5
- Divisible by 5 and 11
- Leap year
- Character is vowel or consonant

## 7. Switch Case
- Weekday name
- Month name
- Calculator
- Grade evaluation
- Traffic signal
- Browser selection
- Fruit price lookup

## 8. For Loop
- Print 1 to 10
- Print 10 to 1
- Even numbers
- Odd numbers
- Multiplication table
- Squares of numbers
- Cubes of numbers
- Reverse counting
- Sum of first N numbers
- Product of first N numbers

## 9. While Loop
- Print 1 to N
- Reverse numbers
- Multiplication table
- Sum until N
- Count digits
- Reverse a number

## 10. Do While Loop
- Print 1 to 10
- Menu-driven calculator
- Guessing game
- Print odd numbers
- Print even numbers

## 11. Nested Loops
- Square pattern
- Rectangle pattern
- Triangle
- Reverse triangle
- Pyramid
- Inverted pyramid
- Floyd's triangle
- Number triangle
- Alphabet triangle
- Diamond pattern

## 12. String Programs
- String length
- Convert to uppercase
- Convert to lowercase
- Reverse string
- Check palindrome
- Count vowels
- Count consonants
- Count spaces
- Remove spaces
- Replace word
- Check substring
- Split string
- Join strings
- Trim spaces
- Repeat string

## 13. Array Programs
- Create array
- Print array
- Find largest element
- Find smallest element
- Sum of array
- Average of array
- Reverse array
- Sort ascending
- Sort descending
- Find duplicates
- Remove duplicates
- Merge arrays
- Find second largest
- Find second smallest
- Search element
- Count even numbers
- Count odd numbers
- Rotate array
- Copy array
- Slice array

## 14. Functions
- Simple function
- Function with parameters
- Function returning value
- Arrow function
- Anonymous function
- Default parameters
- Rest parameters
- Callback function
- Recursive factorial
- Recursive Fibonacci

## 15. Objects
- Create object
- Access properties
- Update properties
- Delete property
- Loop through object
- Nested object
- Object methods
- Clone object
- Merge objects
- Count object properties

## 16. Math Programs
- Sum of digits
- Factorial
- Fibonacci series
- Prime number
- Armstrong number
- Perfect number
- Strong number
- GCD
- LCM
- Power of number
- Square root
- Random number
- Maximum number
- Minimum number
- Absolute value

## 17. Pattern Programs
- Star square
- Hollow square
- Right triangle
- Left triangle
- Pyramid
- Inverted pyramid
- Diamond
- Hollow diamond
- Number pyramid
- Character pyramid

## 18. ES6 Practice
- Destructuring array
- Destructuring object
- Spread operator
- Rest operator
- Template literals
- Optional chaining
- Nullish coalescing
- Default parameters
- Object shorthand
- Enhanced object literals

## 19. Higher Order Functions
- map()
- filter()
- reduce()
- find()
- findIndex()
- some()
- every()
- sort()
- forEach()
- flatMap()

## 20. Practice Challenges
- FizzBuzz
- Number guessing game
- Rock Paper Scissors
- ATM simulation
- Student grade calculator
- Shopping cart total
- Employee salary calculator
- Electricity bill calculator
- Simple calculator
- Mini todo list (console)

## Bonus (Useful for Playwright & Automation)
- Generate random email
- Generate random mobile number
- Generate random string
- Generate random password
- Generate UUID
- Current timestamp
- Format current date
- Delay execution using Promise
- Async function example
- Fetch API example
- Read JSON object
- Convert object to JSON
- Parse JSON string
- Array of user objects
- Find user by ID
- Sort users by age
- Filter active users
- Remove duplicate objects
- Group objects by department
- Calculate total salary from object array



## Solutions ##

# JavaScript Basic Practice Programs

---

## 1. Print Programs

```js
// 1.1 Print "Hello World"
console.log("Hello World");

// 1.2 Print your name
console.log("Rahul");

// 1.3 Print multiple messages
console.log("Message 1");
console.log("Message 2");
console.log("Message 3");

// 1.4 Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1.5 Print today's date
console.log(new Date());

// 1.6 Print using template literals
let name = "Rahul";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// 1.7 Print variables in a sentence
let city = "Mumbai";
let country = "India";
console.log(`${name} lives in ${city}, ${country}.`);
```

---

## 2. Variables (var, let, const)

```js
// 2.1 Declare a variable using var
var x = 10;
console.log(x);

// 2.2 Declare a variable using let
let y = 20;
console.log(y);

// 2.3 Declare a constant using const
const z = 30;
console.log(z);

// 2.4 Store name and age
let myName = "Rahul";
let myAge = 25;
console.log(`Name: ${myName}, Age: ${myAge}`);

// 2.5 Swap two variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`);

// 2.6 Change variable values
let score = 50;
score = 75;
console.log(score);

// 2.7 Declare multiple variables
let firstName = "Rahul", lastName = "Sharma", email = "rahul@example.com";
console.log(firstName, lastName, email);

// 2.8 Store different data types
let str = "Hello";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { key: "value" };
console.log(str, num, bool, arr, obj);

// 2.9 Create constants for PI and GST
const PI = 3.14159;
const GST = 0.18;
console.log(`PI: ${PI}, GST: ${GST}`);

// 2.10 Variable scope practice
function scopeTest() {
  var varScoped = "I am var";
  let letScoped = "I am let";
  const constScoped = "I am const";
  if (true) {
    var varInside = "var ignores block";
    let letInside = "let is block scoped";
    console.log(varInside, letInside);
  }
  console.log(varInside); // works
  // console.log(letInside); // ReferenceError
}
scopeTest();
```

---

## 3. Data Types

```js
// 3.1 String variable
let strVar = "Hello JavaScript";

// 3.2 Number variable
let numVar = 100;

// 3.3 Boolean variable
let boolVar = true;

// 3.4 Undefined variable
let undefVar;

// 3.5 Null variable
let nullVar = null;

// 3.6 Object variable
let person = { name: "Rahul", age: 25 };

// 3.7 Array variable
let fruits = ["apple", "banana", "mango"];

// 3.8 Check variable type using typeof
console.log(typeof strVar);   // string
console.log(typeof numVar);   // number
console.log(typeof boolVar);  // boolean
console.log(typeof undefVar); // undefined
console.log(typeof nullVar);  // object
console.log(typeof person);   // object
console.log(typeof fruits);   // object
console.log(Array.isArray(fruits)); // true
```

---

## 4. Operators

```js
// 4.1 Addition
console.log(5 + 3); // 8

// 4.2 Subtraction
console.log(10 - 4); // 6

// 4.3 Multiplication
console.log(6 * 7); // 42

// 4.4 Division
console.log(20 / 4); // 5

// 4.5 Modulus
console.log(17 % 5); // 2

// 4.6 Exponent
console.log(2 ** 3); // 8

// 4.7 Increment
let inc = 5;
inc++;
console.log(inc); // 6

// 4.8 Decrement
let dec = 5;
dec--;
console.log(dec); // 4

// 4.9 Assignment operators
let n = 10;
n += 5;  // n = 15
n -= 3;  // n = 12
n *= 2;  // n = 24
n /= 4;  // n = 6
n %= 4;  // n = 2
console.log(n);

// 4.10 Comparison operators
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 != 3);     // true
console.log(5 !== "5");  // true
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false

// 4.11 Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// 4.12 Ternary operator
let ageVal = 18;
let canVote = ageVal >= 18 ? "Eligible" : "Not Eligible";
console.log(canVote);
```

---

## 5. User Input (Node.js - using readline)

```js
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 5.1 Read name
rl.question("Enter your name: ", (name) => {
  console.log(`Hello, ${name}`);
  rl.close();
});

// 5.2 Read age
rl.question("Enter your age: ", (age) => {
  console.log(`You are ${age} years old`);
  rl.close();
});

// 5.3 Read two numbers
rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    console.log(`Numbers: ${num1}, ${num2}`);
    rl.close();
  });
});

// 5.4 Calculate sum from input
rl.question("Enter first number: ", (n1) => {
  rl.question("Enter second number: ", (n2) => {
    let sum = Number(n1) + Number(n2);
    console.log(`Sum: ${sum}`);
    rl.close();
  });
});

// 5.5 Read boolean value
rl.question("Are you a student? (yes/no): ", (answer) => {
  let isStudent = answer.toLowerCase() === "yes";
  console.log(`Student: ${isStudent}`);
  rl.close();
});
```

---

## 6. If Statements

```js
// 6.1 Positive or negative
function checkNumber(num) {
  if (num > 0) console.log("Positive");
  else if (num < 0) console.log("Negative");
  else console.log("Zero");
}

// 6.2 Even or odd
function checkEvenOdd(num) {
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");
}

// 6.3 Largest of two numbers
function maxOfTwo(a, b) {
  if (a > b) return a;
  else return b;
}

// 6.4 Largest of three numbers
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}

// 6.5 Eligible to vote
function canVote(age) {
  if (age >= 18) console.log("Eligible to vote");
  else console.log("Not eligible to vote");
}

// 6.6 Pass or fail
function checkPassFail(marks) {
  if (marks >= 40) console.log("Pass");
  else console.log("Fail");
}

// 6.7 Divisible by 5
function divisibleBy5(num) {
  if (num % 5 === 0) console.log("Divisible by 5");
  else console.log("Not divisible by 5");
}

// 6.8 Divisible by 5 and 11
function divisibleBy5And11(num) {
  if (num % 5 === 0 && num % 11 === 0) console.log("Divisible by 5 and 11");
  else console.log("Not divisible by 5 and 11");
}

// 6.9 Leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    console.log("Leap Year");
  else console.log("Not a Leap Year");
}

// 6.10 Character is vowel or consonant
function checkVowel(ch) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(ch.toLowerCase())) console.log("Vowel");
  else console.log("Consonant");
}
```

---

## 7. Switch Case

```js
// 7.1 Weekday name
function weekdayName(day) {
  switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
  }
}

// 7.2 Month name
function monthName(month) {
  switch (month) {
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Invalid month");
  }
}

// 7.3 Calculator
function calculator(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Cannot divide by zero";
    default: return "Invalid operator";
  }
}

// 7.4 Grade evaluation
function grade(marks) {
  switch (true) {
    case marks >= 90: return "A+";
    case marks >= 80: return "A";
    case marks >= 70: return "B";
    case marks >= 60: return "C";
    case marks >= 40: return "D";
    default: return "F";
  }
}

// 7.5 Traffic signal
function trafficSignal(color) {
  switch (color.toLowerCase()) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Slow down"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid signal");
  }
}

// 7.6 Browser selection
function launchBrowser(browser) {
  switch (browser.toLowerCase()) {
    case "chrome": console.log("Launching Chrome..."); break;
    case "firefox": console.log("Launching Firefox..."); break;
    case "edge": console.log("Launching Edge..."); break;
    default: console.log("Browser not supported");
  }
}

// 7.7 Fruit price lookup
function fruitPrice(fruit) {
  switch (fruit.toLowerCase()) {
    case "apple": return 100;
    case "banana": return 40;
    case "mango": return 80;
    case "orange": return 60;
    default: return "Price not available";
  }
}
```

---

## 8. For Loop

```js
// 8.1 Print 1 to 10
for (let i = 1; i <= 10; i++) console.log(i);

// 8.2 Print 10 to 1
for (let i = 10; i >= 1; i--) console.log(i);

// 8.3 Even numbers
for (let i = 2; i <= 20; i += 2) console.log(i);

// 8.4 Odd numbers
for (let i = 1; i <= 20; i += 2) console.log(i);

// 8.5 Multiplication table
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// 8.6 Squares of numbers
for (let i = 1; i <= 10; i++) console.log(`${i}^2 = ${i * i}`);

// 8.7 Cubes of numbers
for (let i = 1; i <= 10; i++) console.log(`${i}^3 = ${i * i * i}`);

// 8.8 Reverse counting
for (let i = 10; i >= 1; i--) console.log(i);

// 8.9 Sum of first N numbers
function sumOfN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

// 8.10 Product of first N numbers
function productOfN(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) product *= i;
  return product;
}
```

---

## 9. While Loop

```js
// 9.1 Print 1 to N
function print1toN(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}

// 9.2 Reverse numbers
function printNto1(n) {
  let i = n;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

// 9.3 Multiplication table
function tableWhile(n) {
  let i = 1;
  while (i <= 10) {
    console.log(`${n} x ${i} = ${n * i}`);
    i++;
  }
}

// 9.4 Sum until N
function sumUntilN(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

// 9.5 Count digits
function countDigits(num) {
  let count = 0;
  let temp = Math.abs(num);
  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }
  return count === 0 ? 1 : count;
}

// 9.6 Reverse a number
function reverseNumber(num) {
  let reversed = 0;
  let temp = Math.abs(num);
  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return num < 0 ? -reversed : reversed;
}
```

---

## 10. Do While Loop

```js
// 10.1 Print 1 to 10
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);

// 10.2 Menu-driven calculator
function menuCalculator() {
  let choice;
  do {
    console.log("1. Add\n2. Subtract\n3. Multiply\n4. Exit");
    // prompt user for choice (simulated)
    choice = 4; // replace with actual input
    // ... handle operations
  } while (choice !== 4);
}

// 10.3 Guessing game
function guessingGame() {
  let target = Math.floor(Math.random() * 100) + 1;
  let guess;
  let attempts = 0;
  do {
    guess = parseInt(prompt("Guess a number (1-100):"));
    attempts++;
    if (guess > target) console.log("Too high!");
    else if (guess < target) console.log("Too low!");
  } while (guess !== target);
  console.log(`Correct! Attempts: ${attempts}`);
}

// 10.4 Print odd numbers
let m = 1;
do {
  console.log(m);
  m += 2;
} while (m <= 20);

// 10.5 Print even numbers
let p = 2;
do {
  console.log(p);
  p += 2;
} while (p <= 20);
```

---

## 11. Nested Loops

```js
// 11.1 Square pattern
function squarePattern(n) {
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(n));
  }
}

// 11.2 Rectangle pattern
function rectanglePattern(rows, cols) {
  for (let i = 0; i < rows; i++) {
    console.log("*".repeat(cols));
  }
}

// 11.3 Triangle
function triangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

// 11.4 Reverse triangle
function reverseTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

// 11.5 Pyramid
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

// 11.6 Inverted pyramid
function invertedPyramid(n) {
  for (let i = n; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

// 11.7 Floyd's triangle
function floydTriangle(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    console.log(row);
  }
}

// 11.8 Number triangle
function numberTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}

// 11.9 Alphabet triangle
function alphabetTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 + j) + " ";
    }
    console.log(row);
  }
}

// 11.10 Diamond pattern
function diamond(n) {
  // top half + middle
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
  // bottom half
  for (let i = n - 1; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}
```

---

## 12. String Programs

```js
// 12.1 String length
let text = "Hello World";
console.log(text.length); // 11

// 12.2 Convert to uppercase
console.log(text.toUpperCase()); // HELLO WORLD

// 12.3 Convert to lowercase
console.log(text.toLowerCase()); // hello world

// 12.4 Reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 12.5 Check palindrome
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// 12.6 Count vowels
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// 12.7 Count consonants
function countConsonants(str) {
  return (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
}

// 12.8 Count spaces
function countSpaces(str) {
  return (str.match(/ /g) || []).length;
}

// 12.9 Remove spaces
function removeSpaces(str) {
  return str.replace(/\s/g, "");
}

// 12.10 Replace word
function replaceWord(str, oldWord, newWord) {
  return str.replace(oldWord, newWord);
}

// 12.11 Check substring
function containsSubstring(str, sub) {
  return str.includes(sub);
}

// 12.12 Split string
let csv = "apple,banana,mango";
let fruitsArr = csv.split(",");
console.log(fruitsArr); // ["apple", "banana", "mango"]

// 12.13 Join strings
let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"

// 12.14 Trim spaces
let padded = "  hello  ";
console.log(padded.trim()); // "hello"

// 12.15 Repeat string
console.log("Ha".repeat(3)); // "HaHaHa"
```

---

## 13. Array Programs

```js
// 13.1 Create array
let arr1 = [10, 20, 30, 40, 50];

// 13.2 Print array
console.log(arr1);

// 13.3 Find largest element
function findLargest(arr) {
  return Math.max(...arr);
}

// 13.4 Find smallest element
function findSmallest(arr) {
  return Math.min(...arr);
}

// 13.5 Sum of array
function sumArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}

// 13.6 Average of array
function averageArray(arr) {
  return arr.length > 0 ? sumArray(arr) / arr.length : 0;
}

// 13.7 Reverse array
function reverseArray(arr) {
  return arr.slice().reverse();
}

// 13.8 Sort ascending
arr1.sort((a, b) => a - b);

// 13.9 Sort descending
arr1.sort((a, b) => b - a);

// 13.10 Find duplicates
function findDuplicates(arr) {
  let seen = {};
  let duplicates = [];
  for (let val of arr) {
    seen[val] = (seen[val] || 0) + 1;
    if (seen[val] === 2) duplicates.push(val);
  }
  return duplicates;
}

// 13.11 Remove duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 13.12 Merge arrays
let merged = [...arr1, ...[60, 70, 80]];

// 13.13 Find second largest
function secondLargest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}

// 13.14 Find second smallest
function secondSmallest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => a - b);
  return unique[1];
}

// 13.15 Search element
function searchElement(arr, target) {
  return arr.includes(target);
}

// 13.16 Count even numbers
function countEven(arr) {
  return arr.filter(n => n % 2 === 0).length;
}

// 13.17 Count odd numbers
function countOdd(arr) {
  return arr.filter(n => n % 2 !== 0).length;
}

// 13.18 Rotate array
function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

// 13.19 Copy array
let copy = [...arr1];

// 13.20 Slice array
let sliced = arr1.slice(0, 3);
```

---

## 14. Functions

```js
// 14.1 Simple function
function greet() {
  console.log("Hello!");
}

// 14.2 Function with parameters
function greetPerson(name) {
  console.log(`Hello, ${name}`);
}

// 14.3 Function returning value
function add(a, b) {
  return a + b;
}

// 14.4 Arrow function
const multiply = (a, b) => a * b;

// 14.5 Anonymous function
setTimeout(function () {
  console.log("Anonymous function called");
}, 1000);

// 14.6 Default parameters
function welcome(name = "Guest") {
  console.log(`Welcome, ${name}`);
}

// 14.7 Rest parameters
function sumAll(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

// 14.8 Callback function
function processData(data, callback) {
  let result = data.toUpperCase();
  callback(result);
}
processData("hello", (res) => console.log(res));

// 14.9 Recursive factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// 14.10 Recursive Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

## 15. Objects

```js
// 15.1 Create object
let student = {
  name: "Rahul",
  age: 20,
  marks: 85,
};

// 15.2 Access properties
console.log(student.name);    // dot notation
console.log(student["age"]);  // bracket notation

// 15.3 Update properties
student.marks = 90;

// 15.4 Delete property
delete student.age;

// 15.5 Loop through object
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// 15.6 Nested object
let college = {
  name: "ABC College",
  address: {
    city: "Mumbai",
    pin: 400001,
  },
};
console.log(college.address.city);

// 15.7 Object methods
let calculator2 = {
  a: 10,
  b: 5,
  add() { return this.a + this.b; },
  subtract() { return this.a - this.b; },
};
console.log(calculator2.add());

// 15.8 Clone object
let clone = { ...student };
let clone2 = Object.assign({}, student);

// 15.9 Merge objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let mergedObj = { ...obj1, ...obj2 };

// 15.10 Count object properties
function countProperties(obj) {
  return Object.keys(obj).length;
}
```

---

## 16. Math Programs

```js
// 16.1 Sum of digits
function sumOfDigits(num) {
  return String(Math.abs(num)).split("").reduce((sum, d) => sum + Number(d), 0);
}

// 16.2 Factorial
function factorial2(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  return fact;
}

// 16.3 Fibonacci series
function fibonacciSeries(n) {
  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.slice(0, n);
}

// 16.4 Prime number
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 16.5 Armstrong number
function isArmstrong(num) {
  let digits = String(num).split("");
  let power = digits.length;
  let sum = digits.reduce((s, d) => s + Math.pow(Number(d), power), 0);
  return sum === num;
}

// 16.6 Perfect number
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

// 16.7 Strong number
function isStrong(num) {
  let sum = String(num).split("").reduce((s, d) => s + factorial2(Number(d)), 0);
  return sum === num;
}

// 16.8 GCD
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

// 16.9 LCM
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 16.10 Power of number
function power(base, exp) {
  return Math.pow(base, exp);
}

// 16.11 Square root
console.log(Math.sqrt(16)); // 4

// 16.12 Random number
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 16.13 Maximum number
console.log(Math.max(5, 10, 3, 8)); // 10

// 16.14 Minimum number
console.log(Math.min(5, 10, 3, 8)); // 3

// 16.15 Absolute value
console.log(Math.abs(-42)); // 42
```

---

## 17. Pattern Programs

```js
// 17.1 Star square
function starSquare(n) {
  for (let i = 0; i < n; i++) console.log("*".repeat(n));
}

// 17.2 Hollow square
function hollowSquare(n) {
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) console.log("*".repeat(n));
    else console.log("*" + " ".repeat(n - 2) + "*");
  }
}

// 17.3 Right triangle
function rightTriangle(n) {
  for (let i = 1; i <= n; i++) console.log("*".repeat(i));
}

// 17.4 Left triangle
function leftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
}

// 17.5 Pyramid
function pyramid2(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

// 17.6 Inverted pyramid
function invertedPyramid2(n) {
  for (let i = n; i >= 1; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  }
}

// 17.7 Diamond
function diamond2(n) {
  for (let i = 1; i <= n; i++)
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
  for (let i = n - 1; i >= 1; i--)
    console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

// 17.8 Hollow diamond
function hollowDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    if (i === 1) console.log(spaces + "*");
    else console.log(spaces + "*" + " ".repeat(2 * i - 3) + "*");
  }
  for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    if (i === 1) console.log(spaces + "*");
    else console.log(spaces + "*" + " ".repeat(2 * i - 3) + "*");
  }
}

// 17.9 Number pyramid
function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ".repeat(n - i);
    for (let j = 1; j <= i; j++) row += j + " ";
    console.log(row);
  }
}

// 17.10 Character pyramid
function charPyramid(n) {
  for (let i = 0; i < n; i++) {
    let row = " ".repeat(n - i - 1);
    for (let j = 0; j <= i; j++) {
      row += String.fromCharCode(65 + j) + " ";
    }
    console.log(row);
  }
}
```

---

## 18. ES6 Practice

```js
// 18.1 Destructuring array
let colors = ["red", "green", "blue"];
let [first, second, third] = colors;
console.log(first, second, third);

// 18.2 Destructuring object
let user = { name: "Rahul", age: 25, city: "Mumbai" };
let { name: userName, age: userAge } = user;
console.log(userName, userAge);

// 18.3 Spread operator
let arrA = [1, 2, 3];
let arrB = [...arrA, 4, 5, 6];
console.log(arrB);

// 18.4 Rest operator
function logNumbers(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}
logNumbers(10, 20, 30, 40);

// 18.5 Template literals
let product = "Laptop";
let price = 50000;
console.log(`The ${product} costs ₹${price}`);

// 18.6 Optional chaining
let employee = { dept: { name: "Engineering" } };
console.log(employee?.dept?.name);  // "Engineering"
console.log(employee?.manager?.name); // undefined

// 18.7 Nullish coalescing
let value = null;
let defaultValue = value ?? "Default";
console.log(defaultValue); // "Default"

// 18.8 Default parameters
function sayHi(name = "Stranger") {
  console.log(`Hi, ${name}`);
}

// 18.9 Object shorthand
let fName = "Rahul";
let lName = "Sharma";
let person2 = { fName, lName };

// 18.10 Enhanced object literals
let prefix = "user";
let obj3 = {
  [`${prefix}_id`]: 101,
  greet() { console.log("Hello!"); },
};
```

---

## 19. Higher Order Functions

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 19.1 map()
let squares = numbers.map(n => n * n);
console.log(squares);

// 19.2 filter()
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

// 19.3 reduce()
let total = numbers.reduce((acc, n) => acc + n, 0);
console.log(total);

// 19.4 find()
let firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 2

// 19.5 findIndex()
let index = numbers.findIndex(n => n > 5);
console.log(index); // 5

// 19.6 some()
let hasNegative = numbers.some(n => n < 0);
console.log(hasNegative); // false

// 19.7 every()
let allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// 19.8 sort()
let unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b);
console.log(unsorted);

// 19.9 forEach()
numbers.forEach((n, i) => console.log(`Index ${i}: ${n}`));

// 19.10 flatMap()
let nested = [[1, 2], [3, 4], [5]];
let flatMapped = nested.flatMap(arr => arr);
console.log(flatMapped); // [1, 2, 3, 4, 5]
```

---

## 20. Practice Challenges

```js
// 20.1 FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

// 20.2 Number guessing game
function guessGame(target) {
  let guess;
  let attempts = 0;
  do {
    guess = parseInt(prompt("Guess (1-100):"));
    attempts++;
    if (guess > target) console.log("Lower!");
    else if (guess < target) console.log("Higher!");
  } while (guess !== target);
  console.log(`Guessed in ${attempts} attempts!`);
}

// 20.3 Rock Paper Scissors
function rockPaperScissors(playerChoice) {
  let choices = ["rock", "paper", "scissors"];
  let computer = choices[Math.floor(Math.random() * 3)];
  console.log(`You: ${playerChoice}, Computer: ${computer}`);
  if (playerChoice === computer) return "Draw!";
  let winConditions = { rock: "scissors", paper: "rock", scissors: "paper" };
  return winConditions[playerChoice] === computer ? "You win!" : "Computer wins!";
}

// 20.4 ATM simulation
let balance = 10000;
function atm() {
  let option = prompt("1.Withdraw 2.Deposit 3.Balance 4.Exit");
  switch (option) {
    case "1":
      let amount = Number(prompt("Amount:"));
      if (amount <= balance) { balance -= amount; console.log(`New Balance: ${balance}`); }
      else console.log("Insufficient funds");
      break;
    case "2":
      balance += Number(prompt("Amount:"));
      console.log(`New Balance: ${balance}`);
      break;
    case "3": console.log(`Balance: ${balance}`); break;
    default: return;
  }
}

// 20.5 Student grade calculator
function studentGrade(marks) {
  if (marks >= 90) return "A+";
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  if (marks >= 40) return "D";
  return "F";
}

// 20.6 Shopping cart total
function cartTotal(items) {
  return items.reduce((total, item) => total + item.price * item.qty, 0);
}

// 20.7 Employee salary calculator
function netSalary(basic) {
  let hra = basic * 0.2;
  let da = basic * 0.1;
  let pf = basic * 0.12;
  return basic + hra + da - pf;
}

// 20.8 Electricity bill calculator
function electricityBill(units) {
  if (units <= 100) return units * 5;
  if (units <= 300) return 100 * 5 + (units - 100) * 7;
  return 100 * 5 + 200 * 7 + (units - 300) * 10;
}

// 20.9 Simple calculator
function simpleCalc(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Cannot divide by zero";
    default: return "Invalid operator";
  }
}

// 20.10 Mini todo list (console)
let todoList = [];
function addTodo(task) { todoList.push({ task, done: false }); }
function markDone(index) { if (todoList[index]) todoList[index].done = true; }
function showTodos() { todoList.forEach((t, i) => console.log(`${i + 1}. [${t.done ? "✓" : " "}] ${t.task}`)); }
```

---

## Bonus (Useful for Playwright & Automation)

```js
// B1. Generate random email
function randomEmail() {
  let id = Math.random().toString(36).substring(2, 10);
  return `${id}@test.com`;
}

// B2. Generate random mobile number
function randomMobile() {
  return "9" + Math.floor(Math.random() * 900000000 + 100000000);
}

// B3. Generate random string
function randomString(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}

// B4. Generate random password
function randomPassword(length = 12) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

// B5. Generate UUID
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

// B6. Current timestamp
console.log(Date.now());
console.log(new Date().toISOString());

// B7. Format current date
function formatDate(date = new Date()) {
  let d = date.getDate().toString().padStart(2, "0");
  let m = (date.getMonth() + 1).toString().padStart(2, "0");
  let y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

// B8. Delay execution using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Usage: await delay(2000);

// B9. Async function example
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// B10. Fetch API example
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// B11. Read JSON object
let jsonObj = { id: 1, name: "Rahul", active: true };
console.log(jsonObj.name);

// B12. Convert object to JSON
let jsonString = JSON.stringify(jsonObj);
console.log(jsonString);

// B13. Parse JSON string
let parsedObj = JSON.parse('{"id":1,"name":"Rahul"}');
console.log(parsedObj);

// B14. Array of user objects
let users = [
  { id: 1, name: "Rahul", age: 25, dept: "Engineering", active: true, salary: 50000 },
  { id: 2, name: "Priya", age: 30, dept: "HR", active: true, salary: 45000 },
  { id: 3, name: "Amit", age: 28, dept: "Engineering", active: false, salary: 60000 },
  { id: 4, name: "Sneha", age: 35, dept: "Finance", active: true, salary: 70000 },
  { id: 5, name: "Vikram", age: 22, dept: "HR", active: true, salary: 40000 },
];

// B15. Find user by ID
function findUserById(id) {
  return users.find(u => u.id === id);
}

// B16. Sort users by age
users.sort((a, b) => a.age - b.age);

// B17. Filter active users
let activeUsers = users.filter(u => u.active);

// B18. Remove duplicate objects (by id)
function removeDuplicateObjects(arr) {
  let seen = new Set();
  return arr.filter(obj => {
    if (seen.has(obj.id)) return false;
    seen.add(obj.id);
    return true;
  });
}

// B19. Group objects by department
function groupByDept(arr) {
  return arr.reduce((groups, obj) => {
    let dept = obj.dept;
    if (!groups[dept]) groups[dept] = [];
    groups[dept].push(obj);
    return groups;
  }, {});
}

// B20. Calculate total salary from object array
function totalSalary(arr) {
  return arr.reduce((sum, obj) => sum + obj.salary, 0);
}
```

