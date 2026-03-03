// Flattens a nested array one level deep.
// flatten([[1,2],[3,4],[5]]) → [1,2,3,4,5]
// flatten([[1,[2,3]],4]) → [1,[2,3],4]
// flatten([]) → []
export function flatten<T>(arr: (T | T[])[]): T[] {
  return arr.reduce((acc: T[], val) => acc.concat(Array.isArray(val) ? val : [val]), [] as T[]);
}
