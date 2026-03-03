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