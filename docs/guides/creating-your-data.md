# Creating your data

This guide walks you through designing and creating your recommendation data.

---

## Understanding the data structure

Your data lives in `data.js` as a JavaScript object:

```javascript
const data = {
  domain: "Movies",
  description: "Movie recommendations based on mood and time",
  options: [
    {
      title: "The Matrix",
      genre: "sci-fi",
      mood: "intense",
      lengthMinutes: 136,
    },
    // More items...
  ],
};
```

### Key points

- The outer object has `domain`, `description`, and `options`
- `options` is an array (uses square brackets `[]`)
- Each item in the array is an object (uses curly braces `{}`)
- Properties are separated by commas
- This is the same structure as `package.json` - you already know this!

---

## Step 1: Choose your properties

Think about what information helps make a good recommendation.

### Good properties to include

| Property type | Examples                       | Used for               |
| ------------- | ------------------------------ | ---------------------- |
| Name/Title    | title, name, restaurant        | Identifying the item   |
| Category      | genre, cuisine, type           | Filtering by group     |
| Mood/Vibe     | mood, energy, atmosphere       | Matching user feeling  |
| Time/Duration | lengthMinutes, prepTime        | Fitting available time |
| Numeric scale | rating, difficulty, priceLevel | Range comparisons      |
| Boolean       | isVegetarian, isMultiplayer    | Yes/no filtering       |

### Example schemas

**Movies:**

```javascript
{
  title: "Finding Nemo",
  genre: "animation",
  mood: "heartwarming",
  lengthMinutes: 100,
  year: 2003
}
```

**Restaurants:**

```javascript
{
  name: "Taco Bell",
  cuisine: "mexican",
  priceLevel: 1,
  distanceMinutes: 10,
  hasVegetarian: true
}
```

**Games:**

```javascript
{
  title: "Uno",
  type: "card",
  players: 4,
  timeMinutes: 30,
  difficulty: "easy"
}
```

---

## Step 2: Generate data with AI

### Prompt template

```
I'm creating a [domain] recommendation system.
Generate 15 items with these properties:
- [property 1]: [type and possible values]
- [property 2]: [type and possible values]
- ...

Format as a JavaScript array of objects.
```

### Example prompt

```
I'm creating a movie recommendation system.
Generate 15 movies with these properties:
- title: string (the movie name)
- genre: string (action, comedy, drama, sci-fi, animation, horror)
- mood: string (relaxed, intense, heartwarming, adventurous, focused)
- lengthMinutes: number (typical movie lengths)
- year: number (release year)

Format as a JavaScript array of objects.
```

---

## Step 3: Verify and personalize

### Check accuracy

Ask yourself for each item:

- Is this information correct?
- Would the AI actually know this, or is it guessing?
- For subjective fields (mood, difficulty): does this seem reasonable?

### Fix syntax errors

Watch for VS Code red squiggles. Common issues:

| Error            | Fix                                          |
| ---------------- | -------------------------------------------- |
| Missing comma    | Add comma after each property and item       |
| Missing quotes   | Strings need quotes: `"action"` not `action` |
| Trailing comma   | OK in JS, but remove if causing errors       |
| Unclosed bracket | Match every `{` with `}` and `[` with `]`    |

### Add your favorites

Make the data personal:

- Add your favorite movies/restaurants/games
- Include some obscure picks only you would know
- Make sure variety exists across all your categories

---

## Common mistakes

### Wrong: Property without quotes on value

```javascript
{
  title: Finding Nemo,  // Missing quotes!
}
```

### Right: String values need quotes

```javascript
{
  title: "Finding Nemo",
}
```

### Wrong: Inconsistent property names

```javascript
{
  Title: "Movie 1",      // Capital T
  title: "Movie 2",      // Lowercase t
}
```

### Right: Consistent camelCase

```javascript
{
  title: "Movie 1",
  title: "Movie 2",
}
```

---

## Testing your data

Open the browser console (F12 → Console) and type:

```javascript
data;
```

You should see your data object. If you see an error, there's a syntax problem in `data.js`.

Check specific items:

```javascript
data.options[0]; // First item
data.options.length; // How many items
data.options[0].title; // First item's title
```
