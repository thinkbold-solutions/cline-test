export function padStart(str: string, length: number, char: string = " "): string {
  if (str.length >= length) return str;
  const padding = char.repeat(length).slice(0, length - str.length);
  return padding + str;
}

export function padEnd(str: string, length: number, char: string = " "): string {
  if (str.length >= length) return str;
  const padding = char.repeat(length).slice(0, length - str.length);
  return str + padding;
}

// Examples:
// padStart("5", 3, "0") → "005"
// padStart("hello", 3) → "hello"
// padEnd("hi", 5, ".") → "hi..."
// padStart("7", 5, "xy") → "xyxy7"