# JSON basics in JavaScript

This tutorial connects what you learned about `package.json` in Week 2 to creating your own data structures.

---

## The connection

In Week 2, you edited `package.json`:

```json
{
  "name": "my-project",
  "scripts": {
    "start": "node index.js"
  }
}
```

Now you're creating `data.js`:

```javascript
const data = {
  domain: "Movies",
  options: [{ title: "The Matrix", genre: "sci-fi" }],
};
```

**Same concept, your own purpose.**

---

## Objects: Curly braces `{}`

Objects store named properties:

```javascript
const movie = {
  title: "The Matrix",
  year: 1999,
  genre: "sci-fi",
};
```

Access properties with dot notation:

```javascript
movie.title; // "The Matrix"
movie.year; // 1999
```

---

## Arrays: Square brackets `[]`

Arrays store ordered lists:

```javascript
const genres = ["action", "comedy", "drama"];
```

Access items by index (starting at 0):

```javascript
genres[0]; // "action"
genres[1]; // "comedy"
genres.length; // 3
```

---

## Arrays of objects

The most common pattern - a list of similar items:

```javascript
const movies = [
  { title: "The Matrix", genre: "sci-fi" },
  { title: "Finding Nemo", genre: "animation" },
  { title: "The Godfather", genre: "drama" },
];
```

Access:

```javascript
movies[0]; // First movie object
movies[0].title; // "The Matrix"
movies.length; // 3
```

---

## Syntax rules

### Commas separate items

```javascript
const data = {
  name: "value", // comma after each property
  count: 42, // comma here too
  active: true, // no comma on last one (optional in JS)
};
```

### Strings need quotes

```javascript
// Right
{
  genre: "action";
}

// Wrong
{
  genre: action;
} // action is treated as a variable!
```

### Numbers don't need quotes

```javascript
// Right
{
  year: 1999;
}

// Also works but unnecessary
{
  year: "1999";
} // This is a string, not a number
```

### Booleans are lowercase

```javascript
// Right
{ active: true, hidden: false }

// Wrong
{ active: True }    // Capital T causes error
```

---

## JSON vs JavaScript objects

| Feature         | JSON             | JavaScript object |
| --------------- | ---------------- | ----------------- |
| Property names  | Must have quotes | Quotes optional   |
| Trailing commas | Not allowed      | Allowed           |
| Comments        | Not allowed      | Allowed           |
| File extension  | `.json`          | `.js`             |

Your `data.js` uses JavaScript object syntax, which is more flexible than JSON.

---

## Common errors

### Missing comma

```javascript
// Wrong - missing comma after "action"
{
  genre: "action"
  year: 1999
}

// Right
{
  genre: "action",
  year: 1999
}
```

### Unclosed brackets

```javascript
// Wrong - missing closing brace
const data = {
  options: [
    { title: "Movie" }
  ]
// Missing } here!

// Right
const data = {
  options: [
    { title: "Movie" }
  ]
};
```

### Mismatched brackets

```javascript
// Wrong - array closed with brace
options: [
  { title: "Movie" }
}

// Right - array closed with bracket
options: [
  { title: "Movie" }
]
```

---

## VS Code helps you

- **Red squiggles**: Syntax error - hover to see what's wrong
- **Auto-complete**: Start typing and VS Code suggests
- **Bracket matching**: Click a bracket to see its pair
- **Format document**: Right-click → Format Document

---

## Practice

Try these in the browser console:

```javascript
// Create an object
const item = { name: "Test", value: 42 };

// Access properties
item.name;
item.value;

// Create an array
const list = [1, 2, 3];

// Access by index
list[0];
list.length;

// Array of objects
const items = [
  { id: 1, name: "First" },
  { id: 2, name: "Second" },
];

items[0].name;
items[1].id;
```
