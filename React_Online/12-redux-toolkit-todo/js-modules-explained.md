# JavaScript Module Exports and Imports Explained

## Default Exports: The Key Concept

In JavaScript modules, you can only have **one default export** per file. This is a fundamental rule of the module system.

### Why Only One Default Export?

The default export is meant to represent the primary thing a module provides. Think of it like the main product of a factory - there can only be one "main" thing.

## Three Approaches to Module Exports

### 1. One Default + Optional Named Exports

```javascript
// mathModule.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }

// The primary functionality of this module
export default function multiply(a, b) { return a * b; }
```

**How to import:**
```javascript
import multiply, { add, subtract } from './mathModule.js';

// Usage
multiply(5, 3);  // 15
add(5, 3);       // 8
```

### 2. Object as Default Export

```javascript
// mathModule.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }

// Group everything into one object as the default export
export default {
  add,
  subtract,
  multiply
};
```

**How to import:**
```javascript
import math from './mathModule.js';

// Usage
math.add(5, 3);      // 8
math.multiply(5, 3);  // 15
```

### 3. Named Exports Only (No Default)

```javascript
// mathModule.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }

// No default export!
```

**How to import:**
```javascript
import { add, multiply, subtract } from './mathModule.js';
// OR import everything
import * as math from './mathModule.js';

// Usage
add(5, 3);          // 8
// OR
math.multiply(5, 3); // 15
```

## What Happens If You Try Multiple Defaults?

```javascript
// This will cause a syntax error!
export default function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }
// SyntaxError: Only one default export allowed per module
```

## Importing Default Exports: Name Flexibility

One key advantage of default exports is that you can import them with any name you choose:

```javascript
// These all work the same:
import multiply from './mathModule.js';
import calculateProduct from './mathModule.js';
import whatever from './mathModule.js';
```

With named exports, you must use the exact name (or rename with `as`):

```javascript
import { add as sum } from './mathModule.js';
```

## Best Practices

1. **Use default exports** for the main functionality of a module
2. **Use named exports** for utility functions or secondary features
3. **Be consistent** in your codebase about which pattern you use
4. **Consider file size** - if a file has many exports, named exports might be clearer

Remember: The module system is about organizing code in a clear, maintainable way. Choose the export pattern that best communicates your module's purpose.
