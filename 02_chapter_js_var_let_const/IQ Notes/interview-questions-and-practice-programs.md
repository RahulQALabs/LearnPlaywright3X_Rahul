# Interview Questions and Practice Programs: var vs let vs const

This file contains interview-style questions and small JavaScript practice programs related to variables, scope, hoisting, and declaration rules.

## Interview Questions

### Basic Questions
- What is the difference between var, let, and const?
- Which keyword is used to declare a variable that can be reassigned?
- Which keyword is used for values that should not change?
- What is the difference between block scope and function scope?
- What happens when you declare a variable using var inside an if block?

### Intermediate Questions
- Why is let considered safer than var?
- What is hoisting in JavaScript?
- What is the difference between hoisting and initialization?
- Can you redeclare a variable declared with let?
- Can you redeclare a variable declared with const?

### Advanced Questions
- Why do developers prefer let and const over var in modern JavaScript?
- What is the Temporal Dead Zone (TDZ)?
- How does block scope affect variable accessibility?
- What are the best practices for choosing var, let, or const?
- How would you explain scope and hoisting to a beginner?

## Short Answer Questions

1. What keyword should you use for a value that never changes?
   - Answer: const

2. Which keyword allows reassignment but not redeclaration?
   - Answer: let

3. Which keyword is function-scoped and can be redeclared?
   - Answer: var

4. What is block scope?
   - Answer: A variable is accessible only inside the block where it is declared.

## Practice Programs

### Level 1: Basic Practice

#### Program 1: Reassign a variable
```javascript
let name = "Rahul";
name = "Aman";
console.log(name);
```

#### Program 2: Use const for fixed values
```javascript
const PI = 3.14;
console.log(PI);
```

#### Program 3: Demonstrate var scope
```javascript
function test() {
  var x = 10;
  console.log(x);
}

test();
```

### Level 2: Intermediate Practice

#### Program 4: Compare let and const
```javascript
let age = 20;
age = 25;
console.log(age);

const city = "Delhi";
console.log(city);
```

#### Program 5: Block scope example
```javascript
if (true) {
  let message = "Hello";
  console.log(message);
}

// console.log(message); // Error
```

#### Program 6: Redeclaration example
```javascript
var a = 1;
var a = 2;
console.log(a);
```

### Level 3: Advanced Practice

#### Program 7: Try to reassign const
```javascript
const number = 10;
// number = 20; // This will throw an error
console.log(number);
```

#### Program 8: Scope confusion with var
```javascript
function sample() {
  if (true) {
    var value = 100;
  }
  console.log(value);
}

sample();
```

#### Program 9: Use let inside a loop
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// console.log(i); // Error
```

## Practice Tasks for Interview Preparation

- Write a program to declare a variable using var, let, and const.
- Write a program that shows that let is block-scoped.
- Write a program that shows that const cannot be reassigned.
- Explain in your own words what hoisting means.
- Create a small example where var behaves differently from let.

## Bonus Interview Tip

When answering questions about var, let, and const, always mention:
- reassignment
- redeclaration
- scope
- hoisting
- modern JavaScript best practices
