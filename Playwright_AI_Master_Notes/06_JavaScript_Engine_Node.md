# JavaScript Basics, Node.js, JavaScript Engine, V8, Bytecode

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

# Javascript Basics

- What is Javascript?
- How JavaScript Engine Works
- How does a V8 engine Works?
- Setup Antigravity / VS code
- Github Account Create
- GHCP and CommandCode Setup

> JS → TS → Playwright(with TS)

### What is Javascript?

A website is built with three core technologies

- **HTML** — Structure / Content

- **CSS** — Styling / Appearance

- **JavaScript** — Behavior / Interactivity

- Where it runs: ***Originally designed to run in web browsers,*** JavaScript now also runs on servers (via Node.js), mobile apps, desktop applications, and even IoT devices.

- Core features: **It supports object-oriented, functional, and event-driven programming styles**. It's dynamically typed, meaning you don't need to declare variable types explicitly.

- The **DOM:** **JavaScript can manipulate the Document Object Model (DOM)**, allowing it to dynamically change a webpage's content, structure, and styling in real time without reloading.

- Asynchronous programming: It supports asynchronous operations through callbacks, Promises, and `async/await`, making it efficient for tasks like API calls and file handling.

- Ecosystem: **It has a massive ecosystem of libraries** and frameworks such as React, Angular, Vue.js (frontend) and Express, Next.js (backend), supported by the npm package manager.

- Universal adoption: JavaScript is the most widely used programming language in the world, supported by all modern browsers and backed by a huge developer community.

Java. vs Javascript

- Java language has no relationship with JavaScript
- Java → int a = 10; x → no possitble a= "Pramod" // Data type 100%
- Javascript let a = 10; → a= "Pramod"

Javascript vs Typescript

Javascript → **let a = 10;**

TypeScript → let a:**number** = 10;

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_QuAiKtFBUMjwoz2Q-5AyH.png?ixlib=js-3.8.0)

## ✅ Is JavaScript Compiled or Interpreted?

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_mwmbNGhGLmmWC8FDCoYEO.png?ixlib=js-3.8.0)

> JavaScript is an interpreted language with JIT compilation at runtime.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_Iw0-yb1dXgVfjOdptq4Wc.png?ixlib=js-3.8.0)

**✅ JavaScript: Compile-Time & Runtime?**

- JavaScript is Primarily a Runtime (Interpreted) Language Traditionally, JavaScript code is executed line by line at runtime by the browser's JS engine.
- Simple Terms - JavaScript is a **runtime language** that uses **JIT compilation internally** for performance.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_Mzg3jRPiZIEn4rZrGl-B4.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_tRqjX_qwjldAzETKMTbuz.png?ixlib=js-3.8.0)

JavaScript was only available in the browser

