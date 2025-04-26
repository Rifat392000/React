# 🧩 Fixing Route Parameter Matching in React Router Loader

Great — glad it works now! Here's **why** the fix works:

---

### 💡 Problem Recap:
- `params.id` comes from the URL (like `/donation/1`) and is always a **string**, e.g., `"1"`.
- Your `donation_campaigns.json` probably has:
  ```json
  [
    { "id": 1, "title": "Campaign A" },
    { "id": 2, "title": "Campaign B" }
  ]
  ```
  — where `id` is a **number** (`1`, not `"1"`).

### ❌ Before:
```js
val.id === params.id
```
This fails because it compares a number to a string:
```js
1 === "1" // false
```

---

### ✅ After:
```js
val.id === Number(params.id)
```
Now both sides are numbers:
```js
1 === 1 // true
```

---

### 🧠 Explanation:
You're fixing a **type mismatch**. JavaScript doesn't do type coercion with `===`, so converting `params.id` to a number ensures a proper match.

---

