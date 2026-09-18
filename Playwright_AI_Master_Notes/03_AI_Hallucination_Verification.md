# Hallucinations, Inconsistency, Anti-Hallucination & Verification

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

Problem with the large language model

1. Hallucinations

2) Knowledge cutoff

## Hallucinations (LLMs "Making Things Up")

A hallucination occurs when an **AI model produces confident but factually incorrect or completely fabricated output,** even though the information does not exist in the system, logs, API, or requirements.

The key danger: **the answer sounds correct**.

### QA Example 1 — Bug Report Hallucination

**Reality**

- Screenshot only shows "Something went wrong"
- No error code visible
- No token logic involved

**Why this is a hallucination**

- AI **invented technical details**
- No evidence in input
- Over-confident explanation

### QA Example 2 — Test Case Hallucination

**Prompt**

"Generate test cases for VWO dashboard."

**AI Output**

- Test case: Verify **Dark Mode toggle**
- Test case: Validate **Export to CSV**

**Reality**

- No Dark Mode
- No Export feature in product

**Failure Type**

- Feature hallucination

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_a4R6sSrMZoeRWFCxDpEZY.png?ixlib=js-3.8.0)

---

# Anti-Hallucination Rules

ROLE: You are a QA assistant operating under strict verification rules.

SCOPE OF KNOWLEDGE You may ONLY use information explicitly provided in: PRD API documentation Logs Screenshots Test data User input

STRICT RULES (MANDATORY) DO NOT invent features, APIs, error codes, UI elements, or behavior. DO NOT assume default or "typical" system behavior. If information is missing or unclear, respond with: "Insufficient information to determine." Every assertion must be traceable to provided input. If a detail is inferred, label it explicitly as: "Inference (low confidence)".

Output must be deterministic and repeatable. PROCESS YOU MUST FOLLOW Step 1: Extract verifiable facts from the input. Step 2: List unknown or missing information. Step 3: Generate output ONLY from Step 1 facts. Step 4: Perform a self-check for hallucinations or contradictions. OUTPUT FORMAT (STRICT) Verified Facts: Missing / Unknown Information: Generated Output: Self-Validation Check: If you cannot complete a step, stop and report why. >> Instructions

---

**Prompt with the Anti-Hallucination Rule**

[chatgpt.com/share/6a45cc4b-ba08-83e8-b7d5-a5635bcd44c6](https://chatgpt.com/share/6a45cc4b-ba08-83e8-b7d5-a5635bcd44c6)

Create the Test Plan for the app.vwo.com,

use these rules, ROLE: You are a QA assistant operating under strict verification rules.

SCOPE OF KNOWLEDGE You may ONLY use information explicitly provided in: PRD API documentation Logs Screenshots Test data User input

STRICT RULES (MANDATORY) DO NOT invent features, APIs, error codes, UI elements, or behavior. DO NOT assume default or "typical" system behavior. If information is missing or unclear, respond with: "Insufficient information to determine." Every assertion must be traceable to provided input. If a detail is inferred, label it explicitly as: "Inference (low confidence)".

Output must be deterministic and repeatable. PROCESS YOU MUST FOLLOW Step 1: Extract verifiable facts from the input. Step 2: List unknown or missing information. Step 3: Generate output ONLY from Step 1 facts. Step 4: Perform a self-check for hallucinations or contradictions. OUTPUT FORMAT (STRICT) Verified Facts: Missing / Unknown Information: Generated Output: Self-Validation Check: If you cannot complete a step, stop and report why.

---

### Prevent Hallucinations (Best Practices)

- **Proper prompts**
- Rules
- Constraints (examples)
- RAG ? (discuss later) ->

---

## Inconsistencies (AI Contradicting Itself)

An **inconsistency** occurs when the AI gives **different or conflicting answers** for the **same requirement, test case, or scenario**, either:

- In the same response
- Across multiple runs
- Across different prompts

### QA Example 1 — Inconsistent Test Cases

**Prompt 1**

"Write test cases for login failure."

**AI Output**

- Expected Result: Error message appears

**Prompt 2 (Same input, new run)**

- Expected Result: User redirected to forgot password

**Problem**

- Same scenario → different expected behavior

the only way to fix the inconsistency is by giving the proper context

> Save the Context by PDF, Knowledge, Text File, JSON File, Output Format, Proper Images, Screenshots, Figma Designs, PRDs, Jira Tickets, Jira Descriptions, Jira Titles, What to Do, What Not to Do.

---

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_AIthNXGUjLKzmJuxZBeB3.png?ixlib=js-3.8.0)

---

**Temperature** - Control your randomness in your answers.

**1.Lower Temperature ( 0 to 1)**

- Use temperature = 0--0.2 for QA tasks

**2. Use Structured Output**

- JSON schemas
- Tables with fixed fields

**3. Single Source of Truth**

- Always attach the same PRD / test data

**4. Deterministic Prompts**

- Avoid vague words like "analyze", "suggest"

[platform.openai.com/chat/edit?models=gpt-4.1-mini](https://platform.openai.com/chat/edit?models=gpt-4.1-mini)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_S_6odvgCIT2Z5TDf3EM-h.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_4dF3qH4-s1a3MbbZOFz9t.png?ixlib=js-3.8.0)

**Supervised vs Un Supervised vs Self-Supervised Learning**

- The first robot attended culinary school, carefully following labeled recipes with step-by-step instructions.
- The second robot never had formal instruction; instead, it studied countless cookbooks to find common cooking patterns.
- The third robot had no instructions. It experimented by cooking randomly, tasting the results, and learning what worked best.

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_eUG-A3hn1b2os9_f3aZFB.png?ixlib=js-3.8.0)

[image.png](https://eraser.imgix.net/workspaces/9yp9hyBp2Yk4Z5TK4UFB/WWS31TdyovhjTB1TVo9v2jWpPei1/image_7Shm6YVg4Yr8GBmXVBrFJ.png?ixlib=js-3.8.0)

## 🧠 Difference Between ML, AI, Deep Learning

### Machine Learning (ML)

**What it is** Machine Learning is a **subset of AI** where systems **learn from data** instead of being explicitly programmed.

**Key idea** ML = *Learn patterns from data → make predictions*

**Examples**

- Fine Tune LLM

### Deep Learning (DL)

**What it is** Deep Learning is a **subset of ML** that uses **neural networks with multiple layers** to understand complex patterns.

**Key idea** DL = *Learn like the human brain (neurons + layers)*

**Examples**

- Image recognition
- Speech-to-text
- Large Language Models (GPT, Claude)

---
