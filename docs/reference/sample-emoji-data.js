/**
 * Sample data structure - not for assignment use
 * Shows how to organize data with different property types
 *
 * This is just an example to learn from.
 * Create your own domain for the actual project!
 */

const emojiData = {
  description: "Sample emoji data for learning data structure",
  source: "Emojipedia / Unicode Consortium",
  emojis: [
    {
      emoji: "😀",
      name: "grinning face",
      category: "faces",
      year: 2012,
      popular: true,
    },
    {
      emoji: "🔥",
      name: "fire",
      category: "symbols",
      year: 2010,
      popular: true,
    },
    {
      emoji: "🦖",
      name: "T-Rex",
      category: "animals",
      year: 2017,
      popular: false,
    },
    {
      emoji: "🎸",
      name: "guitar",
      category: "objects",
      year: 2010,
      popular: false,
    },
    {
      emoji: "🌮",
      name: "taco",
      category: "food",
      year: 2015,
      popular: true,
    },
  ],
};

// Note the structure:
// - Object with metadata (description, source)
// - Array of items (emojis)
// - Each item has consistent properties
// - Mix of types: strings, numbers, booleans