**✅ What is** [Node.js](http://node.js/)**?**

- Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a web browser primarily on servers.
- It was created by **Ryan Dahl in 2009** and is built on Google Chrome's V8 JavaScript engine.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_CADh6pwKFU06SnX5J3HCw.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_j4new_KM3Lp9D3h5UCU4s.png?ixlib=js-3.8.0)

Install the Node.js

[nodejs.org/en/download](https://nodejs.org/en/download)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_MZFPB0HszkFq85Gk8R1uq.png?ixlib=js-3.8.0)

To write the Code

1. Normal Dev Env - Notepad, Notepad++, Sublime 2
2. Advance - IDE
  1. **Visual Studio Code**
  2. Jetstorm, Webstorum
  3. Eclipse
3. ADE ( Agentic Integrated Env)
  1. **VS code with CommandCode -** [commandcode.ai/pricing](https://commandcode.ai/pricing)
  1. Personal Laptop only
  2. **VS code with GHCP (10$)**
  3. Cursor
  4. WindSurf
  5. KIRO IDE
4. Advance ADE(complete)
  1. Claude Code
  2. Codex
  3. Antigravity
  4. Gemini Studio

Install IDE

[code.visualstudio.com/](https://code.visualstudio.com/)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_HsaR1-62-rWc8nbtAFZ13.png?ixlib=js-3.8.0)

---

**Common Use Cases**

- Web Servers & APIs (REST, GraphQL)
- Real-Time Apps (Chat apps, live notifications)
- Microservices Architecture
- Command-Line Tools (CLI apps)
- Streaming Applications (Video/audio)
- IoT (Internet of Things)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_1OdE11Ij7dM10BGKNUD1N.png?ixlib=js-3.8.0)

## 🟩 NODE js in simple terms

**Node.js = JavaScript + V8 Engine + Server-Side Capabilities**, enabling full-stack development using a single language.

**NPM** → Node Package Manager

[www.npmjs.com/](https://www.npmjs.com/)

**pnpm**

[pnpm.io/](https://pnpm.io/)

**Package Manger - Yarn**

[yarnpkg.com/](https://yarnpkg.com/)

**Bun**

[bun.com/package-manager](https://bun.com/package-manager)

## 🟩 Install Google Antigravity

**Disclaimer -** Try to avoid to install in Company Laptop

[antigravity.google/](https://antigravity.google/)

### Install Node.js

**Windows:**

1. Download the Windows installer from the [Node.js website](https://nodejs.org/).

2. Run the installer.

3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and finally install).

4. Restart your computer to ensure changes take effect.

**MacOS**:

1. Download the macOS installer from the [Node.js website](https://nodejs.org/).

2. Open the `.pkg` file you downloaded and follow the instructions.

3. You may need to enter your admin password.

4. To verify installation, open a terminal and type `node -v`.

- [nodejs.org/en/download](https://nodejs.org/en/download)

> node --version

> npm --version

(Windows) → cmd

Mac /LINUX → Terminalo

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_w70HZjU3IK7WExTPpQZwt.png?ixlib=js-3.8.0)

**AS OF NOW it it not required.**

[github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

NVM will install NPM automatically when you use their command

## How to set up command code in Visual Studio Code

npm i -g command-code@latest

cmd / **cmdc**(windows) login

**Extension to install**

1. Command Code Extension - **Github** push the code, docs... explain a concept. (GHCP)
2. Code Runner (JS, TS)
3. Playwright (Not required)

---

> 9th July 2026

# 🟩 How JavaScript Engine Works

A JavaScript engine is a program that **reads, interprets, and executes** JavaScript code.

Here's a complete breakdown of how it works step by step.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_qRo3f8NLdOUsUCAaGLbgF.png?ixlib=js-3.8.0)

PS. Make sure that everyone download the **Code Runner Extension.**

let x = 10;

# 🟩 Step-by-Step Breakdown

The engine first breaks the **raw code** into small meaningful chunks called **tokens**.

### 1. Lexical Analysis | Tokenizing

Example: let x = 10;

Tokens → [let] [x] [=] [10] [;]

### 2. Parsing (Syntax Analysis)

This represents the grammatical structure of the code.

Program

|

VariableDeclaration

/

Identifier Literal

(x) (10)

If there's a **syntax error**, it gets caught at this stage.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_rmAu_PWe78lcJT48jdCg2.png?ixlib=js-3.8.0)

### 3. Create AST (Abstract Syntax Tree)

The tokens are converted into a structured tree representing the logic.

Simplified AST example:

    Program
    ├── VariableDeclaration (let)
    │     └── Identifier: a
    │     └── Literal: 10
    └── ExpressionStatement
          └── CallExpression: console.log
                └── Identifier: a

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_DhSdTyGoyCOeyGJfIJtAy.png?ixlib=js-3.8.0)

[astexplorer.net/](https://astexplorer.net/)

[ast-explorer.dev/](https://ast-explorer.dev/)

### 4. Interpreter (Ignition) Converts AST to Bytecode

**Ignition** creates lightweight bytecode from AST and starts executing immediately.

Bytecode might look like:

    LdaSmi [10]      // Load immediate small integer 10
    Star <x>         // Store into variable a
    LdaGlobal console
    LdaNamedProperty log
    Lda <x>          // Load value of a
    CallProperty1    // Call log with 1 argument

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_PgimRZYo0pzgGWu9mbPS_.png?ixlib=js-3.8.0)

### 6. Profiler + JIT Optimization

JIT full form is Just In Time

Since this code is very small and not repeated, the **Profiler sees no benefit**, so **TurboFan (JIT Compiler) does NOT optimize**.

> If we had a loop with thousands of executions, V8 would compile that part into machine code.

**Hot Code** → Code which needs Optimization

Cold Code → the code which does not require

TurboFan / Compiler → Compiler convert or optimize the code of the Hot code. → ByteCode.

### 7. Garbage Collector

Automatically frees memory by removing unused or unreachable objects. Prevents memory leaks and keeps performance efficient.

### 8. Machine Code Execution

The final optimized code is executed directly by the **CPU**. This gives the best performance at runtime.

## How to See the Bytecode?

node **--print-bytecode** test.js

---

**What is the Source Code?**

Source code is something which is written by humans, and humans understand them very well in this case. They write source code into the IDE or integrated development environment.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_dlq53OfmJutK26FkjCh4O.png?ixlib=js-3.8.0)

**What is ByeCode?**

Bytecode code is an intermediate code created by the JavaScript engine, which humans cannot understand, but it is going to be created into the binary code later

**What is Binary Code?**

010101010, binary code is also called 01010, switch off or switch on, which is actually understood by the real machines or our chips

---

**Prompt**

Explain [YOUR CONCEPT] in a table view with clear comparison columns. Use a simple code/file example to walk through each layer. Save it as a `.md` file inside the `IQ_Notes` folder. Follow the same visual style as `Source_Code_ByteCODE_Binary_IQ.md` — breakdown table, example walkthrough, pipeline diagram, and TL;DR.

how to create a personal token for git push ?

[github.com/settings/tokens](https://github.com/settings/tokens)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_edwRc08lXNVEK-S8a8tB0.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_0Bri0OWDMWfZUgKAqktMQ.png?ixlib=js-3.8.0)

[git-scm.com/](https://git-scm.com/)

I want to Go Advance - i WANT TO know command which AI was running

**Follow this course**

[courses.thetestingacademy.com/login?redirecturl=courses/sdet-club-masterclasses-1337/contents/65c724bfd930b](https://courses.thetestingacademy.com/login?redirecturl=courses/sdet-club-masterclasses-1337/contents/65c724bfd930b)

**Two Rules**

1. become a very good listener
2. do your own research first

---

## 🟩 How does a V8 engine Works?

V8 is Google's open-source high-performance JavaScript and WebAssembly engine, written in C++. It powers Google Chrome and [Node.js](http://node.js/).

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_K26DHryIuMkDWIVeDWrLW.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_vtMApv5HJGIazu0PF3oIq.png?ixlib=js-3.8.0)

## Step-by-Step Breakdown

### Step 1: Scanner (Lexical Analysis / Tokenizing)

The scanner reads your raw JavaScript code character by character and breaks it into **tokens**.

Source: **const sum = 10 + 20;**

Tokens: [const] [sum] [=] [10] [+] [20] [;]

It also handles **lazy parsing** — meaning it skips parsing functions that aren't immediately needed to improve startup speed.

### Step 2: Parser (Syntax Analysis)

The parser takes the tokens and builds an **Abstract Syntax Tree (AST)**.

V8 uses two parsers for performance:

### 

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_cwBmom9GyRTYBamjJnWQJ.png?ixlib=js-3.8.0)

### Step 3: Ignition (Interpreter)

Ignition is V8's **interpreter**. It takes the AST and converts it into **bytecode**.

#

image

**Why bytecode?** Bytecode is smaller than machine code, uses less memory, and allows faster startup compared to compiling everything upfront.

Ignition also collects **feedback data** (type information, frequency of execution) while executing bytecode. This data is critical for the next step.

### Step 4 : Execution + Profiling

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_CgcNk2njCtIpKYATOC7rl.png?ixlib=js-3.8.0)

### Step 5 : TurboFan (JIT)

#

image

### Step 6: De-optimization (Bailout)

If TurboFan's assumptions turn out to be wrong, V8 **throws away** the optimized machine code and falls back to Ignition's bytecode.

[image.png](https://eraser.imgix.net/workspaces/aGf8WeO8HWibzTxOSvQn/WWS31TdyovhjTB1TVo9v2jWpPei1/image_fGKwBICn9vNi-OPWThWt5.png?ixlib=js-3.8.0)

Doubt Thread

### Step 7: Garbage Collection:

V8 takes your JavaScript, **parses** it into an AST, **interprets** it to bytecode via **Ignition** for fast startup, then **JIT compiles** hot code via **TurboFan** into optimized machine code, while managing memory through **generational garbage collection** and speeding up property access with **hidden classes** and **inline caching**.

---

## What is Source Code?

Source code is the **original human-readable code** that you write as a developer. It's the raw JavaScript that you type in your editor.

## What is Bytecode?

Bytecode is a **lower-level, intermediate representation** of your source code generated by the V8 engine's Ignition interpreter. It sits between human-readable source code and machine code.

[image.png](https://eraser.imgix.net/workspaces/aGf8WeO8HWibzTxOSvQn/WWS31TdyovhjTB1TVo9v2jWpPei1/image_zSZ3P0_uDS8EfjBCYTPcd.png?ixlib=js-3.8.0)

Bytecode is:

- Generated **automatically** by the JS engine
- **Not human-readable** (looks like assembly)
- **Smaller and faster** to execute than parsing source code every time
- **Platform-independent** — same bytecode runs on any OS
- **Not machine code** — still needs the engine to execute it

Full Journey: **Source Code** → **Bytecode** → **Binary Code (MC)**

---
