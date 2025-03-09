# Understanding JavaScript Module Exports and Imports

## Default Exports and Imports

When JavaScript processes imports and exports, it doesn't rely on the variable names to match - it works with the structure of the export/import instead.

For default exports:
1. The file system and module loader identify the file you're importing from based on the path
2. The module loader checks what that file has exported as its default export
3. It then assigns whatever was exported as default to the variable name you specified in your import statement

## Example with Redux Reducer

### 1. Export statement in todoSlice.js:
```javascript
export default todoSlice.reducer
```

### 2. Import statement in another file:
```javascript
import todoReducer from '../features/todo/todoSlice';
```

### 3. How the JavaScript module system handles this:
* Locates the file at that path
* Finds its default export (which is `todoSlice.reducer`)
* Assigns that value to the variable name `todoReducer` in the importing file

The connection happens at the level of the module system, not through variable name matching. The module system tracks "this is the default thing exported" and "this is what to import as the default."

## Difference from Named Exports

This is fundamentally different from named exports, where you must use the same name or explicitly rename:

```javascript
// Named export
export const namedThing = value;

// Must use same name or rename with 'as'
import { namedThing } from './path';
import { namedThing as newName } from './path';
```
