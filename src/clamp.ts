// Clamps a number between min and max (inclusive).
// clamp(5, 1, 10) → 5
// clamp(-3, 0, 100) → 0
// clamp(200, 0, 100) → 100
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}