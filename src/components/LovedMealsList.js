import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../UI/Button";

import Modal from "../UI/Modal";
import { uiActions } from "../store/ui-slice";
import { cartActions } from "../store/cart-slice";
import { favoriteActions } from "../store/favorite-slice";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import "./LovedMealsList.css";

const LovedMealsList = () => {
  const dispatch = useDispatch();
  const lovedMeals = useSelector((state) => state.favorite.lovedMeals);

  const hideLovedListHandler = () => {
    dispatch(uiActions.hideLoved());
  };

  const addToCartHandler = (meal) => {
    dispatch(cartActions.addMealToCart(meal));
  };

  const removeFromListHandler = (id) => {
    dispatch(favoriteActions.removeFromList(id));
  };

  let content = <h1 className="no__meals">You loved no meals.</h1>;

  if (lovedMeals.length > 0) {
    content = lovedMeals.map((meal) => {
      return (
        <div className="love__wrapper" key={meal.id}>
          <div className="image">
            <img src={meal.image} alt="meal" />
          </div>
          <div className="details">
            <h3>{meal.name}</h3>
            <span>${meal.price}</span>
            <div className="buttons">
              <Button onClick={addToCartHandler.bind(this, meal)}>
                Order Now
              </Button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <Modal>
      <FullscreenExitIcon
        onClick={hideLovedListHandler}
        className="exit__icon"
        sx={{
          cursor: "pointer",
          height: "40px",
          width: "40px",
          textAlign: "center",
          color: "#fff",
        }}
      />
      <div className="love__container">{content}</div>
    </Modal>
  );
};

export default LovedMealsList;
