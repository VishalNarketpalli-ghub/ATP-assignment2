# Week 2

## Overview

Week 2 moves from basic data handling into dates, module-based design, and object-copy behavior. This is where the exercises start reflecting the structure of larger JavaScript applications.

## Workflow

1. Work with date creation, comparison, and validation.
2. Understand when shallow copies are safe and when deep copies are required.
3. Build feature modules with exports and imports.
4. Combine modules into a small application flow.

## Theory

- The `Date` object stores timestamps and supports extraction of year, month, day, and time fields.
- Date validation should compare component values, not just strings.
- A shallow copy duplicates the top-level object, while nested references remain shared.
- A deep copy isolates the full object graph so nested mutations do not leak back to the source object.
- Modules improve maintainability by splitting validation, domain logic, and orchestration into separate files.

## File Guide

### `DateTimeMonth/Date-Creation-Extraction.js`

Creates the current date and prints human-readable components such as year, month, date, day, and time.

### `DateTimeMonth/Date-Comparison-Validation.js`

Compares enrollment deadlines and validates whether a provided date is real or invalid.

### `DateTimeMonth/Age-Calculator.js`

Calculates age from a date of birth by comparing the birth date with the current date.

### `ShallowAndDeep/Shallow-Copy.js`

Demonstrates how shallow copying affects nested objects and why nested updates still touch the original reference.

### `ShallowAndDeep/Deep-Copy.js`

Uses `structuredClone` to produce an independent copy and verify that nested updates do not affect the source object.

### `MasterProjectOnCollections/Online-Learning-Platform.js`

Implements a compact data engine for an online learning platform. It includes user processing, course catalog logic, shopping cart computation, and role-permission utilities.

### `ModulesDemo/TodoAppModule/validator.js`

Contains validation rules for task title, priority, and due date.

### `ModulesDemo/TodoAppModule/task.js`

Manages the in-memory task list and exposes add, list, and completion operations.

### `ModulesDemo/TodoAppModule/app.js`

Acts as the entry point for the todo module demo and exercises the exported task functions.

### `ModulesDemo/TodoAppModule/Question.js`

Documents the requirements and intended architecture for the todo module exercise.

### `ModulesDemo/E-commersShoppingCare/product.js`

Defines a simulated product catalog and related catalog operations.

### `ModulesDemo/E-commersShoppingCare/cart.js`

Implements cart operations such as add, remove, update, list, and total calculation.

### `ModulesDemo/E-commersShoppingCare/discount.js`

Handles coupon validation, discount calculation, and price adjustment rules.

### `ModulesDemo/E-commersShoppingCare/payment.js`

Coordinates payment validation, discount application, stock reduction, and order generation.

### `ModulesDemo/E-commersShoppingCare/app.js`

Runs the end-to-end store demo by browsing products, modifying the cart, and checking out.

### `ModulesDemo/E-commersShoppingCare/Question.js`

Captures the assignment brief for the modular shopping cart system.

## Suggested Run Pattern

Run the independent files directly with Node.js, and run the module demos from their folder entry points:

```bash
node Week-2/ModulesDemo/TodoAppModule/app.js
node Week-2/ModulesDemo/E-commersShoppingCare/app.js
```

## Learning Outcome

By the end of Week 2, you should understand date handling, object isolation, and how to design reusable JavaScript modules around a clear workflow.
