# TypeScript Features, Types, Abstraction, Interfaces, Enums, Generics & Access Modifiers

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

## TypeScript-Only Features => Agenda

- Type Annotations (:string, :number, :boolean, :void)
- Interfaces
- Enums
- Generics ()
- private / public / protected Keywords
- readonly
- Abstract Classes
- Type Assertions (as)
- override Keyword
- Decorators
- Namespaces
- Tuple Types

---

## 1. Type Annotations (:string, :number)

- Type annotations let you tell TypeScript EXACTLY what type a variable, parameter, or return value should be.
- If you assign the wrong type, TypeScript catches it BEFORE you run the code → at compile time.
- In JavaScript, **`let timeout = "five"`** is perfectly fine when you meant `5` JS doesn't care.
- In TypeScript, if you write `let timeout`**`: number`**`= "five"` , it throws an error immediately. You catch the bug before it ever reaches your test pipeline.

> **let timeout :string= "five"**

### Installation & Setup

- npm install -g typescript ts-node
- tsc --version
- tsc --init
- File Names → .ts
- tsc HelloWorld.ts --ignoreConfig
- Typescript → Converted back to JS (compile)

Run the file via the → **ts-node 25_Typescript/185.ts** Hi (base) ➜ LearnPlaywright3x git:(main) ✗ node 25_Typescript/183.js

---

ts-node → compile and run it ( compiled file will not be shown to you)

tsc HelloWorld.ts --ignoreConfig → compiled file is created, it will not run the code

---

> 3rd Sept 2026

# Abstraction - OOPs

- Interfaces
- Enums
- Abstract Classes

Abstraction means **HIDING the complex internal details** and **showing only what the user needs** to see. You expose the "WHAT" and hide the "HOW."

Think about driving a car. You press the accelerator the car moves. You don't need to know how the engine combustion works, how fuel injection happens, or how pistons move. The car ABSTRACTS all that complexity behind a simple pedal. Press pedal = go. That's it.

- **Interfaces**
- Enums
- Abstract Classes

**Abstraction vs Encapsulation → They Are NOT the Same.**

Encapsulation is about **DATA HIDING** — making fields private so nobody can access them directly. It's about protection. You use `#`**`private`** fields and **public getters/setters.**

Abstraction is about **COMPLEXITY HIDING** — showing a simple interface while hiding the complicated implementation. It's about simplification. **You use abstract classes, interfaces, and well-designed methods.**

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_nswzfNMaVISpFDPrDdJky.png?ixlib=js-3.8.0)

# Interfaces

- An interface defines the SHAPE of an object.
- what properties it must have and what types those **properties must be.**
- It's like a contract. If an object says "I follow this interface," it MUST have all the required properties.

    // Abstraction
    // Interface
    // ENUms
    // Abstract class

    interface User {
      name: string;
      age: number;
      email: string;
    }

    const user1: User = {
        name: "John",
        age :  30,
        email: "abc@gmail.com"
    }

    const user2: User = {
        name: "John2",
        age : 56,
        email: "abc@gmail.com"
    }

    const user3: User = {
        name: "John3",
        age : 23,
        email: "abc@gmail.com"
    }

- Interfaces don't generate any JavaScript code.
- They exist ONLY at compile time for type checking. After compilation, interfaces completely disappear from the output.

---

    // Interface are used in API Testing

    interface APIResponse{
        statuscode:number;
        body: string;
        headers?: object;
        responseTime: number;
    }

    let responseData: APIResponse = {
        statuscode:200,
        body: "{}",
        responseTime: 200
    }

    console.log("Status:", responseData.statuscode);
    console.log("Body:", responseData.body);

    let responseData2: APIResponse = {
        statuscode:200,
        body: "{}",
        headers: {},
        responseTime: 200
    }

---

> 5th Sept 2026

JS → TS → Playwright → Framework + AI

