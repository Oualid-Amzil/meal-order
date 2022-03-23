import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearchBar: false,
  showLovedList: false,
  showShoppingCart: false,
  notification: {},
  showMobileNav: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    hideBar(state) {
      state.showSearchBar = false;
    },

    showBar(state) {
      state.showSearchBar = true;
    },

    showLoved(state) {
      state.showLovedList = true;
    },

    hideLoved(state) {
      state.showLovedList = false;
    },

    showCart(state) {
      state.showShoppingCart = true;
    },

    hideCart(state) {
      state.showShoppingCart = false;
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },

    showMobileNav(state) {
      state.showMobileNav = true;
    },

    hideMobileNav(state) {
      state.showMobileNav = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
