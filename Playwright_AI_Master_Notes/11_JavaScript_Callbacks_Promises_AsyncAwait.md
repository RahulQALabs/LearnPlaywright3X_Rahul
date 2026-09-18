# Callbacks, Callback Hell, Promises & Async/Await

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

# JavaScript Advanced Topics

- Callback Functions
- Callback Hell & Pyramid of Doom
- Dom Manipulation
- Promise
- Sync &. Async

---

> 13th Aug 2026

## What is a Callback Function?

- A callback is simply a function that you give to another function, saying "Hey, when you're done, run this."
- Think of it like this → you go to a restaurant, give your phone number (callback), and say "Call me when my table is ready." You don't wait at the door. You go shopping. When the table is ready, they CALL YOU BACK. That's a callback.

In QA terms → when Playwright clicks a button, it waits for the page to load, THEN runs your assertion. That assertion is a callback.

    function placeOrder(item, callback) {
      console.log("Order placed: " + item);
      callback();
    }

    placeOrder("Burger", function () {
      console.log("Order is ready! Pick it up.");
    });

    function placeOrder(item, callback){
        console.log("Order Placed....");
        callback();
    }

    // Define
    function print() {
        console.log("Normal Fn - Done with the order");
    }
    // First Way
    placeOrder("Burger", print);

    // Sencond Way Anoy
    placeOrder("Burger", function(){
        console.log("Order is ready!, pick it up!");
    })

    // Third Way - Arrow Fn
    placeOrder("Burger", () => {
        console.log("Arrow Fn, I am also a function wihtout name!")
    });

    // test('has title', async ({ page }) => {
    //   await page.goto('https://playwright.dev/');

    //   // Expect a title "to contain" a substring.
    //   await expect(page).toHaveTitle(/Playwright/);
    // });

    test('has title', async ({ page }) => {

    });

---

### Synchronous Callbacks

- Synchronous = runs immediately, line by line, top to bottom. (UPI/IMPS)
- The program WAITS for it to finish before moving to the next line.
- Every forEach, **map**, **filter** you've used → those are sync callbacks.

### Asynchronous Callbacks ()

Asynchronous = "I'll do this later, you carry on."

**Real-world QA example:** When you send an API request, you don't freeze your entire test suite waiting for the response. The request goes out, your code continues, and when the response arrives, THEN the callback runs.

To simulate async behavior in plain JS, we use `setTimeout(callback, milliseconds)`.

## Callback Hell (Pyramid of Doom)

Now imagine you have 4 steps that MUST run in order, and each step is async.

You put callback inside callback inside callback...

`// Real QA Scenario: E2E Login Flow app.vwo.com`

function step1(callback) { console.log("Open browser"); callback(); }

function step2(callback) { console.log("Navigate to page"); callback(); }

function step3(callback) { console.log("Click button"); callback(); }

function step4(callback) { console.log("Click button"); callback(); }

step1(function () { step2(function () { step3(function () { step4(function () { console.log("Done!"); }); }); }); });

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_lyysgDm0FM1YZicWGrS0o.png?ixlib=js-3.8.0)

### Callback That Returns a Value

    function calculate(a, b, operation) {
        return operation(a, b);
    }

    let sum = calculate(10, 5, function (x, y) {
        return x + y;
    });

    console.log(sum);

---

## Promises

### What is a Promise?

A Promise is JavaScript's way of saying "I'll give you the result later -> either it'll succeed or it'll fail.

**Real-life analogy:** You order food on Zomato. The order is a PROMISE.

- **Pending** — food is being prepared (not ready yet)
- **Fulfilled (Resolved)** — food is delivered ✅
- **Rejected** — order cancelled ❌

    let apiCall = new Promise(function(resolve, reject){
            resolve({status : 200, body : "User Data"});
    });

    apiCall.then(function(response){
        console.log(response);
        console.log(response.status);
        console.log(response.body);
    });

    // .then() runs ONLY when the promise resolves successfully.

    let testRun = new Promise(function (resolve, reject) {
        reject("Assertion Failed");

    });

    testRun.then(function (data) { // Resolve
        console.log(data);
    }).catch(function (error) { // Reject
        console.log(error);
    }).finally(function () { // Always Executed!
        console.log("I will be executed anyhow!!");
    });

    // .finally() ALWAYS runs — whether the test passed or failed. Just like afterEach() in Cypress or Playwright.

## Promise Chaining — The Solution to Callback Hell

Compare this to the callback hell version → completely FLAT, easy to read, ONE `.catch()` handles all errors.

    function openBrowser() {
        return new Promise(function (resolve) {
            resolve("Browser opened!");
        });
    }

    function goToLogin() {
        return new Promise(function (resolve) {
            resolve("Login page loaded");
        });
    }

    function enterCredentials() {
        return new Promise(function (resolve) {
            resolve("Credentials entered");
        });
    }

    function clickLogin() {
        return new Promise(function (resolve) {
            resolve("Logged in successfully");
        });
    }

    openBrowser()
        .then(function (msg) {
            console.log("Step 1", msg);
            return goToLogin();
        }).then(function (msg) {
            console.log("Step 2 :", msg);
            return enterCredentials();
        }).then(function (msg) {
            console.log("Step 3 :", msg);
            return clickLogin();
        }).then(function (msg) {
            console.log("Step 4 :", msg);
        }).catch(function (error) {
            console.log("Error:", err);
        });

