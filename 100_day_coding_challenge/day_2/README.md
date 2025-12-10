# Day 2: Vehicle Maintenance Tracker (Interfaces + Abstraction)

## Task (short)
Model vehicles and compute the next service date using interfaces and an abstract class.

## Requirements
1. **Interface**
   - `Maintainable` with `getNextServiceDate(): string`.

2. **Abstract class**
   - `Vehicle` (implements `Maintainable`)
     - Props: `brand: string`, `model: string`, `lastServiceDate: string` (format `YYYY-MM-DD`)
     - Method: `details(): string` → `"<brand> <model> last serviced on <lastServiceDate>"`
     - Abstract: `getNextServiceDate(): string`

3. **Child class (today)**
   - `Car` extends `Vehicle`
   - Service interval: **180 days**
   - Implement `getNextServiceDate()` by adding 180 days to `lastServiceDate`.

## Date rules / constraints
- Use simple arithmetic (no date libraries).
- Assume `30 days = 1 month`, `12 months = 1 year`.
- Ignore leap years.
- Input/output date format: `YYYY-MM-DD`.
- Padding (e.g., `05`) is optional.

## Example
```ts
const c = new Car("Honda", "City", "2025-01-10");
console.log(c.getNextServiceDate()); // -> "2025-07-09" (approx, based on rules)
