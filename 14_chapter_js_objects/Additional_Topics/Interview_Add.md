# Additional Topics — Interview Questions (Objects)

Questions covering the topics not in the main chapter: **`this` binding, prototypes, getters/setters, computed keys, destructuring, optional chaining, cloning, and object utility methods**.

---

## Easy Questions

1. What does `this` refer to inside an object method?

2. What does `this` refer to inside an arrow function defined in an object?

3. What does `bind()` do?

4. What is a prototype?

5. What is a getter?

6. What is a setter?

7. What is a computed property name?

8. What is property shorthand?

9. What does `Object.fromEntries()` do?

10. What is a shallow copy?

---

## Medium Questions

11. What is the output of this code?
```javascript
const user = {
    name: "rahul",
    regular() { return this.name; },
    arrow: () => this.name
};
console.log(user.regular());
console.log(user.arrow());
```

12. What is the output of this code?
```javascript
const a = { name: "rahul", regular() { return this.name; } };
const b = { name: "gupta", regular: a.regular };
console.log(b.regular());
```

13. What is the output of this code?
```javascript
function greet(greeting) { return `${greeting}, ${this.name}`; }
console.log(greet.call({ name: "rahul" }, "Hi"));
const bound = greet.bind({ name: "rahul" });
console.log(bound("Hello"));
```

14. What is the output of this code?
```javascript
const animal = { speaks: true };
const dog = Object.create(animal);
dog.breed = "lab";
console.log(dog.breed);
console.log(dog.speaks);
console.log(Object.getPrototypeOf(dog) === animal);
```

15. What is the output of this code?
```javascript
const animal = { speaks: true };
const dog = Object.create(animal);
dog.breed = "lab";
console.log(dog.hasOwnProperty("breed"));
console.log(dog.hasOwnProperty("speaks"));
console.log("speaks" in dog);
```

16. What is the output of this code?
```javascript
const user = {
    first: "rahul",
    last: "gupta",
    get fullName() { return `${this.first} ${this.last}`; }
};
console.log(user.fullName);
```

17. What is the output of this code?
```javascript
const user = {
    first: "rahul",
    last: "gupta",
    set fullName(value) { [this.first, this.last] = value.split(" "); }
};
user.fullName = "saanvi sharma";
console.log(user.first, user.last);
```

18. What is the output of this code?
```javascript
const key = "status";
const obj = { [key]: "pass" };
console.log(obj.status);
```

19. What is the output of this code?
```javascript
const name = "rahul";
const user = { name };
console.log(user);
```

20. What is the output of this code?
```javascript
const user = { name: "rahul", age: 30, city: "NYC" };
const { name: n, ...rest } = user;
console.log(n);
console.log(rest);
```

21. What is the output of this code?
```javascript
function login({ username, password = "secret" }) {
    return `${username}:${password}`;
}
console.log(login({ username: "rahul" }));
```

22. What is the output of this code?
```javascript
const data = { user: { profile: null } };
console.log(data.user?.profile?.name);
console.log(data.account?.id ?? "n/a");
```

23. What is the output of this code?
```javascript
const base = { browser: "chrome", timeout: 3000 };
const override = { timeout: 5000 };
console.log({ ...base, ...override });
```

24. What is the output of this code?
```javascript
console.log(Object.fromEntries([["a", 1], ["b", 2]]));
```

25. What is the output of this code?
```javascript
const codes = { pass: 1, fail: 0 };
console.log(Object.fromEntries(Object.entries(codes).map(([k, v]) => [v, k])));
```

---

## Hard Questions

26. What are the rules that determine `this`? List the main call forms.

27. Why does an arrow function inside an object not see the object as `this`?

28. What is the difference between `call`, `apply`, and `bind`?

29. How does the prototype chain work during property lookup?

30. What is the difference between `Object.getPrototypeOf` and `__proto__`?

31. How do getters and setters help keep derived data consistent?

32. What are property descriptors, and how do they relate to `freeze`?

33. What is the difference between `Object.freeze` and `Object.seal` at the descriptor level?

34. How do you implement a deep clone, and why is `structuredClone` better than JSON round-tripping?

35. How does `Object.assign` differ from the spread operator for merging objects?

36. What is prototype pollution, and how do you avoid it?

37. How would you implement a `pick` and an `omit` utility using `Object.entries`?

38. How would you group an array of objects by a property using `reduce`?

39. What is the difference between `??` and `||` for default values?

40. How do you convert an object to a `Map` and back?

41. What is the output and why?
```javascript
const obj = {};
obj.fn?.();
console.log("no error");
```

42. What is the output and why?
```javascript
const user = { name: "rahul", age: 0 };
console.log(user.age ?? 18);
console.log(user.age || 18);
```

---

## Bonus Interview Tips

- **`this` = call site**, not definition site; arrows inherit from the enclosing scope.
- **`call`/`apply` invoke immediately**, `bind` returns a new bound function.
- **Prototype chain** backs inheritance; `in` walks it, `hasOwnProperty` doesn't.
- **Getters/setters** compute on access without changing call syntax.
- **Computed keys** `{ [expr]: v }` and **shorthand** `{ x }` keep literals concise.
- **`?.` for safe access, `??` for a real fallback** (unlike `||`).
- **`structuredClone`** for deep copies; **spread/`Object.assign`** for shallow merges.
- **`Object.keys/values/entries/fromEntries`** move between objects and arrays.
