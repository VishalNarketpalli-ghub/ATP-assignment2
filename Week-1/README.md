# Week 1

## Overview

Week 1 focuses on core JavaScript fundamentals: operators, arrays, conditional logic, and basic object manipulation. The scripts are small by design, but together they cover the most important language mechanics used in real applications.

## Workflow

1. Start with primitive operations in `operators.js`.
2. Use array methods such as `filter`, `map`, `reduce`, `find`, and `findIndex` to transform data.
3. Apply control statements to decide application behavior.
4. Mutate and inspect objects using property access, deletion, and built-in helpers.

## Theory

- JavaScript arrays are best handled through functional methods when you want predictable transformations.
- `filter` selects items, `map` transforms items, and `reduce` collapses a collection into a single result.
- `find` and `findIndex` are useful for targeted lookups.
- Conditional logic turns data into decisions, which is the foundation of business rules.
- Objects are mutable reference types, so property updates happen in place unless you create copies.

## File Guide

### `operators.js`

Calculates a bill using arithmetic operators, a discount step, and GST. This is the simplest example in the week and demonstrates how numeric state changes over time.

### `ArrayOperationsSimple/Course-List-Display.js`

Works with a course list using array methods to filter long names, convert to uppercase, join values into a readable string, and locate a specific course.

### `ArrayOperationsSimple/Student-Marks-List.js`

Collects student marks data and demonstrates typical array transformations for educational dashboards.

### `ArrayOperationsSimple/Daily-Temperature-Analyzer.js`

Processes temperature data for reporting and comparison tasks.

### `ArrayOperationsAdvance/Shopping-cart-summary.js`

Builds a cart summary by calculating stock, totals, and item-level details.

### `ArrayOperationsAdvance/Students-Performance-Dashboard.js`

Calculates pass/fail results, grade bands, average marks, and student lookups for a performance dashboard.

### `ArrayOperationsAdvance/Employee-Payroll.js`

Filters employees by department, adds bonus-based salary values, and totals payroll for reporting.

### `ArrayOperationsAdvance/Movie-Streaming-platform.js`

Uses movie metadata to produce genre-based views, formatted labels, and rating summaries.

### `ArrayOperationsAdvance/Bank-Transaction-Analyzer.js`

Splits credit and debit transactions, calculates final balance, and finds specific transactions for statement analysis.

### `ControlStatements/Course-Price-Tag-Labeler.js`

Shows how branching logic can determine labels and messages based on price or related conditions.

### `ControlStatements/Enrollment-Eligibility-Checker.js`

Evaluates eligibility using conditions such as age, timing, or enrollment rules.

### `ControlStatements/Smart-Login-Status-Engine.js`

Implements a status engine that displays different messages based on login and profile-completion state.

### `ObjectOrientedSimple/Application-Settings-Controller.js`

Uses object-driven state to manage settings and demonstrate controlled mutation.

### `ObjectOrientedSimple/Exam-Result-Summary.js`

Creates a summary of exam data and reinforces object property access and report generation.

### `ObjectOrientedSimple/User-Profile-Manager.js`

Reads, updates, deletes, and enumerates user properties to demonstrate object lifecycle operations.

## Suggested Run Pattern

Execute each file with Node.js individually, for example:

```bash
node Week-1/operators.js
```

Repeat for the other files to compare outputs and observe how each method changes the data shape.

## Learning Outcome

By the end of Week 1, you should be comfortable reading raw data, transforming it safely, and selecting the right control structure for a business rule.