[image.png](https://eraser.imgix.net/workspaces/Tz63v1Pz52oXHd70LdyM/WWS31TdyovhjTB1TVo9v2jWpPei1/image_vQ73eiud0QPB7Ju1-MHIo.png?ixlib=js-3.8.0)

## Promise.all() — Run Multiple Promises Together

    let checkAuth = Promise.resolve("Auth Ok");
    let checkDB = Promise.resolve("DB OK");
    let checkCache = Promise.resolve("Cache OK");

    Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
        console.log("All checks:", results);
    })

    Promise.all([
        Promise.resolve("OK"),
        Promise.reject("DB DOWN"),
        Promise.resolve("OK")
    ])
        .then(function (r) { console.log(r); })
        .catch(function (err) { console.log("Failed:", err); });

---

## Promise.allSettled() — Get Results Even If Some Fail

    Promise.allSettled([
        Promise.resolve("Test A Passed!"),
        Promise.reject("Test B failed"),
        Promise.resolve("Test C passed")
    ]).then(function (results) {
        results.forEach(function (r, i) {
            console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
        });
    })
    // This is like a test report — you want results for ALL tests, not just stop at the first failure.

## Promise.race() — First One to Finish Wins

    let fastServer = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Fast 100ms")
        }), 100
    });

    let slowServer = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Fast 500ms")
        }), 500
    });

    Promise.race([fastServer, slowServer]).then(function (winner) {
        console.log("Winner:", winner);
    })

    // let p = new Promise(function (resolve, reject) {
    //     resolve(42);
    // });

    // p.then(function (value) {
    //     console.log("Answer:", value);
    // });

    // let p = new Promise(function (resolve, reject) {
    //     reject("Something broke");
    // });

    // p.catch(function (err) {
    //     console.log("Caught:", err);
    // });

    // let p = Promise.resolve(5);

    // p.then(function (val) {
    //     return val * 10;
    // }).then(function (val) {
    //     console.log("Result:", val);
    // });

    // Promise.resolve(1)
    //     .then(function (val) {
    //         console.log(val);
    //         return val + 1;
    //     })
    //     .then(function (val) {
    //         console.log(val);
    //         return val + 1;
    //     })
    //     .then(function (val) {
    //         console.log(val);
    //     });

    // Promise.resolve("start")
    //     .then(function (val) {
    //         console.log(val);
    //         throw new Error("Broke at step 2");
    //     })
    //     .then(function () {
    //         console.log("This will NOT run");
    //     })
    //     .catch(function (err) {
    //         console.log("Caught:", err.message);
    //     });

    // Promise.reject("Test failed")
    //     .then(function (data) {
    //         console.log("Data:", data);
    //     })
    //     .catch(function (err) {
    //         console.log("Error:", err);
    //     })
    //     .finally(function () {
    //         console.log("Cleanup done");
    //     });

    // Promise.resolve("Quick win").then(function (msg) {
    //     console.log(msg);
    // });

    // Promise.reject("Quick loss").catch(function (msg) {
    //     console.log(msg);
    // });

    // let t1 = Promise.resolve("Login: PASS");
    // let t2 = Promise.resolve("Search: PASS");
    // let t3 = Promise.resolve("Logout: PASS");

    // Promise.all([t1, t2, t3]).then(function (results) {
    //     console.log(results);
    // });

    // let t1 = Promise.resolve("PASS");
    // let t2 = Promise.reject("FAIL");
    // let t3 = Promise.resolve("PASS");

    // Promise.all([t1, t2, t3])
    //     .then(function (r) { console.log("All:", r); })
    //     .catch(function (err) { console.log("Stopped:", err); });

    Promise.allSettled([
        Promise.resolve("API 200"),
        Promise.reject("API 500"),
        Promise.resolve("API 201")
    ]).then(function (results) {
        results.forEach(function (r) {
            let val = r.status === "fulfilled" ? r.value : r.reason;
            console.log(r.status + " → " + val);
        });
    });

---

# Async/Await

### What is Async/Await?

`async/await` is a cleaner way to write Promises. Instead of chaining `.then().then().then()`, you write code that LOOKS synchronous but works asynchronously.

- Callback
- Promise

### Asynchronous Programming

- **Async code** allows a program to start a long-running task (like fetching data from a file). and continue with other tasks before the first one finishes.
- **Async code** prevents the application from freezing, which is critical for user experience.

## How JavaScript Runs Code

- JavaScript executes code one line at a time.
- Each line must finish before the next line runs.

    myDisplayer("A");
    myDisplayer("B");
    myDisplayer("C");

The output is always A B C.

    function myFirst() {
      myDisplayer("Hello");
    }

    function mySecond() {
      myDisplayer("Goodbye");
    }

    myFirst();
    mySecond();

This example will display "**Hello Goodbye**" because the functions are called in that order:

---

## Why Async Code?

- **Some tasks take time to finish** (network requests, timers, user input).

- **To stay responsive**, JavaScript can use **async programming**.

- **Asynchronous flow** refers to how JavaScript allows certain operations to **run in the background** and let their results be **handled when they are ready**.

- If JavaScript waited for these tasks, the page would freeze.

- Async code lets the rest of the program continue to run.

- Async code does not run immediately

- **Timers** run after a specified number of milliseconds

- **Events** run when triggered by an event

- **Network requests** run when the data arrives

**Two keywords:**

- `async` → put before a **function** to make it **return a Promise. (a, f, p)**
- `await` → pause here, **wait for the Promise to finish,** then give me the value. (**calling of functions)**

---

> 25th Aug 2026

- Claude 101 - Certification → Post it on the lINLinekedin → less than 1 hour → Watch RecrodiRecordings XXx you can . perform this in less 1 hour ->+ 2 Session
- Claude Code 101 - (First week of the Sept)
- Part 1 - Today 8 PM IST → AI Fluency: Framework & Foundations
- Part 2 - Thursday - 8 PM IST - AI Fluency: Framework & Foundations

---
