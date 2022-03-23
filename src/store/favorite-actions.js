import axios from "axios";

import { uiActions } from "./ui-slice";
import { favoriteActions } from "./favorite-slice";

export const sendFavoriteMealData = (favoriteMeals) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({}));
    try {
      await axios({
        method: "put",
        url: "https://order-meal-18662-default-rtdb.firebaseio.com/favoriteMeals.json",
        data: {
          lovedMeals: favoriteMeals.lovedMeals,
          totalAmount: favoriteMeals.totalAmount,
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

export const getFavoriteMealData = () => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({}));
    try {
      const response = await axios({
        method: "get",
        url: "https://order-meal-18662-default-rtdb.firebaseio.com/favoriteMeals.json",
      });

      dispatch(
        favoriteActions.replaceLovedMeals({
          lovedMeals: response.data.lovedMeals || [],
          totalAmount: response.data.totalAmount || 0,
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
