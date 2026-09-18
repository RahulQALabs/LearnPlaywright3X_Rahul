# AI Engineering, LLMs, Models, Foundation Models & Coding Assistants

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

## Research, Practice and Upload to Github.com

## 🧠 What Changed After 2020 — The Era of Scale

AI models became like **super interns** — they can write, read, code, explain, summarize, and even reason.

### AI after 2020 is defined by scale.

- Models like ChatGPT, Gemini, Midjourney are extremely large
- They consume massive compute, electricity, and data
- Public internet data is becoming a limiting factor

> **Model-as-a-Service Emergence**

## What Is AI Engineering?

**AI Engineering** = building applications **on top of existing foundation models**.

large-language model is a model which is trained on the data with more than 1 billion **parameters**

if the parameters are less than one billion, we call them a small language model, everyone. < 1B

**What is Parameters?**

- by using the parameters, a large language model will be able to predict the next token

Langauge Model

- Language model is like an autocomplete which predicts the next output based on the input asked. basically, do this by using the concept of transformer

What is a token ?

Token is not a word. It's the minimum amount of a kind of a string, or you can say that it's a bunch of characters which a large language model gives weight to while converting them to storing them in this case , weightages, everyone. What is a weightage

[arxiv.org/pdf/1706.03762](https://arxiv.org/pdf/1706.03762)

> 0 to 1

King → 0.45

Queen → 0.34

Banana → 0.11

Token - the language model is nothing but the **smallest unit which the language model understands**

token is not a word. It is not even a letter it is the smallest unit which language model can understand and by using the transformer or weights it can predict the next word

GPT 2 → < 10 millions. (Parameters).

GPT 5.5 → > 1 T ( 1000) ->. LLM > 10-50 T

---

open source models and closed source models

**Closed source models**

1. GPT 5.5
2. Claude Sonnet 5, Opus 4.8, Fable 5
3. Gemini

Open source models - their whole source code as well as all the weights, param are public in nature

1. DEEPSEEK
2. Kimi K2.5
3. Qwen
4. Mistral - OS/Paid

**AI Coding Assistant**

1. Codex
2. GHCP
3. CommandCode
4. OpenCode
5. Claude Code
6. KIRO

What is a Hugging Face?

> it is like a GitHub for models , list of opensoure models

we are not machine learning engineers. We will never create our foundation model. We are only going to use them. We are

**LLMs do the same thing — but with:**

- Entire internet-level knowledge
- Reasoning patterns
- Multiple languages

## Base Model

A **base model** (also called a "foundation model" in some contexts, though there's a distinction) is a pre-trained model that has learned general patterns from large amounts of data but hasn't been fine-tuned for any specific task.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_cxsE7nHQfgdUau1VFoS5B.png?ixlib=js-3.8.0)

### Foundation Models

- Handle multiple modalities:
  - Text
  - Images
  - Video
  - Audio

**Github Copilot → Coding AI Assitance Agent.** (which uses the foundation model to help you)

Perplexity AI → Curation of the different Foundation modles

ChatGPT → It. just a web chat with the foundation model GPT 5.5

**Visual Studio Code**

- Norma IDE - which can help you to generate a JavaScript code, Python code, or even the Java code

Cursor | Antigravity. | Windsurf | → **Agentic Coding IDE** ( they help you to chat, agentic way to code and help you use the LLMs within the IDE to develop the code.

### Closed-Source Models

(GPT, Claude, Gemini)

**Pros**

- Best reasoning quality
- Managed infra
- Fast iteration

**Open-Source Models**

(Mistral, LLaMA, DeepSeek, Phi, Qwen, **kimi-k2**)

**What Is Google Antigravity?**

Google Antigravity is an AI-powered integrated development environment - or IDE - that was released alongside Gemini 3 in November 2025.

---

### How to install command code into your machine ?

Open the terminal or CMD or PowerShell and run these two commands.

Disclaimer: If you are using an office laptop, then please do not install command code until you have permission

1. Install Node JS - [nodejs.org/en/download](https://nodejs.org/en/download)
2. Open the Terminal or Powershell
3. npm i -g command-code@latest
4. cmdc (for windows, cmd for mac)

Windows 11, 10

if you are facing any issue in the PowerShell or CMD related to error, just run this command in PowerShell

> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

### To run our JavaScript code, we will be using the Code Runner extension

[marketplace.visualstudio.com/items?itemName=formulahendry.code-runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_qBEW23-v3mn9n7zixw8QC.png?ixlib=js-3.8.0)

---
