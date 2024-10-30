# Collatz

Calculates the number of iterations it takes unit the input returns 1.

## Prerequisites

- Node.js

## How to run

To run normally:
```bash
npm run collatz <min> <max>
```

To show all steps/calculations:
```bash
npm run collatz-showall <min> <max>
```

Replace `<min>` with a valid integer between 1 and 9,007,199,254,740,991.
Replace `<max>` with a valid integer between 1 and 9,007,199,254,740,991 (optional argument).

Do not use commas or any thousand seperators in when passing an argument.

If a value is passed into only the first parameter, the program will calculate for only that integer.
If two values are passed (a min and a max), the program will calculate for all integers between the min and max, inclusively.

## Debug commands

To find the largest accepted integer:
```bash
npm run debug maxint
```