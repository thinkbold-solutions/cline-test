// Splits an array into chunks of the given size.
// chunk([1,2,3,4,5], 2) → [[1,2],[3,4],[5]]
// chunk(['a','b','c'], 3) → [['a','b','c']]
// chunk([], 2) → []
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}