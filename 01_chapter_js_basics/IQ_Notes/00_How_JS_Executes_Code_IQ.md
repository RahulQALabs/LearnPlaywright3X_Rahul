# How JavaScript Runs Your Code — IQ Notes

> **Concept:** From `console.log("Hello, World!")` to terminal output — what actually happens under the hood in V8 (Chrome/Node.js engine).

---

## 🔬 Layer Breakdown Table

| Layer | What It Is | Who Handles It | Input → Output | Analogy |
|---|---|---|---|---|
| **1. Source Code** | The `.js` file you write | *You / IDE* | Your fingers → `01_HelloWorld.js` | A recipe written on paper |
| **2. Tokenization (Lexing)** | Splits raw text into meaningful tokens | **V8 Scanner** | `console.log("Hello")` → `[IDENT(console), DOT, IDENT(log), LPAREN, STRING("Hello"), RPAREN, SEMICOLON]` | Breaking a sentence into words |
| **3. Parsing (AST)** | Builds a tree structure from tokens | **V8 Parser** | Tokens → Abstract Syntax Tree (nested nodes) | Diagramming a sentence (subject → verb → object) |
| **4. Bytecode** | Platform-independent intermediate code | **Ignition (V8 Interpreter)** | AST → Compact bytecode instructions | Translating recipe to a universal cooking shorthand |
| **5. Machine Code (JIT)** | Optimized native CPU instructions | **TurboFan (V8 Compiler)** | Hot bytecode → x86/ARM machine code | Chef memorizing & optimizing repeated steps |
| **6. Execution** | CPU runs machine code; output appears | **CPU + Runtime** | Machine code → `"Hello, World!"` printed to stdout | The dish is served |

---

## 🧪 Example Walkthrough

### Step-by-step with `console.log("Hello, World!")`

```
SOURCE CODE:
console.log("Hello, World!");
    │
    ▼
═══════════════════════════════════════════
STEP 1 ── TOKENIZATION (Lexer / Scanner)
═══════════════════════════════════════════
    │
    ▼
TOKENS:
┌────────────┬──────────────┐
│ Token      │ Type         │
├────────────┼──────────────┤
│ console    │ Identifier   │
│ .          │ Dot/Punctuator│
│ log        │ Identifier   │
│ (          │ LeftParen    │
│ "Hello, W…"│ StringLiteral│
│ )          │ RightParen   │
│ ;          │ Semicolon    │
└────────────┴──────────────┘
    │
    ▼
═══════════════════════════════════════════
STEP 2 ── PARSING → AST
═══════════════════════════════════════════
    │
    ▼
AST (simplified):
ExpressionStatement
 └── CallExpression
      ├── MemberExpression
      │    ├── object:  Identifier("console")
      │    └── property: Identifier("log")
      └── arguments:
           └── StringLiteral("Hello, World!")
    │
    ▼
═══════════════════════════════════════════
STEP 3 ── BYTECODE (Ignition)
═══════════════════════════════════════════
    │
    ▼
BYTECODE (pseudo):
LdaGlobal        [console]
Star             r0
LdaNamedProperty r0, [log], ...
Star             r1
LdaConstant      ["Hello, World!"]
CallProperty1    r1, r0, a0
Return
    │
    ▼
═══════════════════════════════════════════
STEP 4 ── JIT → MACHINE CODE (TurboFan)
═══════════════════════════════════════════
    │  (if this code runs many times — "hot")
    ▼
NATIVE x86/ARM instructions
(call to v8::Console::Log with "Hello, World!" pointer)
    │
    ▼
═══════════════════════════════════════════
STEP 5 ── EXECUTION → OUTPUT
═══════════════════════════════════════════
    │
    ▼
TERMINAL:
$ node 01_HelloWorld.js
Hello, World!                ◀── printed to stdout
```

---

## 📊 Pipeline Diagram

```
 ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
 │  SOURCE CODE │ ──▶ │   TOKENIZER  │ ──▶ │    PARSER    │ ──▶ │   IGNITION   │ ──▶ │   TURBOFAN   │
 │   (.js file) │     │  (Scanner)   │     │   (→ AST)    │     │  (Bytecode)  │     │ (Optimized)  │
 └──────────────┘     └──────────────┘     └──────────────┘     └──────┬───────┘     └──────┬───────┘
                                                                     │                    │
                                                      ┌──────────────┘                    │
                                                      ▼                                    │
                                                   BYTECODE                                │
                                                   (always runs                           │
                                                    first)                                 │
                                                      │                                    │
                                                      │        ┌───────────────────────────┘
                                                      │        ▼
                                                      │    MACHINE CODE
                                                      │    (runs for hot/repeated code)
                                                      │        │
                                                      ▼        ▼
                                                   ┌──────────────────┐
                                                   │   CPU EXECUTION  │
                                                   └────────┬─────────┘
                                                            │
                                                            ▼
                                                   ┌──────────────────┐
                                                   │  "Hello, World!" │
                                                   │    (stdout)      │
                                                   └──────────────────┘
```

### Key Insight: Interpreter vs Compiler

| Feature | Ignition (Interpreter) | TurboFan (JIT Compiler) |
|---|---|---|
| **Starts** | Immediately | After code runs a few times |
| **Speed (startup)** | ⚡ Fast (no compile wait) | 🐢 Slow (compile overhead) |
| **Speed (runtime)** | 🐢 Slower execution | ⚡ Highly optimized |
| **Optimizations** | None | Inlining, type-specialization, dead-code elimination |
| **Used for** | First run / cold code | Hot paths (loops, frequent calls) |

---

## 🎯 TL;DR

1. **You write** → `console.log("Hello, World!")` in a `.js` file.
2. **V8 tokenizes** → breaks it into tokens (`console`, `.`, `log`, `(`, `"Hello, World!"`, `)`, `;`).
3. **V8 parses** → builds an AST (tree structure representing the program).
4. **Ignition** → converts AST to bytecode and starts executing immediately.
5. **TurboFan** → if code runs repeatedly, compiles it to optimized machine code.
6. **CPU executes** → `"Hello, World!"` appears in your terminal.

> **Bottom line:** JavaScript is not "purely interpreted." V8 uses a **JIT (Just-In-Time) compilation pipeline** — interpreting first for fast startup, then compiling hot code for speed. Your `console.log` is parsed, bytecoded, and executed in microseconds.
