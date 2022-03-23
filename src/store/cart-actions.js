import axios from "axios";

import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const sendShoppingCartData = (shoppingCart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({}));
    try {
      await axios({
        method: "put",
        url: "https://order-meal-18662-default-rtdb.firebaseio.com/shoppingCart.json",
        data: {
          items: shoppingCart.items,
          totalMeals: shoppingCart.totalMeals,
          totalPrice: shoppingCart.totalPrice,
        },
      });
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: `${error.message}`,
        })
      );
    }
  };
};

export const getShoppingCartData = () => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({}));
    try {
      const response = await axios({
        method: "get",
        url: "https://order-meal-18662-default-rtdb.firebaseio.com/shoppingCart.json",
      });

      dispatch(
        cartActions.replaceShoppingCart({
          items: response.data.items || [],
          totalMeals: response.data.totalMeals || 0,
          totalPrice: response.data.totalPrice || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: `${error.message}`,
        })
      );
    }
  };
};
