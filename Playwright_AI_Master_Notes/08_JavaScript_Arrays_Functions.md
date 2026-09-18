# Arrays, Array Operations & Functions

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

# Array & Functions

- Arrays are ordered collections of values.
- JavaScript arrays are dynamic and can hold mixed types.
- An ordered, zero-indexed, **mutable** collection.
- `typeof []` is `"object"` → use `Array.isArray()` to check.

    const browsers = ["chrome", "firefox", "webkit"];
    console.log(browsers[0]);          // chrome
    console.log(browsers.at(-1));      // webkit  (negative index)
    console.log(browsers.length);      // 3

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_28YqysJD2njgJLCET6JdK.png?ixlib=js-3.8.0)

    let fruit = [];
    let browsers = ["chrome", "firefox", "webkit"];
    console.log(browsers[0]);
    console.log(browsers.at(-1));
    console.log(browsers.length);
    console.log(fruit.length);

    // For the Negative indexed, use the at
    console.log(browsers[-1]); // undefined

---

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_y37KPg1WSkZ6WtMiO5gK2.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_y2Fg-mCvozKGPMRH6p3v6.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_MJs2cr18LsFrsVZeRwDo_.png?ixlib=js-3.8.0)

    let arr = [1, 2, 3];
    console.log(arr);

    // Add to END
    arr.push(4);
    console.log(arr);

    // Remove from END
    arr.pop();
    console.log(arr);

    arr.push(5, 6);
    console.log(arr);

    // Add to BEGINNING
    arr.unshift(0);
    console.log(arr);

    // Remove from BEGINNING
    arr.shift();
    console.log(arr);

    // [ 1, 2, 3, 5, 6 ]

    arr.splice(2, 1);
    console.log(arr);

    arr.splice(2, 0, 99);
    console.log(arr);

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_s4Gh67Yj9h5lpfcZpVLI1.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_UmpWOlQvgnPw5NQtghwPC.png?ixlib=js-3.8.0)

---

**Q1. [Easy]** What is the output?

    const arr = [1, 2, 3];
    console.log(arr.push(4));

- A) `[1,2,3,4]`
- B) `4`
- C) `3`
- D) `undefined`

---

> Monday - MasterClass - Evening - 8 PM - Topic, After

---

### Arrays Transform, Sort, Slicing, Checking, Copy, Shallow Copy, Deep Copy

### Destructuring Arrays

**Map**

    let scores = [45, 82, 91, 60, 73];

    let grades = scores.map(item_score => item_score > 70 ? "Pass": "Fail");
    console.log(grades);

    // Map My app is generally used whenever we want to
    // transform the array into a new array of the same size.

**Filter**

    let passing = scores.filter(s => s >= 70);
    console.log(passing);

**Sorting**

    let fruits = ["banana", "apple", "cherry"];
    fruits.sort();
    console.log(fruits);
    //  alphabetical by default

    let score = [4,3,2];
    console.log(score.sort());

    let nums = [10,1,21,2];
    // nums.sort();
    console.log(nums); //  1,2,10,21 -
    // Natural Sorting - Lexicographic / string sort

    // Proper Sorting, Asc , Desc
    // nums.sort((a,b) => a-b);

    nums.sort((a,b) => b-a); // Desc
    console.log(nums);

    // Slice & Combining

    let arr = [1, 2, 3, 4, 5];
    // slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
    //Don't give the end, it will automatically take from start to end.

    let arr = [1, 2, 3, 4, 5];

    // slice(start, end)
    // ✔ Returns a NEW array.
    // ✔ Does NOT modify (mutate) the original array.
    // ✔ start index is included.
    // ✔ end index is excluded.
    // ✔ Array indexing starts from 0.
    // ✔ If 'end' is omitted, it returns elements from 'start' to the end of the array.

    console.log(arr.slice(1, 3)); // [2, 3]
    console.log(arr);

    // Checking Arrays

    // Check if something IS an array

    let result = Array.isArray([1, 2, 3]);
    let result1 = Array.isArray("a");
    console.log(result);
    console.log(result1);

---

> 1st Aug 2026

## What is a Function?

> JavaScript, if you remember, is all about functions.

- A function is a **reusable block of code that performs a specific task.**
- Instead of repeating logic, **you define it once** and call it whenever needed.

1. Define / Definition a Function.
2. Calling of Functions

> **Definition**

function name(param){

// code which is repeated that you execute.

}

> **Calling**

name(90); // argument

---

**There are four types of functions which exist (JS)**

- no return type. No arguments
- with return type No arguments.
- with argument, no return
- with arguments and with return

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image__I4f77FxUBF-pO03zOZtb.png?ixlib=js-3.8.0)

## Console.log vs Return

**`console.log`** = print to terminal/devtools (side effect, for humans).

**`return`** = send value back to caller (data flow, for code).

    function addLog(a, b) {
      console.log(a + b);    // prints, returns nothing
    }

    function addReturn(a, b) {
      return a + b;          // gives value back
    }

    let x = addLog(2, 3);       // prints something, x = undefined
    let y = addReturn(2, 3);    // prints nothing, y = 5

### Differences

|  | **`console.log`** | **`return`** |
| --- | --- | --- |
| Purpose | Debug / display | Pass value out |
| Output goes to | Terminal / browser console | Caller variable |
| Function value | Still `undefined` | The returned value |
| Stops function? | No | Yes — exits immediately |
| Chainable? | No | Yes (`addReturn(2,3) * 10`) |

    // normal
    function validateStatusCode(status) {
        if (status >= 200 && status <= 300) {
            console.log("Request is fine!")
        }
    }

    // Fn as Expression
    const validateStatusCode_Exp = function (status) {
        if (status >= 200 && status <= 300) {
            console.log("Request is fine!")
        }
    }

    // Arrow Fn
    const validateStatusCode_Arrow = (status) => {
        if (status >= 200 && status <= 300) {
            console.log("Request is fine!");
        }
    }

    validateStatusCode(200);
    validateStatusCode_Exp(200);
    validateStatusCode_Arrow(200);

    //Immediately Invoked Function Expression (IIFE)
    //They don't need to be called.

    function name1() {
        console.log("Hi")
    }
    name1();

    // IIFE
    (function(){
        console.log("Anonymous Fun");
    })();

    (function () {
        console.log("Staging")
    })();

    //Arrow Crazy

    (() => {
        console.log("Setup complete");
    })();

---

> 4th Aug 2026
