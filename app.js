/**
 * HAP's Snack Recommender - Main Application
 *
 * This is where everything comes together!
 *
 * I was confused at first about how the pieces connect.
 * Prof. Teeters explained: "Think of it like a relay race.
 * The form hands preferences to findRecommendations,
 * which hands matches to displayRecommendations."
 *
 * That analogy made it click for me! 🟠
 */

// Get references to DOM elements
const form = document.getElementById("preference-form");
const resultsList = document.getElementById("recommendation-list");

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Prevent the page from reloading
  // I forgot this once and couldn't figure out why my results disappeared!
  event.preventDefault();

  // Get user preferences from the form
  const preferences = {
    mood: document.getElementById("mood").value,
    category: document.getElementById("category").value,
    prepTime: document.getElementById("time").value,
    messLevel: document.getElementById("mess-level").value,
  };

  // Convert numbers from strings (form values are always strings!)
  // Grace Hopper reminded me: "A string '5' is not equal to the number 5."
  if (preferences.prepTime) {
    preferences.prepTime = Number(preferences.prepTime);
  }
  if (preferences.messLevel) {
    preferences.messLevel = Number(preferences.messLevel);
  }

  // Find matching recommendations
  const recommendations = findRecommendations(preferences);

  // Display the results
  displayRecommendations(recommendations);
});

/**
 * Finds snacks that match the user's preferences
 * @param {Object} preferences - The user's preferences from the form
 * @returns {Array} - Array of matching snacks
 */
function findRecommendations(preferences) {
  const matches = [];

  // Loop through all snacks and check each one
  for (let i = 0; i < data.options.length; i++) {
    const snack = data.options[i];

    // Use our matching function to check if this snack matches
    if (meetsAllCriteria(snack, preferences)) {
      matches.push(snack);
    }
  }

  return matches;
}

/**
 * Displays the snack recommendations in the UI
 * @param {Array} recommendations - Array of matching snacks
 */
function displayRecommendations(recommendations) {
  // Clear previous results
  resultsList.innerHTML = "";

  // Check if we found any matches
  if (recommendations.length === 0) {
    resultsList.innerHTML =
      '<p class="no-results">No snacks match your preferences! Try being less picky? 🟠</p>';
    return;
  }

  // Show how many matches we found
  const countMessage = document.createElement("p");
  countMessage.className = "match-count";
  countMessage.textContent = `Found ${recommendations.length} snack${recommendations.length === 1 ? "" : "s"} for you!`;
  resultsList.appendChild(countMessage);

  // Create a card for each recommendation
  for (let i = 0; i < recommendations.length; i++) {
    const snack = recommendations[i];
    const card = createRecommendationCard(snack);
    resultsList.appendChild(card);
  }
}

/**
 * Creates an HTML element for a snack recommendation
 * @param {Object} snack - The snack item
 * @returns {HTMLElement} - A div element with the snack details
 */
function createRecommendationCard(snack) {
  const card = document.createElement("div");
  card.className = "recommendation-card";

  // Get the category emoji and health message
  const emoji = getCategoryEmoji(snack.category);
  const healthMessage = getHealthMessage(snack);

  // Build the card HTML
  //
  // SECURITY NOTE: Using innerHTML with template literals is safe here because
  // our data comes from data.js (hardcoded, not user input). If this data came
  // from user input or an external API, we'd need to sanitize it first to prevent
  // XSS (Cross-Site Scripting) attacks. For user-generated content, use textContent
  // instead, or a sanitization library. We'll learn more about this in later weeks!
  card.innerHTML = `
    <h3>${emoji} ${snack.name}</h3>
    <p><strong>Category:</strong> ${snack.category}</p>
    <p><strong>Mood:</strong> ${snack.mood}</p>
    <p><strong>Prep time:</strong> ${snack.prepMinutes === 0 ? "Ready to eat!" : snack.prepMinutes + " minutes"}</p>
    <p><strong>Mess level:</strong> ${"🟢".repeat(4 - snack.messLevel)}${"⚪".repeat(snack.messLevel - 1)} (${snack.messLevel}/3)</p>
    <p class="health-message">${healthMessage}</p>
  `;

  return card;
}
