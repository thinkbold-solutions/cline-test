/**
 * Truncates a given text to a specified maximum length, ensuring no mid-word cuts.
 * If the text is longer than maxLength, it cuts at the last word boundary before maxLength
 * and appends a suffix (default "…").
 *
 * @param text - The text to truncate.
 * @param maxLength - The maximum length of the truncated text.
 * @param suffix - The suffix to append if the text is truncated (default "…").
 * @returns The truncated text.
 *
 * @example
 * truncate("Hello world", 8) // "Hello…"
 * truncate("Hello world", 20) // "Hello world"
 * truncate("TypeScript is great", 15, "...") // "TypeScript..."
 * truncate("abcdefghij", 5) // "abcd…"
 */
export function truncate(text: string, maxLength: number, suffix: string = "…"): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Budget: chars available before suffix so final string stays <= maxLength
  const budget = maxLength - suffix.length;

  // Find the last word boundary within budget
  const lastSpaceIndex = text.lastIndexOf(" ", budget);
  if (lastSpaceIndex === -1) {
    // No word boundary found, cut at budget exactly
    return text.slice(0, budget) + suffix;
  }

  // Cut at the last word boundary and append suffix
  return text.slice(0, lastSpaceIndex) + suffix;
}