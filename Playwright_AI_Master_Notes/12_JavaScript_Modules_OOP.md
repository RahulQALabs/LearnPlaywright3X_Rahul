# Import/Export, Classes, Constructors, Static, Encapsulation, Inheritance & Polymorphism

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

# Export and Import and OOPs

So, import and export help you to import a file, functions, or variables into another file in this case

### [[Task 25th. Aug 2026] Linux Command Basic for Qa](https://www.sdetclub.com/c/playwright-3x/task-25th-aug-2026-linux-command-basic-for-qa)

[https://courses.thetestingacademy.com/courses/sdet-club-masterclasses-1337/contents/647a955eb0a1c](https://courses.thetestingacademy.com/courses/sdet-club-masterclasses-1337/contents/647a955eb0a1c)

curly braces basically mean we will find it. It is not a default by things. We will find this without curly braces. It is default. We will always get a default log

    // Default Export -> Export One Main Thing

    // Logger -> Logger is a file which will help you to write logs to capture events and documents. It will help you to capture overall for debugging purposes also. It can give you warnings, errors, information, debugging information, and many more.

    export default function log(message) {
        console.log("[LOG] " + message);
    }

    export function logBetter(message) {
        console.log("-----------");
        console.log("[LOGS] " + message);
        console.log("-----------");
    }

    import log from './logs/logger.js';
    log('Starting');

---

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_Y_qvgL2XPcoEI05m0NABH.png?ixlib=js-3.8.0)

---

# Classes and Objects

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_svFQYITa3okR-Ja8FsASH.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_0ysfRmJhYkPMvXv4x5nn2.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_z1nmGtUYWMtCJ1pZUODk8.png?ixlib=js-3.8.0)

Class - blueprint contains attribute and behaviours

Object → Real entity, instance of the class.

---

> 27th Aug 2026

# Constructor

**A special function that runs automatically, once, at the moment an object is born.**

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_KheTCHOXJdvzvcEFMi7fa.png?ixlib=js-3.8.0)

constructors actually help you to create the attributes and assign the value when the object is getting created. How many?

### What actually happens

When you write `new Car("i10")`:

1. An empty object is created — `{}`
2. That object becomes `this`
3. **The constructor runs**, with `"i10"` as `assigned_name`
4. `this.name = assigned_name` writes the name onto it
5. The finished object comes back to you

    class Car{
        // constructor(){
        //  // Default Conscutor
        // }

        // Param
        constructor(assigned_name){
            this.name = assigned_name;
        }
    }

    let hyndai_i10 = new Car("i10");
    console.log(hyndai_i10.name);

    let hyndai_create = new Car("creta");
    console.log(hyndai_create.name);

The constructor is a special method that `new` calls automatically to initialise a new instance. It's where `this` gets its properties. **One per class, runs once per object.**

---

## Static Variables and Methods

- `static` means "**belongs to the CLASS**, not to individual objects."
- If something is belong to class, it will shared with all the objects.
- Static is something which becomes common to all the objects. Okay? If one object changes the value of the static, then other objects will also see the same value.

---

> Claude Code 101

[anthropic.skilljar.com/claude-code-101](https://anthropic.skilljar.com/claude-code-101) - 8PM IST Today

---

> 29th Aug 2026

- Encapsulation

- Inheritance, Method Overriding, Multi-Level & Multiple Inheritance

- Polymorphism

---

> Claude Code 101

# Encapsulation

encapsulation basically means hiding the internal details and only allowing you through the doors, or you can say that it is wrapping the data by using the functions in this

    class Person{
            // hide your chids
            #child1;
            #child2;
            // private

        constructor(name, ch1, ch2) {
            this.name = name;
            this.#child1 = ch1
            this.#child2 = ch2;
        }

        getChild1(){
            return this.#child1;
        }

        setChild1(changed_name){
            this.#child1 = changed_name;
        }
    }

- keep your variables private
- private variables are only allowed through the getters and setters
- encapsulation works only within the class.

---

# Inheritance

Inheritance means a **child class gets everything from its parent class**

-> all properties and methods ( the attributes and behavior also ) for FREE.

The child can then ADD new stuff or CHANGE existing stuff.

**Real QA Example:** In Page Object Model, every page has `open()` and `close()`.

Instead of writing these in every page class, write them ONCE in `BasePage`, and let all pages INHERIT.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_7qkV6I6uKfRlT1GAprsuS.png?ixlib=js-3.8.0)

---

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_2x8sIpOAVh89vn24WyIMf.png?ixlib=js-3.8.0)

**Supported:** single, multilevel, and hierarchical → extends

**Not supported:** multiple inheritance (`class C extends A, B` is a syntax error). Workaround is mixins, Hybrid(multiple + hieirar)

---

# Polymorphism

Polymorphism comes from Greek → "poly" means many, "morph" means forms.

So polymorphism means **many forms**.

## Types of Polymorphism

JavaScript supports TWO types of polymorphism. Understanding the difference helps you know when and how to use each one.

- Runtime Polymorphism (Method Overriding)
- **Compile-Time Polymorphism** (Method Overloading) → **NOT Supported in JS**

    class BaseTest {
        setup() {
            console.log("Base: open browser");
        }
    }

    class APIPage extends BaseTest{
        setup() {
            console.log("APITest: open browser");
        }
    }

    let btest = new BaseTest();
    let test = new APIPage();
    test.setup();
    btest.setup();

    // TS = JS + Rules

---
