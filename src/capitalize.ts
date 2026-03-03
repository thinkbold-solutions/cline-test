// Capitalizes the first letter of a string. Lowercases the rest.
// capitalize("hello world") → "Hello world"
// capitalize("HELLO") → "Hello"
// capitalize("") → ""
export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Capitalizes the first letter of every word.
// capitalizeWords("hello world") → "Hello World"
// capitalizeWords("the quick brown fox") → "The Quick Brown Fox"
export function capitalizeWords(str: string): string {
  return str.split(' ').map(word => capitalize(word)).join(' ');
}