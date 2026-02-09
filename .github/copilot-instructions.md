# Copilot instructions

Instructions for GitHub Copilot when working on HAP's Coding Snacks project.

## Project context

This is a "What should I munch?" snack recommendation tool for coders.

**Domain:** Coding Snacks

**Purpose:** Help coders find the perfect snack based on mood, prep time, category, and keyboard safety (mess level).

## Code style

- Use `const` and `let`, never `var`
- Use meaningful variable names (snack, preferences, not x, y)
- Add JSDoc comments to all functions
- Use strict equality (`===`) for comparisons
- Handle empty/falsy form values in all matching functions

## Data structure

The data lives in `data.js` as a JavaScript object:

```javascript
const data = {
  domain: "Coding Snacks",
  description: "Find the perfect snack for your coding session",
  options: [
    {
      name: "Trail Mix",
      category: "nuts",
      mood: "focused",
      prepMinutes: 0,
      messLevel: 1,
      isHealthy: true,
    },
    // ... more snacks
  ],
};
```

## Snack properties

| Property    | Type    | Values                                      |
| ----------- | ------- | ------------------------------------------- |
| name        | string  | The snack name                              |
| category    | string  | fruit, vegetable, dairy, nuts, grain, sweet |
| mood        | string  | focused, relaxed, energized                 |
| prepMinutes | number  | 0-5 (minutes to prepare)                    |
| messLevel   | number  | 1 (clean) to 3 (messy)                      |
| isHealthy   | boolean | true/false                                  |

## Matching function patterns

All matching functions should:

- Return `true` or `false`
- Handle empty/null preferences by returning `true` (no preference = match all)
- Use descriptive parameter names

Example pattern:

```javascript
function matchesMood(snack, desiredMood) {
  if (!desiredMood) {
    return true;
  }
  return snack.mood === desiredMood;
}
```

## Edge cases to watch

- Form values come as strings, even numbers! Use `Number()` to convert
- Empty dropdown = empty string "", not null or undefined
- messLevel of 0 is falsy but could be a valid filter value (though we use 1-3)

## HAP's voice

When writing comments, use first-person perspective and be enthusiastic about learning:

- "I learned this the hard way..."
- "Prof. Teeters reminded me..."
- "This was my breakthrough moment!"
