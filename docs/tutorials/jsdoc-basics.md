# JSDoc basics

This tutorial introduces JSDoc comments - special comments that document your functions and help VS Code assist you.

---

## What is JSDoc?

JSDoc is a way to describe what your functions do using structured comments. It looks like this:

```javascript
/**
 * Checks if a snack matches the desired mood
 * @param {Object} snack - A snack from the data
 * @param {string} desiredMood - The mood to match
 * @returns {boolean} - True if the snack matches
 */
function matchesMood(snack, desiredMood) {
  // function code here
}
```

The `/**` opening (two asterisks) tells VS Code this is a JSDoc comment, not a regular comment.

---

## JSDoc tags match function parts

Notice how each `@` tag describes a specific part of the function:

```javascript
/**
 * Checks if a snack matches the desired mood  ← describes what function does
 * @param {Object} snack ─────────────────────────┐
 * @param {string} desiredMood ───────────────────┼─ match the parameters
 * @returns {boolean} ────────────────────────────┼─ matches what return gives back
 */                                               │
function matchesMood(snack, desiredMood) {  ←─────┘
  if (!desiredMood) {
    return true;   ← @returns describes this
  }
  return snack.mood === desiredMood;   ← and this
}
```

| JSDoc tag  | Describes              | Function part             |
| ---------- | ---------------------- | ------------------------- |
| First line | What the function does | The function name/purpose |
| `@param`   | Each input value       | Parameters in `()`        |
| `@returns` | The output value       | What `return` gives back  |

This pattern works for every function you write.

---

## Why use JSDoc?

### VS Code shows helpful hints

When you hover over a function, you see its description:

```text
matchesMood(snack, desiredMood)
Checks if a snack matches the desired mood
```

### Autocomplete shows parameter info

When you type `matchesMood(`, VS Code shows:

```text
snack: Object - A snack from the data
desiredMood: string - The mood to match
```

### Catch mistakes early

If you pass the wrong type, VS Code can warn you before you run the code.

---

## The three main tags

### @param - Describe inputs

```javascript
/**
 * @param {string} name - The user's name
 * @param {number} age - The user's age
 * @param {boolean} active - Whether the account is active
 */
```

Format: `@param {type} name - description`

### @returns - Describe output

```javascript
/**
 * @returns {boolean} - True if the item matches
 */
```

Format: `@returns {type} - description`

### Description line - What it does

The first line (before any `@` tags) describes what the function does:

```javascript
/**
 * Checks if a snack can be prepared in the available time
 * @param ...
 */
```

---

## Common types

| Type      | Examples                           |
| --------- | ---------------------------------- |
| `string`  | `"hello"`, `"focused"`, `"sci-fi"` |
| `number`  | `42`, `3.14`, `0`                  |
| `boolean` | `true`, `false`                    |
| `Object`  | `{ name: "Test", value: 42 }`      |
| `Array`   | `[1, 2, 3]`, `["a", "b"]`          |

---

## Complete example

Here's a matching function with full JSDoc:

```javascript
/**
 * Checks if an item fits within the available time
 * @param {Object} item - An item from your data
 * @param {number} maxMinutes - Maximum time available
 * @returns {boolean} - True if the item fits
 */
function fitsTimeAvailable(item, maxMinutes) {
  if (!maxMinutes) {
    return true;
  }
  return item.lengthMinutes <= maxMinutes;
}
```

Now when you use this function anywhere, VS Code knows:

- What it does (checks time fit)
- What to pass (an item object and a number)
- What you get back (true or false)

---

## Using Copilot to generate JSDoc

You can ask Copilot to add JSDoc to your functions:

1. Write your function first
2. Place your cursor above the function
3. Type `/**` and press Enter - Copilot often auto-generates the rest
4. Or use the `/doc` command on a selected function

Always review what Copilot generates to make sure it accurately describes your function.

---

## Practice

Add JSDoc to this function:

```javascript
function matchesCategory(item, category) {
  if (!category) {
    return true;
  }
  return item.category === category;
}
```

Your JSDoc should describe:

- What the function does
- What `item` is (an Object)
- What `category` is (a string)
- What it returns (a boolean)

---

## Beyond VS Code: automatic documentation

JSDoc comments aren't just for your editor. Special tools can scan your entire project and generate documentation websites automatically.

### How it works

1. You write JSDoc comments in your code
2. A tool (like JSDoc, TypeDoc, or Documentation.js) reads all your files
3. It outputs HTML pages showing every function, what it does, and how to use it

### Why this matters

- **Team projects**: New developers can read the docs without digging through code
- **Open source**: Users of your library see professional documentation
- **Your future self**: Coming back to code months later, you have a reference
- **Professional practice**: Industry projects expect documented code

This is why learning JSDoc now pays off later. The same comments that help VS Code today become your project's documentation tomorrow.

---

## Quick reference

```javascript
/**
 * Brief description of what the function does
 * @param {type} paramName - What this parameter is
 * @param {type} paramName2 - What this parameter is
 * @returns {type} - What the function returns
 */
function myFunction(paramName, paramName2) {
  // code
}
```