- **Introduction to Agent Skills** → Certification (Claude)
  - Link to course - [anthropic.skilljar.com/introduction-to-agent-skills](https://anthropic.skilljar.com/introduction-to-agent-skills)
  - Get the Certification
  - Publish it on your Linkedin
  - Create at least 4-5 skills also by learning that concept.
  - [github.com/PramodDutta/skillmasterclass2/tree/main/src/test-planner](https://github.com/PramodDutta/skillmasterclass2/tree/main/src/test-planner)
  - If possible - publish - [qaskills.sh/skills](https://qaskills.sh/skills) - login publish your own skills.

Tomorrow Test Planned

- 9 am IST LIVE TEST
- 12 hours to finish( anytime)
- Publish your result in the Thread at sdetclub.com

**📢 Test Announcement**

Hi Everyone,

There will be a test scheduled this Sunday at 9:00 AM. (6th Sept)

⏱️ Time: 9:00 AM IST onwards

📝 Test Name & Link: Will be shared as a post on the SDET platform and in the WhatsApp community.

Make sure you are prepared and attempt it on time. This is a great opportunity to evaluate your understanding.

All the best 👍

---

**Apart from Certification**

- Playwright CLI
- Playwright MCP
- Playwright AI Agents
- Selenium to Playwright Migration - Part 1
- Selenium to Playwright Migration - Part 2
- AI Factory with Playwright (Advance)
- Regex 101 Class
- Hackathon - Playwright

---

> 5th Sept 2026

# Typescript - ENUM

- An enum (enumeration) is a set of **named constants.**
- Instead of using magic strings like `"pass"`, `"fail"`, `"skip"` scattered throughout your test code, you define them **ONCE in an enum and use them everywhere.**
- Numeric enums auto-assign numbers starting from 0: `Low=0, Medium=1, High=2` String enums have explicit values: `Pass="PASS", Fail="FAIL"`
- Prevent typos → `TestStatus.PASS` causes a compile error.

    enum HTTPMethod {
        GET = "GET",
        POST = "POST",
        PUT = "PUT",
        DELETE = "DELETE"
    }

    HTTPMethod.GET

    function sendRequest(method: HTTPMethod, endpoint: string): void {
        console.log(method + " " + endpoint + " → 200 OK");
    }

---

# Generics ()

- Generics let you write code that works with **ANY type while staying type-safe.**
- `<T>` is a placeholder → replaced with the actual type when you call the function.
- Without generics, you'd use `any` (no safety) or duplicate code for each type.
- Generic function: `function getFirst<T>(arr: T[]): T`
- Generic class: `class DataStore<T> { private items: T[] = [] }` Generic class: class DataStore\<T> { private items: T[] = [] }
- Generic interface: `interface APIResponse<T> { status: number; data: T }`
- Multiple type params: `function pair<K, V>(key: K, value: V)` Multiple type params: function pair\<K, V>(key: K, value: V)
- Real use: `parseResponse<UserData>(res)` vs `parseResponse<OrderData>(res)` → same function, different types .

    function wrapResponse<T>(statusCode: number, data: T): { statusCode: number; data: T } {
        return { statusCode: statusCode, data: data };
    }

    let userResp = wrapResponse<string>(200, "admin");
    console.log(userResp);

    let flagResp = wrapResponse<boolean>(200, true);
    console.log(flagResp);

---

# private / public / protected Keywords

- TypeScript has three access modifiers that control WHO can access class members.
- JavaScript only has public (default) and `#private` (ES2022).
- TypeScript adds `protected` → which JavaScript completely lacks.
- **`public`** **means accessible everywhere** inside the class, in child classes, and from outside. This is the default.
- **`private`** **means accessible ONLY inside the class** where it's defined. Not even child classes can access it. Enforced at COMPILE time only.
- **`protected`** **means accessible inside the class AND in child classes**, but NOT from outside. **Perfect for Page Object Model ,BasePage** can have protected methods that child pages use, but test files cannot access directly.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_QHuwyIgPJJ81wauMgjEzp.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_5GbhWq0flJByreGEhLs3b.png?ixlib=js-3.8.0)

---

`npx tsx chapter_28_ENUM/211_ENUM.ts npx tsx chapter_28_ENUM/213_ENUM.ts npx tsx chapter_28_ENUM/214_API_.ts`

---

#

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_0z-Ac6RLJC5mDwlN_wQhz.png?ixlib=js-3.8.0)

---
