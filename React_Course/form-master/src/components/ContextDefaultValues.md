# React Context Default Values: Why & When to Use Them

## Why Use Default Values in `createContext`?

In React, when creating a context using `createContext`, we can provide a default value. In your case:

```jsx
export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);
```

The default values (`'gold'` and `1000`) are used **only if** no `Provider` is wrapping the component consuming the context.

---

## Scenario Where Default Values Matter

### **Scenario 1: Context Consumers Without a Provider**
Imagine a child component tries to use `useContext(AssetContext)` or `useContext(MoneyContext)`, but the parent **forgets to wrap it with a `Provider`**.

#### Example:

```jsx
import { useContext } from "react";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";

const Cousin = () => {
    const asset = useContext(AssetContext);  // Uses default value if no provider
    const money = useContext(MoneyContext);  // Uses default value if no provider

    return (
        <div>
            <h3>Cousin</h3>
            <p>Asset: {asset}</p>
            <p>Money: {money}</p>
        </div>
    );
};

export default Cousin;
```

### **What Happens If No Provider Exists?**
If `Cousin` is used somewhere **without wrapping it in a `Provider`**, it will use:
- **`'gold'`** as the asset (default value of `AssetContext`)
- **`1000`** as money (default value of `MoneyContext`)

#### Rendered Output:
```
Cousin
Asset: gold
Money: 1000
```

---

### **Scenario 2: When Providers Are Used**
If `Cousin` is inside `<Grandpa>`, where `Provider` values are set (`G-Metal` and `5000`), it will use those values **instead of the defaults**:

#### Rendered Output:
```
Cousin
Asset: G-Metal
Money: 5000
```

---

## Is the Default Value Necessary?
- **No, it's not required** if you **always** wrap the consuming components inside a `Provider`.
- **Yes, it can be useful** as a fallback if a component mistakenly tries to access the context without a provider.

If you never intend to use a context without a provider, you can pass `null` instead:

```jsx
export const AssetContext = createContext(null);
export const MoneyContext = createContext(null);
```

This makes it clear that a provider **must** be used and prevents using incorrect default values.

