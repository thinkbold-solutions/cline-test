/**
 * Converts a string into a URL-friendly slug.
 * 
 * @param text - The input string to convert.
 * @returns A slugified version of the input string.
 * 
 * @example
 * slugify("Hello World") // "hello-world"
 * slugify(" My Blog Post! ") // "my-blog-post"
 * slugify("TypeScript_is_great") // "typescript-is-great"
 * slugify("---foo---") // "foo"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/[^a-z0-9-]/g, '') // Strip any character that is not a-z, 0-9, or hyphen
    .replace(/-+/g, '-') // Collapse multiple hyphens into one
    .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
}