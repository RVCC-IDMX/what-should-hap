# Writing matching functions

This guide explains how to write functions that filter your data based on user preferences.

---

## Function patterns

### Pattern 1: Single criteria match

Check if one property matches a desired value.

```javascript
/**
 * Checks if an item matches the desired mood
 * @param {Object} item - An item from your data
 * @param {string} desiredMood - The mood the user wants
 * @returns {boolean} - True if the item matches
 */
function matchesMood(item, desiredMood) {
  // If no preference, everything matches
  if (!desiredMood) {
    return true;
  }

  // Check if moods match
  return item.mood === desiredMood;
}
```

**Key concepts:**

- Uses `if` statement for the "no preference" case
- Uses `===` for exact string comparison
- Returns `true` or `false`

---

### Pattern 2: Range check

Check if a numeric property falls within a limit.

```javascript
/**
 * Checks if an item fits within the available time
 * @param {Object} item - An item from your data
 * @param {number} maxMinutes - Maximum time available
 * @returns {boolean} - True if the item fits
 */
function fitsTimeAvailable(item, maxMinutes) {
  // If no time limit, everything fits
  if (!maxMinutes) {
    return true;
  }

  // Check if item's time is within limit
  return item.lengthMinutes <= maxMinutes;
}
```

**Key concepts:**

- Uses comparison operator (`<=`)
- Handles falsy value (0, empty string) with `!`
- Compares numbers, not strings

---

### Pattern 3: Multiple criteria (AND logic)

Check if an item matches ALL of several criteria.

```javascript
/**
 * Checks if an item matches all user preferences
 * @param {Object} item - An item from your data
 * @param {Object} prefs - Object containing all preferences
 * @returns {boolean} - True if ALL criteria match
 */
function meetsAllCriteria(item, prefs) {
  return (
    matchesMood(item, prefs.mood) &&
    fitsTimeAvailable(item, prefs.time) &&
    matchesCategory(item, prefs.category)
  );
}
```

**Key concepts:**

- Uses `&&` (AND) operator
- All conditions must be true for result to be true
- Reuses simpler functions

---

### Pattern 4: Classification (if/else chain)

Return different values based on conditions.

```javascript
/**
 * Returns a message based on match quality
 * @param {number} score - Number of matching criteria (0-3)
 * @returns {string} - A recommendation message
 */
function getMatchMessage(score) {
  if (score === 3) {
    return "Perfect match!";
  } else if (score === 2) {
    return "Great option";
  } else if (score === 1) {
    return "Worth considering";
  } else {
    return "Might work";
  }
}
```

**Key concepts:**

- Uses if/else if/else chain
- Returns a string (not boolean)
- Handles all possible cases

---

## JSDoc comments

Always document your functions with JSDoc comments. See [JSDoc basics](../tutorials/jsdoc-basics.md) for a full tutorial.

Quick reference:

```javascript
/**
 * Brief description of what the function does
 * @param {type} paramName - What this parameter is
 * @param {type} paramName2 - What this parameter is
 * @returns {type} - What the function returns
 */
```

The `@param` tags match your function's parameters, and `@returns` describes what `return` gives back.

---

## Testing in the console

Open browser console (F12 → Console) and test your functions:

```javascript
// Test with a specific item
const testItem = data.options[0];
matchesMood(testItem, "relaxed"); // Should return true or false

// Test with preferences object
const testPrefs = { mood: "relaxed", time: 60 };
meetsAllCriteria(testItem, testPrefs); // Should return true or false

// Test classification
getMatchMessage(3); // Should return "Perfect match!"
getMatchMessage(0); // Should return "Might work"
```

---

## Truthy and falsy values

JavaScript treats some values as "falsy" in conditionals:

| Falsy values | When you might see them     |
| ------------ | --------------------------- |
| `""`         | Empty dropdown selection    |
| `0`          | Numeric input with value 0  |
| `null`       | Missing data                |
| `undefined`  | Property that doesn't exist |

Use this to check for "any" selections:

```javascript
// This handles empty string, null, undefined
if (!desiredMood) {
  return true; // No preference = match everything
}
```

---

## Common mistakes

### Wrong: Comparing with assignment

```javascript
if (item.mood = desiredMood)  // WRONG: = is assignment
```

### Right: Use === for comparison

```javascript
if (item.mood === desiredMood)  // RIGHT: === is comparison
```

### Wrong: Forgetting to return

```javascript
function matchesMood(item, mood) {
  item.mood === mood; // This doesn't return anything!
}
```

### Right: Always return a value

```javascript
function matchesMood(item, mood) {
  return item.mood === mood; // Return the result
}
```

### Wrong: Not handling "no preference"

```javascript
function matchesMood(item, mood) {
  return item.mood === mood; // Fails when mood is empty!
}
```

### Right: Handle empty/falsy inputs

```javascript
function matchesMood(item, mood) {
  if (!mood) return true; // No preference = match all
  return item.mood === mood;
}
```
