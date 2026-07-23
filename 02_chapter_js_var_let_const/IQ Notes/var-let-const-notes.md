# JavaScript Variables: var vs let vs const

These three keywords are used to create variables in JavaScript. They are similar, but they behave differently in important ways.

## Quick Comparison Table

| Feature | var | let | const |
|--------|-----|-----|-------|
| Reassignment | Allowed | Allowed | Not allowed |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Scope | Function scope | Block scope | Block scope |
| Hoisting | Yes | Yes, but not initialized | Yes, but not initialized |
| Best use | Old style | Good for changing values | Best for fixed values |

## 1. var

### Simple explanation
- var is the old way to declare variables in JavaScript.
- It can be reassigned anytime.
- It can also be redeclared in the same scope.
- It is function-scoped, which means it is available inside the whole function.
- It is not very strict, so it can cause confusion in larger programs.

### Key points
- You can change its value later.
- You can declare the same variable name again.
- It works outside blocks more easily than let and const.
- It is not recommended in modern JavaScript.

### Example
```javascript
var name = "John";
name = "Rahul";
```

## 2. let

### Simple explanation
- let is a modern way to declare variables.
- It allows reassignment, so you can change its value later.
- It does not allow redeclaration in the same scope.
- It is block-scoped, which means it works only inside the block where it is declared.
- It is safer than var.

### Key points
- You can change its value later.
- You cannot declare the same name again in the same scope.
- It is better for variables that may change.
- It helps avoid common mistakes in code.

### Example
```javascript
let age = 20;
age = 25;
```

## 3. const

### Simple explanation
- const is used when the value should not change.
- It does not allow reassignment.
- It also does not allow redeclaration in the same scope.
- It is block-scoped like let.
- It is the safest choice for values that should remain fixed.

### Key points
- You cannot change its value later.
- You cannot declare the same name again in the same scope.
- It is best for constants like PI or fixed configuration values.
- It makes code more predictable and secure.

### Example
```javascript
const PI = 3.14;
// PI = 3.14159; // This will cause an error
```

## When to use which?

- Use var only if you are learning older JavaScript or working with old code.
- Use let when the value may change later.
- Use const when the value should stay the same.

## In short
- var = old, flexible, but less safe.
- let = modern, can change value.
- const = modern, cannot change value.

## Important note
In modern JavaScript, developers usually prefer let and const instead of var.
