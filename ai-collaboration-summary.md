# AI collaboration summary

## Project overview

**Domain:** Coding Snacks - What should I munch on while coding?

**AI tools used:** GitHub Copilot, Claude

---

## Data creation

### What I asked AI to help with

I started by asking Copilot: "What properties should each snack have for a coding snack recommendation system?"

It suggested: name, category, calories, and isHealthy. But I wanted more useful filters for coders, so I asked: "What about prep time and how messy the snack is for keyboard safety?"

That's when I came up with my final schema:

- name (string)
- category (string: fruit, vegetable, dairy, nuts, grain, sweet)
- mood (string: focused, relaxed, energized)
- prepMinutes (number)
- messLevel (number 1-3)
- isHealthy (boolean)

### What I verified or changed

I asked Claude to generate 15 snacks, and it gave me a good starting list. But I noticed:

- It classified dark chocolate as unhealthy (I changed it to healthy - antioxidants!)
- It forgot frozen grapes, which is my favorite coding snack
- Some prep times seemed off (it said yogurt takes 5 minutes - I changed to 2)

I added 3 more snacks myself to get to 18 total.

Then during testing, I noticed some filter combinations returned zero results! Prof. Teeters helped me map out which mood + category combos were missing. I added 7 more snacks (blueberries, celery, cucumber, cottage cheese, cashews, honey roasted peanuts, jelly beans) to ensure every combination has at least one match. Final count: 25 snacks!

---

## Matching functions

### Functions I wrote with AI assistance

| Function name    | What it does                    | How AI helped                 |
| ---------------- | ------------------------------- | ----------------------------- |
| matchesMood      | Checks if snack mood matches    | Copilot generated the pattern |
| matchesCategory  | Checks snack category           | I wrote based on mood pattern |
| fitsPrepTime     | Range check for prep time       | Copilot suggested <= operator |
| isCleanEnough    | Range check for mess level      | I wrote myself                |
| meetsAllCriteria | Combines all checks with &&     | Copilot helped with syntax    |
| getHealthMessage | Returns message based on health | I wrote the logic myself      |
| getCategoryEmoji | Returns emoji for category      | Claude suggested the emojis   |

### Code I had to fix or adjust

Big mistake! My first version of `matchesMood` didn't handle empty strings:

```javascript
// My broken version
function matchesMood(snack, mood) {
  return snack.mood === mood; // Returns false when mood is ""!
}
```

Grace Hopper (well, the docs) reminded me that an empty string from a form is falsy but not the same as "no preference." I added the `if (!mood)` check to fix it.

---

## Reflection

### What worked well

- Asking Copilot to explain patterns before generating code helped me understand what I was writing
- Using Claude for the snack data was faster than making it all up myself
- The "write one function, then copy the pattern" approach worked great

### What was challenging

- Understanding why my form wasn't filtering correctly (it was the string/number issue!)
- Getting the mess level display to show the right number of circles
- Remembering to handle empty selections in EVERY matching function

### What I learned

1. AI is great for generating data, but you have to verify it
2. Starting with a pattern and adapting it is easier than writing from scratch
3. Always test with edge cases (empty selections, zero values)
4. Comments help me remember why I wrote something a certain way

---

## Time breakdown

| Task              | Approximate time |
| ----------------- | ---------------- |
| Data design       | 30 minutes       |
| Writing functions | 45 minutes       |
| Connecting UI     | 30 minutes       |
| Testing/debugging | 40 minutes       |

Total: About 2.5 hours (plus snack breaks to test my recommendations!)
