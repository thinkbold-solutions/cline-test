// Returns an array of numbers from start (inclusive) to end (exclusive), stepping by step.
// range(0, 5) → [0, 1, 2, 3, 4]
// range(1, 10, 2) → [1, 3, 5, 7, 9]
// range(5, 0, -1) → [5, 4, 3, 2, 1]
export function range(start: number, end: number, step: number = 1): number[] {
  const result: number[] = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
}