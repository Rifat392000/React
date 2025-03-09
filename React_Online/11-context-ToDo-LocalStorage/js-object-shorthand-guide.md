# JavaScript Object Property Shorthand Guide

## Basic Syntax

JavaScript provides multiple ways to create objects where property names match variable names. Here's a comparison of different approaches:

### Traditional Method
```javascript
// Regular way
const name = "John";
const age = 30;

// Old way of creating an object
const person = {
    name: name,
    age: age
};
```

### Modern Shorthand Method (ES6+)
```javascript
// Modern way using property shorthand
const person = {
    name,
    age
};

// Results in:
// { name: "John", age: 30 }
```

## Extended Example

The property shorthand syntax becomes especially useful when working with multiple properties:

```javascript
const title = "Developer";
const company = "Tech Corp";
const experience = 5;

const employee = {
    title,
    company,
    experience
};

// Creates:
// {
//     title: "Developer",
//     company: "Tech Corp",
//     experience: 5
// }
```

## Key Points

- This feature was introduced in ES6 (ECMAScript 2015)
- The shorthand syntax works when the variable name matches the desired property name
- It helps reduce code repetition and improves readability
- This syntax is widely supported in modern browsers and Node.js

## Best Practices

- Use the shorthand syntax when variable names match desired property names
- Mix and match with traditional syntax when needed
- Consider readability when deciding which syntax to use
