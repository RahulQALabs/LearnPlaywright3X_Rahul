# Prompt Engineering: Principles, Process, RICE-POT & Examples

> Extracted from the supplied 3x Playwright + AI Mastery notes. Content is organized by topic; the original wording/examples are retained.

# Prompting Engineering

**Prompt Engineering** is the practice of designing and refining inputs (prompts) to effectively communicate with Large Language Models (LLMs) to achieve desired outputs.

Prompting refers to the practice of **providing specific instructions or input to an artificial intelligence (AI) model to obtain desired responses.**

## Core Principles

### 1. Be Specific

❌ **Bad:** "Write test cases for login"

✅ **Good:** "Write 5 functional test cases for email/password login, covering valid login, invalid email, invalid password, empty fields, and SQL injection attempt. Use the Proper JIRA format: Test ID, Description, Steps, Expected Result."

### 2. Provide Context

❌ **Bad:** "Test the API"

✅ **Good:** "Given this API endpoint documentation: [paste docs], write test cases covering happy path, error scenarios, and edge cases."

### 3. Define Output Format

❌ **Bad:** "Generate bug report"

✅ **Good:** "Generate a bug report using JIRA format: Title, Environment, Steps to Reproduce, Expected Result, Actual Result, Severity, Attachments."

### 4. Set Constraints

❌ **Bad:** "Help me test"

✅ **Good:** "Using ONLY the PRD provided, generate test cases. Do NOT assume any features not mentioned. If information is missing, state 'Not specified in PRD'."

---

# Steps to Follow for Effective Prompt Engineering

1. Define the Goal
2. Gather Context
3. Choose Prompting Strategy
4. Structure the Prompt
5. Add Constraints
6. Test and Iterate
7. Document and Reuse

## Step 1: Define the Goal

**Ask yourself:**

- What exactly do I need?
- What will I do with the output?
- What does success look like?

    ❌ Vague: "Help me with testing"
    ✅ Clear: "Generate 10 test cases for login validation"

## Step 2: Gather Context

**Collect all relevant information:**

- PRD / Requirements document
- API documentation
- Screenshots / UI mockups
- Error logs
- Previous test cases
- Constraints / Limitations

**Rule:** More context = Better output

## Step 3: Choose Prompting Strategy

| **Situation** | **Strategy** | **Example** |
| --- | --- | --- |
| Simple, standard task | Zero-Shot | No Example |
| Custom format needed | Few-Shot | 2-3 examples |
| Complex analysis | Chain-of-Thought | Ask him to think about it |
| Domain expertise needed | Role-Based | Act as QA |

**Few Shot**

Create a bug report for [app.vwo.com](https://app.vwo.com/) where the login page is not working.

example

A Jira bug report will contain:

- our scenario ID - 1
- scenario test case ID - 001
- test case title - verify this app.log in.com is working.
- test case description
- expected result
- output results
- comment severity
- priority

Result ->

**Bug Title:** Login page is not working on app.vwo.com

**Scenario ID:** 1

**Scenario Test Case ID:** 001

**Test Case Title:** Verify that the login page of app.vwo.com is working.

**Test Case Description:** Verify that a user is able to access the login page, enter valid login credentials, and successfully log in to app.vwo.com without any errors.

**Steps to Reproduce:**

1. Open the browser.
2. Navigate to [https://app.vwo.com](https://app.vwo.com/) .
3. Enter valid email ID and password.
4. Click on the **Login** button.
5. Observe the result.

**Expected Result:** The user should be successfully logged in and redirected to the VWO dashboard/home page.

**Actual Result / Output Result:** The login page is not working. The user is unable to log in to app.vwo.com. The page may not respond, show an error, or fail to redirect after clicking the Login button.

**Severity:** High

**Priority:** High

**Comment:** This issue blocks users from accessing the application. Since login is a critical functionality, it should be fixed as soon as possible.

---

## Step 4: Structure the Prompt

**Use a framework (RICE POT recommended):**

## The RICE-POT Prompt Framework

### RICE-POT Breakdown

| **Letter** | **Component** | **Description** |
| --- | --- | --- |
| **R** | **Role** | Defines the persona the AI should adopt (e.g., Expert QA Automation Engineer). |
| **I** | **Instructions** | Specific, step-by-step commands and constraints (e.g., Mandatory rules, "Don't" lists). |
| **C** | **Context** | Background information to help the AI understand the *why* and *where* (e.g., Salesforce Login Page description). |
| **E** | **Example** | Providing a code snippet or format to guide the style (e.g., PageFactory example). |
| **P** | **Parameters** | Constraints on quality, accuracy, and style (e.g., Production-level code, zero bad practices). |
| **O** | **Output** | Defines exactly what artifacts to produce (e.g., Only code, no comments). |
| **T** | **Tone** | The style of communication (e.g., Technical, precise, code-only). |

---

## 📝 The Exact Prompt Used

Role : You are a QA automation tester with 15+ years of experience. You have a very good understanding of IT, CRM projects like salesforce.com. You need to create a framework with Selenium, Java, Maven, TestNG, and it should be enterprise-level framework that we need to create.

I - Instructions

- Generate a Complete Selenium with Java automation script following the standard of enterprise level standards.
- Automate and verify the results of the login page login.salesforce.com/?locale=in, ensure that UI is thoroughly tested with valid and invalid testcases.
- `[Critical] - Apply the TestNG annotations, @Test, @BeforeTest and others and and necessary setup/teardown logic.`
- `[Critical] Implement robust exception handling within both Page Object model and test scripts using structured try–catch blocks or explicit exception signatures.`
- `[Mandatory] Use Page Object Model with PageFactory, including @FindBy, constructor initialization, and reusable action methods.`
- `[Mandatory] - It is important that you use only the xpath not the css selectors.`
- `[Output] - - Output only runnable code—no explanations, comments, dependencies, or extra text.`
- `[Don't] - Don't use the css selectors, ID, name and others things.`
- `[Don't] - Don't add comments, Thread.sleep and other bad coding practice.`
- `[Generate] - Generate the 2 scritps only with the valid and invalid testcases of the login page.`
- `[DoNOTuse] Thread.sleep() anywhere; rely on WebDriverWait or implicit waits.`
- `Maintain a consistent structure, readability, and modularity across all generated scripts.`

C : Context You are creating a login page scripts with proper framework for the sales force login, which is a AB Testing website with valid and invalid login page where in the login page you have the email, password and submit buttin with remember me fucntionality.

    E — Example
    Example structure for PageFactory:

    public class LoginPage {
        @FindBy(xpath = "//input[@id='username']") WebElement username;
        @FindBy(xpath = "//input[@id='password']") WebElement password;
        @FindBy(xpath = "//input[@id='Login']") WebElement loginButton;

        public LoginPage(WebDriver driver) { PageFactory.initElements(driver, this); }

        public void doLogin(String user, String pass) {
            username.sendKeys(user);
            password.sendKeys(pass);
            loginButton.click();
        }
    }

    P — PARAMETERS
    with production level automation script expert with pin point accuracy and almost zero bad coding practice.

    O — Output
    Provide only:
    1 Page Object file
    2 TestNG test scripts
    Maven project
    No explanations or additional content.

    T — Tone
    Technical, precisly, enterprise-grade, code-one.

    Please make the entire step by step process and ask me what you are doing and explain to me also what you are doing step by step. Make sure that you first plan everything and show me what exactly you are going to create. Then only you are going to create afterwards step by step.

---
