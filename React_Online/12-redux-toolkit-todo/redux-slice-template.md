# Redux Toolkit Slice Template

```javascript
import { createSlice } from '@reduxjs/toolkit';

export const yourSlice = createSlice({
  name: 'yourSliceName', // Replace with appropriate name for your feature
  initialState: {
    // Your initial state properties here
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Your reducer functions here
    exampleAction: (state, action) => {
      // Update state based on action
      state.items.push(action.payload);
    },
    anotherAction: (state, action) => {
      // Another state update
      state.isLoading = action.payload;
    },
  }
});

// Export the actions
export const { exampleAction, anotherAction } = yourSlice.actions;

// Export the reducer
export default yourSlice.reducer;
```
