import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import "./CartItem.css";

const CartItem = ({ meal }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addMealToCart(meal));
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeMeal(meal.id));
  };

  const removeHolDemandHandler = () => {
    dispatch(cartActions.removeHolDemand(meal.id));
  };

  return (
    <div className="cart__item">
      <div className="item__image">
        <img src={meal.image} alt="meal" />
      </div>
      <div className="item__details">
        <h3>{meal.name}</h3>
        <span>${meal.price.toFixed(2)}</span>
      </div>
      <div className="item__buttons">
        <span onClick={addToCartHandler}>
          <ArrowDropUpIcon />
        </span>
        <h3>{meal.quantity}</h3>
        <span onClick={removeFromCartHandler}>
          <ArrowDropDownIcon />
        </span>
      </div>
      <div className="item__cost">
        <h3>${meal.costPrice.toFixed(2)}</h3>
        <span onClick={removeHolDemandHandler}>Remove</span>
      </div>
    </div>
  );
};

export default CartItem;
