# Domain ideas

Inspiration for your "What Should I...?" recommendation tool.

---

## Popular domains

| Domain      | Question                 | Example criteria                    |
| ----------- | ------------------------ | ----------------------------------- |
| Movies      | What should I watch?     | mood, length, genre, year           |
| TV Shows    | What should I binge?     | episodes, genre, mood, platform     |
| Restaurants | Where should I eat?      | cuisine, price, distance, dietary   |
| Music       | What should I listen to? | mood, energy, genre, decade         |
| Video Games | What should I play?      | time, players, difficulty, platform |
| Board Games | What should we play?     | players, time, complexity, type     |
| Books       | What should I read?      | length, genre, mood, format         |
| Podcasts    | What should I listen to? | length, topic, mood, format         |
| Activities  | What should I do?        | weather, energy, cost, people       |
| Recipes     | What should I cook?      | time, difficulty, cuisine, dietary  |
| Workouts    | What should I do?        | time, intensity, equipment, focus   |
| Study spots | Where should I study?    | noise, wifi, outlets, cost          |

---

## Creative domains

| Domain          | Question                    | Example criteria                 |
| --------------- | --------------------------- | -------------------------------- |
| Date ideas      | What should we do?          | budget, weather, activity level  |
| Coffee drinks   | What should I order?        | caffeine, sweetness, temperature |
| Snacks          | What should I munch on?     | sweet/salty, healthy, prep time  |
| YouTube videos  | What should I watch?        | length, mood, educational        |
| Nap spots       | Where should I nap?         | comfort, quiet, duration         |
| Procrastination | How should I procrastinate? | time, guilt level, productivity  |
| Ice cream       | What flavor should I get?   | mood, toppings, dietary          |

---

## Property ideas by type

### Category properties (strings)

- genre, type, category, style
- cuisine, format, platform
- mood, vibe, atmosphere

### Numeric properties

- lengthMinutes, duration, time
- priceLevel (1-5), cost, budget
- difficulty (1-10), complexity
- rating, score, popularity
- year, releaseDate

### Boolean properties

- isVegetarian, hasWifi, isFree
- isMultiplayer, requiresEquipment
- isOutdoor, isFamily friendly

---

## Schema examples

### Restaurants

```javascript
{
  name: "Chipotle",
  cuisine: "mexican",
  priceLevel: 2,
  distanceMinutes: 10,
  hasVegetarian: true,
  atmosphere: "casual"
}
```

### Board games

```javascript
{
  title: "Settlers of Catan",
  type: "strategy",
  minPlayers: 3,
  maxPlayers: 4,
  timeMinutes: 90,
  complexity: "medium"
}
```

### Podcasts

```javascript
{
  title: "Serial",
  topic: "true crime",
  episodeLengthMinutes: 45,
  totalEpisodes: 12,
  mood: "intense",
  ongoing: false
}
```

### Study spots

```javascript
{
  name: "Library 2nd Floor",
  noiseLevel: "quiet",
  hasWifi: true,
  hasOutlets: true,
  crowdedness: "medium",
  openLate: true
}
```

---

## Tips for choosing

1. **Pick something you know** - You'll create better data
2. **Make sure there's variety** - Need different values to filter
3. **Think about preferences** - What would users want to filter by?
4. **Keep it fun** - You'll be working with this for a while!
