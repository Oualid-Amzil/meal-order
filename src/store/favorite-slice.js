import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lovedMeals: [],
  totalAmount: 0,
  changed: false,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    replaceLovedMeals: (state, action) => {
      state.lovedMeals = action.payload.lovedMeals;
      state.totalAmount = action.payload.totalAmount;
    },

    addToList: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.lovedMeals.find(
        (meal) => meal.id === newItem.id
      );
      state.changed = true;
      if (!existingItem) {
        state.lovedMeals.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
        });
        state.totalAmount++;
      } else {
        state.lovedMeals = state.lovedMeals.filter(
          (meal) => meal.id !== newItem.id
        );
        state.totalAmount--;
      }
    },

    removeFromList: (state, action) => {
      const id = action.payload;
      state.lovedMeals = state.lovedMeals.filter((meal) => meal.id !== id);
      state.totalAmount--;
      state.changed = true;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;
