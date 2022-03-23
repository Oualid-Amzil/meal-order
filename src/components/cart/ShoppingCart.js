import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.shoppingCart.totalPrice);
  const totalMeals = useSelector((state) => state.shoppingCart.totalMeals);

  const meals = useSelector((state) => state.shoppingCart.items);

  const hideCartHandler = () => {
    dispatch(uiActions.hideCart());
  };

  const removeAllHandler = () => {
    dispatch(cartActions.removeAll());
  };

  return (
    <Modal>
      <FullscreenExitIcon
        onClick={hideCartHandler}
        className="exit__shoppingCart"
        sx={{
          cursor: "pointer",
          height: "40px",
          width: "40px",
          textAlign: "center",
          color: "#fff",
        }}
      />
      <div className="shopping__cart">
        <div className="title">
          <h2>Shopping cart</h2>
          <span onClick={removeAllHandler}>Remove all</span>
        </div>
        <div className="meals__list">
          {meals.length === 0 ? (
            <h2>You have no meals!</h2>
          ) : (
            meals.map((meal) => <CartItem meal={meal} key={meal.id} />)
          )}
        </div>
        <div className="total__price">
          <div className="label">
            <h3>total price</h3>
            <span>{totalMeals} items</span>
          </div>
          <h2>${totalPrice.toFixed(2)}</h2>
        </div>
      </div>
    </Modal>
  );
};

export default ShoppingCart;
