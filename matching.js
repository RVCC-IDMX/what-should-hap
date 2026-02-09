/**
 * HAP's Snack Matching Functions
 *
 * Here's what I learned about matching functions:
 * They're like little gatekeepers! Each one asks a question about a snack
 * and answers true or false. Then we can combine them to find the perfect match.
 *
 * I made the mistake of forgetting to handle "any" selections at first.
 * Grace Hopper reminded me: "An empty string is not the same as no preference.
 * You must handle both cases explicitly." 😳
 *
 * That really stuck with me! 🟠
 */

// ============================================================
// SINGLE CRITERIA MATCHES
// ============================================================

/**
 * Checks if a snack matches the desired mood
 * @param {Object} snack - A snack from my data
 * @param {string} desiredMood - The mood the user wants (focused, relaxed, energized)
 * @returns {boolean} - True if the snack matches the mood
 */
function matchesMood(snack, desiredMood) {
  // If no mood preference, everything matches!
  // I learned this the hard way when my app showed zero results 😳
  if (!desiredMood) {
    return true;
  }

  return snack.mood === desiredMood;
}

/**
 * Checks if a snack is in the desired category
 * @param {Object} snack - A snack from my data
 * @param {string} desiredCategory - The category the user wants
 * @returns {boolean} - True if the snack is in that category
 */
function matchesCategory(snack, desiredCategory) {
  // Same pattern: no preference means everything matches
  if (!desiredCategory) {
    return true;
  }

  return snack.category === desiredCategory;
}

// ============================================================
// RANGE CHECK
// ============================================================

/**
 * Checks if a snack can be prepared in the available time
 * @param {Object} snack - A snack from my data
 * @param {number} maxPrepTime - Maximum prep time available in minutes
 * @returns {boolean} - True if the snack fits in the time
 */
function fitsPrepTime(snack, maxPrepTime) {
  // If no time constraint, everything fits
  if (!maxPrepTime) {
    return true;
  }

  // Use <= because if I have 3 minutes, a 3-minute snack still works!
  return snack.prepMinutes <= maxPrepTime;
}

/**
 * Checks if a snack's mess level is acceptable
 * @param {Object} snack - A snack from my data
 * @param {number} maxMessLevel - Maximum acceptable mess (1-3)
 * @returns {boolean} - True if the snack is clean enough
 */
function isCleanEnough(snack, maxMessLevel) {
  // Prof. Teeters said keyboards are sacred! This one matters to me.
  if (!maxMessLevel) {
    return true;
  }

  return snack.messLevel <= maxMessLevel;
}

// ============================================================
// MULTIPLE CRITERIA (AND LOGIC)
// ============================================================

/**
 * Checks if a snack matches ALL the user's preferences
 * @param {Object} snack - A snack from my data
 * @param {Object} preferences - Object containing all user preferences
 * @returns {boolean} - True if ALL criteria match
 */
function meetsAllCriteria(snack, preferences) {
  // This was my breakthrough moment! 🟠
  // Using && means ALL of these must be true
  return (
    matchesMood(snack, preferences.mood) &&
    matchesCategory(snack, preferences.category) &&
    fitsPrepTime(snack, preferences.prepTime) &&
    isCleanEnough(snack, preferences.messLevel)
  );
}

// ============================================================
// CLASSIFICATION (IF/ELSE CHAIN)
// ============================================================

/**
 * Returns a fun message based on how healthy the snack is
 * @param {Object} snack - A snack from my data
 * @returns {string} - A message about the snack
 */
function getHealthMessage(snack) {
  if (snack.isHealthy && snack.messLevel === 1) {
    return "Perfect coding fuel! Clean and healthy!";
  } else if (snack.isHealthy) {
    return "Healthy choice!";
  } else if (snack.messLevel === 1) {
    return "At least it won't mess up your keyboard!";
  } else {
    return "Treat yourself! (Maybe use a napkin)";
  }
}

/**
 * Returns an emoji based on the snack category
 * @param {string} category - The snack category
 * @returns {string} - An emoji representing the category
 */
function getCategoryEmoji(category) {
  if (category === "fruit") {
    return "🍎";
  } else if (category === "vegetable") {
    return "🥕";
  } else if (category === "dairy") {
    return "🧀";
  } else if (category === "nuts") {
    return "🥜";
  } else if (category === "grain") {
    return "🍿";
  } else if (category === "sweet") {
    return "🍫";
  } else {
    return "🍽️";
  }
}
