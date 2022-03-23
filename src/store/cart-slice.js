import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalMeals: 0,
    totalPrice: 0,
    changed: false,
  },
  reducers: {
    replaceShoppingCart: (state, action) => {
      state.items = action.payload.items;
      state.totalMeals = action.payload.totalMeals;
      state.totalPrice = action.payload.totalPrice;
    },

    addMealToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((meal) => meal.id === newItem.id);
      state.totalMeals = state.totalMeals + 1;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          costPrice: newItem.price,
        });

        state.totalPrice = state.totalPrice + newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.costPrice = existingItem.quantity * existingItem.price;

        state.totalPrice = state.totalPrice + existingItem.price;
      }
    },

    removeMeal: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((meal) => meal.id === id);
      state.totalMeals = state.totalMeals - 1;
      state.changed = true;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((meal) => meal.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.costPrice = existingItem.costPrice - existingItem.price;
      }

      state.totalPrice = state.totalPrice - existingItem.price;
    },

    removeHolDemand: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((meal) => meal.id === id);
      state.totalMeals = state.totalMeals - existingItem.quantity;

      state.totalPrice = state.totalPrice - existingItem.costPrice;

      state.items = state.items.filter((meal) => meal.id !== id);
      state.changed = true;
    },

    removeAll: (state) => {
      state.totalMeals = 0;
      state.totalPrice = 0;
      state.items = [];
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
